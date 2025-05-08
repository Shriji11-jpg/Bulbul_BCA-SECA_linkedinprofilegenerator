import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation slightly for a smoother entry
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
      {/* Background Image - use a professional background related to LinkedIn/careers */}
      <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
        backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}>
        <span className="w-full h-full absolute opacity-75 bg-gradient-to-r from-primary-900 to-black"></span>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center">
            <div 
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-white font-semibold text-4xl md:text-5xl leading-tight mb-6">
                Elevate Your Professional Profile with AI
              </h1>
              <p className="mt-4 text-xl text-gray-200 mb-8">
                Generate a standout LinkedIn profile in minutes. Our AI helps you craft professionally optimized content that highlights your unique skills and experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button href="/dashboard" size="lg">
                  Generate Your LinkedIn Profile
                </Button>
                <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation for visual interest */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0px]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;