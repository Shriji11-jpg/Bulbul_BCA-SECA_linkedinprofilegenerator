import React, { useEffect } from 'react';
import { CheckCircle, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | ProfileAI';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ProfileAI</h1>
            <p className="text-xl text-primary-100 mb-8">
              We're a team of passionate developers dedicated to helping professionals create impactful LinkedIn profiles through AI innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bulbul Singh */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <img 
                src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bulbul Singh"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-center mb-2">Bulbul Singh</h3>
              <p className="text-gray-600 text-center mb-2">Full Stack Developer</p>
              <p className="text-gray-500 text-center text-sm mb-4">BCA Section A - 2401201214</p>
              <p className="text-gray-700 text-sm mb-4">
                Led the development of ProfileAI, implementing the core AI functionality and full-stack architecture. Specialized in creating the profile generation algorithm and ensuring seamless user experience.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="https://github.com" className="text-gray-600 hover:text-primary-600">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-primary-600">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:chauhanbulbulsingh@gmail.com" className="text-gray-600 hover:text-primary-600">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Sam Murthy */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Sam Murthy"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-center mb-2">Sam Murthy</h3>
              <p className="text-gray-600 text-center mb-2">Developer</p>
              <p className="text-gray-500 text-center text-sm mb-4">BCA Section A - 2401201087</p>
              <p className="text-gray-700 text-sm mb-4">
                Contributed to the backend development and API integration. Implemented the profile optimization algorithms and helped create the AI-powered suggestion system.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="https://github.com" className="text-gray-600 hover:text-primary-600">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-primary-600">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:sammurthy418110@gmail.com" className="text-gray-600 hover:text-primary-600">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Sanskar Gupta */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Sanskar Gupta"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-center mb-2">Sanskar Gupta</h3>
              <p className="text-gray-600 text-center mb-2">UI/UX Designer</p>
              <p className="text-gray-500 text-center text-sm mb-4">BCA Section A</p>
              <p className="text-gray-700 text-sm mb-4">
                Designed the user interface and experience of ProfileAI. Created the modern, professional look while ensuring intuitive navigation and accessibility across all devices.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="https://github.com" className="text-gray-600 hover:text-primary-600">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-primary-600">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:example@example.com" className="text-gray-600 hover:text-primary-600">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-primary-50 rounded-3xl overflow-hidden p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Ready to Transform Your LinkedIn Profile?
            </h2>
            <p className="text-xl text-primary-700 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have enhanced their online presence with ProfileAI.
            </p>
            <Button href="/dashboard" size="lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;