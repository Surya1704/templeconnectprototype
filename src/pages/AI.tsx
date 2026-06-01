
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, Map, Route, Brain, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import GuidedTourButton from "@/components/GuidedTourButton";
import TempleSelector from "@/components/TempleSelector";

const AI = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [activeTab, setActiveTab] = useState("selector");

  return (
    <div className="min-h-screen bg-spiritual-ivory/20 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-spiritual-maroon mb-4">
            AI-Enhanced Temple Experiences
          </h1>
          <p className="text-lg text-gray-700 mb-10">
            Discover how artificial intelligence is revolutionizing spiritual tourism
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Introduction Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-4">
                  Transforming Temple Tourism
                </h2>
                <p className="text-gray-700 mb-4">
                  Our AI technologies are making temple visits more accessible, informative, and 
                  personalized than ever before. From guided tours that offer deep cultural context 
                  to intelligent trip planning that optimizes your spiritual journey, experience a 
                  new way to connect with India's sacred traditions.
                </p>
                <Button 
                  onClick={() => setShowDemo(true)}
                  className="bg-spiritual-saffron hover:bg-spiritual-ochre"
                >
                  See How It Works
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 rounded-full bg-spiritual-sandstone/20 flex items-center justify-center">
                  <Brain className="h-32 w-32 text-spiritual-maroon/40" />
                </div>
              </div>
            </div>
          </div>

          {/* AI Services Tabs */}
          <Tabs 
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-16"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="selector">Temple Tour Guide</TabsTrigger>
              <TabsTrigger value="planner">Trip Planner</TabsTrigger>
              <TabsTrigger value="etiquette">Temple Etiquette</TabsTrigger>
            </TabsList>
            
            <TabsContent value="selector" className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-4 text-center">
                Select a Temple for Your AI Guided Tour
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Choose a temple to get a personalized guided tour with rich historical and spiritual context
              </p>
              <TempleSelector />
            </TabsContent>
            
            <TabsContent value="planner">
              <div className="text-center py-6">
                <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-4">
                  Create Your Custom Temple Itinerary
                </h2>
                <p className="text-gray-600 mb-6">
                  Plan your perfect spiritual journey with our AI Trip Planner
                </p>
                <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre" asChild>
                  <Link to="/trip-planner">Go to Trip Planner</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="etiquette">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="font-cinzel">For Men</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Full-length pants or dhotis</li>
                      <li>Shirts with sleeves</li>
                      <li>Avoid leather items inside temples</li>
                      <li>Remove shoes before entering</li>
                      <li>Cover head in some specific temples</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="font-cinzel">For Women</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Sarees, salwar kameez, or long skirts</li>
                      <li>Covered shoulders</li>
                      <li>Covered head in many temples</li>
                      <li>Modest, non-revealing attire</li>
                      <li>Remove shoes before entering</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="font-cinzel">General Etiquette</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Speak softly inside the temple</li>
                      <li>Follow clockwise direction around shrines</li>
                      <li>Avoid eating inside temple premises</li>
                      <li>Do not take photos where prohibited</li>
                      <li>Respect temple customs and traditions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-spiritual-maroon/5 to-spiritual-saffron/5 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-6 text-center">
              Benefits of AI-Enhanced Temple Visits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Deeper Understanding",
                  description: "Gain insights into symbolism and traditions"
                },
                {
                  title: "Time Efficiency",
                  description: "Optimize your visits with smart itineraries"
                },
                {
                  title: "Cultural Respect",
                  description: "Learn proper customs and etiquette"
                },
                {
                  title: "Personalized Experience",
                  description: "Tours tailored to your spiritual interests"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium text-spiritual-maroon mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link to="/trip-planner">
              <Button 
                className="bg-spiritual-saffron hover:bg-spiritual-ochre"
                size="lg"
              >
                Start Planning Your Temple Visit
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* How It Works Modal */}
      <Dialog open={showDemo} onOpenChange={setShowDemo}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-cinzel text-spiritual-maroon">
              How Our AI Temple Guide Works
            </DialogTitle>
            <DialogDescription>
              Get a quick overview of our AI-powered temple experience features
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="flex items-start gap-4">
              <div className="bg-spiritual-saffron/10 p-2 rounded-full">
                <Compass className="h-6 w-6 text-spiritual-maroon" />
              </div>
              <div>
                <h3 className="font-semibold text-spiritual-maroon">AI Guided Tours</h3>
                <p className="text-sm text-gray-600">
                  Select any temple and get in-depth information about specific locations within the temple. 
                  Our AI provides historical context, cultural significance, and spiritual meaning for each area.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-spiritual-saffron/10 p-2 rounded-full">
                <Route className="h-6 w-6 text-spiritual-maroon" />
              </div>
              <div>
                <h3 className="font-semibold text-spiritual-maroon">Trip Planner</h3>
                <p className="text-sm text-gray-600">
                  Tell us which states you're visiting, for how long, and any preferences you have.
                  Our AI will create a customized temple itinerary optimized for your journey.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-spiritual-saffron/10 p-2 rounded-full">
                <Shirt className="h-6 w-6 text-spiritual-maroon" />
              </div>
              <div>
                <h3 className="font-semibold text-spiritual-maroon">Temple Etiquette</h3>
                <p className="text-sm text-gray-600">
                  Get temple-specific guidance on appropriate dress, behavior, and customs
                  to ensure a respectful and authentic temple experience.
                </p>
              </div>
            </div>
            
            <div className="bg-spiritual-ivory/30 p-4 rounded-md mt-6">
              <p className="text-sm text-gray-700">
                <strong>Pro tip:</strong> Use our AI guided tour while physically visiting a temple - 
                it's like having a knowledgeable guide right in your pocket!
              </p>
            </div>
          </div>
          
          <div className="flex justify-end gap-2">
            <Button onClick={() => setShowDemo(false)} variant="outline">
              Close
            </Button>
            <Button 
              onClick={() => {
                setShowDemo(false);
                setActiveTab("selector");
              }}
              className="bg-spiritual-saffron hover:bg-spiritual-ochre"
            >
              Try It Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AI;
