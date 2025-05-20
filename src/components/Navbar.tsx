
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-university-navy/90 backdrop-blur-md px-4 md:px-6 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/3e0d8602-5863-415b-b013-2dd033dc3f53.png" 
            alt="Galgotias Logo" 
            className="h-10 w-10 rounded-full border-2 border-university-gold"
          />
          <span className="font-bold text-xl md:text-2xl text-university-gold">Galgotias</span>
          <span className="font-semibold text-lg md:text-xl text-white">University</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-university-gold transition-colors">Home</Link>
          <Link to="/campus" className="text-white hover:text-university-gold transition-colors">Campus</Link>
          <Link to="/events" className="text-white hover:text-university-gold transition-colors">Events</Link>
          <Link to="/student-life" className="text-white hover:text-university-gold transition-colors">Student Life</Link>
          <Link to="/updates" className="text-white hover:text-university-gold transition-colors">Updates</Link>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" className="hidden md:inline-flex text-white border-white hover:bg-white/10 border-2">Sign In</Button>
          <Button className="bg-university-gold text-university-navy hover:bg-university-gold/90 shadow-md">Get Started</Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-university-navy/95 backdrop-blur-md py-4 px-4 flex flex-col space-y-4 shadow-lg animate-fade-in">
          <Link to="/" className="text-white hover:text-university-gold py-2 px-4 rounded-md hover:bg-white/5 transition-colors block">Home</Link>
          <Link to="/campus" className="text-white hover:text-university-gold py-2 px-4 rounded-md hover:bg-white/5 transition-colors block">Campus</Link>
          <Link to="/events" className="text-white hover:text-university-gold py-2 px-4 rounded-md hover:bg-white/5 transition-colors block">Events</Link>
          <Link to="/student-life" className="text-white hover:text-university-gold py-2 px-4 rounded-md hover:bg-white/5 transition-colors block">Student Life</Link>
          <Link to="/updates" className="text-white hover:text-university-gold py-2 px-4 rounded-md hover:bg-white/5 transition-colors block">Updates</Link>
          <Button variant="outline" className="w-full text-white border-white hover:bg-white/10 border-2">Sign In</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
