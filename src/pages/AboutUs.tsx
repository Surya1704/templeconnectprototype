
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Heart, Users, Globe } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-spiritual-maroon mb-6">About TempleConnect</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're digitizing India's sacred network—starting with the temples that millions visit every day. 
            Our mission is to bridge the gap between ancient spirituality and modern convenience, making 
            temple experiences accessible to devotees worldwide.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm">Connecting devotees with India's sacred temples through technology while preserving traditional spiritual values</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Our Community</h3>
              <p className="text-gray-600 text-sm">Building a platform that serves millions of devotees and hundreds of temples across India</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-spiritual-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-spiritual-maroon mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm">Creating a global network where spiritual experiences transcend geographical boundaries</p>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm border p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-spiritual-maroon mb-6 text-center">What We're Building</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spiritual-saffron text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Temple Discovery</h4>
                  <p className="text-gray-600 text-sm">Comprehensive database of temples with timings, locations, and spiritual significance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spiritual-saffron text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Digital Services</h4>
                  <p className="text-gray-600 text-sm">Online darshan viewing, puja timings, and temple information</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spiritual-saffron text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Community Building</h4>
                  <p className="text-gray-600 text-sm">Connecting like-minded devotees and spiritual seekers</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spiritual-saffron text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cultural Preservation</h4>
                  <p className="text-gray-600 text-sm">Documenting and sharing the rich heritage of Indian temples</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spiritual-saffron text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Seamless Experience</h4>
                  <p className="text-gray-600 text-sm">User-friendly platform accessible across all devices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-spiritual-saffron/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spiritual-saffron text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Global Reach</h4>
                  <p className="text-gray-600 text-sm">Making Indian temples accessible to devotees worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-spiritual-maroon mb-4">Founded by Surya Rajesh, Mumbai</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A student passionate about bridging technology and spirituality, inspired by family temple visits 
            and the need to make sacred experiences more accessible to modern devotees.
          </p>
        </motion.div>

        {/* Join Waitlist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-spiritual-saffron/10 to-spiritual-maroon/10 rounded-2xl p-8 text-center border border-spiritual-saffron/20"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
            <Bell className="h-10 w-10 text-spiritual-saffron" />
          </div>
          <h3 className="text-2xl font-bold text-spiritual-maroon mb-4">Join Our Journey</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Be part of the digital transformation of India's spiritual landscape. 
            Join our waitlist to get early access to new features and updates.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white px-8 py-3">
              <Bell className="h-5 w-5 mr-2" />
              Join the Waitlist
            </Button>
            <Button variant="outline" className="border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon hover:text-white px-8 py-3">
              Follow Our Progress
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
