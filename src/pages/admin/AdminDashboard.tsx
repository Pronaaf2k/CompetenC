import { useState } from 'react';
import { motion } from 'framer-motion';
import { StatCard } from '@/components/StatCard';
import { GlassCard } from '@/components/GlassCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Target, Edit, Trash2 } from 'lucide-react';
import { mockCompanies, mockStudents, mockChallenges } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('companies');

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CompetenC
              </span>
            </Link>
            <span className="text-muted-foreground">•</span>
            <h1 className="text-3xl font-heading font-bold">Admin Dashboard</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <StatCard
            icon={Building2}
            label="Total Companies"
            value={mockCompanies.length}
            trend="Active accounts"
          />
          <StatCard
            icon={Users}
            label="Total Students"
            value={mockStudents.length}
            trend="Registered users"
          />
          <StatCard
            icon={Target}
            label="Active Challenges"
            value={mockChallenges.length}
            trend="Live competitions"
          />
        </div>

        <GlassCard>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="companies">Companies</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="companies" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-heading font-semibold">Companies</h2>
                <Button className="gradient-primary text-white">
                  Add Company
                </Button>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Active Challenges</TableHead>
                      <TableHead>Total Applicants</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockCompanies.map((company) => (
                      <TableRow key={company.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{company.logo}</span>
                            <span className="font-medium">{company.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{company.industry}</TableCell>
                        <TableCell className="text-muted-foreground">{company.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{company.activeChallenges}</Badge>
                        </TableCell>
                        <TableCell>{company.totalApplicants}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="students" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-heading font-semibold">Students</h2>
                <Button className="gradient-primary text-white">
                  Add Student
                </Button>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>University</TableHead>
                      <TableHead>Major</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Rank</TableHead>
                      <TableHead>Points</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{student.avatar}</span>
                            <span className="font-medium">{student.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{student.university}</TableCell>
                        <TableCell>{student.major}</TableCell>
                        <TableCell className="text-muted-foreground">{student.email}</TableCell>
                        <TableCell>
                          <Badge className="bg-primary/10 text-primary border-0">
                            #{student.rank}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold">{student.points}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-heading font-semibold">Challenges</h2>
                <Button className="gradient-primary text-white">
                  Add Challenge
                </Button>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Applicants</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockChallenges.map((challenge) => (
                      <TableRow key={challenge.id}>
                        <TableCell className="font-medium max-w-xs">
                          {challenge.title}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span>{challenge.companyLogo}</span>
                            <span>{challenge.company}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{challenge.type}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(challenge.deadline).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{challenge.applicants}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500/10 text-green-600 border-0 capitalize">
                            {challenge.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
