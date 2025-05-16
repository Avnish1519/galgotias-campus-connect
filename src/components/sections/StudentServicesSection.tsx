
import React from 'react';
import { Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionCard from '@/components/SectionCard';
import { useNavigate } from 'react-router-dom';

const StudentServicesSection: React.FC = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      name: 'Student Council',
      description: 'Voice of the students'
    },
    {
      name: 'Career Services',
      description: 'Placements & internships'
    },
    {
      name: 'Academic Support',
      description: 'Tutoring & resources'
    }
  ];
  
  return (
    <SectionCard title="Student Services" icon={Users} color="bg-[#F97316]">
      <div className="space-y-3">
        {services.map((service, i) => (
          <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              {service.name.charAt(0)}
            </div>
            <div>
              <div className="font-medium">{service.name}</div>
              <div className="text-xs text-gray-500">{service.description}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <Button 
          className="w-full bg-[#F97316] hover:bg-[#F97316]/90 flex justify-between items-center"
          onClick={() => navigate('/student-life')}
        >
          Explore Services
          <ChevronRight size={16} />
        </Button>
      </div>
    </SectionCard>
  );
};

export default StudentServicesSection;
