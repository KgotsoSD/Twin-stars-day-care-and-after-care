import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <AlertCircle className="w-14 h-14 mb-4 text-primary" />
      <h1 className="font-display font-black text-4xl text-foreground mb-4">Page Not Found</h1>
      <p className="font-body text-muted-foreground mb-8 max-w-md">
        Oops! This page seems to have wandered off. Let us get you back to safety.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-display font-bold hover:opacity-90 transition-opacity"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
