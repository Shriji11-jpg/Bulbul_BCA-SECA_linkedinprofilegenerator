import React, { useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | ProfileAI';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-100">
              Have questions or need assistance? We're here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-700 mb-8">
                  We'd love to hear from you. Whether you have a question about our product, pricing, or anything else, our team is ready to answer all your questions.
                </p>

                <div className="space-y-6 mb-10">
                  {/* Bulbul Singh */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">Bulbul Singh</h3>
                    <p className="text-gray-600">Full Stack Developer</p>
                    <div className="mt-2">
                      <p className="text-gray-600">chauhanbulbulsingh@gmail.com</p>
                      <p className="text-gray-600">+91 7878281650</p>
                    </div>
                  </div>

                  {/* Sam Murthy */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">Sam Murthy</h3>
                    <p className="text-gray-600">Developer</p>
                    <div className="mt-2">
                      <p className="text-gray-600">sammurthy418110@gmail.com</p>
                      <p className="text-gray-600">+91 7303334879</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <table className="w-full text-gray-600 mt-2">
                      <tbody>
                        <tr>
                          <td className="py-1 font-medium">Monday - Friday:</td>
                          <td className="py-1">9:00 AM - 6:00 PM IST</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-medium">Saturday:</td>
                          <td className="py-1">10:00 AM - 2:00 PM IST</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-medium">Sunday:</td>
                          <td className="py-1">Closed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-soft p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;