import { createClient } from '../../../lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    const next = searchParams.get('next') ?? '/'

    if (code) {
        const supabase = createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            // Get the user to check if they need profile completion
            const { data: { user } } = await supabase.auth.getUser()

            // If user doesn't have userType in metadata, redirect to profile completion
            if (user && !user.user_metadata?.userType) {
                const forwardedHost = request.headers.get('x-forwarded-host')
                const isLocalEnv = process.env.NODE_ENV === 'development'
                if (isLocalEnv) {
                    return NextResponse.redirect(`${origin}/profile-completion`)
                } else if (forwardedHost) {
                    return NextResponse.redirect(`https://${forwardedHost}/profile-completion`)
                } else {
                    return NextResponse.redirect(`${origin}/profile-completion`)
                }
            }

            // Otherwise redirect to their dashboard
            const userType = user?.user_metadata?.userType || 'student'
            const forwardedHost = request.headers.get('x-forwarded-host')
            const isLocalEnv = process.env.NODE_ENV === 'development'
            if (isLocalEnv) {
                return NextResponse.redirect(`${origin}/${userType}`)
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}/${userType}`)
            } else {
                return NextResponse.redirect(`${origin}/${userType}`)
            }
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
