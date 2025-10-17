import { GlassCard } from './GlassCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Award } from 'lucide-react';

interface ChallengeCardProps {
  challenge: {
    id: string;
    title: string;
    company: string;
    companyLogo: string;
    type: string;
    description: string;
    reward: string;
    deadline: string;
    applicants: number;
  };
  onViewDetails?: () => void;
}

export const ChallengeCard = ({ challenge, onViewDetails }: ChallengeCardProps) => {
  return (
    <GlassCard>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
          {challenge.companyLogo}
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-lg mb-1">{challenge.title}</h3>
          <p className="text-sm text-muted-foreground">{challenge.company}</p>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
          {challenge.type}
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {challenge.description}
      </p>

      <div className="flex flex-wrap gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Award className="w-4 h-4" />
          <span>{challenge.reward}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{new Date(challenge.deadline).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{challenge.applicants} applicants</span>
        </div>
      </div>

      <Button 
        className="w-full gradient-primary text-white" 
        onClick={onViewDetails}
      >
        View Details
      </Button>
    </GlassCard>
  );
};
