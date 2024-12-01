import { Link } from "react-router";
import { Home, AlertCircle } from 'lucide-react';
import { Section } from './shared/Section';

export function NotFound() {
  return (
    <Section id="not-found" bgColor="white" className="min-h-[calc(100vh-4rem)]">
      <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-100 rounded-full blur-lg animate-pulse" />
          <AlertCircle size={64} className="text-blue-600 relative" />
        </div>
        
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">Page Not Found</h2>
          <p className="text-lg text-gray-600 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link
          to="/"
          className="group flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg 
            hover:bg-blue-700 transition-all duration-300 animate-fade-in-delay"
        >
          <Home className="group-hover:-translate-y-1 transition-transform" />
          Back to Home
        </Link>

        
      </div>
    </Section>
  );
}