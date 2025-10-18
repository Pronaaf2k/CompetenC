'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { createClient } from '../lib/supabase/client'

type AuthContextType = {
    user: User | null
    session: Session | null
    loading: boolean
    signUp: (email: string, password: string, userData?: any) => Promise<any>
    signIn: (email: string, password: string) => Promise<any>
    signInWithGoogle: (role?: string) => Promise<any>
    signUpWithGoogle: (role?: string) => Promise<any>
    signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    useEffect(() => {
        // Get initial session
        const getInitialSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            setSession(session)
            setUser(session?.user ?? null)
            setLoading(false)
        }

        getInitialSession()

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setSession(session)
                setUser(session?.user ?? null)
                setLoading(false)
            }
        )

        return () => subscription.unsubscribe()
    }, [supabase.auth])

    const signUp = async (email: string, password: string, userData?: any) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: userData
            }
        })
        return { data, error }
    }

    const signIn = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        return { data, error }
    }

    const signOut = async () => {
        await supabase.auth.signOut()
    }

    const signInWithGoogle = async (role?: string) => {
        const redirectUrl = role
            ? `${window.location.origin}/auth/callback?role=${role}`
            : `${window.location.origin}/auth/callback`

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: redirectUrl
            }
        })
        return { data, error }
    }

    const signUpWithGoogle = async (role?: string) => {
        const redirectUrl = role
            ? `${window.location.origin}/auth/callback?role=${role}`
            : `${window.location.origin}/auth/callback`

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: redirectUrl
            }
        })
        return { data, error }
    }


    const value = {
        user,
        session,
        loading,
        signUp,
        signIn,
        signInWithGoogle,
        signUpWithGoogle,
        signOut,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
