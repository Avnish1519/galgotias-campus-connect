
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface Update {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "academic" | "administrative" | "event" | "emergency" | "general";
  priority: "high" | "medium" | "low";
}

const updates: Update[] = [
  {
    id: "1",
    title: "End of Semester Exam Schedule Released",
    description: "The examination department has released the final exam schedule for the current semester. Students can view their personalized exam timetables on the student portal.",
    date: "May 15, 2025",
    category: "academic",
    priority: "high"
  },
  {
    id: "2",
    title: "Annual Research Symposium Registration Open",
    description: "Registration for the Annual Research Symposium is now open. Submit your research abstracts by June 30 to participate.",
    date: "May 14, 2025",
    category: "event",
    priority: "medium"
  },
  {
    id: "3",
    title: "Campus WiFi Maintenance Notice",
    description: "IT Services will be performing maintenance on the campus WiFi network on Saturday, May 20, from 2:00 AM to 5:00 AM. Expect intermittent connectivity during this period.",
    date: "May 12, 2025",
    category: "administrative",
    priority: "medium"
  },
  {
    id: "4",
    title: "New Scholarship Opportunity Announced",
    description: "The University has partnered with TechCorp to offer 10 full scholarships for computer science students. Applications are due by June 15.",
    date: "May 10, 2025",
    category: "academic",
    priority: "high"
  },
  {
    id: "5",
    title: "Weather Alert: Heavy Rain Expected",
    description: "The meteorological department has issued a heavy rain warning for the next 48 hours. Students are advised to take necessary precautions.",
    date: "May 8, 2025",
    category: "emergency",
    priority: "high"
  },
  {
    id: "6",
    title: "Library Extended Hours During Finals Week",
    description: "The university library will extend its operating hours during finals week, staying open until 2:00 AM from May 25 to June 5.",
    date: "May 5, 2025",
    category: "general",
    priority: "low"
  }
];

const Updates: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState<Record<string, boolean>>({
    academic: true,
    administrative: true,
    event: true,
    emergency: true,
    general: true
  });

  const toggleNotification = (category: string) => {
    setNotificationsEnabled(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-university-navy text-white';
      case 'administrative': return 'bg-blue-500 text-white';
      case 'event': return 'bg-purple-500 text-white';
      case 'emergency': return 'bg-red-500 text-white';
      case 'general': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="relative bg-university-navy text-white py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-university-navy to-university-navy/80 opacity-90"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl font-bold mb-4">Live Updates & Notifications</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Important announcements? No problem! Stay informed in real-time.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-university-navy mb-6 flex items-center gap-2">
                <Bell className="h-6 w-6 text-university-gold" /> Recent Updates
              </h2>
              
              <div className="space-y-6">
                {updates.map(update => (
                  <Card key={update.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className={`h-1 ${getPriorityColor(update.priority)}`}></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{update.title}</CardTitle>
                          <CardDescription>{update.date}</CardDescription>
                        </div>
                        <Badge className={getCategoryColor(update.category)}>
                          {update.category.charAt(0).toUpperCase() + update.category.slice(1)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{update.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-university-navy text-university-navy hover:bg-university-navy/10">
                  View All Updates
                </Button>
              </div>
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Customize which updates you receive notifications for</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="academic">Academic Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Exams, assignments, and course information
                      </p>
                    </div>
                    <Switch 
                      id="academic" 
                      checked={notificationsEnabled.academic}
                      onCheckedChange={() => toggleNotification('academic')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="administrative">Administrative</Label>
                      <p className="text-sm text-muted-foreground">
                        Fee payments, document requests, and registration
                      </p>
                    </div>
                    <Switch 
                      id="administrative" 
                      checked={notificationsEnabled.administrative}
                      onCheckedChange={() => toggleNotification('administrative')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="event">Events</Label>
                      <p className="text-sm text-muted-foreground">
                        Festivals, conferences, and campus activities
                      </p>
                    </div>
                    <Switch 
                      id="event" 
                      checked={notificationsEnabled.event}
                      onCheckedChange={() => toggleNotification('event')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="emergency">Emergency Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Critical safety and security information
                      </p>
                    </div>
                    <Switch 
                      id="emergency" 
                      checked={notificationsEnabled.emergency}
                      onCheckedChange={() => toggleNotification('emergency')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="general">General Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Campus news and miscellaneous information
                      </p>
                    </div>
                    <Switch 
                      id="general" 
                      checked={notificationsEnabled.general}
                      onCheckedChange={() => toggleNotification('general')}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Updates;
