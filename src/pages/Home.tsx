import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home: React.FC = () => {
  useEffect(() => {
    // Set document title
    document.title = 'ProfileAI - AI LinkedIn Profile Generator';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;