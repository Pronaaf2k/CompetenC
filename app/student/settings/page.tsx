'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../../../components/GlassCard';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { mockStudents } from '../../../data/mockData';
import { toast } from 'sonner';

const StudentSettings = () => {
    const student = mockStudents[0];

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Profile updated successfully!');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl space-y-8"
        >
            <div>
                <h1 className="text-4xl font-heading font-bold mb-2 text-gray-900">Profile Settings</h1>
                <p className="text-gray-600">Update your profile and preferences</p>
            </div>

            <GlassCard>
                <form onSubmit={handleSave} className="space-y-6">
                    <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                        <div className="text-6xl">{student.avatar}</div>
                        <div>
                            <Button type="button" variant="outline" size="sm">
                                Change Avatar
                            </Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-gray-900 font-medium">Full Name</Label>
                            <Input id="name" defaultValue={student.name} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-900 font-medium">Email</Label>
                            <Input id="email" type="email" defaultValue={student.email} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="university" className="text-gray-900 font-medium">University</Label>
                            <Input id="university" defaultValue={student.university} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="year" className="text-gray-900 font-medium">Year</Label>
                            <Input id="year" defaultValue={student.year} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="major" className="text-gray-900 font-medium">Major</Label>
                        <Input id="major" defaultValue={student.major} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="bio" className="text-gray-900 font-medium">Bio</Label>
                        <Textarea
                            id="bio"
                            placeholder="Tell us about yourself..."
                            rows={4}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="resume" className="text-gray-900 font-medium">Resume Link</Label>
                        <Input
                            id="resume"
                            type="url"
                            placeholder="https://yourresume.com/link"
                            defaultValue={student.resumeLink}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="skills" className="text-gray-900 font-medium">Skills (comma separated)</Label>
                        <Input
                            id="skills"
                            placeholder="e.g., Python, Data Analysis, Marketing"
                        />
                    </div>

                    <Button type="submit" className="gradient-primary text-white w-full">
                        Save Changes
                    </Button>
                </form>
            </GlassCard>
        </motion.div>
    );
};

export default StudentSettings;
