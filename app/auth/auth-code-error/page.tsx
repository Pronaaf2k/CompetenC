'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { GlassCard } from '../../../components/ui/glass-card';
import { Trophy, AlertCircle } from 'lucide-react';

const AuthCodeErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <GlassCard className="p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>

                    <h1 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                        Authentication Error
                    </h1>

                    <p className="text-gray-600 mb-8">
                        There was an error with the authentication process. This could be due to an invalid or expired link.
                    </p>

                    <div className="space-y-4">
                        <Link href="/login">
                            <Button className="w-full gradient-primary text-white">
                                Try Again
                            </Button>
                        </Link>

                        <Link href="/">
                            <Button variant="outline" className="w-full">
                                Go Home
                            </Button>
                        </Link>
                    </div>
                </GlassCard>
            </motion.div>
        </div>
    );
};

export default AuthCodeErrorPage;
