import { Routes, Route } from 'react-router-dom';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { LayoutDashboard, Compass, FileText, Award, Settings } from 'lucide-react';
import StudentHome from './StudentHome';
import Explore from './Explore';
import MySubmissions from './MySubmissions';
import Rewards from './Rewards';
import StudentSettings from './StudentSettings';

const sidebarItems = [
  { label: 'Dashboard', path: '/student', icon: LayoutDashboard },
  { label: 'Explore', path: '/student/explore', icon: Compass },
  { label: 'My Submissions', path: '/student/submissions', icon: FileText },
  { label: 'Rewards', path: '/student/rewards', icon: Award },
  { label: 'Settings', path: '/student/settings', icon: Settings },
];

const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen w-full">
      <DashboardSidebar items={sidebarItems} basePath="/student" />
      <main className="flex-1 p-8">
        <Routes>
          <Route index element={<StudentHome />} />
          <Route path="explore" element={<Explore />} />
          <Route path="submissions" element={<MySubmissions />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="settings" element={<StudentSettings />} />
        </Routes>
      </main>
    </div>
  );
};

export default StudentDashboard;
