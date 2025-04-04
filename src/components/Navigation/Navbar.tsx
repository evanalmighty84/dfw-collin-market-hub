
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Search, 
  HelpCircle, 
  User, 
  Menu, 
  X,
  MapPin 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-realestate-navy" />
            <span className="text-xl font-bold text-realestate-navy">DFW Collin <span className="text-realestate-gold">Market Hub</span></span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-realestate-navy hover:text-realestate-gold transition-colors flex items-center gap-1">
              <Home className="h-4 w-4" /> Home
            </Link>
            <Link to="/search" className="text-realestate-navy hover:text-realestate-gold transition-colors flex items-center gap-1">
              <Search className="h-4 w-4" /> Search
            </Link>
            <Link to="/resources" className="text-realestate-navy hover:text-realestate-gold transition-colors flex items-center gap-1">
              <HelpCircle className="h-4 w-4" /> Resources
            </Link>
            <Link to="/contact" className="text-realestate-navy hover:text-realestate-gold transition-colors flex items-center gap-1">
              <User className="h-4 w-4" /> Contact
            </Link>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-realestate-gold hover:bg-realestate-gold/90 text-white">List Your Property</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-realestate-navy">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-realestate-navy hover:text-realestate-gold transition-colors p-2 flex items-center gap-2" onClick={toggleMenu}>
                <Home className="h-5 w-5" /> Home
              </Link>
              <Link to="/search" className="text-realestate-navy hover:text-realestate-gold transition-colors p-2 flex items-center gap-2" onClick={toggleMenu}>
                <Search className="h-5 w-5" /> Search
              </Link>
              <Link to="/resources" className="text-realestate-navy hover:text-realestate-gold transition-colors p-2 flex items-center gap-2" onClick={toggleMenu}>
                <HelpCircle className="h-5 w-5" /> Resources
              </Link>
              <Link to="/contact" className="text-realestate-navy hover:text-realestate-gold transition-colors p-2 flex items-center gap-2" onClick={toggleMenu}>
                <User className="h-5 w-5" /> Contact
              </Link>
              <Button className="bg-realestate-gold hover:bg-realestate-gold/90 text-white w-full">List Your Property</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
