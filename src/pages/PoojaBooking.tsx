
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Calendar, Clock, User } from "lucide-react";

const PoojaBooking = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-spiritual-maroon">Puja Booking</h1>
          <p className="text-gray-600">
            Book personalized puja services at temples across India
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-spiritual-saffron/10 to-spiritual-maroon/10 rounded-2xl p-12 text-center border border-spiritual-saffron/20">
          <div className="w-24 h-24 mx-auto mb-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
            <Calendar className="h-12 w-12 text-spiritual-saffron" />
          </div>
          <h2 className="text-3xl font-bold text-spiritual-maroon mb-6">Puja Bookings Open Soon</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're partnering with temples across India to offer online puja booking services. 
            Soon you'll be able to book abhishekam, archana, and special ceremonies from the comfort of your home.
          </p>
          <div className="text-center mb-8">
            <p className="text-spiritual-maroon font-medium mb-4">Stay tuned for updates!</p>
            <div className="flex justify-center gap-4">
              <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white px-8 py-3">
                <Bell className="h-5 w-5 mr-2" />
                Get Notified
              </Button>
              <Button variant="outline" className="border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon hover:text-white px-8 py-3">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>

        {/* Preview Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Flexible Timing</h3>
              <p className="text-gray-600 text-sm">Choose convenient time slots for your puja ceremonies</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Personal Details</h3>
              <p className="text-gray-600 text-sm">Provide your name, gotra, and specific requirements</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <Bell className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Live Updates</h3>
              <p className="text-gray-600 text-sm">Receive real-time notifications about your puja status</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PoojaBooking;
