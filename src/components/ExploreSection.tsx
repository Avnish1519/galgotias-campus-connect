
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Home, Users, Building, Award, Calendar } from 'lucide-react';

interface ExploreCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ icon, title, description, color, delay }) => {
  return (
    <motion.div
      className="rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8 }}
    >
      <div 
        className={`${color} p-6 flex flex-col items-center text-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div
          className="relative z-10 mb-4 p-4 bg-white/20 rounded-full"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-bold text-white relative z-10">{title}</h3>
        
        <div className="h-1.5 w-12 bg-white/30 rounded-full mt-3 mb-3 group-hover:w-24 transition-all duration-500 relative z-10" />
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 text-sm">{description}</p>
        <button className="mt-4 text-sm font-medium text-university-navy hover:text-university-gold transition-colors">
          Explore More →
        </button>
      </div>
    </motion.div>
  );
};

const ExploreSection: React.FC = () => {
  const exploreItems = [
    {
      icon: <GraduationCap size={28} className="text-white" />,
      title: "Admissions",
      description: "Learn about eligibility criteria, available courses, and counseling support for prospective students.",
      color: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      icon: <Award size={28} className="text-white" />,
      title: "Academics",
      description: "Access syllabus details, faculty information, timetables, and online learning resources.",
      color: "bg-gradient-to-br from-red-600 to-red-800"
    },
    {
      icon: <Home size={28} className="text-white" />,
      title: "Hostel & Campus",
      description: "Discover hostel accommodations, dining options, campus facilities, and student events.",
      color: "bg-gradient-to-br from-green-600 to-green-800"
    },
    {
      icon: <Users size={28} className="text-white" />,
      title: "Student Clubs",
      description: "Explore technical groups, cultural societies, sports teams, and extracurricular activities.",
      color: "bg-gradient-to-br from-purple-600 to-purple-800"
    },
    {
      icon: <Building size={28} className="text-white" />,
      title: "Placements",
      description: "Review past placement records, internship opportunities, and career training programs.",
      color: "bg-gradient-to-br from-amber-600 to-amber-800"
    },
    {
      icon: <Calendar size={28} className="text-white" />,
      title: "Events",
      description: "Stay updated on upcoming fests, tech meets, guest lectures, and campus celebrations.",
      color: "bg-gradient-to-br from-cyan-600 to-cyan-800"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50" id="explore">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-university-navy mb-4">
            Explore University <span className="text-university-gold">Resources</span>
          </h2>
          <div className="h-1 w-20 bg-university-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to navigate your academic journey at Galgotias University,
            from admissions to placements, all in one place.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreItems.map((item, index) => (
            <ExploreCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color={item.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
