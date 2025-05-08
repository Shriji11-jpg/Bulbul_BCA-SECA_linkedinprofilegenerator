import React, { useEffect } from 'react';
import ProfileGenerator from '../components/dashboard/ProfileGenerator';

const Dashboard: React.FC = () => {
  useEffect(() => {
    // Set document title
    document.title = 'Dashboard | ProfileAI';
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back!</h1>
        <p className="text-gray-600">
          Create and manage your LinkedIn profiles with our AI tools.
        </p>
      </div>

      <div className="space-y-6">
        <ProfileGenerator />
      </div>
    </div>
  );
};

export default Dashboard;