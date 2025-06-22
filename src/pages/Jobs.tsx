
import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Clock, Bookmark, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data - will be replaced with Supabase queries
  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp Inc',
      location: 'San Francisco, CA',
      remote: true,
      salary: '$120k - $180k',
      type: 'Full-time',
      posted: '2 days ago',
      description: 'We are looking for a skilled React developer to join our dynamic team...',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      remote: false,
      salary: '$100k - $150k',
      type: 'Full-time',
      posted: '1 week ago',
      description: 'Join our innovative startup building the future of fintech...',
      skills: ['Python', 'Django', 'React', 'PostgreSQL'],
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'Los Angeles, CA',
      remote: true,
      salary: '$80k - $120k',
      type: 'Full-time',
      posted: '3 days ago',
      description: 'Create beautiful and intuitive user experiences for our clients...',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop',
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'Cloud Solutions',
      location: 'Austin, TX',
      remote: true,
      salary: '$110k - $160k',
      type: 'Full-time',
      posted: '5 days ago',
      description: 'Help us scale our infrastructure and improve deployment processes...',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
    },
  ];

  const filters = [
    { label: 'Remote', count: 156 },
    { label: 'Full-time', count: 234 },
    { label: 'Part-time', count: 45 },
    { label: 'Contract', count: 78 },
    { label: 'Internship', count: 23 },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery, location);
    // TODO: Implement Supabase search
  };

  const handleBookmark = (jobId: number) => {
    console.log('Bookmarking job:', jobId);
    // TODO: Implement bookmark functionality
  };

  const handleApply = (jobId: number) => {
    console.log('Applying to job:', jobId);
    // TODO: Implement application functionality
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Search Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Find Your <span className="gradient-text">Dream Job</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover opportunities at top companies. Over 10,000+ jobs available.
              </p>
            </div>

            <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl shadow-lg border">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    className="pl-12 h-12 border-0 focus:ring-0 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Location"
                    className="pl-12 h-12 border-0 focus:ring-0 text-lg"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" className="h-12 px-8 btn-primary">
                  Search Jobs
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>

                <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                  <Card className="p-4">
                    <h3 className="font-medium text-gray-900 mb-3">Job Type</h3>
                    <div className="space-y-2">
                      {filters.map((filter) => (
                        <label key={filter.label} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{filter.label}</span>
                          </div>
                          <span className="text-sm text-gray-500">({filter.count})</span>
                        </label>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h3 className="font-medium text-gray-900 mb-3">Salary Range</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">$0 - $50k</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">$50k - $100k</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">$100k - $150k</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">$150k+</span>
                      </label>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {jobs.length} Jobs Found
                  </h2>
                  <p className="text-gray-600">Based on your search criteria</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1'}`}>
                {jobs.map((job) => (
                  <Card key={job.id} className="p-6 hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={job.logo} 
                          alt={`${job.company} logo`}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {job.title}
                          </h3>
                          <p className="text-gray-600 font-medium">{job.company}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleBookmark(job.id)}
                        className="text-gray-400 hover:text-primary-600"
                      >
                        <Bookmark className="w-5 h-5" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                        {job.remote && <span className="ml-1 text-green-600">(Remote)</span>}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.posted}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{job.type}</span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button 
                          size="sm" 
                          className="btn-primary"
                          onClick={() => handleApply(job.id)}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="px-8">
                  Load More Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
