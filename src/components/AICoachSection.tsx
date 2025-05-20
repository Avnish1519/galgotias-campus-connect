
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BriefcaseIcon, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AICoachChat from '@/components/AICoachChat';

const AICoachSection: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('career');

  const careerPaths = [
    {
      title: "Engineering",
      icon: <GraduationCap className="h-5 w-5" />,
      description: "Discover opportunities in software, electrical, mechanical, and civil engineering.",
    },
    {
      title: "Business & Management",
      icon: <BriefcaseIcon className="h-5 w-5" />,
      description: "Explore career paths in finance, marketing, HR, and entrepreneurship.",
    },
    {
      title: "Research & Academia",
      icon: <Users className="h-5 w-5" />,
      description: "Pursue advanced degrees and research opportunities across disciplines.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-university-navy/95 via-university-navy to-university-navy/90 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left side: AI Coach Info */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-block bg-university-gold/20 text-university-gold py-1 px-4 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium flex items-center gap-1">
                <MessageSquare className="h-3.5 w-3.5" />
                AI-Powered Guidance
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your AI Career <span className="text-university-gold">Coach</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Navigate your academic journey and plan your career path with personalized guidance from our AI-powered career coach. Get instant answers to your queries about courses, placements, and opportunities.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Button 
                variant="default" 
                className={`${
                  activeTab === 'career' 
                    ? 'bg-university-gold text-university-navy' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                } rounded-full px-6`}
                onClick={() => setActiveTab('career')}
              >
                Career Paths
              </Button>
              <Button 
                variant="default" 
                className={`${
                  activeTab === 'placement' 
                    ? 'bg-university-gold text-university-navy' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                } rounded-full px-6`}
                onClick={() => setActiveTab('placement')}
              >
                Placements
              </Button>
              <Button 
                variant="default" 
                className={`${
                  activeTab === 'courses' 
                    ? 'bg-university-gold text-university-navy' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                } rounded-full px-6`}
                onClick={() => setActiveTab('courses')}
              >
                Courses
              </Button>
            </div>
            
            <Button 
              onClick={() => setIsChatOpen(true)}
              className="bg-university-gold text-university-navy hover:bg-university-gold/90 rounded-full px-8 py-6 text-lg flex items-center gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              Chat with AI Coach
            </Button>
          </motion.div>
          
          {/* Right side: Career paths cards */}
          <motion.div 
            className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {activeTab === 'career' && careerPaths.map((path, index) => (
              <motion.div
                key={`career-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-university-gold/20 p-2 rounded-full">
                        {path.icon}
                      </div>
                      <h3 className="text-lg font-medium">{path.title}</h3>
                    </div>
                    <p className="text-white/70">{path.description}</p>
                    <Button variant="ghost" className="text-university-gold hover:text-university-gold hover:bg-university-gold/10 mt-4 px-0">
                      Learn more →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            {activeTab === 'placement' && (
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <BriefcaseIcon className="h-12 w-12 mb-4 text-university-gold" />
                      <h3 className="text-xl font-bold mb-2">Placement Excellence</h3>
                      <p className="text-white/70 mb-4">Galgotias University boasts a strong placement record with 500+ companies visiting annually. Get advice on resume building, interview preparation, and industry connections.</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4">
                        <div className="bg-white/5 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-university-gold">95%</div>
                          <div className="text-sm text-white/70">Placement Rate</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-university-gold">42 LPA</div>
                          <div className="text-sm text-white/70">Highest Package</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-university-gold">500+</div>
                          <div className="text-sm text-white/70">Hiring Companies</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
            
            {activeTab === 'courses' && (
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-6">
                      <GraduationCap className="h-12 w-12 mb-4 text-university-gold" />
                      <h3 className="text-xl font-bold mb-2">Academic Programs</h3>
                      <p className="text-white/70">Explore our diverse range of undergraduate and postgraduate programs across multiple disciplines.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button variant="outline" className="justify-start text-white border-white/20 hover:bg-white/10">
                        B.Tech Programs
                      </Button>
                      <Button variant="outline" className="justify-start text-white border-white/20 hover:bg-white/10">
                        MBA Specializations
                      </Button>
                      <Button variant="outline" className="justify-start text-white border-white/20 hover:bg-white/10">
                        Science & Humanities
                      </Button>
                      <Button variant="outline" className="justify-start text-white border-white/20 hover:bg-white/10">
                        Research Programs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
