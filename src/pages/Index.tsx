
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEOMeta from '@/components/SEO/SEOMeta';
import Navbar from '@/components/Navigation/Navbar';
import Hero from '@/components/Home/Hero';
import FeaturedListings from '@/components/Home/FeaturedListings';
import MarketStats from '@/components/Home/MarketStats';
import ContactForm from '@/components/Home/ContactForm';
import Footer from '@/components/Navigation/Footer';

const Index = () => {
  return (
    <HelmetProvider>
      <SEOMeta 
        title="DFW Collin Market Hub | Find Real Estate in Dallas-Fort Worth & Collin County"
        description="Connect with buyers and sellers in the Dallas-Fort Worth and Collin County real estate markets. Browse properties, find local agents, and discover market trends in North Texas."
        keywords="DFW real estate, Collin County homes, Dallas-Fort Worth property, buy home in Plano, sell house in Frisco, McKinney real estate, Allen TX properties, Richardson homes for sale"
        locationSchema={{
          name: "DFW Collin Market Hub",
          addressLocality: "Plano",
          addressRegion: "TX",
          postalCode: "75075",
          streetAddress: "123 Main Street"
        }}
      />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <FeaturedListings />
          <MarketStats />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
