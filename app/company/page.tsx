"use client";

import { motion } from 'framer-motion';
import { StatCard } from '../../components/StatCard';
import { GlassCard } from '../../components/GlassCard';
import { Button } from '../../components/ui/button';
import { Target, Users, TrendingUp, PlusCircle } from 'lucide-react';
import { mockApplications } from '../../data/mockData';
import Link from 'next/link';

const CompanyDashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-heading font-bold mb-2 text-gray-900">Company Dashboard</h1>
                    <p className="text-gray-600">Welcome back! Here's your overview.</p>
                </div>
                <Button asChild className="gradient-primary text-white">
                    <Link href="/company/create">
                        <PlusCircle className="w-5 h-5 mr-2" />
                        New Challenge
                    </Link>
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <StatCard
                    icon={Target}
                    label="Active Challenges"
                    value={3}
                    trend="+1 this month"
                />
                <StatCard
                    icon={Users}
                    label="Total Applicants"
                    value={1205}
                    trend="+127 this week"
                />
                <StatCard
                    icon={TrendingUp}
                    label="Hires Made"
                    value={15}
                    trend="This year"
                />
            </div>

            <GlassCard>
                <h2 className="text-2xl font-heading font-semibold mb-6 text-gray-900">Recent Applicants</h2>
                <div className="space-y-4">
                    {mockApplications.slice(0, 5).map((app) => (
                        <div
                            key={app.id}
                            className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                        >
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">{app.studentName}</h3>
                                <p className="text-sm text-gray-600">{app.university}</p>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">{app.challengeTitle}</p>
                                <p className="text-xs text-gray-600">Stage: {app.stage}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-primary">Score: {app.score}</p>
                                    <p className="text-xs text-gray-600">{app.status}</p>
                                </div>
                                <Button size="sm" variant="outline">
                                    View
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <Button asChild variant="ghost" className="w-full mt-4">
                    <Link href="/company/applicants">
                        View All Applicants
                    </Link>
                </Button>
            </GlassCard>
        </motion.div>
    );
};

export default CompanyDashboard;
