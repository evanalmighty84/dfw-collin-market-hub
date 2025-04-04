
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Expand, Star } from 'lucide-react';

// Mock data for featured properties
const featuredProperties = [
  {
    id: 1,
    title: "Luxury Family Home in Plano",
    address: "1234 Willow Creek Dr, Plano, TX 75093",
    price: "$750,000",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3",
    isFeatured: true,
    type: "House",
    area: "Collin County"
  },
  {
    id: 2,
    title: "Modern Downtown Condo",
    address: "567 Main St #301, Dallas, TX 75201",
    price: "$425,000",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    isFeatured: true,
    type: "Condo",
    area: "Dallas County"
  },
  {
    id: 3,
    title: "Ranch Style Home in Frisco",
    address: "890 Oak Hill Rd, Frisco, TX 75034",
    price: "$585,000",
    beds: 3,
    baths: 2,
    sqft: 2400,
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3",
    isFeatured: false,
    type: "House",
    area: "Collin County"
  }
];

const FeaturedListings = () => {
  return (
    <section className="py-16 bg-gray-50" id="featured-listings">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-realestate-navy">Featured Properties</h2>
            <p className="text-realestate-gray mt-2">Handpicked properties in the DFW and Collin County areas</p>
          </div>
          <Button variant="outline" className="border-realestate-navy text-realestate-navy hover:bg-realestate-navy hover:text-white">
            View All Properties
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="property-card overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-realestate-navy text-white">{property.type}</Badge>
                  {property.isFeatured && (
                    <Badge className="bg-realestate-gold text-white flex items-center gap-1">
                      <Star className="h-3 w-3" /> Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-white text-realestate-navy">{property.area}</Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold text-realestate-navy">{property.title}</h3>
                <div className="flex items-center text-sm text-realestate-gray">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  {property.address}
                </div>
              </CardHeader>
              
              <CardContent className="pb-4">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl font-bold text-realestate-gold">{property.price}</p>
                </div>
                
                <div className="flex justify-between text-sm text-realestate-gray">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" /> 
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" /> 
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Expand className="h-4 w-4 mr-1" /> 
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full bg-realestate-navy hover:bg-realestate-navy/90 text-white">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
