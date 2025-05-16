
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
    <Card className="feature-card">
      <CardHeader>
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 rounded-full bg-university-gold/20 text-university-navy">
            <Icon size={24} />
          </div>
        </div>
        <CardTitle className="text-xl text-university-navy text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="default" className="bg-university-navy hover:bg-university-navy/90" onClick={onClick}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
