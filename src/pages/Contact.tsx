
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Bell, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-spiritual-maroon">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions about TempleConnect? We're here to help you connect with temples across India.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-spiritual-saffron/20 flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-spiritual-saffron" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a href="mailto:support@templeconnect.com" className="text-spiritual-saffron hover:underline">
                support@templeconnect.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-spiritual-saffron/20 flex items-center justify-center mb-4">
                <Instagram className="h-5 w-5 text-spiritual-saffron" />
              </div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Get updates and spiritual content on our Instagram.
              </p>
              <a href="#" className="text-spiritual-saffron hover:underline">
                @templeconnect
              </a>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-spiritual-saffron/20 flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-spiritual-saffron" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Our office is located in Mumbai, Maharashtra.
              </p>
              <a href="#" className="text-spiritual-saffron hover:underline">
                View on Map
              </a>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-saffron"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-saffron"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-1 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-saffron"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-saffron"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <div>
                <Button className="w-full sm:w-auto bg-spiritual-saffron hover:bg-spiritual-ochre">
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4 mb-8">
            {[
              { 
                q: "How do I list my temple on TempleConnect?", 
                a: "Temple representatives can register on our platform and submit their temple details. Our team will verify the information before publishing." 
              },
              { 
                q: "When will booking services be available?", 
                a: "We're working on enabling darshan bookings and puja services. Join our waitlist to be notified when these features launch." 
              },
              { 
                q: "How do donations work?", 
                a: "Currently, we provide links to official temple donation pages. Direct donation integration is coming soon." 
              },
              { 
                q: "Is the app available on mobile?", 
                a: "Our website is fully mobile-optimized. Native mobile apps are in development and will be available soon." 
              },
            ].map((faq, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Join Waitlist CTA */}
          <div className="bg-gradient-to-r from-spiritual-saffron/10 to-spiritual-maroon/10 rounded-2xl p-8 text-center border border-spiritual-saffron/20">
            <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
              <Bell className="h-8 w-8 text-spiritual-saffron" />
            </div>
            <h3 className="text-xl font-bold text-spiritual-maroon mb-2">Stay Updated</h3>
            <p className="text-gray-700 mb-4">
              Join our waitlist to be the first to know about new features and temple partnerships.
            </p>
            <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white">
              <Bell className="h-4 w-4 mr-2" />
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
