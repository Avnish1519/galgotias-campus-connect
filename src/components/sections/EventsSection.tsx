
import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionCard from '@/components/SectionCard';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const EventsSection: React.FC = () => {
  const navigate = useNavigate();
  
  const events = [
    {
      title: 'Annual Tech Fest',
      date: 'Jun 15-17',
      type: 'Technical'
    },
    {
      title: 'Career Expo',
      date: 'Jul 8',
      type: 'Career'
    },
    {
      title: 'Cultural Night',
      date: 'Aug 20',
      type: 'Cultural'
    }
  ];
  
  return (
    <SectionCard title="Upcoming Events" icon={Calendar} color="bg-[#7E69AB]">
      <div className="space-y-3">
        {events.map((event, i) => (
          <div key={i} className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
            <div>
              <div className="font-medium">{event.title}</div>
              <div className="text-xs text-gray-500">{event.date}</div>
            </div>
            <Badge className="bg-university-navy">{event.type}</Badge>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <Button 
          className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90 flex justify-between items-center"
          onClick={() => navigate('/events')}
        >
          See All Events
          <ChevronRight size={16} />
        </Button>
      </div>
    </SectionCard>
  );
};

export default EventsSection;
