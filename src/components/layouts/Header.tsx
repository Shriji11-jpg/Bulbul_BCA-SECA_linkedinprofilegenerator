import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <FileText className={`h-6 w-6 ${isScrolled || isOpen ? 'text-primary-600' : 'text-primary-500'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled || isOpen ? 'text-gray-800' : 'text-white'}`}>
              ProfileAI
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" isScrolled={isScrolled} />
            <NavLink to="/about" label="About" isScrolled={isScrolled} />
            <NavLink to="/contact" label="Contact" isScrolled={isScrolled} />
            <div className="pl-4">
              <Button href="/dashboard" size="sm">
                Dashboard
              </Button>
            </div>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled || isOpen ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || isOpen ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/" label="Home" />
              <MobileNavLink to="/about" label="About" />
              <MobileNavLink to="/contact" label="Contact" />
              <div className="pt-2 pb-1">
                <Button href="/dashboard" fullWidth>
                  Dashboard
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`transition-colors duration-300 font-medium ${
        isActive
          ? isScrolled
            ? 'text-primary-600'
            : 'text-white opacity-100'
          : isScrolled
          ? 'text-gray-700 hover:text-primary-600'
          : 'text-white opacity-80 hover:opacity-100'
      }`}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? 'text-primary-600 bg-primary-50'
          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
      }`}
    >
      {label}
    </Link>
  );
};

export default Header;