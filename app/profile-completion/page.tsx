'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { GlassCard } from '../../components/ui/glass-card';
import { Trophy, User, Building2 } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../../contexts/AuthContext';
import { createClient } from '../../lib/supabase/client';

const ProfileCompletionPage = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        userType: '',
        university: '',
        major: '',
        year: '',
        companyName: '',
    });
    const { user } = useAuth();
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        // Redirect if user is not authenticated
        if (!user) {
            router.push('/login');
            return;
        }

        // Check if user already has a complete profile
        if (user.user_metadata?.userType) {
            router.push(`/${user.user_metadata.userType}`);
            return;
        }
    }, [user, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.userType) {
            toast.error('Please select your role');
            return;
        }

        if (formData.userType === 'student' && (!formData.university || !formData.major || !formData.year)) {
            toast.error('Please fill in all student information');
            return;
        }

        if (formData.userType === 'company' && !formData.companyName) {
            toast.error('Please enter your company name');
            return;
        }

        if (!user) {
            toast.error('User not found. Please sign in again.');
            return;
        }

        setLoading(true);
        try {
            const profileData = {
                userType: formData.userType,
                ...(formData.userType === 'student' && {
                    university: formData.university,
                    major: formData.major,
                    year: formData.year,
                }),
                ...(formData.userType === 'company' && {
                    companyName: formData.companyName,
                }),
            };

            // Update user metadata
            const { error: updateError } = await supabase.auth.updateUser({
                data: profileData
            });

            if (updateError) {
                toast.error(updateError.message);
                return;
            }

            // Insert profile into database
            const { error: insertError } = await supabase
                .from('profiles')
                .upsert({
                    id: user.id,
                    first_name: user.user_metadata?.full_name?.split(' ')[0] || '',
                    last_name: user.user_metadata?.full_name?.split(' ').slice(1).join(' ') || '',
                    user_type: formData.userType,
                    university: formData.university || null,
                    major: formData.major || null,
                    academic_year: formData.year || null,
                    company_name: formData.companyName || null,
                });

            if (insertError) {
                toast.error(insertError.message);
                return;
            }

            toast.success('Profile completed successfully!');
            router.push(`/${formData.userType}`);
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

    const handleSelectChange = (value: string) => {
        setFormData({
            ...formData,
            userType: value,
        });
    };

    if (!user) {
        return null; // Will redirect
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl"
            >
                <GlassCard className="p-8">
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Trophy className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-heading font-bold text-gray-900 mb-2">Complete Your Profile</h1>
                        <p className="text-gray-600">Welcome {user.user_metadata?.full_name || user.email}! Let's set up your account.</p>
                    </div>

                    {/* Profile Completion Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* User Type Selection */}
                        <div className="space-y-2">
                            <Label className="text-gray-900 font-medium">I am a *</Label>
                            <Select value={formData.userType} onValueChange={handleSelectChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="student">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            Student
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="company">
                                        <div className="flex items-center gap-2">
                                            <Building2 className="w-4 h-4" />
                                            Company Representative
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Student-specific fields */}
                        {formData.userType === 'student' && (
                            <div className="space-y-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    Student Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="university" className="text-gray-900 font-medium">University *</Label>
                                        <Input
                                            id="university"
                                            name="university"
                                            placeholder="Enter your university"
                                            value={formData.university}
                                            onChange={handleInputChange}
                                            required={formData.userType === 'student'}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="major" className="text-gray-900 font-medium">Major *</Label>
                                        <Input
                                            id="major"
                                            name="major"
                                            placeholder="Enter your major"
                                            value={formData.major}
                                            onChange={handleInputChange}
                                            required={formData.userType === 'student'}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="year" className="text-gray-900 font-medium">Academic Year *</Label>
                                    <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your academic year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="freshman">Freshman</SelectItem>
                                            <SelectItem value="sophomore">Sophomore</SelectItem>
                                            <SelectItem value="junior">Junior</SelectItem>
                                            <SelectItem value="senior">Senior</SelectItem>
                                            <SelectItem value="graduate">Graduate Student</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        )}

                        {/* Company-specific fields */}
                        {formData.userType === 'company' && (
                            <div className="space-y-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                                    <Building2 className="w-5 h-5" />
                                    Company Information
                                </h3>
                                <div className="space-y-2">
                                    <Label htmlFor="companyName" className="text-gray-900 font-medium">Company Name *</Label>
                                    <Input
                                        id="companyName"
                                        name="companyName"
                                        placeholder="Enter your company name"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        required={formData.userType === 'company'}
                                    />
                                </div>
                            </div>
                        )}

                        <Button type="submit" className="w-full gradient-primary text-white h-11" disabled={loading}>
                            {loading ? 'Completing Profile...' : 'Complete Profile'}
                        </Button>
                    </form>

                    {/* Info */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-500">
                            You can update this information later in your profile settings.
                        </p>
                    </div>
                </GlassCard>
            </motion.div>
        </div>
    );
};

export default ProfileCompletionPage;
