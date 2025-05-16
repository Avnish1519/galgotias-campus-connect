
import React from 'react';
import { MapPin, ChevronRight, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionCard from '@/components/SectionCard';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const CampusMapSection: React.FC = () => {
  const navigate = useNavigate();
  
  const blocks = [
    { name: "Block A", type: "Academic" },
    { name: "Block B", type: "Administrative" },
    { name: "Block C", type: "Labs" },
    { name: "Block D", type: "Lecture Halls" },
    { name: "AI&DS Block", type: "New", highlight: true }
  ];
  
  return (
    <SectionCard title="Interactive Campus Map" icon={MapPin} color="bg-university-navy">
      <div className="h-40 bg-gray-200 mb-4 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/3e0d8602-5863-415b-b013-2dd033dc3f53.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute top-2 right-2">
          <Badge variant="default" className="bg-university-gold text-university-navy">You are here</Badge>
        </div>
        
        {/* Campus blocks visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-1 scale-75">
            {blocks.map((block, index) => (
              <div 
                key={index} 
                className={`h-12 w-12 rounded flex items-center justify-center text-xs font-bold border-2 
                  ${block.highlight 
                    ? 'bg-university-gold/70 border-university-navy text-university-navy animate-pulse' 
                    : 'bg-gray-100/70 border-gray-400 text-gray-700'
                  }`}
              >
                {block.name.split(' ')[0]}
                {block.name.includes('AI') && <span className="text-[8px] block">AI&DS</span>}
              </div>
            ))}
            <div className="h-12 w-12 rounded flex items-center justify-center text-xs font-bold bg-green-500/70 border-2 border-green-700 text-white">
              Library
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-2 left-2 right-2">
          <div className="text-xs bg-black/50 text-white p-1 rounded">
            <div className="flex justify-between items-center">
              <span>AI&DS Block - Newest Addition</span>
              <span className="text-university-gold font-bold">→</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        <Button variant="outline" size="sm" className="text-xs flex items-center justify-center">
          <MapPin className="h-3 w-3 mr-1" />
          Block A
        </Button>
        <Button variant="outline" size="sm" className="text-xs flex items-center justify-center">
          <MapPin className="h-3 w-3 mr-1" />
          Block B
        </Button>
        <Button variant="outline" size="sm" className="text-xs flex items-center justify-center">
          <MapPin className="h-3 w-3 mr-1" />
          Block C
        </Button>
        <Button variant="outline" size="sm" className="text-xs flex items-center justify-center">
          <MapPin className="h-3 w-3 mr-1" />
          Block D
        </Button>
        <Button variant="outline" size="sm" className="text-xs flex items-center justify-center bg-university-gold/20 border-university-gold">
          <MapPin className="h-3 w-3 mr-1" />
          AI&DS
        </Button>
        <Button variant="outline" size="sm" className="text-xs flex items-center justify-center bg-green-500/20 border-green-600">
          <MapPin className="h-3 w-3 mr-1" />
          Library
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
