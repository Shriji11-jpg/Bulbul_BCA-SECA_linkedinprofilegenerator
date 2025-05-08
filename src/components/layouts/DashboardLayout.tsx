import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  FileText, 
  Settings, 
  LogOut, 
  ChevronRight
} from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // In a real app, handle logout logic here
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-primary-700 text-white transition duration-300 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 lg:px-6">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <FileText className="h-6 w-6" />
            <span className="text-xl font-bold">ProfileAI</span>
          </Link>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 px-4 lg:px-6">
          <div className="space-y-1">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-white hover:bg-primary-600"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/dashboard/profiles"
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-white hover:bg-primary-600"
            >
              <User className="h-5 w-5" />
              <span>My Profiles</span>
            </Link>
            <Link
              to="/dashboard/settings"
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-white hover:bg-primary-600"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-primary-600">
            <button
              onClick={handleLogout}
              className="flex w-full items-center space-x-2 rounded-lg px-3 py-2 text-white hover:bg-primary-600"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Dashboard header */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex h-16 items-center justify-between px-4 lg:px-6">
            <div className="flex items-center space-x-2">
              <button onClick={toggleSidebar} className="lg:hidden">
                <Menu className="h-6 w-6 text-gray-500" />
              </button>
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="flex items-center cursor-pointer">
                  <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-medium">
                    JD
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;