'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../../../components/GlassCard';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { mockChallenges } from '../../../data/mockData';
import { Edit, Eye, Users } from 'lucide-react';

const MyChallenges = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div>
                <h1 className="text-4xl font-heading font-bold mb-2 text-gray-900">My Challenges</h1>
                <p className="text-gray-600">Manage your active and past competitions</p>
            </div>

            <div className="grid gap-6">
                {mockChallenges.map((challenge) => (
                    <GlassCard key={challenge.id}>
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-xl font-heading font-semibold text-gray-900">{challenge.title}</h3>
                                    <Badge className="bg-primary/10 text-primary border-0">
                                        {challenge.type}
                                    </Badge>
                                    <Badge variant="outline" className="capitalize">
                                        {challenge.status}
                                    </Badge>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">
                                    {challenge.description}
                                </p>
                                <div className="flex flex-wrap gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-gray-400" />
                                        <span>{challenge.applicants} applicants</span>
                                    </div>
                                    <div className="text-gray-600">
                                        Deadline: {new Date(challenge.deadline).toLocaleDateString()}
                                    </div>
                                    <div className="text-primary font-medium">
                                        {challenge.reward}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit
                                </Button>
                                <Button size="sm" variant="outline">
                                    <Eye className="w-4 h-4 mr-2" />
                                    View
                                </Button>
                            </div>
                        </div>

                        <div className="flex gap-2 pt-4 border-t border-gray-200">
                            {challenge.stages.map((stage, idx) => (
                                <div
                                    key={idx}
                                    className="flex-1 text-center p-2 rounded-lg bg-gray-50 text-sm text-gray-700"
                                >
                                    {stage}
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </motion.div>
    );
};

export default MyChallenges;
