
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, buttonText, onClick }) => {
  return (
    <Card className="feature-card relative group overflow-hidden border-2 border-gray-800 hover:border-university-gold/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-university-navy/30 via-transparent to-university-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader>
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 rounded-full bg-university-gold/20 text-university-gold group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} />
          </div>
        </div>
        <CardTitle className="text-xl text-university-gold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-gray-300">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          variant="default" 
          className="bg-university-navy hover:bg-university-navy/90 group-hover:bg-university-gold group-hover:text-university-navy transition-colors duration-300" 
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
