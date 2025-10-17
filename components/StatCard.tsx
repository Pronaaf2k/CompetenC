import { LucideIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: string;
}

export const StatCard = ({ icon: Icon, label, value, trend }: StatCardProps) => {
  return (
    <GlassCard hover={false}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <h3 className="text-3xl font-heading font-bold text-gray-900">{value}</h3>
          {trend && (
            <p className="text-xs text-primary mt-2">{trend}</p>
          )}
        </div>
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </GlassCard>
  );
};
