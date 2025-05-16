
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-university-navy/90 backdrop-blur-md px-4 md:px-6 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl text-university-gold">Galgotias</span>
          <span className="font-semibold text-lg md:text-xl text-white">University</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/campus" className="nav-link">Campus</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/student-life" className="nav-link">Student Life</Link>
          <Link to="/updates" className="nav-link">Updates</Link>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" className="hidden md:inline-flex text-white border-white hover:bg-white/10">Sign In</Button>
          <Button className="bg-university-gold text-university-navy hover:bg-university-gold/90">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
