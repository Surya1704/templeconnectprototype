
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, MapPin, Route, Sparkles } from "lucide-react";

const TripPlanner = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-spiritual-maroon">Trip Planner</h1>
          <p className="text-gray-600">
            AI-powered spiritual journey planning for temple visits across India
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-spiritual-saffron/10 to-spiritual-maroon/10 rounded-2xl p-12 text-center border border-spiritual-saffron/20">
          <div className="w-24 h-24 mx-auto mb-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
            <Sparkles className="h-12 w-12 text-spiritual-saffron" />
          </div>
          <h2 className="text-3xl font-bold text-spiritual-maroon mb-6">AI-Powered Darshan Planning Launches Soon</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our intelligent trip planner will create personalized spiritual journeys based on your preferences, 
            time constraints, and the most auspicious visiting times for each temple.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white px-8 py-3">
              <Bell className="h-5 w-5 mr-2" />
              Be First to Know
            </Button>
            <Button variant="outline" className="border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon hover:text-white px-8 py-3">
              Join Early Access
            </Button>
          </div>
        </div>

        {/* Preview Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-spiritual-saffron/20 rounded-full flex items-center justify-center mr-4">
                  <Route className="h-6 w-6 text-spiritual-saffron" />
                </div>
                <h3 className="text-lg font-semibold text-spiritual-maroon">Smart Route Planning</h3>
              </div>
              <p className="text-gray-600">Optimize your temple visits with intelligent routing that considers traffic, distances, and optimal darshan times.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-spiritual-saffron/20 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-spiritual-saffron" />
                </div>
                <h3 className="text-lg font-semibold text-spiritual-maroon">Temple Recommendations</h3>
              </div>
              <p className="text-gray-600">Discover hidden gems and must-visit temples based on your spiritual interests and travel preferences.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-spiritual-saffron/20 rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="h-6 w-6 text-spiritual-saffron" />
                </div>
                <h3 className="text-lg font-semibold text-spiritual-maroon">Auspicious Timing</h3>
              </div>
              <p className="text-gray-600">Get recommendations for the most spiritually beneficial times to visit each temple based on lunar calendar and festivals.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-spiritual-saffron/20 rounded-full flex items-center justify-center mr-4">
                  <Bell className="h-6 w-6 text-spiritual-saffron" />
                </div>
                <h3 className="text-lg font-semibold text-spiritual-maroon">Real-time Updates</h3>
              </div>
              <p className="text-gray-600">Receive live updates about temple crowd levels, special events, and any changes to your planned itinerary.</p>
            </CardContent>
          </Card>
        </div>

        {/* How It Will Work */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mt-12">
          <h3 className="text-2xl font-semibold text-spiritual-maroon mb-6 text-center">How It Will Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-spiritual-saffron">1</span>
              </div>
              <h4 className="font-semibold mb-2">Tell Us Your Preferences</h4>
              <p className="text-gray-600 text-sm">Share your spiritual interests, available time, and preferred locations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-spiritual-saffron">2</span>
              </div>
              <h4 className="font-semibold mb-2">AI Creates Your Journey</h4>
              <p className="text-gray-600 text-sm">Our intelligent system plans the perfect spiritual itinerary for you</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-spiritual-saffron">3</span>
              </div>
              <h4 className="font-semibold mb-2">Follow Your Plan</h4>
              <p className="text-gray-600 text-sm">Get guided navigation and real-time updates throughout your journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
