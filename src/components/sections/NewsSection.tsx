
import React from 'react';
import { Newspaper, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionCard from '@/components/SectionCard';
import { useNavigate } from 'react-router-dom';

const NewsSection: React.FC = () => {
  const navigate = useNavigate();
  
  const news = [
    {
      title: 'University Ranks #1 in Innovation',
      preview: 'Galgotias University tops the charts in the annual innovation rankings...'
    },
    {
      title: 'Student Wins International Hackathon',
      preview: 'Computer Science student Priya Sharma leads team to victory...'
    }
  ];
  
  return (
    <SectionCard title="News & Highlights" icon={Newspaper} color="bg-[#1EAEDB]">
      <div className="space-y-4">
        {news.map((item, i) => (
          <div key={i} className="hover:bg-gray-50 rounded-lg p-2 transition-colors">
            <h3 className="font-bold text-university-navy">{item.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{item.preview}</p>
            <Button variant="link" className="text-xs p-0 h-auto mt-1 text-[#1EAEDB]">
              Read more
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <Button 
          className="w-full bg-[#1EAEDB] hover:bg-[#1EAEDB]/90 flex justify-between items-center"
          onClick={() => navigate('/updates')}
        >
          More News
          <ChevronRight size={16} />
        </Button>
      </div>
    </SectionCard>
  );
};

export default NewsSection;
