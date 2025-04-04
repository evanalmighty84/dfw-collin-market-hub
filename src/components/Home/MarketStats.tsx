
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown, TrendingUp, Home, Users, Calendar } from 'lucide-react';

const MarketStats = () => {
  return (
    <section className="py-16 bg-white" id="market-stats">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-realestate-navy">Current Market Statistics</h2>
          <p className="text-realestate-gray mt-2 max-w-2xl mx-auto">
            Stay informed with the latest data from the Dallas-Fort Worth and Collin County real estate markets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dallas County Stats */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-realestate-navy">Dallas County</h3>
                <TrendingUp className="h-5 w-5 text-realestate-gold" />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-2 text-realestate-gray" />
                    <span className="text-sm text-realestate-gray">Median Home Price</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">$412,500</span>
                    <div className="ml-2 text-green-500 flex items-center text-xs">
                      <ArrowUp className="h-3 w-3" />
                      <span>5.2%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-realestate-gray" />
                    <span className="text-sm text-realestate-gray">Days on Market</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">28 days</span>
                    <div className="ml-2 text-red-500 flex items-center text-xs">
                      <ArrowDown className="h-3 w-3" />
                      <span>3.1%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-realestate-gray" />
                    <span className="text-sm text-realestate-gray">Active Listings</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">2,347</span>
                    <div className="ml-2 text-green-500 flex items-center text-xs">
                      <ArrowUp className="h-3 w-3" />
                      <span>12.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Collin County Stats */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-realestate-navy">Collin County</h3>
                <TrendingUp className="h-5 w-5 text-realestate-gold" />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-2 text-realestate-gray" />
                    <span className="text-sm text-realestate-gray">Median Home Price</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">$485,000</span>
                    <div className="ml-2 text-green-500 flex items-center text-xs">
                      <ArrowUp className="h-3 w-3" />
                      <span>7.8%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-realestate-gray" />
                    <span className="text-sm text-realestate-gray">Days on Market</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">23 days</span>
                    <div className="ml-2 text-red-500 flex items-center text-xs">
                      <ArrowDown className="h-3 w-3" />
                      <span>5.2%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-realestate-gray" />
                    <span className="text-sm text-realestate-gray">Active Listings</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">1,856</span>
                    <div className="ml-2 text-green-500 flex items-center text-xs">
                      <ArrowUp className="h-3 w-3" />
                      <span>9.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Overall DFW Metro Area Stats */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-realestate-navy">DFW Metro</h3>
                <TrendingUp className="h-5 w-5 text-realestate-gold" />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-2 text-realestate-gray" />
                    <span className="text-sm text-realestate-gray">Median Home Price</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">$438,750</span>
                    <div className="ml-2 text-green-500 flex items-center text-xs">
                      <ArrowUp className="h-3 w-3" />
                      <span>6.4%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-realestate-gray" />
                    <span className="text-sm text-realestate-gray">Days on Market</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">26 days</span>
                    <div className="ml-2 text-red-500 flex items-center text-xs">
                      <ArrowDown className="h-3 w-3" />
                      <span>4.2%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-realestate-gray" />
                    <span className="text-sm text-realestate-gray">Active Listings</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">7,283</span>
                    <div className="ml-2 text-green-500 flex items-center text-xs">
                      <ArrowUp className="h-3 w-3" />
                      <span>10.5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketStats;
