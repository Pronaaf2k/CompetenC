'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../../../components/GlassCard';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { toast } from 'sonner';

const CompanySettings = () => {
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Settings saved successfully!');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl space-y-8"
        >
            <div>
                <h1 className="text-4xl font-heading font-bold mb-2 text-gray-900">Company Settings</h1>
                <p className="text-gray-600">Manage your company profile and preferences</p>
            </div>

            <GlassCard>
                <form onSubmit={handleSave} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="company-name" className="text-gray-900 font-medium">Company Name</Label>
                        <Input id="company-name" defaultValue="TechCorp Solutions" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="company-email" className="text-gray-900 font-medium">Email</Label>
                        <Input id="company-email" type="email" defaultValue="hr@techcorp.com" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="industry" className="text-gray-900 font-medium">Industry</Label>
                        <Input id="industry" defaultValue="Technology" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="website" className="text-gray-900 font-medium">Website</Label>
                        <Input id="website" type="url" placeholder="https://yourcompany.com" />
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                        <h3 className="font-semibold mb-4 text-gray-900">Change Password</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-password" className="text-gray-900 font-medium">Current Password</Label>
                                <Input id="current-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password" className="text-gray-900 font-medium">New Password</Label>
                                <Input id="new-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password" className="text-gray-900 font-medium">Confirm Password</Label>
                                <Input id="confirm-password" type="password" />
                            </div>
                        </div>
                    </div>

                    <Button type="submit" className="gradient-primary text-white w-full">
                        Save Changes
                    </Button>
                </form>
            </GlassCard>
        </motion.div>
    );
};

export default CompanySettings;
