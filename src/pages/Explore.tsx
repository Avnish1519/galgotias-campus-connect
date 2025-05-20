import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExploreSection from '@/components/ExploreSection';
import { motion } from 'framer-motion';

const Explore: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore University <span className="text-university-gold">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover everything Galgotias University has to offer - from academics to student life
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Keep the existing Explore Section */}
      <ExploreSection />
      
      <Footer />
    </div>
  );
};

export default Explore;
