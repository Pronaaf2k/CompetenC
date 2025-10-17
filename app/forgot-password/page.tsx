'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { GlassCard } from '../../components/ui/glass-card';
import { Trophy, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../../contexts/AuthContext';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const { resetPassword } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email address');
            return;
        }

        setLoading(true);
        try {
            const { data, error } = await resetPassword(email);

            if (error) {
                toast.error(error.message);
            } else {
                setEmailSent(true);
                toast.success('Password reset email sent! Check your inbox.');
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    if (emailSent) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    <GlassCard className="p-8 text-center">
                        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <Trophy className="w-8 h-8 text-white" />
                        </div>

                        <h1 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                            Check Your Email
                        </h1>

                        <p className="text-gray-600 mb-6">
                            We've sent a password reset link to <strong>{email}</strong>
                        </p>

                        <p className="text-sm text-gray-500 mb-8">
                            Didn't receive the email? Check your spam folder or try again.
                        </p>

                        <div className="space-y-4">
                            <Button
                                onClick={() => setEmailSent(false)}
                                variant="outline"
                                className="w-full"
                            >
                                Try Different Email
                            </Button>

                            <Link href="/login">
                                <Button variant="ghost" className="w-full">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Login
                                </Button>
                            </Link>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        );
    }

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
                        <h1 className="text-2xl font-heading font-bold text-gray-900 mb-2">Forgot Password?</h1>
                        <p className="text-gray-600">Enter your email to receive a password reset link</p>
                    </div>

                    {/* Reset Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-900 font-medium">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full gradient-primary text-white h-11" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </Button>
                    </form>

                    {/* Back to Login */}
                    <div className="text-center mt-6">
                        <Link href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
                            <ArrowLeft className="w-4 h-4 inline mr-1" />
                            Back to Login
                        </Link>
                    </div>
                </GlassCard>
            </motion.div>
        </div>
    );
};

export default ForgotPasswordPage;
