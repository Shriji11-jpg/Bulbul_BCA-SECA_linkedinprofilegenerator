import React, { useState, useEffect } from 'react';
import { Brain, Send, ArrowLeft, Sparkles, BookOpen, Target, Trophy } from 'lucide-react';
import Button from '../ui/Button';

interface Topic {
  id: string;
  title: string;
  icon: React.ReactNode;
  questions: string[];
}

const topics: Topic[] = [
  {
    id: 'career-growth',
    title: 'Career Growth',
    icon: <Trophy className="h-5 w-5" />,
    questions: [
      'How can I showcase leadership skills in my profile?',
      'What achievements should I highlight?',
      'How do I demonstrate career progression?'
    ]
  },
  {
    id: 'skills',
    title: 'Skills & Expertise',
    icon: <Brain className="h-5 w-5" />,
    questions: [
      'Which technical skills are trending in my field?',
      'How should I present my certifications?',
      'What soft skills should I emphasize?'
    ]
  },
  {
    id: 'goals',
    title: 'Career Goals',
    icon: <Target className="h-5 w-5" />,
    questions: [
      'How do I align my profile with my career goals?',
      'What should my career summary focus on?',
      'How can I attract opportunities in my desired field?'
    ]
  }
];

const responses = {
  'How can I showcase leadership skills in my profile?': 
    "To showcase leadership skills effectively:\n\n1. Use action verbs like 'Led', 'Managed', 'Coordinated'\n2. Quantify team size and project scope\n3. Highlight specific initiatives you spearheaded\n4. Include examples of mentoring or training others\n5. Describe cross-functional team leadership\n\nPro tip: Include specific outcomes and metrics from your leadership experiences.",
  
  'Which technical skills are trending in my field?':
    "Current trending technical skills:\n\n1. AI/Machine Learning\n2. Cloud Computing (AWS, Azure)\n3. Data Analytics\n4. Cybersecurity\n5. DevOps practices\n\nPro tip: Research job postings in your target role to identify the most sought-after skills.",
  
  // Add more predefined responses...
};

const CareerCoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [response, setResponse] = useState<string>('');

  const handleQuestionSelect = (question: string) => {
    setSelectedQuestion(question);
    setIsTyping(true);
    setResponse('');

    const fullResponse = responses[question] || "I'll help you with that. Let's analyze your profile and create a strategy.";
    let currentChar = 0;

    const typingInterval = setInterval(() => {
      if (currentChar < fullResponse.length) {
        setResponse(prev => prev + fullResponse[currentChar]);
        currentChar++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 20);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 bg-accent-600 text-white p-4 rounded-full shadow-lg hover:bg-accent-700 transition-all duration-300 z-50"
      >
        <Brain className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-40 md:right-6 md:w-96 bg-white rounded-none md:rounded-xl shadow-xl z-50 flex flex-col">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-accent-50 rounded-t-xl">
            <div className="flex items-center">
              <Brain className="h-5 w-5 text-accent-600 mr-2" />
              <h3 className="font-semibold">AI Career Coach</h3>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setSelectedTopic(null);
                setSelectedQuestion(null);
              }}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {!selectedTopic ? (
              <div className="space-y-4">
                <p className="text-gray-600 mb-6">
                  Choose a topic to get personalized career advice and profile optimization tips:
                </p>
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic)}
                    className="w-full text-left p-4 rounded-lg bg-accent-50 hover:bg-accent-100 transition-colors duration-300 flex items-center space-x-3"
                  >
                    <div className="text-accent-600">{topic.icon}</div>
                    <h4 className="font-medium text-gray-900">{topic.title}</h4>
                  </button>
                ))}
              </div>
            ) : !selectedQuestion ? (
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="text-accent-600 hover:text-accent-700 mb-4 flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to topics</span>
                </button>
                <h4 className="font-semibold text-lg flex items-center space-x-2">
                  {selectedTopic.icon}
                  <span>{selectedTopic.title}</span>
                </h4>
                <div className="space-y-3 mt-4">
                  {selectedTopic.questions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleQuestionSelect(question)}
                      className="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedQuestion(null)}
                  className="text-accent-600 hover:text-accent-700 mb-4 flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to questions</span>
                </button>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900">{selectedQuestion}</p>
                </div>
                <div className="bg-accent-50 rounded-lg p-4 whitespace-pre-wrap">
                  {response}
                  {isTyping && (
                    <span className="inline-block animate-pulse">▋</span>
                  )}
                </div>
                {!isTyping && (
                  <Button
                    onClick={() => setSelectedQuestion(null)}
                    variant="outline"
                    fullWidth
                  >
                    Ask another question
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CareerCoach;