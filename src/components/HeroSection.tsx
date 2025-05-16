
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-university-navy/60 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Welcome to Galgotias University</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
          Where innovation meets passion, and students shape the future. Explore your campus, discover exciting events, and unlock endless opportunities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-university-gold text-university-navy hover:bg-university-gold/90 font-medium px-8 py-6 text-lg">
            Explore Campus
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10 font-medium px-8 py-6 text-lg">
            View Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
