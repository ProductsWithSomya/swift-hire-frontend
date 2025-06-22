
import React from 'react';
import { 
  Search, 
  Bookmark, 
  Calendar, 
  TrendingUp, 
  FileText, 
  Star,
  MapPin,
  Clock,
  DollarSign,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/layout/Header';
import { Link } from 'react-router-dom';

const CandidateDashboard = () => {
  const stats = [
    {
      label: 'Applications Sent',
      value: '23',
      change: '+5 this week',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Profile Views',
      value: '156',
      change: '+12 this week',
      icon: Eye,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Interviews',
      value: '4',
      change: '+2 this week',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Response Rate',
      value: '18%',
      change: '+3% this month',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  const applications = [
    {
      id: 1,
      jobTitle: 'Senior React Developer',
      company: 'TechCorp Inc',
      appliedAt: '2 days ago',
      status: 'Under Review',
      salary: '$120k - $180k',
      location: 'San Francisco, CA',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=50&h=50&fit=crop',
    },
    {
      id: 2,
      jobTitle: 'Full Stack Engineer',
      company: 'StartupXYZ',
      appliedAt: '5 days ago',
      status: 'Interview Scheduled',
      salary: '$100k - $150k',
      location: 'New York, NY',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop',
    },
    {
      id: 3,
      jobTitle: 'Frontend Developer',
      company: 'Design Studio',
      appliedAt: '1 week ago',
      status: 'Rejected',
      salary: '$80k - $120k',
      location: 'Los Angeles, CA',
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=50&h=50&fit=crop',
    },
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: 'React Developer',
      company: 'InnovateTech',
      location: 'Remote',
      salary: '$90k - $130k',
      match: 95,
      posted: '2 days ago',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=50&h=50&fit=crop',
    },
    {
      id: 2,
      title: 'JavaScript Engineer',
      company: 'WebSolutions',
      location: 'Seattle, WA',
      salary: '$110k - $160k',
      match: 88,
      posted: '4 days ago',
      logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=50&h=50&fit=crop',
    },
  ];

  const upcomingInterviews = [
    {
      id: 1,
      jobTitle: 'Full Stack Engineer',
      company: 'StartupXYZ',
      date: 'Today',
      time: '2:00 PM',
      type: 'Technical Interview',
      interviewer: 'John Smith',
    },
    {
      id: 2,
      jobTitle: 'React Developer',
      company: 'TechFlow',
      date: 'Tomorrow',
      time: '10:00 AM',
      type: 'Culture Fit',
      interviewer: 'Sarah Johnson',
    },
  ];

  const profileCompletion = 75;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, Alex! 👋
              </h1>
              <p className="text-gray-600">
                Let's find your next great opportunity.
              </p>
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/jobs">
                <Button className="btn-primary">
                  <Search className="w-4 h-4 mr-2" />
                  Find Jobs
                </Button>
              </Link>
              <Link to="/candidate/profile">
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile Completion */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Complete Your Profile
                </h3>
                <p className="text-gray-600">
                  A complete profile gets 3x more views
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600">
                  {profileCompletion}%
                </div>
                <div className="text-sm text-gray-600">Complete</div>
              </div>
            </div>
            <Progress value={profileCompletion} className="mb-4" />
            <Link to="/candidate/profile">
              <Button size="sm" className="btn-primary">
                Complete Profile
              </Button>
            </Link>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {stat.change}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Applications */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>

                <div className="space-y-4">
                  {applications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={application.logo} 
                          alt={`${application.company} logo`}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {application.jobTitle}
                          </h3>
                          <p className="text-gray-600">{application.company}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {application.location}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="w-3 h-3 mr-1" />
                              {application.salary}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {application.appliedAt}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        application.status === 'Under Review' 
                          ? 'bg-yellow-100 text-yellow-700'
                          : application.status === 'Interview Scheduled'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {application.status}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recommended Jobs */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recommended for You</h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>

                <div className="space-y-4">
                  {recommendedJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={job.logo} 
                          alt={`${job.company} logo`}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {job.title}
                          </h3>
                          <p className="text-gray-600">{job.company}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="w-3 h-3 mr-1" />
                              {job.salary}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {job.posted}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="flex items-center text-green-600">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            <span className="text-sm font-medium">{job.match}% match</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <Button size="sm" className="btn-primary">
                            Apply
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Interviews */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Upcoming Interviews
                </h3>
                <div className="space-y-4">
                  {upcomingInterviews.map((interview) => (
                    <div key={interview.id} className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-primary-700">
                          {interview.date} at {interview.time}
                        </span>
                        <Button variant="ghost" size="sm">
                          <Calendar className="w-4 h-4" />
                        </Button>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {interview.jobTitle}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {interview.company}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          with {interview.interviewer}
                        </span>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                          {interview.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Interviews
                </Button>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link to="/jobs">
                    <Button variant="outline" className="w-full justify-start">
                      <Search className="w-4 h-4 mr-2" />
                      Browse Jobs
                    </Button>
                  </Link>
                  <Link to="/candidate/profile">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Update Resume
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Saved Jobs
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Interview
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;
