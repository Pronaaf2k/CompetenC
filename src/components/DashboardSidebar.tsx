import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Trophy } from 'lucide-react';

interface SidebarItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

interface DashboardSidebarProps {
  items: SidebarItem[];
  basePath: string;
}

export const DashboardSidebar = ({ items, basePath }: DashboardSidebarProps) => {
  const location = useLocation();

  return (
    <aside className="w-64 glass border-r border-white/20 min-h-screen p-6 sticky top-0">
      <Link to="/" className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
          <Trophy className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          CompetenC
        </span>
      </Link>

      <nav className="space-y-2">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
