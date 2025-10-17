'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../../../components/GlassCard';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Badge } from '../../../components/ui/badge';
import { mockApplications } from '../../../data/mockData';
import { Search, FileText } from 'lucide-react';

const ApplicantsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-heading font-bold mb-2 text-gray-900">Applicants</h1>
                    <p className="text-gray-600">Review and manage challenge applications</p>
                </div>
            </div>

            <GlassCard>
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                            placeholder="Search applicants by name, university, or challenge..."
                            className="pl-10"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>University</TableHead>
                                <TableHead>Challenge</TableHead>
                                <TableHead>Stage</TableHead>
                                <TableHead>Score</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockApplications.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell className="font-medium text-gray-900">{app.studentName}</TableCell>
                                    <TableCell className="text-gray-700">{app.university}</TableCell>
                                    <TableCell className="max-w-xs truncate text-gray-700">{app.challengeTitle}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{app.stage}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <span className="font-semibold text-primary">{app.score}</span>
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
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button size="sm" variant="outline">
                                                View Profile
                                            </Button>
                                            <Button size="sm" variant="ghost">
                                                <FileText className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </GlassCard>
        </motion.div>
    );
};

export default ApplicantsPage;
