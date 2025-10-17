import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChallengeCard } from '@/components/ChallengeCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockChallenges } from '@/data/mockData';
import { Search } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Explore = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<typeof mockChallenges[0] | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-4xl font-heading font-bold mb-2">Explore Challenges</h1>
        <p className="text-muted-foreground">Find competitions that match your skills and interests</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search challenges..."
            className="pl-10"
          />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Challenge Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="case">Case Study</SelectItem>
            <SelectItem value="presentation">Presentation</SelectItem>
            <SelectItem value="hackathon">Hackathon</SelectItem>
            <SelectItem value="campaign">Campaign</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="deadline">Deadline</SelectItem>
            <SelectItem value="reward">Reward</SelectItem>
            <SelectItem value="applicants">Most Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockChallenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            onViewDetails={() => setSelectedChallenge(challenge)}
          />
        ))}
      </div>

      <Dialog open={!!selectedChallenge} onOpenChange={() => setSelectedChallenge(null)}>
        <DialogContent className="max-w-3xl glass border-white/20">
          {selectedChallenge && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl">
                    {selectedChallenge.companyLogo}
                  </div>
                  <div className="flex-1">
                    <DialogTitle className="text-2xl mb-1">{selectedChallenge.title}</DialogTitle>
                    <p className="text-muted-foreground">{selectedChallenge.company}</p>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-0">
                    {selectedChallenge.type}
                  </Badge>
                </div>
              </DialogHeader>
              <DialogDescription className="text-base text-foreground">
                {selectedChallenge.description}
              </DialogDescription>

              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-semibold mb-2">Competition Stages</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedChallenge.stages.map((stage, idx) => (
                      <Badge key={idx} variant="outline">
                        {idx + 1}. {stage}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-muted/50">
                  <div>
                    <p className="text-sm text-muted-foreground">Reward</p>
                    <p className="font-semibold text-primary">{selectedChallenge.reward}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Deadline</p>
                    <p className="font-semibold">
                      {new Date(selectedChallenge.deadline).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Applicants</p>
                    <p className="font-semibold">{selectedChallenge.applicants}</p>
                  </div>
                </div>

                <Button className="w-full gradient-primary text-white">
                  Join Challenge
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default Explore;
