import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Users, Code, Theater, Music, Pen, Briefcase, Handshake, Flag, Camera } from 'lucide-react';

interface ClubInfo {
  id: string;
  name: string;
  description: string;
  category: string;
  displayCategory: string;
  icon: React.ElementType;
}

const clubsData: ClubInfo[] = [
  // Technology & Innovation Clubs
  {
    id: "1",
    name: "TechnoJam",
    description: "A hub for tech enthusiasts and developers.",
    category: "technology",
    displayCategory: "Technology & Innovation",
    icon: Code
  },
  {
    id: "2",
    name: "Cyber Cell",
    description: "Focused on cybersecurity and ethical hacking.",
    category: "technology",
    displayCategory: "Technology & Innovation",
    icon: Code
  },
  {
    id: "3",
    name: "GRACE Club",
    description: "Galgotias Rising Association of Civil Engineers.",
    category: "technology",
    displayCategory: "Technology & Innovation",
    icon: Code
  },
  
  // Arts & Culture Clubs
  {
    id: "4",
    name: "Galgotias Dance Crew",
    description: "For students passionate about dance.",
    category: "arts",
    displayCategory: "Arts & Culture",
    icon: Music
  },
  {
    id: "5",
    name: "Artistico",
    description: "A creative space for artists and designers.",
    category: "arts",
    displayCategory: "Arts & Culture",
    icon: Pen
  },
  {
    id: "6",
    name: "Actors Hub",
    description: "A club dedicated to drama and theater.",
    category: "arts",
    displayCategory: "Arts & Culture",
    icon: Theater
  },
  
  // Literary & Communication Clubs
  {
    id: "7",
    name: "Quizzards",
    description: "A club for quiz lovers and knowledge seekers.",
    category: "literary",
    displayCategory: "Literary & Communication",
    icon: Pen
  },
  {
    id: "8",
    name: "LingoFreaks",
    description: "Focused on language learning and communication.",
    category: "literary",
    displayCategory: "Literary & Communication",
    icon: Pen
  },
  {
    id: "9",
    name: "G-Post",
    description: "A student-run journalism and media club.",
    category: "literary",
    displayCategory: "Literary & Communication",
    icon: Pen
  },
  
  // Business & Management Clubs
  {
    id: "10",
    name: "Business Club",
    description: "For students interested in entrepreneurship and management.",
    category: "business",
    displayCategory: "Business & Management",
    icon: Briefcase
  },
  {
    id: "11",
    name: "Marketing Club",
    description: "A space for marketing enthusiasts.",
    category: "business",
    displayCategory: "Business & Management",
    icon: Briefcase
  },
  
  // Social & Community Clubs
  {
    id: "12",
    name: "Humans of Galgotias",
    description: "A storytelling and community-building initiative.",
    category: "social",
    displayCategory: "Social & Community",
    icon: Handshake
  },
  {
    id: "13",
    name: "Humanity Saviours",
    description: "Focused on social service and humanitarian efforts.",
    category: "social",
    displayCategory: "Social & Community",
    icon: Handshake
  },
  {
    id: "14",
    name: "National Cadet Corps (NCC)",
    description: "Leadership and discipline training.",
    category: "social",
    displayCategory: "Social & Community",
    icon: Flag
  },
  
  // Other Notable Clubs
  {
    id: "15",
    name: "CamCircle",
    description: "Photography and videography club.",
    category: "other",
    displayCategory: "Other Notable Clubs",
    icon: Camera
  },
  {
    id: "16",
    name: "Panache",
    description: "A fashion and styling club.",
    category: "other",
    displayCategory: "Other Notable Clubs",
    icon: Users
  },
  {
    id: "17",
    name: "Noteveda",
    description: "A club dedicated to knowledge sharing.",
    category: "other",
    displayCategory: "Other Notable Clubs",
    icon: Users
  }
];

// Get unique categories for tabs
const uniqueCategories = Array.from(new Set(clubsData.map(club => club.category)));

const resources = [
  {
    id: "1",
    title: "Academic Support Services",
    description: "Access tutoring, writing help, and academic advising to excel in your studies.",
    link: "/academic-support"
  },
  {
    id: "2",
    title: "Career Development Center",
    description: "Get help with resume building, interview preparation, and job placement.",
    link: "/career-development"
  },
  {
    id: "3",
    title: "Health & Wellness Services",
    description: "Access medical care, counseling, and wellness programs to maintain your well-being.",
    link: "/health-wellness"
  },
  {
    id: "4",
    title: "Financial Aid Office",
    description: "Find information about scholarships, loans, and financial planning resources.",
    link: "/financial-aid"
  }
];

const StudentLife: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="relative bg-gradient-to-r from-university-navy to-university-navy/80 text-white py-16">
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl font-bold mb-4">Student Life & Resources</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Explore clubs, student organizations, and support services that empower you.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-12">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-university-navy mb-6">Clubs & Organizations</h2>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8 overflow-x-auto">
                <TabsTrigger value="all">All Clubs</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="arts">Arts & Culture</TabsTrigger>
                <TabsTrigger value="literary">Literary</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {clubsData.map(club => (
                    <ClubCard key={club.id} club={club} />
                  ))}
                </div>
              </TabsContent>
              
              {uniqueCategories.map(category => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clubsData
                      .filter(club => club.category === category)
                      .map(club => (
                        <ClubCard key={club.id} club={club} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-university-navy mb-6">Student Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map(resource => (
                <Card key={resource.id} className="hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full border-university-navy text-university-navy hover:bg-university-navy hover:text-white transition-colors"
                      asChild
                    >
                      <a href={resource.link}>Learn More</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

interface ClubCardProps {
  club: ClubInfo;
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  const { name, description, displayCategory, icon: Icon } = club;
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-200 group">
      <div className="bg-university-navy/10 group-hover:bg-university-navy/15 transition-colors p-4 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-university-navy/80 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon size={32} />
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-university-navy">{name}</CardTitle>
        <CardDescription className="text-xs uppercase font-medium text-university-gold">
          {displayCategory}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StudentLife;
