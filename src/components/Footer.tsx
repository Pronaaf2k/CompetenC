import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CompetenC
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Competition as Hiring - Connect talent with opportunity through challenges.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/company" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                For Companies
              </Link>
              <Link to="/student" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                For Students
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Community
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 CompetenC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
