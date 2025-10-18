'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { User, Building2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    const [loading, setLoading] = useState(false);
    const { signInWithGoogle } = useAuth();

    const handleRoleLogin = async (role: 'student' | 'company') => {
        setLoading(true);
        try {
            const { data, error } = await signInWithGoogle(role);

            if (error) {
                toast.error(error.message);
            } else {
                toast.success('Redirecting to Google...');
                onClose();
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Choose Login Type</h3>

                <div className="space-y-2">
                    <Button
                        onClick={() => handleRoleLogin('student')}
                        variant="ghost"
                        className="w-full justify-start gap-3 h-10 hover:bg-purple-50"
                        disabled={loading}
                    >
                        <User className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">Student Login</span>
                    </Button>

                    <Button
                        onClick={() => handleRoleLogin('company')}
                        variant="ghost"
                        className="w-full justify-start gap-3 h-10 hover:bg-purple-50"
                        disabled={loading}
                    >
                        <Building2 className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">Company Login</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};
