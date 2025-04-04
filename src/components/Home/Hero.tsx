
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Search, MapPin } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}&type=${propertyType}`);
  };

  return (
    <div className="relative hero-gradient text-white">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Find Your Perfect Property in Dallas-Fort Worth & Collin County</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Connect with trusted buyers and sellers in North Texas's most desirable real estate markets
          </p>
          
          <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-md p-4 rounded-lg max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                <Input
                  type="text"
                  placeholder="City, ZIP, or Address"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/20 border-0 placeholder:text-white/70 text-white"
                />
              </div>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="rounded-md bg-white/20 border-0 text-white placeholder:text-white/70 p-2 outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="all" className="text-gray-800">All Properties</option>
                <option value="house" className="text-gray-800">Houses</option>
                <option value="condo" className="text-gray-800">Condos</option>
                <option value="land" className="text-gray-800">Land</option>
                <option value="commercial" className="text-gray-800">Commercial</option>
              </select>
              <Button type="submit" className="bg-realestate-gold hover:bg-realestate-gold/90 text-white flex items-center gap-2">
                <Search className="h-4 w-4" /> Search
              </Button>
            </div>
          </form>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-realestate-navy">Explore DFW Properties</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-realestate-navy">Collin County Listings</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
