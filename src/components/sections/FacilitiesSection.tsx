
import React from 'react';
import { Building, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionCard from '@/components/SectionCard';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const FacilitiesSection: React.FC = () => {
  const navigate = useNavigate();
  
  const facilities = [
    {
      name: 'Central Library',
      hours: '8:00 AM - 10:00 PM',
      status: 'Open'
    },
    {
      name: 'Computer Labs',
      hours: '9:00 AM - 7:00 PM',
      status: 'Open'
    },
    {
      name: 'Sports Complex',
      hours: '6:00 AM - 9:00 PM',
      status: 'Maintenance'
    }
  ];
  
  return (
    <SectionCard title="Campus Facilities" icon={Building} color="bg-[#8B5CF6]">
      <div className="space-y-3">
        {facilities.map((facility, i) => (
          <div key={i} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{facility.name}</span>
              <Badge className={facility.status === 'Open' ? 'bg-green-500' : 'bg-amber-500'}>
                {facility.status}
              </Badge>
            </div>
            <div className="text-xs text-gray-500">{facility.hours}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <Button 
          className="w-full bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 flex justify-between items-center"
          onClick={() => navigate('/campus')}
        >
          View All Facilities
          <ChevronRight size={16} />
        </Button>
      </div>
    </SectionCard>
  );
};

export default FacilitiesSection;
