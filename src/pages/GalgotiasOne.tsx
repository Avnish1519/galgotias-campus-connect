
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AICoachChat from '@/components/AICoachChat';
import ExploreSection from '@/components/ExploreSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import NewsletterSection from '@/components/NewsletterSection';
import { Button } from '@/components/ui/button';
import { MessageCircle, ChevronDown } from 'lucide-react';

const GalgotiasOne: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Add animation when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Scroll to explore section
  const scrollToExplore = () => {
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section with enhanced animations */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background with more particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-university-navy via-university-navy/80 to-university-navy/70 z-0">
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10 backdrop-blur-md"
                initial={{ 
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  scale: Math.random() * 0.5 + 0.5,
                  opacity: 0.3 + Math.random() * 0.3
                }}
                animate={{ 
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  scale: Math.random() * 0.3 + 0.7,
                  opacity: 0.2 + Math.random() * 0.2
                }}
                transition={{
                  duration: 15 + Math.random() * 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                style={{
                  width: `${(i + 1) * 10 + 50}px`,
                  height: `${(i + 1) * 10 + 50}px`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Hero Content with staggered animations */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isLoaded ? 1 : 0.8, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            >
              Galgotias <span className="text-university-gold">One</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Everything about Galgotias University — in One Place
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                className="bg-university-gold text-university-navy hover:bg-university-gold/90 text-lg font-medium px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
              
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg font-medium px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </motion.div>
            
            {/* Scroll down indicator */}
            <motion.div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: isLoaded ? 1 : 0, 
                y: isLoaded ? 0 : -20,
              }}
              transition={{ 
                duration: 0.8, 
                delay: 1.2,
              }}
              onClick={scrollToExplore}
            >
              <p className="text-sm mb-2 text-white/80">Discover More</p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={24} className="text-university-gold" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating AI Coach Button with enhanced animation */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: isLoaded ? 1 : 0, opacity: isLoaded ? 1 : 0, rotate: 0 }}
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
      
      {/* Explore University Sections */}
      <ExploreSection />
      
      {/* Testimonials */}
      <TestimonialsCarousel />
      
      {/* Newsletter */}
      <NewsletterSection />
      
      <Footer />
    </div>
  );
};

export default GalgotiasOne;
