'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../../../components/GlassCard';
import { Badge } from '../../../components/ui/badge';
import { Trophy, Award, Star } from 'lucide-react';
import { mockStudents } from '../../../data/mockData';

const Rewards = () => {
    const student = mockStudents[0];

    const leaderboard = [
        { rank: 1, name: 'Emma Wilson', points: 2450, avatar: '👩‍💻' },
        { rank: 2, name: 'James Chen', points: 2180, avatar: '👨‍💼' },
        { rank: 3, name: 'Sarah Johnson', points: 1890, avatar: '👩‍🎓' },
        { rank: 4, name: 'Alex Kim', points: 1650, avatar: '👨‍🔬' },
        { rank: 5, name: 'Maria Garcia', points: 1520, avatar: '👩‍💼' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div>
                <h1 className="text-4xl font-heading font-bold mb-2">Rewards & Achievements</h1>
                <p className="text-gray-600">Your badges, points, and rankings</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <GlassCard className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                            <Trophy className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Your Rank</p>
                            <h3 className="text-4xl font-heading font-bold text-primary">
                                #{student.rank}
                            </h3>
                        </div>
                    </div>
                    <p className="text-gray-600">
                        Top {Math.round((student.rank / 1000) * 100)}% globally
                    </p>
                </GlassCard>

                <GlassCard className="bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                            <Star className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Points</p>
                            <h3 className="text-4xl font-heading font-bold text-secondary">
                                {student.points}
                            </h3>
                        </div>
                    </div>
                    <p className="text-gray-600">
                        +150 points this week
                    </p>
                </GlassCard>
            </div>

            <GlassCard>
                <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-primary" />
                    Your Badges
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {student.badges.map((badge, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 text-center"
                        >
                            <div className="text-4xl mb-3">{badge.split(' ')[0]}</div>
                            <p className="font-semibold">{badge.split(' ').slice(1).join(' ')}</p>
                        </div>
                    ))}
                </div>
            </GlassCard>

            <GlassCard>
                <h2 className="text-2xl font-heading font-semibold mb-6">Leaderboard</h2>
                <div className="space-y-3">
                    {leaderboard.map((entry) => (
                        <div
                            key={entry.rank}
                            className={`flex items-center justify-between p-4 rounded-xl transition-all ${entry.rank <= 3
                                ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20'
                                : 'bg-muted/50'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${entry.rank === 1
                                        ? 'bg-yellow-500 text-white'
                                        : entry.rank === 2
                                            ? 'bg-gray-400 text-white'
                                            : entry.rank === 3
                                                ? 'bg-orange-600 text-white'
                                                : 'bg-muted text-muted-foreground'
                                        }`}
                                >
                                    {entry.rank}
                                </div>
                                <div className="text-3xl">{entry.avatar}</div>
                                <div>
                                    <p className="font-semibold">{entry.name}</p>
                                    <p className="text-sm text-gray-600">{entry.points} points</p>
                                </div>
                            </div>
                            {entry.rank <= 3 && (
                                <Trophy className="w-5 h-5 text-primary" />
                            )}
                        </div>
                    ))}
                </div>
            </GlassCard>
        </motion.div>
    );
};

export default Rewards;
