
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Annual Tech Fest',
    date: 'June 15-17, 2025',
    location: 'Main Auditorium',
    description: 'Join us for three days of innovation, competition, and technology showcases at our flagship tech event.'
  },
  {
    id: '2',
    title: 'Career Expo',
    date: 'July 8, 2025',
    location: 'Convention Center',
    description: 'Connect with top employers and explore career opportunities across multiple industries.'
  },
  {
    id: '3',
    title: 'Cultural Night',
    date: 'August 20, 2025',
    location: 'Outdoor Amphitheater',
    description: 'Experience the diversity of our university community through music, dance, and artistic performances.'
  }
];

const EventsPreview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">Upcoming Events</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay connected with the latest happenings and never miss an opportunity to engage with our vibrant campus community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map(event => (
            <Card key={event.id} className="hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-university-gold overflow-hidden">
              <CardHeader className="bg-university-navy text-white pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <Calendar className="h-5 w-5" />
                </div>
                <CardDescription className="text-white/80">{event.date} • {event.location}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-university-gold text-university-navy hover:bg-university-gold/90">
                  RSVP Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="border-university-navy text-university-navy hover:bg-university-navy/10">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
