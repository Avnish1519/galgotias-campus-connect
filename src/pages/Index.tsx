
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import EventsPreview from '@/components/EventsPreview';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <EventsPreview />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
