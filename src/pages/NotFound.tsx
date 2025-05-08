import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  useEffect(() => {
    // Set document title
    document.title = 'Page Not Found | ProfileAI';
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button href="/" variant="primary">
              Return Home
            </Button>
            <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center justify-center px-4 py-2">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;