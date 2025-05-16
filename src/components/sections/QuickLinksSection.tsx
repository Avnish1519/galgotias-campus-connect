
import React from 'react';
import { Link2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionCard from '@/components/SectionCard';
import { useNavigate } from 'react-router-dom';

const QuickLinksSection: React.FC = () => {
  const navigate = useNavigate();
  
  const links = [
    { name: 'Timetable', icon: '📅' },
    { name: 'Course Materials', icon: '📚' },
    { name: 'Exam Portal', icon: '📝' },
    { name: 'Email', icon: '📧' },
    { name: 'University ERP', icon: '💻' },
    { name: 'Academic Calendar', icon: '🗓️' }
  ];
  
  return (
    <SectionCard title="Quick Links" icon={Link2} color="bg-university-maroon">
      <div className="grid grid-cols-3 gap-2">
        {links.map((link, i) => (
          <Button 
            key={i} 
            variant="outline" 
            className="h-auto py-3 flex flex-col items-center justify-center gap-1 border-gray-200 hover:bg-gray-50"
          >
            <span className="text-xl">{link.icon}</span>
            <span className="text-xs text-center">{link.name}</span>
          </Button>
        ))}
      </div>
      
      <div className="mt-4">
        <Button 
          className="w-full bg-university-maroon hover:bg-university-maroon/90 flex justify-between items-center"
          onClick={() => navigate('/')}
        >
          All Resources
          <ChevronRight size={16} />
        </Button>
      </div>
    </SectionCard>
  );
};

export default QuickLinksSection;
