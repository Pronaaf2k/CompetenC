'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Trophy, User, Home, Building2, GraduationCap, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { LogoutButton } from './LogoutButton';
import { LoginModal } from './LoginModal';
import { useState, useRef, useEffect } from 'react';

export const Navbar = () => {
  const { user, loading } = useAuth();
  const userType = user?.user_metadata?.userType;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsLoginModalOpen(false);
      }
    };

    if (isLoginModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLoginModalOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                CompetenC
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </Link>

              {user && (
                // Show role-specific navigation for logged-in users
                <>
                  {userType === 'student' && (
                    <>
                      <Link href="/student" className="text-gray-700 hover:text-purple-600 transition-colors font-medium flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        My Dashboard
                      </Link>
                      <Link href="/student/explore" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                        Explore Challenges
                      </Link>
                      <Link href="/student/submissions" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                        My Submissions
                      </Link>
                      <Link href="/student/rewards" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                        Rewards
                      </Link>
                    </>
                  )}

                  {userType === 'company' && (
                    <>
                      <Link href="/company" className="text-gray-700 hover:text-purple-600 transition-colors font-medium flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        My Dashboard
                      </Link>
                      <Link href="/company/challenges" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                        My Challenges
                      </Link>
                      <Link href="/company/applicants" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                        Applicants
                      </Link>
                      <Link href="/company/create" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                        Create Challenge
                      </Link>
                    </>
                  )}

                  {userType === 'admin' && (
                    <Link href="/admin" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                      Admin Panel
                    </Link>
                  )}

                  <Link href={`/${userType}/settings`} className="text-gray-700 hover:text-purple-600 transition-colors font-medium flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Settings
                  </Link>
                </>
              )}
            </div>

            <div className="flex items-center gap-3">
              {loading ? (
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
              ) : user ? (
                <LogoutButton
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-purple-600"
                />
              ) : (
                <div className="relative" ref={modalRef}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-700 hover:text-purple-600"
                    onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
                  >
                    Sign In
                  </Button>
                  <LoginModal
                    isOpen={isLoginModalOpen}
                    onClose={() => setIsLoginModalOpen(false)}
                  />
                </div>
              )}
              {!user && (
                <Button size="sm" className="gradient-primary text-white hover:opacity-90 transition-opacity">
                  <Link href="/signup">Get Started</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
