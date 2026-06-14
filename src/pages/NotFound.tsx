import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-navy-deep">
      <div className="text-center px-4">
        <div className="text-8xl font-heading font-black text-gradient-gold mb-4">404</div>
        <h1 className="text-2xl font-heading font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-white/55 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl">
          Back to Home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
