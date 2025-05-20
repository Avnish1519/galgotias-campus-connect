
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll now receive updates from Galgotias One.",
        variant: "default",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-6 bg-university-navy relative overflow-hidden" id="newsletter">
      {/* Animated Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              width: `${(i + 1) * 100 + 50}px`,
              height: `${(i + 1) * 100 + 50}px`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <motion.div 
              className="bg-university-gold/20 p-5 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              <Mail size={40} className="text-university-gold" />
            </motion.div>
            
            <div className="text-center md:text-left">
              <motion.h2 
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Stay Updated with Galgotias One
              </motion.h2>
              <motion.p 
                className="text-white/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Subscribe to our newsletter to receive notifications about events, 
                placement drives, academic updates, and more!
              </motion.p>
            </div>
          </div>
          
          <motion.form 
            className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex-grow relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="pl-10 bg-white text-gray-900 border-0 focus-visible:ring-university-gold focus-visible:ring-offset-1 focus-visible:ring-offset-university-navy"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="bg-university-gold text-university-navy hover:bg-university-gold/90 px-8"
            >
              Subscribe
              <Bell size={18} className="ml-2" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
