
import React from 'react';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  TrendingUp, 
  Plus, 
  Search,
  Filter,
  MoreVertical,
  Eye,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/Header';
import { Link } from 'react-router-dom';

const RecruiterDashboard = () => {
  const stats = [
    {
      label: 'Active Jobs',
      value: '12',
      change: '+2 this week',
      icon: Briefcase,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Total Applications',
      value: '248',
      change: '+18 this week',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Interviews Scheduled',
      value: '15',
      change: '+5 this week',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Hire Rate',
      value: '24%',
      change: '+3% this month',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  const recentJobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      applications: 24,
      status: 'Active',
      posted: '3 days ago',
      views: 156,
    },
    {
      id: 2,
      title: 'Product Manager',
      applications: 18,
      status: 'Active',
      posted: '1 week ago',
      views: 89,
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      applications: 31,
      status: 'Paused',
      posted: '2 weeks ago',
      views: 203,
    },
  ];

  const recentApplications = [
    {
      id: 1,
      candidateName: 'John Smith',
      jobTitle: 'Senior React Developer',
      appliedAt: '2 hours ago',
      status: 'New',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 2,
      candidateName: 'Sarah Johnson',
      jobTitle: 'Product Manager',
      appliedAt: '4 hours ago',
      status: 'Reviewed',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 3,
      candidateName: 'Mike Chen',
      jobTitle: 'UI/UX Designer',
      appliedAt: '1 day ago',
      status: 'Shortlisted',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    },
  ];

  const upcomingInterviews = [
    {
      id: 1,
      candidateName: 'Alex Rodriguez',
      jobTitle: 'Senior React Developer',
      time: 'Today, 2:00 PM',
      type: 'Technical Interview',
    },
    {
      id: 2,
      candidateName: 'Emily Davis',
      jobTitle: 'Product Manager',
      time: 'Tomorrow, 10:00 AM',
      type: 'Culture Fit',
    },
    {
      id: 3,
      candidateName: 'James Wilson',
      jobTitle: 'UI/UX Designer',
      time: 'Friday, 3:30 PM',
      type: 'Portfolio Review',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, Sarah! 👋
              </h1>
              <p className="text-gray-600">
                Here's what's happening with your recruitment today.
              </p>
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/recruiter/post-job">
                <Button className="btn-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Job
                </Button>
              </Link>
              <Button variant="outline">
                <Search className="w-4 h-4 mr-2" />
                Search Candidates
              </Button>
            </div>
          </div>

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
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
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
            {/* Recent Jobs */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Job Posts</h2>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {recentJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {job.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{job.applications} applications</span>
                          <span>{job.views} views</span>
                          <span>{job.posted}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          job.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {job.status}
                        </span>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <Button variant="outline" className="w-full">
                    View All Jobs
                  </Button>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Applications */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Applications
                </h3>
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="flex items-center space-x-3">
                      <img 
                        src={application.avatar} 
                        alt={application.candidateName}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">
                          {application.candidateName}
                        </p>
                        <p className="text-sm text-gray-600 truncate">
                          {application.jobTitle}
                        </p>
                        <p className="text-xs text-gray-500">
                          {application.appliedAt}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        application.status === 'New' 
                          ? 'bg-blue-100 text-blue-700'
                          : application.status === 'Reviewed'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {application.status}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Applications
                </Button>
              </Card>

              {/* Upcoming Interviews */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Upcoming Interviews
                </h3>
                <div className="space-y-4">
                  {upcomingInterviews.map((interview) => (
                    <div key={interview.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-gray-900">
                          {interview.candidateName}
                        </p>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {interview.jobTitle}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">
                          {interview.time}
                        </p>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                          {interview.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View Calendar
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
