
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionCard from '@/components/SectionCard';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const FeedbackSection: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = () => {
    if (!feedback.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter some feedback.',
        variant: 'destructive'
      });
      return;
    }
    
    toast({
      title: 'Feedback Submitted',
      description: 'Thank you for your feedback!',
    });
    
    setFeedback('');
  };
  
  return (
    <SectionCard title="Feedback & Support" icon={MessageSquare} color="bg-university-gold">
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Have a suggestion or facing an issue? Let us know and we'll help you out!
        </p>
        
        <Textarea 
          placeholder="Type your feedback or question here..."
          className="resize-none border-gray-200"
          rows={3}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        
        <Button 
          className="w-full bg-university-gold text-university-navy hover:bg-university-gold/90"
          onClick={handleSubmit}
        >
          Submit Feedback
        </Button>
      </div>
    </SectionCard>
  );
};

export default FeedbackSection;
