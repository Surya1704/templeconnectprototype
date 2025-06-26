
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions about TempleConnect? We're here to help you connect with temples across India.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a href="mailto:support@templeconnect.com" className="text-orange-500 hover:underline">
                support@templeconnect.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Phone className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Available Monday-Saturday from 9AM to 6PM IST.
              </p>
              <a href="tel:+919876543210" className="text-orange-500 hover:underline">
                +91 98765 43210
              </a>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Our office is located in Bangalore, Karnataka.
              </p>
              <a href="#" className="text-orange-500 hover:underline">
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
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-1 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <div>
                <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600">
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              { 
                q: "How do I list my temple on TempleConnect?", 
                a: "Temple representatives can register on our platform and submit their temple details through the 'List Your Temple' option. Our team will verify the information before publishing." 
              },
              { 
                q: "Is booking darshans through TempleConnect reliable?", 
                a: "Yes, we partner directly with temples to ensure authentic and reliable booking services. We provide instant confirmation and e-tickets for your convenience." 
              },
              { 
                q: "How do donations work?", 
                a: "100% of your donation goes directly to the temple of your choice. TempleConnect only facilitates the transaction and provides you with a receipt for your records." 
              },
              { 
                q: "Can I modify or cancel my darshan booking?", 
                a: "Yes, most bookings can be modified or canceled up to 48 hours before the scheduled time. Please check the specific temple's cancellation policy for details." 
              },
            ].map((faq, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
