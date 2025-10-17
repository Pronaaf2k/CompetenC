'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { GlassCard } from '../../components/ui/glass-card';
import { Trophy, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { createClient } from '../../lib/supabase/client';

const ResetPasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [passwordReset, setPasswordReset] = useState(false);
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });
    const router = useRouter();
    const searchParams = useSearchParams();
    const supabase = createClient();

    useEffect(() => {
        // Check if we have the necessary tokens in the URL
        const accessToken = searchParams.get('access_token');
        const refreshToken = searchParams.get('refresh_token');

        if (!accessToken || !refreshToken) {
            toast.error('Invalid reset link');
            router.push('/forgot-password');
        }
    }, [searchParams, router]);

    const passwordRequirements = [
        { text: 'At least 8 characters', met: formData.password.length >= 8 },
        { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
        { text: 'Contains lowercase letter', met: /[a-z]/.test(formData.password) },
        { text: 'Contains number', met: /\d/.test(formData.password) },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.password || !formData.confirmPassword) {
            toast.error('Please fill in all fields');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (formData.password.length < 8) {
            toast.error('Password must be at least 8 characters long');
            return;
        }

        setLoading(true);
        try {
            const { error } = await supabase.auth.updateUser({
                password: formData.password
            });

            if (error) {
                toast.error(error.message);
            } else {
                setPasswordReset(true);
                toast.success('Password updated successfully!');
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (passwordReset) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    <GlassCard className="p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>

                        <h1 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                            Password Updated!
                        </h1>

                        <p className="text-gray-600 mb-8">
                            Your password has been successfully updated. You can now sign in with your new password.
                        </p>

                        <Link href="/login">
                            <Button className="w-full gradient-primary text-white">
                                Sign In
                            </Button>
                        </Link>
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
                        <h1 className="text-2xl font-heading font-bold text-gray-900 mb-2">Reset Password</h1>
                        <p className="text-gray-600">Enter your new password</p>
                    </div>

                    {/* Reset Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-gray-900 font-medium">New Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your new password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4 text-gray-500" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-gray-500" />
                                    )}
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword" className="text-gray-900 font-medium">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Confirm your new password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="h-4 w-4 text-gray-500" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-gray-500" />
                                    )}
                                </Button>
                            </div>
                        </div>

                        {/* Password Requirements */}
                        {formData.password && (
                            <div className="space-y-2">
                                <Label className="text-sm text-gray-700 font-medium">Password Requirements:</Label>
                                <div className="space-y-1">
                                    {passwordRequirements.map((req, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm">
                                            <CheckCircle
                                                className={`h-4 w-4 ${req.met ? 'text-green-600' : 'text-gray-400'
                                                    }`}
                                            />
                                            <span className={req.met ? 'text-green-600' : 'text-gray-500'}>
                                                {req.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Button type="submit" className="w-full gradient-primary text-white h-11" disabled={loading}>
                            {loading ? 'Updating...' : 'Update Password'}
                        </Button>
                    </form>

                    {/* Back to Login */}
                    <div className="text-center mt-6">
                        <Link href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
                            Back to Login
                        </Link>
                    </div>
                </GlassCard>
            </motion.div>
        </div>
    );
};

export default ResetPasswordPage;
