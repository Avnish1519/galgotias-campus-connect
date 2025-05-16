
import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
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
        <MapPin size={40} className="text-university-navy" />
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-4">
        <Button variant="outline" size="sm" className="text-xs">Library</Button>
        <Button variant="outline" size="sm" className="text-xs">Cafeteria</Button>
        <Button variant="outline" size="sm" className="text-xs">Admin Block</Button>
        <Button variant="outline" size="sm" className="text-xs">Sports Complex</Button>
      </div>
      
      <Button 
        className="w-full bg-university-gold text-university-navy hover:bg-university-gold/90 flex justify-between items-center"
        onClick={() => navigate('/campus')}
      >
        View Full Map
        <ChevronRight size={16} />
      </Button>
    </SectionCard>
  );
};

export default CampusMapSection;
