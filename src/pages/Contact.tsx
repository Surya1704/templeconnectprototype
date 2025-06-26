
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-4">
            Contact TempleConnect
          </h1>
          <p className="text-lg text-spiritual-maroon/70 max-w-2xl mx-auto">
            Have questions or want to connect? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-spiritual-saffron hover:bg-spiritual-ochre"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-spiritual-saffron mx-auto mb-4" />
                <h3 className="font-cinzel font-bold text-spiritual-maroon mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll respond within 24 hours
                </p>
                <a 
                  href="mailto:hello@templeconnect.com" 
                  className="text-spiritual-saffron hover:text-spiritual-ochre font-medium"
                >
                  hello@templeconnect.com
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Instagram className="h-12 w-12 text-spiritual-saffron mx-auto mb-4" />
                <h3 className="font-cinzel font-bold text-spiritual-maroon mb-2">Follow Us</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with our latest temple additions and features
                </p>
                <a 
                  href="https://instagram.com/templeconnect" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-spiritual-saffron hover:text-spiritual-ochre font-medium"
                >
                  @templeconnect
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-spiritual-saffron mx-auto mb-4" />
                <h3 className="font-cinzel font-bold text-spiritual-maroon mb-2">Based in</h3>
                <p className="text-gray-600">
                  Mumbai, Maharashtra<br />
                  India
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-6 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-spiritual-maroon mb-2">
                How can I list my temple on TempleConnect?
              </h4>
              <p className="text-gray-600 text-sm">
                Contact us through the form above with your temple details, and we'll help you get started with the listing process.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-spiritual-maroon mb-2">
                Are the temple timings and information accurate?
              </h4>
              <p className="text-gray-600 text-sm">
                We work directly with temple authorities and regularly update information. However, we recommend calling temples directly for the most current details.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-spiritual-maroon mb-2">
                Do you charge any fees for donations?
              </h4>
              <p className="text-gray-600 text-sm">
                No, all donations go directly to temple official websites. TempleConnect simply provides links to authentic temple donation portals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
