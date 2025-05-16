
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-16 bg-university-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-university-navy to-university-navy/80 opacity-90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Navigate, Engage, and Thrive at Galgotias University
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Your journey starts here. Join our vibrant community and unlock endless possibilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-university-gold text-university-navy hover:bg-university-gold/90 px-8 py-6 text-lg font-medium">
              Apply Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
              Schedule a Campus Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
