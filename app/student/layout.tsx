'use client';

import { DashboardSidebar } from '../../components/DashboardSidebar';
import { LayoutDashboard, Compass, FileText, Award, Settings } from 'lucide-react';

const sidebarItems = [
    { label: 'Dashboard', path: '/student', icon: LayoutDashboard },
    { label: 'Explore', path: '/student/explore', icon: Compass },
    { label: 'My Submissions', path: '/student/submissions', icon: FileText },
    { label: 'Rewards', path: '/student/rewards', icon: Award },
    { label: 'Settings', path: '/student/settings', icon: Settings },
];

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen w-full">
            <DashboardSidebar items={sidebarItems} basePath="/student" />
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}

