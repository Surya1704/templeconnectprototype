
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Package, Star } from "lucide-react";

const TempleStore = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-spiritual-maroon">Temple Store</h1>
          <p className="text-gray-600">
            Sacred prasad, ritual items, and temple artifacts delivered to your doorstep
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-spiritual-saffron/10 to-spiritual-maroon/10 rounded-2xl p-8 mb-8 text-center border border-spiritual-saffron/20">
          <div className="w-20 h-20 mx-auto mb-6 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
            <Package className="h-10 w-10 text-spiritual-saffron" />
          </div>
          <h2 className="text-2xl font-bold text-spiritual-maroon mb-4">Temple Prasad and Ritual Items Coming Soon</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're working with temples across India to bring you authentic prasad, sacred items, and blessed artifacts. 
            Our curated collection will include fresh prasad with extended shelf life for nationwide delivery.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white">
              <Bell className="h-4 w-4 mr-2" />
              Notify Me When Available
            </Button>
            <Button variant="outline" className="border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon hover:text-white">
              Join Waitlist
            </Button>
          </div>
        </div>

        {/* Preview Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-32 bg-gradient-to-br from-spiritual-saffron/20 to-spiritual-ochre/20 flex items-center justify-center">
              <span className="text-3xl">🍯</span>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Sacred Prasad</h3>
              <p className="text-sm text-gray-600 mb-3">Fresh laddu, modak, and temple sweets with extended shelf life</p>
              <div className="flex items-center text-spiritual-saffron">
                <Star className="h-4 w-4 mr-1" />
                <span className="text-sm">Coming Soon</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-32 bg-gradient-to-br from-spiritual-maroon/20 to-spiritual-saffron/20 flex items-center justify-center">
              <span className="text-3xl">🪔</span>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Ritual Items</h3>
              <p className="text-sm text-gray-600 mb-3">Diyas, incense, kumkum, and sacred threads</p>
              <div className="flex items-center text-spiritual-saffron">
                <Star className="h-4 w-4 mr-1" />
                <span className="text-sm">Coming Soon</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-32 bg-gradient-to-br from-spiritual-ochre/20 to-spiritual-maroon/20 flex items-center justify-center">
              <span className="text-3xl">🔔</span>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Temple Artifacts</h3>
              <p className="text-sm text-gray-600 mb-3">Blessed idols, brass items, and prayer accessories</p>
              <div className="flex items-center text-spiritual-saffron">
                <Star className="h-4 w-4 mr-1" />
                <span className="text-sm">Coming Soon</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-xl font-semibold text-spiritual-maroon mb-4">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-spiritual-saffron">✓</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Authentic Temple Prasad</h4>
                <p className="text-sm text-gray-600">Directly sourced from temples with proper packaging for freshness</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-spiritual-saffron">✓</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Nationwide Delivery</h4>
                <p className="text-sm text-gray-600">Fast and secure delivery across India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-spiritual-saffron">✓</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Quality Assurance</h4>
                <p className="text-sm text-gray-600">All items blessed and certified by temple authorities</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-spiritual-saffron">✓</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Easy Ordering</h4>
                <p className="text-sm text-gray-600">Simple online ordering with secure payment options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleStore;
