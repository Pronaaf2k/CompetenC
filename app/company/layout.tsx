'use client';

import { DashboardSidebar } from '../../components/DashboardSidebar';
import { LayoutDashboard, PlusCircle, FolderKanban, Users, Settings } from 'lucide-react';

const sidebarItems = [
    { label: 'Dashboard', path: '/company', icon: LayoutDashboard },
    { label: 'Create Challenge', path: '/company/create', icon: PlusCircle },
    { label: 'My Challenges', path: '/company/challenges', icon: FolderKanban },
    { label: 'Applicants', path: '/company/applicants', icon: Users },
    { label: 'Settings', path: '/company/settings', icon: Settings },
];

export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen w-full">
            <DashboardSidebar items={sidebarItems} basePath="/company" />
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}

