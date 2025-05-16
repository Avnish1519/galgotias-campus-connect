
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Compass } from 'lucide-react';
import GoogleMap from '@/components/GoogleMap';

const Campus: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="relative bg-university-navy text-white py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-university-navy to-university-navy/80 opacity-90"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl font-bold mb-4">Campus Navigation</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Never feel lost! Find your way to libraries, labs, food spots, and more.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Google Maps Component */}
              <GoogleMap />
              
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mt-6">
                <h2 className="text-2xl font-bold text-university-navy mb-4">Explore Our Campus</h2>
                <p className="text-gray-700 mb-6">
                  Our sprawling campus features state-of-the-art facilities, beautiful green spaces, and everything you need for a comprehensive 
                  educational experience. Navigate easily between academic buildings, residential areas, recreational facilities, and more.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="bg-university-navy hover:bg-university-navy/90 flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" /> View Building Directory
                  </Button>
                  <Button variant="outline" className="border-university-navy text-university-navy hover:bg-university-navy/10">
                    <Navigation className="h-4 w-4 mr-2" /> Download Campus Map
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-university-navy mb-4">Key Locations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-university-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Main Academic Building</h4>
                      <p className="text-sm text-gray-600">Classrooms, faculty offices, and administrative services</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-university-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">University Library</h4>
                      <p className="text-sm text-gray-600">Study spaces, research materials, and digital resources</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-university-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Student Center</h4>
                      <p className="text-sm text-gray-600">Dining options, recreation areas, and student services</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-university-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Sports Complex</h4>
                      <p className="text-sm text-gray-600">Gymnasium, swimming pool, and outdoor fields</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-university-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Hostels & Residences</h4>
                      <p className="text-sm text-gray-600">On-campus accommodation for students</p>
                    </div>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold text-university-navy mb-4">Navigation Tips</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="bg-university-gold/20 rounded-full h-6 w-6 flex items-center justify-center text-university-navy font-bold flex-shrink-0">1</div>
                    <p>Use building codes posted at entrances to identify your location</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-university-gold/20 rounded-full h-6 w-6 flex items-center justify-center text-university-navy font-bold flex-shrink-0">2</div>
                    <p>Follow colored pathway indicators for the fastest routes</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-university-gold/20 rounded-full h-6 w-6 flex items-center justify-center text-university-navy font-bold flex-shrink-0">3</div>
                    <p>Information kiosks are available at major intersections</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-university-gold/20 rounded-full h-6 w-6 flex items-center justify-center text-university-navy font-bold flex-shrink-0">4</div>
                    <p>Download the campus app for real-time navigation assistance</p>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-university-gold/10">
                <h3 className="text-xl font-bold text-university-navy mb-3 flex items-center gap-2">
                  <Compass className="h-5 w-5" />
                  Map Legend
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-university-gold"></div>
                    <span className="text-sm">Main Campus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#0EA5E9]"></div>
                    <span className="text-sm">Academic Buildings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#F97316]"></div>
                    <span className="text-sm">Facilities & Services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#8B5CF6]"></div>
                    <span className="text-sm">Recreation Areas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#D946EF]"></div>
                    <span className="text-sm">Administrative Buildings</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Campus;
