'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { LogOut, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

interface LogoutButtonProps {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    className?: string;
    showIcon?: boolean;
    children?: React.ReactNode;
}

export const LogoutButton = ({
    variant = 'ghost',
    size = 'default',
    className = '',
    showIcon = true,
    children
}: LogoutButtonProps) => {
    const [loading, setLoading] = useState(false);
    const { signOut } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        setLoading(true);
        try {
            await signOut();
            toast.success('Signed out successfully');
            router.push('/');
        } catch (error) {
            toast.error('Error signing out');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            onClick={handleLogout}
            disabled={loading}
            variant={variant}
            size={size}
            className={className}
        >
            {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
                showIcon && <LogOut className="w-4 h-4" />
            )}
            {children || (loading ? 'Signing out...' : 'Sign Out')}
        </Button>
    );
};
