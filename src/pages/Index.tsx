
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

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
            GALGOTIAS UNIVERSITY
          </h1>
          <p className="text-xl text-center text-white/80 max-w-3xl mx-auto">
            Where innovation meets passion, and students shape the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
