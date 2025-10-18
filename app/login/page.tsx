'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { GlassCard } from '../../components/ui/glass-card';
import { Trophy, User, Building2 } from 'lucide-react';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <GlassCard className="p-8">
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <Link href="/" className="flex items-center justify-center gap-2 mb-4">
                            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                                <Trophy className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-3xl font-heading font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                                CompetenC
                            </span>
                        </Link>
                        <h1 className="text-2xl font-heading font-bold text-gray-900 mb-2">Welcome Back</h1>
                        <p className="text-gray-600">Choose how you'd like to sign in</p>
                    </div>

                    {/* Role Selection */}
                    <div className="space-y-4">
                        <Link href="/login/student">
                            <Button
                                variant="outline"
                                className="w-full h-16 flex items-center justify-start gap-4 text-left hover:bg-purple-50 hover:border-purple-300 transition-colors"
                            >
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <User className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Student Login</div>
                                    <div className="text-sm text-gray-600">Sign in as a student</div>
                                </div>
                            </Button>
                        </Link>

                        <Link href="/login/company">
                            <Button
                                variant="outline"
                                className="w-full h-16 flex items-center justify-start gap-4 text-left hover:bg-purple-50 hover:border-purple-300 transition-colors"
                            >
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <Building2 className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Company Login</div>
                                    <div className="text-sm text-gray-600">Sign in as a company representative</div>
                                </div>
                            </Button>
                        </Link>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-purple-600 hover:text-purple-700 font-medium">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </GlassCard>
            </motion.div>
        </div>
    );
};

export default LoginPage;
