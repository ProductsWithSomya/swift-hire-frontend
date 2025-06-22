
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Upload, Plus, X, Camera } from 'lucide-react';
import Header from '@/components/layout/Header';
import { Link } from 'react-router-dom';

const CandidateProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Frontend Developer',
    summary: 'Passionate frontend developer with 5+ years of experience building modern web applications...',
    experience: [
      {
        id: 1,
        company: 'TechCorp Inc',
        position: 'Senior Frontend Developer',
        startDate: '2021-01',
        endDate: 'present',
        description: 'Led development of React-based applications...',
      },
    ],
    education: [
      {
        id: 1,
        institution: 'University of California',
        degree: 'Bachelor of Computer Science',
        startDate: '2015-09',
        endDate: '2019-06',
      },
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
  });

  const [newSkill, setNewSkill] = useState('');
  const [profileCompletion, setProfileCompletion] = useState(75);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile update:', profileData);
    // TODO: Implement Supabase profile update
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link to="/candidate/dashboard">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">Edit Profile</h1>
              <p className="text-gray-600 mt-2">
                Keep your profile updated to attract the best opportunities
              </p>
            </div>
          </div>

          {/* Profile Completion */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Profile Completion
              </h3>
              <div className="text-2xl font-bold text-primary-600">
                {profileCompletion}%
              </div>
            </div>
            <Progress value={profileCompletion} className="mb-2" />
            <p className="text-sm text-gray-600">
              Complete profiles get 3x more views from recruiters
            </p>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile Picture & Basic Info */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
              
              <div className="flex items-start space-x-6 mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    AJ
                  </div>
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-2 shadow-sm hover:bg-gray-50"
                  >
                    <Camera className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="flex-1">
                  <Button type="button" variant="outline" className="mb-2">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-sm text-gray-500">
                    JPG, PNG or GIF. Max size 2MB.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City, State"
                    value={profileData.location}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="e.g. Senior Frontend Developer"
                    value={profileData.title}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
              </div>
            </Card>

            {/* Summary */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Professional Summary</h2>
              <div className="space-y-2">
                <Label htmlFor="summary">About You</Label>
                <Textarea
                  id="summary"
                  name="summary"
                  placeholder="Write a brief summary about your professional background, skills, and career goals..."
                  value={profileData.summary}
                  onChange={handleInputChange}
                  className="min-h-[120px]"
                />
                <p className="text-sm text-gray-500">
                  Tip: Include your key achievements and what makes you unique
                </p>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Skills</h2>
              
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Add a skill (e.g. React, Python, Design)"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                    className="flex-1 h-12"
                  />
                  <Button type="button" onClick={addSkill} variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                {profileData.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-2 text-primary-500 hover:text-primary-700"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Card>

            {/* Experience */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Work Experience</h2>
                <Button type="button" variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Experience
                </Button>
              </div>

              <div className="space-y-6">
                {profileData.experience.map((exp) => (
                  <div key={exp.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Position</Label>
                        <Input value={exp.position} className="h-10" />
                      </div>
                      <div className="space-y-2">
                        <Label>Company</Label>
                        <Input value={exp.company} className="h-10" />
                      </div>
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input type="month" value={exp.startDate} className="h-10" />
                      </div>
                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Input 
                          type="month" 
                          value={exp.endDate === 'present' ? '' : exp.endDate} 
                          placeholder="Leave blank if current"
                          className="h-10" 
                        />
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <Label>Description</Label>
                      <Textarea value={exp.description} className="min-h-[80px]" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Education */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Education</h2>
                <Button type="button" variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Education
                </Button>
              </div>

              <div className="space-y-6">
                {profileData.education.map((edu) => (
                  <div key={edu.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Institution</Label>
                        <Input value={edu.institution} className="h-10" />
                      </div>
                      <div className="space-y-2">
                        <Label>Degree</Label>
                        <Input value={edu.degree} className="h-10" />
                      </div>
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input type="month" value={edu.startDate} className="h-10" />
                      </div>
                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Input type="month" value={edu.endDate} className="h-10" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Resume Upload */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Resume</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Upload your resume
                </h3>
                <p className="text-gray-600 mb-4">
                  PDF, DOC, or DOCX. Max size 5MB.
                </p>
                <Button type="button" variant="outline">
                  Choose File
                </Button>
              </div>
            </Card>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" size="lg" className="px-8">
                Cancel
              </Button>
              <Button type="submit" size="lg" className="px-8 btn-primary">
                Save Profile
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
