
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: "academic" | "cultural" | "sports" | "career";
}

const events: Event[] = [
  {
    id: '1',
    title: 'Annual Tech Fest',
    date: 'June 15-17, 2025',
    location: 'Main Auditorium',
    description: 'Join us for three days of innovation, competition, and technology showcases at our flagship tech event.',
    category: 'academic'
  },
  {
    id: '2',
    title: 'Career Expo',
    date: 'July 8, 2025',
    location: 'Convention Center',
    description: 'Connect with top employers and explore career opportunities across multiple industries.',
    category: 'career'
  },
  {
    id: '3',
    title: 'Cultural Night',
    date: 'August 20, 2025',
    location: 'Outdoor Amphitheater',
    description: 'Experience the diversity of our university community through music, dance, and artistic performances.',
    category: 'cultural'
  },
  {
    id: '4',
    title: 'Research Symposium',
    date: 'September 5-6, 2025',
    location: 'Research Center',
    description: 'Showcase of groundbreaking research from various departments across the university.',
    category: 'academic'
  },
  {
    id: '5',
    title: 'Sports Tournament',
    date: 'October 12-15, 2025',
    location: 'Sports Complex',
    description: 'Inter-university sports competition featuring basketball, cricket, football, and more.',
    category: 'sports'
  },
  {
    id: '6',
    title: 'Alumni Homecoming',
    date: 'November 25, 2025',
    location: 'University Grounds',
    description: 'Welcome back our graduates for a day of networking, reminiscing, and celebrating achievements.',
    category: 'cultural'
  },
];

const Events: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="relative bg-university-navy text-white py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-university-navy to-university-navy/80 opacity-90"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl font-bold mb-4">Upcoming Events & Workshops</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Stay updated on cultural fests, hackathons, and academic seminars—your calendar, your experience.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="academic" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events
                  .filter(event => event.category === 'academic')
                  .map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cultural" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events
                  .filter(event => event.category === 'cultural')
                  .map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sports" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events
                  .filter(event => event.category === 'sports')
                  .map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="career" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events
                  .filter(event => event.category === 'career')
                  .map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-university-gold overflow-hidden h-full flex flex-col">
      <CardHeader className="bg-university-navy text-white pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{event.title}</CardTitle>
          <Calendar className="h-5 w-5" />
        </div>
        <CardDescription className="text-white/80">{event.date} • {event.location}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <p className="text-gray-700">{event.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-university-gold text-university-navy hover:bg-university-gold/90">
          RSVP Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Events;
