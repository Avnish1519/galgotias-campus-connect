
import React from 'react';
import { Bell, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionCard from '@/components/SectionCard';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const AlertsSection: React.FC = () => {
  const navigate = useNavigate();
  
  const alerts = [
    {
      message: 'Semester registration deadline tomorrow',
      time: '2 hours ago',
      priority: 'Urgent'
    },
    {
      message: 'Library closed for maintenance',
      time: '5 hours ago',
      priority: 'Info'
    },
    {
      message: 'New scholarship opportunities available',
      time: '1 day ago',
      priority: 'Important'
    }
  ];
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent':
        return 'bg-red-500';
      case 'Important':
        return 'bg-amber-500';
      default:
        return 'bg-blue-500';
    }
  };
  
  return (
    <SectionCard title="Live Alerts" icon={Bell} color="bg-[#D946EF]">
      <div className="space-y-3">
        {alerts.map((alert, i) => (
          <div key={i} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start mb-1">
              <span className="text-sm font-medium">{alert.message}</span>
              <Badge className={`${getPriorityColor(alert.priority)} text-white text-xs`}>
                {alert.priority}
              </Badge>
            </div>
            <div className="text-xs text-gray-400">{alert.time}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <Button 
          className="w-full bg-[#D946EF] hover:bg-[#D946EF]/90 flex justify-between items-center"
          onClick={() => navigate('/updates')}
        >
          View All Alerts
          <ChevronRight size={16} />
        </Button>
      </div>
    </SectionCard>
  );
};

export default AlertsSection;
