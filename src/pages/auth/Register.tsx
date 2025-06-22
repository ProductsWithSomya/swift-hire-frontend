
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Eye, EyeOff, Mail, Lock, User, Building, Github, Chrome, Linkedin } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState<'recruiter' | 'candidate'>('candidate');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    terms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', { ...formData, userType });
    // TODO: Implement Supabase authentication
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Sign up with ${provider}`, { userType });
    // TODO: Implement Supabase OAuth
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-secondary-100/20"></div>
      
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-2xl font-bold gradient-text">SwiftHire</span>
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h1>
          <p className="text-gray-600">Join thousands of companies and candidates</p>
        </div>

        <Card className="p-8 glass backdrop-blur-xl border-white/20 shadow-xl">
          {/* User Type Selection */}
          <div className="mb-6">
            <Label className="text-base font-semibold mb-3 block">I'm a...</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserType('candidate')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  userType === 'candidate'
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <User className="w-6 h-6 mx-auto mb-2" />
                <div className="font-medium">Candidate</div>
                <div className="text-sm text-gray-500">Looking for jobs</div>
              </button>
              <button
                type="button"
                onClick={() => setUserType('recruiter')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  userType === 'recruiter'
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <Building className="w-6 h-6 mx-auto mb-2" />
                <div className="font-medium">Recruiter</div>
                <div className="text-sm text-gray-500">Hiring talent</div>
              </button>
            </div>
          </div>

          {/* Social Signup Buttons */}
          <div className="space-y-3 mb-6">
            <Button
              variant="outline"
              className="w-full h-12 bg-white/50 hover:bg-white/70 border-white/30"
              onClick={() => handleSocialSignup('google')}
            >
              <Chrome className="w-5 h-5 mr-3" />
              Continue with Google
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-12 bg-white/50 hover:bg-white/70 border-white/30"
                onClick={() => handleSocialSignup('linkedin')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="h-12 bg-white/50 hover:bg-white/70 border-white/30"
                onClick={() => handleSocialSignup('github')}
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or create account with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="h-12 bg-white/50 border-white/30 focus:bg-white/70"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="h-12 bg-white/50 border-white/30 focus:bg-white/70"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="pl-10 h-12 bg-white/50 border-white/30 focus:bg-white/70"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {userType === 'recruiter' && (
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="pl-10 h-12 bg-white/50 border-white/30 focus:bg-white/70"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="pl-10 pr-10 h-12 bg-white/50 border-white/30 focus:bg-white/70"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  className="pl-10 pr-10 h-12 bg-white/50 border-white/30 focus:bg-white/70"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                checked={formData.terms}
                onChange={handleInputChange}
                className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <Link to="/terms" className="text-primary-600 hover:text-primary-700 font-medium">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-primary-600 hover:text-primary-700 font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button type="submit" className="w-full h-12 btn-primary text-lg font-semibold">
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/auth/login" className="text-primary-600 hover:text-primary-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;
