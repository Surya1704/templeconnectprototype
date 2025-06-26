
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const Jyotirlingas = () => {
  const jyotirlingas = [
    {
      id: 1,
      name: "Somnath",
      location: "Gujarat",
      image: "/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png",
      timings: "6:00 AM - 9:00 PM",
      significance: "First Jyotirlinga, destroyed and rebuilt multiple times"
    },
    {
      id: 2,
      name: "Mallikarjuna",
      location: "Andhra Pradesh",
      image: "/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png",
      timings: "4:30 AM - 10:00 PM",
      significance: "Located on Srisailam mountain, one of Paadal Petra Sthalams"
    },
    {
      id: 3,
      name: "Mahakaleshwar",
      location: "Madhya Pradesh",
      image: "/lovable-uploads/b668b893-dac5-4d67-9be0-425045941429.png",
      timings: "4:00 AM - 11:00 PM",
      significance: "Famous for its Bhasma Aarti performed with sacred ash"
    },
    {
      id: 4,
      name: "Omkareshwar",
      location: "Madhya Pradesh",
      image: "/lovable-uploads/bff90acf-434f-4b5d-a02a-f8cd060e2ec9.png",
      timings: "5:00 AM - 10:00 PM",
      significance: "Located on an island shaped like Om symbol"
    },
    {
      id: 5,
      name: "Kedarnath",
      location: "Uttarakhand",
      image: "/lovable-uploads/8a415d87-63d9-44f9-bb8e-583856ad0fa5.png",
      timings: "4:00 AM - 9:00 PM",
      significance: "Highest Jyotirlinga at 3,583m in the Himalayas"
    },
    {
      id: 6,
      name: "Bhimashankar",
      location: "Maharashtra",
      image: "/lovable-uploads/bed64bd3-3688-44d2-9bad-a6918b67c9a6.png",
      timings: "5:30 AM - 9:30 PM",
      significance: "Source of river Bhima, located in Sahyadri range"
    },
    {
      id: 7,
      name: "Kashi Vishwanath",
      location: "Uttar Pradesh",
      image: "/lovable-uploads/ea8558eb-ef06-4c98-8f0c-23095bb29074.png",
      timings: "3:00 AM - 11:00 PM",
      significance: "One of the most sacred temples in Hinduism"
    },
    {
      id: 8,
      name: "Trimbakeshwar",
      location: "Maharashtra",
      image: "/lovable-uploads/3c73bbb4-d8d9-439c-bac6-16dfc1940d71.png",
      timings: "5:30 AM - 9:00 PM",
      significance: "Source of river Godavari, known for Kumbh Mela"
    },
    {
      id: 9,
      name: "Baidyanath",
      location: "Jharkhand",
      image: "/lovable-uploads/3e630441-b218-447f-a772-6d16110739b2.png",
      timings: "4:00 AM - 9:00 PM",
      significance: "Lord Shiva as the supreme healer and physician"
    },
    {
      id: 10,
      name: "Nageshwar",
      location: "Gujarat",
      image: "/lovable-uploads/f6e17f2f-fd67-45c1-8f9b-bdd05ef346ce.png",
      timings: "6:00 AM - 9:30 PM",
      significance: "Protector from all poisons, near Dwarka"
    },
    {
      id: 11,
      name: "Rameshwaram",
      location: "Tamil Nadu",
      image: "/lovable-uploads/c868ae47-1318-4239-9e0b-8e11ffd2ab53.png",
      timings: "5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM",
      significance: "Southernmost Jyotirlinga, connected to Ramayana"
    },
    {
      id: 12,
      name: "Grishneshwar",
      location: "Maharashtra",
      image: "/lovable-uploads/55fb5f1f-b855-4295-a028-e2385fe97d48.png",
      timings: "5:30 AM - 9:30 PM",
      significance: "Last Jyotirlinga, near Ellora caves"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-4">
          The 12 Sacred Jyotirlingas
        </h1>
        <p className="text-lg text-spiritual-maroon/70 max-w-2xl mx-auto">
          Divine manifestations of Lord Shiva across India, each with unique spiritual significance and ancient traditions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jyotirlingas.map((jyotirlinga, index) => (
          <motion.div
            key={jyotirlinga.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
              <div className="h-48 relative">
                <ImageWithFallback
                  src={jyotirlinga.image}
                  alt={jyotirlinga.name}
                  className="w-full h-full object-cover"
                  fallbackSrc="/placeholder.svg"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-spiritual-saffron text-white px-2 py-1 rounded text-xs font-medium">
                    #{jyotirlinga.id}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-cinzel text-spiritual-maroon">
                  {jyotirlinga.name}
                </CardTitle>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{jyotirlinga.location}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{jyotirlinga.timings}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    {jyotirlinga.significance}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="bg-spiritual-saffron hover:bg-spiritual-ochre">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Information Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 bg-spiritual-ivory/30 rounded-lg p-8"
      >
        <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-4 text-center">
          About the Jyotirlingas
        </h2>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 mb-4">
            The twelve Jyotirlingas are considered the most sacred abodes of Lord Shiva. According to Hindu scriptures, 
            Lord Shiva appeared as a fiery column of light (Jyoti) and later manifested as the Jyotirlingas at these twelve locations.
          </p>
          
          <p className="text-gray-700 mb-4">
            Each Jyotirlinga has its own unique story, significance, and spiritual power. Devotees believe that visiting 
            these sacred sites bestows immense blessings and helps achieve spiritual liberation.
          </p>
          
          <p className="text-gray-700">
            The pilgrimage to all twelve Jyotirlingas is considered highly auspicious and is believed to cleanse one's sins 
            and grant moksha (salvation).
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Jyotirlingas;
