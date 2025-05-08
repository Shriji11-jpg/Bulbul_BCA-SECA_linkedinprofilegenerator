import React, { useState } from 'react';
import Button from '../ui/Button';
import { FileText, CheckCircle, Clock, Download } from 'lucide-react';

interface FormState {
  name: string;
  currentRole: string;
  industry: string;
  experience: string;
  skills: string;
  education: string;
  tone: string;
}

const initialFormState: FormState = {
  name: '',
  currentRole: '',
  industry: '',
  experience: '',
  skills: '',
  education: '',
  tone: 'professional',
};

const ProfileGenerator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormState);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedProfile, setGeneratedProfile] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleGenerate = () => {
    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedProfile(
        `# ${formData.name}
        
**${formData.currentRole} | ${formData.industry} Professional**

## About Me
A dedicated ${formData.industry} professional with extensive experience in ${formData.currentRole}. Proven track record of delivering exceptional results through strategic thinking and collaborative leadership.

## Experience
${formData.experience}

## Skills
${formData.skills.split(',').map(skill => `• ${skill.trim()}`).join('\n')}

## Education
${formData.education}

This AI-optimized LinkedIn profile highlights your unique professional journey while maintaining a ${formData.tone} tone that resonates with recruiters and industry peers.`
      );
      setStep(3);
    }, 2000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Basic Information</h2>
            <p className="text-gray-600">Let's start with your professional basics.</p>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="currentRole" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Role
                </label>
                <input
                  id="currentRole"
                  name="currentRole"
                  type="text"
                  value={formData.currentRole}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Senior Software Engineer"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                  Industry
                </label>
                <input
                  id="industry"
                  name="industry"
                  type="text"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Technology"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button onClick={handleNext} fullWidth>Continue</Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Professional Details</h2>
            <p className="text-gray-600">Tell us more about your professional journey.</p>

            <div className="space-y-4">
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Professional Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Briefly describe your work experience..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                  Skills (comma separated)
                </label>
                <input
                  id="skills"
                  name="skills"
                  type="text"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Project Management, Leadership, Communication"
                />
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                  Education
                </label>
                <input
                  id="education"
                  name="education"
                  type="text"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="MBA, Stanford University"
                />
              </div>

              <div>
                <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Tone
                </label>
                <select
                  id="tone"
                  name="tone"
                  value={formData.tone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="professional">Professional</option>
                  <option value="conversational">Conversational</option>
                  <option value="dynamic">Dynamic</option>
                  <option value="technical">Technical</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button onClick={handleBack} variant="outline" fullWidth>Back</Button>
              <Button onClick={handleGenerate} disabled={isGenerating} fullWidth>
                {isGenerating ? 'Generating...' : 'Generate Profile'}
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Your AI-Generated Profile</h2>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </Button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 markdown-content">
              <pre className="whitespace-pre-wrap font-sans text-gray-800">
                {generatedProfile}
              </pre>
            </div>

            <div className="bg-primary-50 border border-primary-100 rounded-lg p-4">
              <h3 className="text-primary-800 font-medium mb-2">Profile Performance Score: 92/100</h3>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Recruiter-optimized</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Keyword-rich</span>
                </div>
                <div className="flex items-center text-amber-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Can be more specific</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex space-x-4">
              <Button 
                onClick={() => {
                  setStep(1);
                  setGeneratedProfile(null);
                  setFormData(initialFormState);
                }} 
                variant="outline" 
                fullWidth
              >
                Create New Profile
              </Button>
              <Button onClick={() => setStep(2)} variant="primary" fullWidth>
                Edit & Regenerate
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center mb-6">
        <FileText className="h-6 w-6 text-primary-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">LinkedIn Profile Generator</h1>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          <div className="w-full absolute top-1/2 h-0.5 bg-gray-200"></div>
          {[1, 2, 3].map((s) => (
            <div key={s} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  s <= step
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {s}
              </div>
              <span className="text-xs mt-1 text-gray-500">
                {s === 1 ? 'Basics' : s === 2 ? 'Details' : 'Result'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {renderStep()}
    </div>
  );
};

export default ProfileGenerator;