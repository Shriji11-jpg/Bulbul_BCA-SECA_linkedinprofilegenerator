import React from 'react';
import { Sparkles, Shield, Zap, Settings } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-soft transform transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Use ProfileAI?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform helps you create professionally optimized LinkedIn profiles that make you stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={<Sparkles className="w-6 h-6" />}
            title="AI-Powered Content"
            description="Leverage advanced AI technology to generate professional, engaging, and keyword-optimized LinkedIn content."
          />
          <Feature
            icon={<Zap className="w-6 h-6" />}
            title="Quick & Efficient"
            description="Generate a complete LinkedIn profile in minutes, not hours. Save time while creating quality content."
          />
          <Feature
            icon={<Settings className="w-6 h-6" />}
            title="Fully Customizable"
            description="Edit and fine-tune AI suggestions to match your personal style and professional brand."
          />
          <Feature
            icon={<Shield className="w-6 h-6" />}
            title="Privacy Focused"
            description="Your data stays private and secure. We never share your information with third parties."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;