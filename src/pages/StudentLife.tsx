
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

interface ClubOrganization {
  id: string;
  name: string;
  description: string;
  category: "academic" | "cultural" | "sports" | "professional" | "service";
  members: number;
  image: string;
}

const clubsOrganizations: ClubOrganization[] = [
  {
    id: "1",
    name: "Coding Club",
    description: "Develop software skills through workshops, hackathons, and collaborative projects.",
    category: "academic",
    members: 120,
    image: "placeholder.svg"
  },
  {
    id: "2",
    name: "Dance Society",
    description: "Express yourself through various dance forms and perform at university events.",
    category: "cultural",
    members: 85,
    image: "placeholder.svg"
  },
  {
    id: "3",
    name: "Cricket Team",
    description: "Represent Galgotias in inter-university cricket tournaments and championships.",
    category: "sports",
    members: 30,
    image: "placeholder.svg"
  },
  {
    id: "4",
    name: "Business Club",
    description: "Network with industry professionals and develop entrepreneurial skills.",
    category: "professional",
    members: 75,
    image: "placeholder.svg"
  },
  {
    id: "5",
    name: "Community Outreach",
    description: "Engage in social service projects and make a positive impact in local communities.",
    category: "service",
    members: 60,
    image: "placeholder.svg"
  },
  {
    id: "6",
    name: "Robotics Club",
    description: "Design and build robots for competitions and research projects.",
    category: "academic",
    members: 45,
    image: "placeholder.svg"
  },
  {
    id: "7",
    name: "Music Society",
    description: "Showcase your musical talents and perform at university events.",
    category: "cultural",
    members: 70,
    image: "placeholder.svg"
  },
  {
    id: "8",
    name: "Badminton Club",
    description: "Join practice sessions and compete in inter-university badminton tournaments.",
    category: "sports",
    members: 40,
    image: "placeholder.svg"
  }
];

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
      <div className="pt-20 pb-16">
        <div className="relative bg-university-navy text-white py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-university-navy to-university-navy/80 opacity-90"></div>
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
              <TabsList className="grid w-full grid-cols-6 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="cultural">Cultural</TabsTrigger>
                <TabsTrigger value="sports">Sports</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="service">Service</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {clubsOrganizations.map(club => (
                    <ClubCard key={club.id} club={club} />
                  ))}
                </div>
              </TabsContent>
              
              {["academic", "cultural", "sports", "professional", "service"].map(category => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {clubsOrganizations
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
                <Card key={resource.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full border-university-navy text-university-navy hover:bg-university-navy/10"
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
  club: ClubOrganization;
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="h-40 bg-gray-200 relative">
        <img 
          src={club.image} 
          alt={club.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-university-navy text-white px-2 py-1 text-sm font-medium flex items-center gap-1 rounded-tl-md">
          <Users className="h-4 w-4" /> {club.members}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{club.name}</CardTitle>
        <CardDescription className="text-xs uppercase font-medium">{club.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 text-sm">{club.description}</p>
      </CardContent>
    </Card>
  );
};

export default StudentLife;
