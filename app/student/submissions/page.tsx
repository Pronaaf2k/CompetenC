'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../../../components/GlassCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { mockApplications } from '../../../data/mockData';

const MySubmissions = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div>
                <h1 className="text-4xl font-heading font-bold mb-2">My Submissions</h1>
                <p className="text-gray-600">Track your challenge progress and feedback</p>
            </div>

            <GlassCard>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Challenge</TableHead>
                                <TableHead>Company</TableHead>
                                <TableHead>Stage</TableHead>
                                <TableHead>Score</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Submitted</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockApplications.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell className="font-medium max-w-xs">
                                        {app.challengeTitle}
                                    </TableCell>
                                    <TableCell>TechCorp</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{app.stage}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <span className="font-semibold text-primary">{app.score}/100</span>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            className={
                                                app.status === 'In Progress'
                                                    ? 'bg-blue-500/10 text-blue-600 border-0'
                                                    : 'bg-yellow-500/10 text-yellow-600 border-0'
                                            }
                                        >
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-gray-600 text-sm">
                                        {new Date(app.submittedAt).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>
                                        <Button size="sm" variant="outline">
                                            View Details
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </GlassCard>

            <GlassCard>
                <h3 className="font-heading font-semibold text-lg mb-4">Recent Feedback</h3>
                <div className="space-y-4">
                    {mockApplications.slice(0, 3).map((app) => (
                        <div key={app.id} className="p-4 rounded-xl bg-muted/50">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold">{app.challengeTitle}</h4>
                                <span className="text-sm text-gray-600">
                                    {new Date(app.submittedAt).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 italic">
                                "{app.feedback}"
                            </p>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </motion.div>
    );
};

export default MySubmissions;
