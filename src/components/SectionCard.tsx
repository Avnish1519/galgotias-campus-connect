
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  children: React.ReactNode;
  className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ 
  title, 
  icon: Icon, 
  color, 
  children, 
  className = "" 
}) => {
  return (
    <Card className={`border-0 overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] ${className}`}>
      <CardHeader className={`${color} text-white p-4 flex flex-row items-center justify-between`}>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Icon size={22} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-white p-5">
        {children}
      </CardContent>
    </Card>
  );
};

export default SectionCard;
