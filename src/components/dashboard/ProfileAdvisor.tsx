import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

interface Suggestion {
  id: number;
  title: string;
  description: string;
}

const ProfileAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState<Suggestion | null>(null);

  const suggestions: Suggestion[] = [
    {
      id: 1,
      title: "Optimize Your Headline",
      description: "Your headline should be more than just a job title. Include your specialty, value proposition, or the problems you solve. For example: 'Full Stack Developer | Building Scalable Web Solutions | React & Node.js Expert'"
    },
    {
      id: 2,
      title: "Enhance Your Summary",
      description: "Start with a strong opening line that hooks readers. Share your professional story, highlighting key achievements and what drives you. End with a clear call-to-action."
    },
    {
      id: 3,
      title: "Showcase Projects",
      description: "Add featured projects with visual content. Include project outcomes, technologies used, and your specific role. This demonstrates practical experience and technical expertise."
    },
    {
      id: 4,
      title: "Optimize for Keywords",
      description: "Research and include relevant industry keywords throughout your profile. This improves visibility in LinkedIn searches and helps recruiters find you."
    }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 z-50"
      >
        <Sparkles className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-20 md:right-6 md:w-96 bg-white rounded-none md:rounded-xl shadow-xl z-50 flex flex-col">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-primary-600 mr-2" />
              <h3 className="font-semibold">Profile Advisor</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {!selectedSuggestion ? (
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Select a topic to get personalized advice for your LinkedIn profile:
                </p>
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => setSelectedSuggestion(suggestion)}
                    className="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <h4 className="font-medium text-gray-900">{suggestion.title}</h4>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedSuggestion(null)}
                  className="text-primary-600 hover:text-primary-700 mb-4 flex items-center"
                >
                  ← Back to topics
                </button>
                <h4 className="font-semibold text-lg">{selectedSuggestion.title}</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedSuggestion.description}
                </p>
                <div className="pt-4">
                  <Button
                    onClick={() => setSelectedSuggestion(null)}
                    fullWidth
                  >
                    Got it, thanks!
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileAdvisor;