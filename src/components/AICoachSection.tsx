
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BriefcaseIcon, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AICoachChat from '@/components/AICoachChat';

const AICoachSection: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('career');

  const tabContent = {
    career: {
      title: "Discover Your Career Path",
      description: "Get personalized guidance on degree programs, career opportunities, and skill development tailored to your interests and goals.",
      buttonText: "Explore Career Paths",
      items: [
        {
          title: "Engineering & Technology",
          description: "Software engineering, AI/ML, data science, and more technical paths"
        },
        {
          title: "Business & Management",
          description: "Finance, marketing, entrepreneurship, and leadership roles"
        },
        {
          title: "Research & Academia",
          description: "Advanced degrees, teaching, and research opportunities"
        }
      ]
    },
    placement: {
      title: "Placement Support",
      description: "Access resources for resume building, interview preparation, and internship opportunities with our partner companies.",
      buttonText: "Prepare for Placements",
      stats: [
        { value: "95%", label: "Placement Rate" },
        { value: "42 LPA", label: "Highest Package" },
        { value: "500+", label: "Hiring Companies" }
      ]
    },
    courses: {
      title: "Explore Courses",
      description: "Browse through our comprehensive catalog of courses and specializations across multiple disciplines.",
      buttonText: "View Course Catalog",
      categories: [
        "B.Tech Programs",
        "MBA Specializations", 
        "Science & Humanities",
        "Research Programs"
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-14 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side: AI Coach Info */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-block bg-university-gold/10 text-university-gold py-1 px-4 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium flex items-center gap-1">
                <MessageSquare className="h-3.5 w-3.5" />
                AI-Powered Guidance
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your AI Career <span className="text-university-gold">Coach</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Navigate your academic journey and plan your career path with personalized guidance from our AI-powered career coach.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Button 
                variant="default" 
                className={`${
                  activeTab === 'career' 
                    ? 'bg-university-gold text-university-navy' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } rounded-lg px-6`}
                onClick={() => setActiveTab('career')}
              >
                Career Paths
              </Button>
              <Button 
                variant="default" 
                className={`${
                  activeTab === 'placement' 
                    ? 'bg-university-gold text-university-navy' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } rounded-lg px-6`}
                onClick={() => setActiveTab('placement')}
              >
                Placements
              </Button>
              <Button 
                variant="default" 
                className={`${
                  activeTab === 'courses' 
                    ? 'bg-university-gold text-university-navy' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } rounded-lg px-6`}
                onClick={() => setActiveTab('courses')}
              >
                Courses
              </Button>
            </div>
            
            <Button 
              onClick={() => setIsChatOpen(true)}
              className="bg-university-navy text-white hover:bg-university-navy/90 rounded-lg px-8 py-3 text-lg flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="h-5 w-5" />
              Chat with AI Coach
            </Button>
          </motion.div>
          
          {/* Right side: Content based on active tab */}
          <motion.div 
            className="w-full lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {activeTab === 'career' && (
              <div className="space-y-6">
                <motion.h3 
                  className="text-2xl font-bold"
                  variants={itemVariants}
                >
                  {tabContent.career.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  variants={itemVariants}
                >
                  {tabContent.career.description}
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {tabContent.career.items.map((item, index) => (
                    <motion.div
                      key={`career-${index}`}
                      variants={itemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <Card className="bg-gray-50 border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <motion.div variants={itemVariants}>
                  <Button variant="outline" className="text-university-navy border-university-navy hover:bg-university-navy/5 mt-4">
                    {tabContent.career.buttonText}
                  </Button>
                </motion.div>
              </div>
            )}
            
            {activeTab === 'placement' && (
              <div className="space-y-6">
                <motion.h3 
                  className="text-2xl font-bold"
                  variants={itemVariants}
                >
                  {tabContent.placement.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  variants={itemVariants}
                >
                  {tabContent.placement.description}
                </motion.p>
                <motion.div 
                  className="grid grid-cols-3 gap-4 mt-6"
                  variants={itemVariants}
                >
                  {tabContent.placement.stats.map((stat, index) => (
                    <Card key={index} className="bg-gray-50 border-none shadow-sm">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-university-gold">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button variant="outline" className="text-university-navy border-university-navy hover:bg-university-navy/5 mt-4">
                    {tabContent.placement.buttonText}
                  </Button>
                </motion.div>
              </div>
            )}
            
            {activeTab === 'courses' && (
              <div className="space-y-6">
                <motion.h3 
                  className="text-2xl font-bold"
                  variants={itemVariants}
                >
                  {tabContent.courses.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  variants={itemVariants}
                >
                  {tabContent.courses.description}
                </motion.p>
                <motion.div 
                  className="grid grid-cols-2 gap-4 mt-6"
                  variants={itemVariants}
                >
                  {tabContent.courses.categories.map((category, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      className="justify-start text-gray-700 border-gray-200 hover:bg-gray-50 h-12"
                    >
                      {category}
                    </Button>
                  ))}
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button variant="outline" className="text-university-navy border-university-navy hover:bg-university-navy/5 mt-4">
                    {tabContent.courses.buttonText}
                  </Button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* AI Coach Chat Modal */}
      <AICoachChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  );
};

export default AICoachSection;
