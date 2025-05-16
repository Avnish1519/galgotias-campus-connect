
import React from 'react';
import { User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import SectionCard from '@/components/SectionCard';
import { useNavigate } from 'react-router-dom';

const ProfileSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <SectionCard title="Your Profile" icon={User} color="bg-[#0EA5E9]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xl font-bold">
          SG
        </div>
        <div>
          <div className="font-bold">Student Name</div>
          <div className="text-sm text-gray-500">Computer Science, Year 3</div>
          <div className="text-xs text-gray-400">ID: GU2022CS123</div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Registration Status</span>
            <span className="font-medium text-green-600">Complete</span>
          </div>
          <Progress value={100} className="h-2 bg-gray-100" />
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Course Progress</span>
            <span className="font-medium">75%</span>
          </div>
          <Progress value={75} className="h-2 bg-gray-100" />
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Assignments</span>
            <span className="font-medium text-amber-600">2 Due</span>
          </div>
          <Progress value={60} className="h-2 bg-gray-100" />
        </div>
      </div>
      
      <div className="mt-4">
        <Button 
          className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 flex justify-between items-center"
          onClick={() => navigate('/profile')}
        >
          Edit Profile
          <ChevronRight size={16} />
        </Button>
      </div>
    </SectionCard>
  );
};

export default ProfileSection;
