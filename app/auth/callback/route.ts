import { createClient } from '../../../lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    const role = searchParams.get('role')
    const next = searchParams.get('next') ?? '/'

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            // Get the user to check if they need profile completion
            const { data: { user } } = await supabase.auth.getUser()

            if (!user) {
                // User not found, redirect to error page
                const forwardedHost = request.headers.get('x-forwarded-host')
                const isLocalEnv = process.env.NODE_ENV === 'development'
                if (isLocalEnv) {
                    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
                } else if (forwardedHost) {
                    return NextResponse.redirect(`https://${forwardedHost}/auth/auth-code-error`)
                } else {
                    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
                }
            }

            // Check if user has a complete profile
            const { data: profile } = await supabase
                .from('profiles')
                .select('user_type')
                .eq('id', user.id)
                .single()

            // If user doesn't have userType in metadata or profile, redirect to profile completion
            if (!user.user_metadata?.userType && !profile) {
                const forwardedHost = request.headers.get('x-forwarded-host')
                const isLocalEnv = process.env.NODE_ENV === 'development'
                const profileCompletionUrl = role
                    ? `${origin}/profile-completion?role=${role}`
                    : `${origin}/profile-completion`

                if (isLocalEnv) {
                    return NextResponse.redirect(profileCompletionUrl)
                } else if (forwardedHost) {
                    return NextResponse.redirect(`https://${forwardedHost}/profile-completion${role ? `?role=${role}` : ''}`)
                } else {
                    return NextResponse.redirect(profileCompletionUrl)
                }
            }

            // Role validation: Check if user is trying to login with wrong role
            if (role && profile?.user_type && profile.user_type !== role) {
                // User is trying to login with wrong role, redirect to error page with message
                const forwardedHost = request.headers.get('x-forwarded-host')
                const isLocalEnv = process.env.NODE_ENV === 'development'
                const errorUrl = `${origin}/auth/auth-code-error?message=${encodeURIComponent(`You are registered as a ${profile.user_type}. Please use the ${profile.user_type} login instead.`)}`

                if (isLocalEnv) {
                    return NextResponse.redirect(errorUrl)
                } else if (forwardedHost) {
                    return NextResponse.redirect(`https://${forwardedHost}/auth/auth-code-error?message=${encodeURIComponent(`You are registered as a ${profile.user_type}. Please use the ${profile.user_type} login instead.`)}`)
                } else {
                    return NextResponse.redirect(errorUrl)
                }
            }

            // Redirect to their dashboard based on their existing userType
            const userType = profile?.user_type || user.user_metadata?.userType || 'student'
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
    const forwardedHost = request.headers.get('x-forwarded-host')
    const isLocalEnv = process.env.NODE_ENV === 'development'
    if (isLocalEnv) {
        return NextResponse.redirect(`${origin}/auth/auth-code-error`)
    } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}/auth/auth-code-error`)
    } else {
        return NextResponse.redirect(`${origin}/auth/auth-code-error`)
    }
}
