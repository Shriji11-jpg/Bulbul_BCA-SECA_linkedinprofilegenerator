import React from 'react';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your LinkedIn Profile?
              </h2>
              <p className="text-primary-100 text-lg mb-8 max-w-md">
                Join thousands of professionals who are getting noticed with AI-optimized LinkedIn profiles.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button 
                  href="/dashboard" 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary-600 hover:bg-gray-100"
                >
                  Get Started Free
                </Button>
                <Button 
                  href="/about" 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:bg-opacity-10"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 relative hidden md:block">
              <div 
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary-800 opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;