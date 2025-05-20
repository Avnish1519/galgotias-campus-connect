
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/3e0d8602-5863-415b-b013-2dd033dc3f53.png" 
            alt="Galgotias Logo" 
            className="h-10 w-10 rounded-full"
          />
          <span className={`font-bold text-xl md:text-2xl ${scrolled ? 'text-university-gold' : 'text-university-gold'}`}>
            Galgotias
          </span>
          <span className={`font-semibold text-lg md:text-xl ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            University
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/explore" active={location.pathname === '/explore'}>Explore</NavLink>
          <NavLink to="/events" active={location.pathname === '/events'}>Events</NavLink>
          <NavLink to="/student-life" active={location.pathname === '/student-life'}>Student Life</NavLink>
          <NavLink to="/updates" active={location.pathname === '/updates'}>Updates</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className={`hidden md:inline-flex ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-800 hover:bg-gray-100'}`}
          >
            Sign In
          </Button>
          <Button 
            className="bg-university-gold text-university-navy hover:bg-university-gold/90 shadow-sm"
          >
            Get Started
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className={`md:hidden ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-800 hover:bg-gray-100'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-white py-4 px-6 flex flex-col space-y-4 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/" className="text-gray-800 hover:text-university-gold py-2 px-4 rounded-md hover:bg-gray-50 transition-colors block">Home</Link>
          <Link to="/explore" className="text-gray-800 hover:text-university-gold py-2 px-4 rounded-md hover:bg-gray-50 transition-colors block">Explore</Link>
          <Link to="/events" className="text-gray-800 hover:text-university-gold py-2 px-4 rounded-md hover:bg-gray-50 transition-colors block">Events</Link>
          <Link to="/student-life" className="text-gray-800 hover:text-university-gold py-2 px-4 rounded-md hover:bg-gray-50 transition-colors block">Student Life</Link>
          <Link to="/updates" className="text-gray-800 hover:text-university-gold py-2 px-4 rounded-md hover:bg-gray-50 transition-colors block">Updates</Link>
          <Button variant="outline" className="w-full text-gray-800 border-gray-200 hover:bg-gray-50">Sign In</Button>
        </motion.div>
      )}
    </nav>
  );
};

// NavLink component with active state styling
const NavLink: React.FC<{ to: string; active: boolean; children: React.ReactNode }> = ({ 
  to, 
  active, 
  children 
}) => {
  return (
    <Link 
      to={to} 
      className={`relative font-medium transition-colors duration-200 ${
        active 
          ? 'text-university-gold' 
          : 'text-gray-700 hover:text-university-gold'
      }`}
    >
      {children}
      {active && (
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-0.5 bg-university-gold"
          layoutId="navbar-indicator"
          transition={{ type: 'spring', duration: 0.5 }}
        />
      )}
    </Link>
  );
};

export default Navbar;
