
import React from 'react';
import { MapPin, ChevronRight, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionCard from '@/components/SectionCard';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const CampusMapSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <SectionCard title="Interactive Campus Map" icon={MapPin} color="bg-university-navy">
      <div className="h-40 bg-gray-200 mb-4 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/3e0d8602-5863-415b-b013-2dd033dc3f53.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute top-2 right-2">
          <Badge variant="default" className="bg-university-gold text-university-navy">You are here</Badge>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="h-8 w-8 rounded-full bg-university-gold animate-ping absolute inset-0 opacity-75"></div>
            <MapPin size={40} className="text-university-navy relative z-10" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-4">
        <Button variant="outline" size="sm" className="text-xs flex items-center justify-center">
          <MapPin className="h-3 w-3 mr-1" />
          Library
        </Button>
        <Button variant="outline" size="sm" className="text-xs flex items-center justify-center">
          <MapPin className="h-3 w-3 mr-1" />
          Cafeteria
        </Button>
        <Button variant="outline" size="sm" className="text-xs flex items-center justify-center">
          <MapPin className="h-3 w-3 mr-1" />
          Admin Block
        </Button>
        <Button variant="outline" size="sm" className="text-xs flex items-center justify-center">
          <MapPin className="h-3 w-3 mr-1" />
          Sports Complex
        </Button>
      </div>
      
      <Button 
        className="w-full bg-university-gold text-university-navy hover:bg-university-gold/90 flex justify-between items-center"
        onClick={() => navigate('/campus')}
      >
        <div className="flex items-center">
          <Navigation size={16} className="mr-2" />
          View Full Map
        </div>
        <ChevronRight size={16} />
      </Button>
    </SectionCard>
  );
};

export default CampusMapSection;
