import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full"
      >
        <GlassCard className="text-center">
          <div className="mb-6">
            <h1 className="text-8xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-2xl font-heading font-semibold mb-2">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline">
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Link>
            </Button>
            <Button asChild className="gradient-primary text-white">
              <Link to="/">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default NotFound;
