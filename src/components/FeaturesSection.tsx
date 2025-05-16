
import React from 'react';
import FeatureCard from './FeatureCard';
import { MapPin, Calendar, Users, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeaturesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-b from-black/90 to-gray-900/80 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-university-gold via-transparent to-university-gold"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-university-gold to-transparent"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-university-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-university-navy/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto text-university-gold">Key Features</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Whether you're finding your way around, diving into research, or attending unforgettable gatherings, 
            this is your gateway to the best of university life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <FeatureCard
            icon={MapPin}
            title="Campus Navigation"
            description="Never feel lost! Find your way to libraries, labs, food spots, and more."
            buttonText="View Map"
            onClick={() => navigate('/campus')}
          />
          
          <FeatureCard
            icon={Calendar}
            title="Upcoming Events"
            description="Stay updated on cultural fests, hackathons, and academic seminars."
            buttonText="See Events"
            onClick={() => navigate('/events')}
          />
          
          <FeatureCard
            icon={Users}
            title="Student Life"
            description="Explore clubs, student organizations, and support services that empower you."
            buttonText="Discover More"
            onClick={() => navigate('/student-life')}
          />
          
          <FeatureCard
            icon={Bell}
            title="Live Updates"
            description="Important announcements? No problem! Stay informed in real-time."
            buttonText="Check Updates"
            onClick={() => navigate('/updates')}
          />
          
          <FeatureCard
            icon={User}
            title="Personalized Experience"
            description="Create your campus profile for tailored recommendations."
            buttonText="My Profile"
            onClick={() => navigate('/profile')}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
