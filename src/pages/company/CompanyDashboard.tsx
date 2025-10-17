import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { LayoutDashboard, PlusCircle, FolderKanban, Users, Settings } from 'lucide-react';
import CompanyHome from './CompanyHome';
import CreateChallenge from './CreateChallenge';
import MyChallenges from './MyChallenges';
import Applicants from './Applicants';
import CompanySettings from './CompanySettings';

const sidebarItems = [
  { label: 'Dashboard', path: '/company', icon: LayoutDashboard },
  { label: 'Create Challenge', path: '/company/create', icon: PlusCircle },
  { label: 'My Challenges', path: '/company/challenges', icon: FolderKanban },
  { label: 'Applicants', path: '/company/applicants', icon: Users },
  { label: 'Settings', path: '/company/settings', icon: Settings },
];

const CompanyDashboard = () => {
  return (
    <div className="flex min-h-screen w-full">
      <DashboardSidebar items={sidebarItems} basePath="/company" />
      <main className="flex-1 p-8">
        <Routes>
          <Route index element={<CompanyHome />} />
          <Route path="create" element={<CreateChallenge />} />
          <Route path="challenges" element={<MyChallenges />} />
          <Route path="applicants" element={<Applicants />} />
          <Route path="settings" element={<CompanySettings />} />
        </Routes>
      </main>
    </div>
  );
};

export default CompanyDashboard;
