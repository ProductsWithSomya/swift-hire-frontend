
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Target, Star, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Index = () => {
  const stats = [
    { label: 'Active Jobs', value: '10,000+', icon: Target },
    { label: 'Top Companies', value: '500+', icon: Users },
    { label: 'Successful Hires', value: '25,000+', icon: CheckCircle },
    { label: 'Time to Hire', value: '3 Days', icon: Zap },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Matching',
      description: 'Our AI-powered algorithm matches candidates with jobs in real-time, reducing time-to-hire by 70%.',
    },
    {
      icon: Users,
      title: 'Pre-vetted Talent Pool',
      description: 'Access to thousands of pre-screened developers and designers ready to join your team.',
    },
    {
      icon: Target,
      title: 'Smart Filtering',
      description: 'Advanced search and filtering capabilities to find the perfect match for your specific requirements.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Head of Engineering at TechCorp',
      content: 'SwiftHire helped us hire 3 senior developers in just one week. The quality of candidates is exceptional.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO at StartupXYZ',
      content: 'The real-time collaboration tools made our interview process seamless. Highly recommend!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Emily Johnson',
      role: 'Talent Acquisition Lead',
      content: 'SwiftHire has transformed how we recruit. The platform is intuitive and incredibly powerful.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-50"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-8 animate-fade-in">
              <Zap className="w-4 h-4 mr-2" />
              Now 3x faster than traditional hiring
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 animate-fade-up">
              Hire Top Tech Talent
              <span className="block gradient-text">Lightning Fast</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-up animate-stagger-1">
              Revolutionary recruitment platform with AI-powered matching, real-time collaboration, 
              and pre-vetted candidates. Reduce time-to-hire from weeks to days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animate-stagger-2">
              <Link to="/auth/register">
                <Button size="lg" className="btn-primary px-8 py-4 text-lg hover-lift">
                  Start Hiring Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg hover-lift">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">SwiftHire?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for modern teams who demand speed, quality, and seamless collaboration in their hiring process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-8 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Loved by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of companies who have transformed their hiring process with SwiftHire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="p-8 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            Join thousands of companies using SwiftHire to build amazing teams faster than ever before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/auth/register">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg hover-lift bg-white text-primary-600 hover:bg-gray-50">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/jobs">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg hover-lift border-white text-white hover:bg-white hover:text-primary-600">
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
