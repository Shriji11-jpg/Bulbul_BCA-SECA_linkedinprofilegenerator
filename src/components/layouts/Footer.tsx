import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <FileText className="h-6 w-6 text-primary-400" />
              <span className="ml-2 text-xl font-bold">ProfileAI</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              AI-powered LinkedIn profile generator that helps professionals stand out and get noticed.
            </p>
            <div className="mt-6 flex space-x-4">
              <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Linkedin className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Github className="h-5 w-5" />} href="#" />
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/pricing" label="Pricing" />
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/careers" label="Careers" />
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <FooterLink href="/contact" label="Contact Us" />
              <FooterLink href="/help" label="Help Center" />
              <FooterLink href="/tutorials" label="Tutorials" />
              <FooterLink href="/faq" label="FAQ" />
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="/terms" label="Terms of Service" />
              <FooterLink href="/privacy" label="Privacy Policy" />
              <FooterLink href="/cookies" label="Cookie Policy" />
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ProfileAI. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with ❤️ for professionals worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary-600 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li>
      <Link
        to={href}
        className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;