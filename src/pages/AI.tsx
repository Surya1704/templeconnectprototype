
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, Map, Route, Ai, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GuidedTourButton from "@/components/GuidedTourButton";

const AI = () => {
  const [showDemo, setShowDemo] = useState(false);

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
                  <Ai className="h-32 w-32 text-spiritual-maroon/40" />
                </div>
              </div>
            </div>
          </div>

          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-white">
              <CardHeader>
                <div className="bg-spiritual-saffron/10 p-3 rounded-full w-fit mb-3">
                  <Compass className="h-6 w-6 text-spiritual-maroon" />
                </div>
                <CardTitle className="font-cinzel">AI Guided Tours</CardTitle>
                <CardDescription>
                  Explore each temple with personalized virtual guides
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our AI guides provide deep insights into temple history, architecture, rituals, 
                  and spiritual significance, enhancing your understanding of sacred sites.
                </p>
                <GuidedTourButton 
                  templeName="Temple Demo" 
                  templeTags={["Ancient", "Spiritual", "Educational"]}
                  variant="secondary"
                  className="w-full"
                />
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="bg-spiritual-saffron/10 p-3 rounded-full w-fit mb-3">
                  <Route className="h-6 w-6 text-spiritual-maroon" />
                </div>
                <CardTitle className="font-cinzel">AI Trip Planner</CardTitle>
                <CardDescription>
                  Create custom temple itineraries based on your preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Tell us where you want to go, for how long, and your interests. Our AI will 
                  generate an optimized temple visit plan with the best routes and timings.
                </p>
                <Button 
                  variant="secondary"
                  className="w-full"
                  asChild
                >
                  <Link to="/trip-planner">Plan Your Trip</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="bg-spiritual-saffron/10 p-3 rounded-full w-fit mb-3">
                  <Shirt className="h-6 w-6 text-spiritual-maroon" />
                </div>
                <CardTitle className="font-cinzel">Temple Etiquette AI</CardTitle>
                <CardDescription>
                  Learn about appropriate attire and customs for each temple
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our AI provides guidance on proper dress codes, behavioral customs, and 
                  rituals for a respectful and authentic temple experience.
                </p>
                <Button 
                  variant="secondary"
                  className="w-full"
                  asChild
                >
                  <Link to="/temples">Explore Temples</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

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
    </div>
  );
};

export default AI;
