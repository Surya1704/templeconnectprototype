
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Bed, MapPin, Star } from "lucide-react";

const StayBookings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-spiritual-maroon">Stay Bookings</h1>
          <p className="text-gray-600">
            Comfortable accommodations near temples for your spiritual journey
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-spiritual-saffron/10 to-spiritual-maroon/10 rounded-2xl p-12 text-center border border-spiritual-saffron/20">
          <div className="w-24 h-24 mx-auto mb-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
            <Bed className="h-12 w-12 text-spiritual-saffron" />
          </div>
          <h2 className="text-3xl font-bold text-spiritual-maroon mb-6">Stay Options for Temple Pilgrims Coming Soon</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're partnering with dharamshalas, guest houses, and hotels near major temples 
            to provide comfortable and affordable accommodation options for pilgrims.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white px-8 py-3">
              <Bell className="h-5 w-5 mr-2" />
              Notify When Available
            </Button>
            <Button variant="outline" className="border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon hover:text-white px-8 py-3">
              Join Early Access
            </Button>
          </div>
        </div>

        {/* Preview Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Near Temples</h3>
              <p className="text-gray-600 text-sm">Accommodations within walking distance of major temples</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Verified Stays</h3>
              <p className="text-gray-600 text-sm">Quality-checked accommodations with pilgrim-friendly amenities</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <Bed className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Budget Options</h3>
              <p className="text-gray-600 text-sm">From dharamshalas to premium hotels, options for every budget</p>
            </CardContent>
          </Card>
        </div>

        {/* Accommodation Types */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mt-12">
          <h3 className="text-2xl font-semibold text-spiritual-maroon mb-6 text-center">Types of Accommodation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spiritual-saffron">🏛️</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Temple Dharamshalas</h4>
                  <p className="text-gray-600 text-sm">Traditional pilgrim rest houses managed by temple trusts</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spiritual-saffron">🏠</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Guest Houses</h4>
                  <p className="text-gray-600 text-sm">Clean and comfortable private accommodations</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spiritual-saffron">🏨</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Budget Hotels</h4>
                  <p className="text-gray-600 text-sm">Affordable hotels with modern amenities</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spiritual-saffron">⭐</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Premium Stays</h4>
                  <p className="text-gray-600 text-sm">Luxury accommodations for a comfortable pilgrimage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayBookings;
