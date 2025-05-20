
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AICoachSection from '@/components/AICoachSection';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import AICoachChat from '@/components/AICoachChat';
import { Link } from 'react-router-dom';

const GalgotiasOne: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Add animation when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section with minimal design */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Simple Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0" />
        
        {/* Main Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isLoaded ? 1 : 0.8, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            >
              Galgotias <span className="text-university-gold">One</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your complete gateway to university resources and AI-powered career guidance
            </motion.p>
          </motion.div>
          
          {/* AI Coach Section - Main Focus */}
          <AICoachSection />
          
          {/* CTA Button to Explore Page */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              className="bg-university-navy text-white hover:bg-university-navy/90 text-lg font-medium px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link to="/explore">
                Explore University Resources
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Floating AI Coach Button */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isLoaded ? 1 : 0, opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="rounded-full w-16 h-16 bg-university-gold text-university-navy hover:bg-university-gold/90 shadow-lg hover:shadow-xl flex items-center justify-center"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <MessageCircle size={28} />
          </Button>
        </motion.div>

        {/* AI Coach Chat Panel */}
        <AICoachChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </section>
      
      <Footer />
    </div>
  );
};

export default GalgotiasOne;
