'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export const Navbar = () => {
  return (
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
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/company" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              For Companies
            </Link>
            <Link href="/student" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              For Students
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Admin
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-purple-600">
              Sign In
            </Button>
            <Button size="sm" className="gradient-primary text-white hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
