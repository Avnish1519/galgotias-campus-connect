
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CampusMapSection from '@/components/sections/CampusMapSection';
import EventsSection from '@/components/sections/EventsSection';
import StudentServicesSection from '@/components/sections/StudentServicesSection';
import AlertsSection from '@/components/sections/AlertsSection';
import ProfileSection from '@/components/sections/ProfileSection';
import FacilitiesSection from '@/components/sections/FacilitiesSection';
import NewsSection from '@/components/sections/NewsSection';
import QuickLinksSection from '@/components/sections/QuickLinksSection';
import FeedbackSection from '@/components/sections/FeedbackSection';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-university-navy/90">
      <Navbar />
      
      {/* Hero Section with University Branding */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-university-gold via-university-navy to-university-gold"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            CAMPUS RESOURCES
          </h2>
          <p className="text-xl text-center text-white/80 max-w-3xl mx-auto">
            Everything you need to navigate university life in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CampusMapSection />
          <EventsSection />
          <StudentServicesSection />
          <AlertsSection />
          <ProfileSection />
          <FacilitiesSection />
          <NewsSection />
          <QuickLinksSection />
          <FeedbackSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
