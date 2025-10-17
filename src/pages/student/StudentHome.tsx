import { motion } from 'framer-motion';
import { StatCard } from '@/components/StatCard';
import { GlassCard } from '@/components/GlassCard';
import { ChallengeCard } from '@/components/ChallengeCard';
import { Badge } from '@/components/ui/badge';
import { Target, CheckCircle, TrendingUp } from 'lucide-react';
import { mockChallenges, mockStudents } from '@/data/mockData';

const StudentHome = () => {
  const student = mockStudents[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-heading font-bold mb-2">
            Welcome back, {student.name}! 👋
          </h1>
          <p className="text-muted-foreground">{student.university} • {student.major}</p>
        </div>
      </div>

      <GlassCard className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <div className="flex items-center gap-6">
          <div className="text-6xl">{student.avatar}</div>
          <div className="flex-1">
            <h2 className="text-2xl font-heading font-semibold mb-2">{student.name}</h2>
            <p className="text-muted-foreground mb-3">
              {student.year} • {student.major}
            </p>
            <div className="flex flex-wrap gap-2">
              {student.badges.map((badge, idx) => (
                <Badge key={idx} className="bg-white/50 text-foreground border-0">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-heading font-bold text-primary mb-1">
              #{student.rank}
            </div>
            <p className="text-sm text-muted-foreground">Global Rank</p>
          </div>
        </div>
      </GlassCard>

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard
          icon={Target}
          label="Challenges Joined"
          value={student.challengesJoined}
          trend="Active participation"
        />
        <StatCard
          icon={CheckCircle}
          label="Completed"
          value={student.challengesCompleted}
          trend={`${Math.round((student.challengesCompleted / student.challengesJoined) * 100)}% success rate`}
        />
        <StatCard
          icon={TrendingUp}
          label="Total Points"
          value={student.points}
          trend="+150 this week"
        />
      </div>

      <div>
        <h2 className="text-2xl font-heading font-semibold mb-6">Ongoing Challenges</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mockChallenges.slice(0, 2).map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StudentHome;
