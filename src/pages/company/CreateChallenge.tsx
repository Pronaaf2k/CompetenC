import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon, Eye } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const CreateChallenge = () => {
  const [date, setDate] = useState<Date>();
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Challenge created successfully!');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-heading font-bold mb-2">Create New Challenge</h1>
        <p className="text-muted-foreground">Set up a new competition to find top talent</p>
      </div>

      <GlassCard>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Challenge Name</Label>
            <Input
              id="title"
              placeholder="e.g., Digital Marketing Strategy Challenge"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the challenge objectives and requirements..."
              rows={5}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="type">Challenge Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="case">Case Study</SelectItem>
                  <SelectItem value="presentation">Presentation</SelectItem>
                  <SelectItem value="hackathon">Hackathon</SelectItem>
                  <SelectItem value="campaign">Campaign</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reward">Rewards</Label>
              <Input
                id="reward"
                placeholder="e.g., $5,000 + Internship"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Deadline</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : 'Pick a deadline'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-card" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
            <div className="space-y-0.5">
              <Label>Public Visibility</Label>
              <p className="text-sm text-muted-foreground">
                Make this challenge visible to all students
              </p>
            </div>
            <Switch checked={isPublic} onCheckedChange={setIsPublic} />
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="gradient-primary text-white flex-1">
              Create Challenge
            </Button>
            <Button type="button" variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
          </div>
        </form>
      </GlassCard>
    </motion.div>
  );
};

export default CreateChallenge;
