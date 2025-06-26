
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Star, Moon, Sun } from "lucide-react";

const Astrology = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-spiritual-maroon">Spiritual Guidance & Astrology</h1>
          <p className="text-gray-600">
            Ancient wisdom meets modern convenience for your spiritual journey
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-spiritual-saffron/10 to-spiritual-maroon/10 rounded-2xl p-12 text-center border border-spiritual-saffron/20">
          <div className="w-24 h-24 mx-auto mb-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
            <Star className="h-12 w-12 text-spiritual-saffron" />
          </div>
          <h2 className="text-3xl font-bold text-spiritual-maroon mb-6">Spiritual Guidance & Astrology Launching Soon</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with experienced astrologers and spiritual guides for personalized consultations, 
            horoscope readings, and spiritual guidance aligned with temple visits.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white px-8 py-3">
              <Bell className="h-5 w-5 mr-2" />
              Get Early Access
            </Button>
            <Button variant="outline" className="border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon hover:text-white px-8 py-3">
              Join Waitlist
            </Button>
          </div>
        </div>

        {/* Preview Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <Sun className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Horoscope Reading</h3>
              <p className="text-gray-600 text-sm">Detailed birth chart analysis and personalized predictions</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <Moon className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Spiritual Consultation</h3>
              <p className="text-gray-600 text-sm">One-on-one guidance from experienced spiritual advisors</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Auspicious Timing</h3>
              <p className="text-gray-600 text-sm">Best times for temple visits, ceremonies, and life events</p>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mt-12">
          <h3 className="text-2xl font-semibold text-spiritual-maroon mb-6 text-center">What We're Building</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-spiritual-saffron">✓</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Verified Astrologers</h4>
                <p className="text-gray-600">Connect with certified and experienced astrologers from renowned traditions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-spiritual-saffron">✓</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Multilingual Support</h4>
                <p className="text-gray-600">Consultations available in Hindi, English, and regional languages</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-spiritual-saffron">✓</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Temple Integration</h4>
                <p className="text-gray-600">Personalized temple visit recommendations based on your astrological profile</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-spiritual-saffron">✓</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
                <p className="text-gray-600">Book consultations at your convenience with instant or scheduled sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astrology;
