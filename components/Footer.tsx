import React from 'react';
import Link from 'next/link';
import { Trophy } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                CompetenC
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Competition as Hiring - Connect talent with opportunity through challenges.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Platform</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link href="/company" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                For Companies
              </Link>
              <Link href="/student" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                For Students
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Resources</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Help Center
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Community
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Blog
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © 2025 CompetenC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
