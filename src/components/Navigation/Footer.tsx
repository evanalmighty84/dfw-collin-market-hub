
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-realestate-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DFW Collin <span className="text-realestate-gold">Market Hub</span></h3>
            <p className="mb-4 text-gray-300">
              Your trusted source for real estate in the Dallas-Fort Worth and Collin County markets.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-realestate-gold transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://instagram.com" className="hover:text-realestate-gold transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://twitter.com" className="hover:text-realestate-gold transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="https://linkedin.com" className="hover:text-realestate-gold transition-colors" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-realestate-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-300 hover:text-realestate-gold transition-colors">Search Properties</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-realestate-gold transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-realestate-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/search?area=plano" className="text-gray-300 hover:text-realestate-gold transition-colors">Plano</Link>
              </li>
              <li>
                <Link to="/search?area=frisco" className="text-gray-300 hover:text-realestate-gold transition-colors">Frisco</Link>
              </li>
              <li>
                <Link to="/search?area=mckinney" className="text-gray-300 hover:text-realestate-gold transition-colors">McKinney</Link>
              </li>
              <li>
                <Link to="/search?area=dallas" className="text-gray-300 hover:text-realestate-gold transition-colors">Dallas</Link>
              </li>
              <li>
                <Link to="/search?area=allen" className="text-gray-300 hover:text-realestate-gold transition-colors">Allen</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-realestate-gold" />
                <span className="text-gray-300">
                  123 Main Street<br />
                  Plano, TX 75075
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-realestate-gold" />
                <a href="tel:+14695551234" className="text-gray-300 hover:text-realestate-gold transition-colors">
                  (469) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-realestate-gold" />
                <a href="mailto:info@dfwcollinmarkethub.com" className="text-gray-300 hover:text-realestate-gold transition-colors">
                  info@dfwcollinmarkethub.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} DFW Collin Market Hub. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy" className="text-gray-400 text-sm hover:text-realestate-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 text-sm hover:text-realestate-gold transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-gray-400 text-sm hover:text-realestate-gold transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
