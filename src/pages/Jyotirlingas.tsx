
import React from "react";
import { motion } from "framer-motion";
import JyotirlingsCollage from "@/components/JyotirlingsCollage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ImageWithFallback";

const Jyotirlingas = () => {
  // Array of jyotirlinga details for the carousel with updated image paths and correct IDs
  const jyotirlingsDetails = [
    {
      id: "24", // Numeric ID that matches the database
      name: "Somnath",
      location: "Gujarat",
      description: "First Jyotirlinga, destroyed and rebuilt multiple times throughout history",
      image: "/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png"
    },
    {
      id: "34", // Numeric ID that matches the database
      name: "Mallikarjuna",
      location: "Andhra Pradesh",
      description: "Located on Sri Sailam mountain, one of the 12 Jyotirlingas",
      image: "/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png"
    },
    {
      id: "26", // Numeric ID that matches the database
      name: "Mahakaleshwar",
      location: "Madhya Pradesh",
      description: "One of the most sacred Jyotirlingas, situated in Ujjain",
      image: "/lovable-uploads/b668b893-dac5-4d67-9be0-425045941429.png"
    },
    {
      id: "27", // Numeric ID that matches the database
      name: "Omkareshwar",
      location: "Madhya Pradesh",
      description: "Temple located on an island in Narmada river",
      image: "/lovable-uploads/bff90acf-434f-4b5d-a02a-f8cd060e2ec9.png"
    },
    {
      id: "28", // Numeric ID that matches the database
      name: "Kedarnath",
      location: "Uttarakhand",
      description: "Located in the Himalayan ranges at an altitude of 3,583 m",
      image: "/lovable-uploads/8a415d87-63d9-44f9-bb8e-583856ad0fa5.png"
    },
    {
      id: "29", // Numeric ID that matches the database
      name: "Bhimashankar",
      location: "Maharashtra",
      description: "Situated in the Sahyadri range, origin of river Bhima",
      image: "/lovable-uploads/bed64bd3-3688-44d2-9bad-a6918b67c9a6.png"
    },
    {
      id: "30", // Numeric ID that matches the database
      name: "Kashi Vishwanath",
      location: "Uttar Pradesh",
      description: "One of the most famous Hindu temples dedicated to Lord Shiva",
      image: "/lovable-uploads/ea8558eb-ef06-4c98-8f0c-23095bb29074.png"
    },
    {
      id: "31", // Numeric ID that matches the database
      name: "Trimbakeshwar",
      location: "Maharashtra",
      description: "Famous for its three-faced embodiment of Lord Shiva",
      image: "/lovable-uploads/3c73bbb4-d8d9-439c-bac6-16dfc1940d71.png"
    },
    {
      id: "32", // Numeric ID that matches the database
      name: "Baidyanath", // Changed from "Vaidyanath" to "Baidyanath"
      location: "Jharkhand",
      description: "Temple dedicated to Lord Shiva as the 'Lord of Physicians'",
      image: "/lovable-uploads/3e630441-b218-447f-a772-6d16110739b2.png"
    },
    {
      id: "33", // Numeric ID that matches the database
      name: "Nageshwar",
      location: "Gujarat",
      description: "Protector from all poisons and toxins",
      image: "/lovable-uploads/f6e17f2f-fd67-45c1-8f9b-bdd05ef346ce.png"
    },
    {
      id: "25", // Numeric ID that matches the database
      name: "Rameshwaram",
      location: "Tamil Nadu",
      description: "Located at the southern tip of India with significant connection to Ramayana",
      image: "/lovable-uploads/c868ae47-1318-4239-9e0b-8e11ffd2ab53.png"
    },
    {
      id: "35", // Numeric ID that matches the database
      name: "Grishneshwar",
      location: "Maharashtra",
      description: "The last or 12th Jyotirlinga, located near Ellora caves",
      image: "/lovable-uploads/55fb5f1f-b855-4295-a028-e2385fe97d48.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-spiritual-ivory/30 via-spiritual-sandstone/20 to-spiritual-ochre/10 py-12 relative">
      {/* Om symbol image - adding directly from user upload */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none z-0">
        <img 
          src="/lovable-uploads/960cbaec-20d3-4cc9-b47c-b237a3a0301d.png" 
          alt="Om Symbol" 
          className="w-64 h-64"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-spiritual-maroon mb-4">
            The 12 Jyotirlingas
          </h1>
          <p className="text-xl text-spiritual-maroon/70 max-w-3xl mx-auto">
            Discover the sacred Jyotirlingas, manifestations of Lord Shiva
            spread across the Indian subcontinent, each with unique spiritual significance.
          </p>
        </motion.div>

        <div className="mb-16">
          <JyotirlingsCollage />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-6 text-center">
            About The 12 Jyotirlingas
          </h2>
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="mb-10 w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {jyotirlingsDetails.map((jyotirlinga) => (
                <CarouselItem key={jyotirlinga.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <div className="rounded-lg overflow-hidden shadow-md bg-spiritual-ivory/30 h-full flex flex-col">
                      <div className="h-48 relative">
                        <Link to={`/temple/${jyotirlinga.id}`}>
                          <ImageWithFallback 
                            src={jyotirlinga.image} 
                            alt={jyotirlinga.name} 
                            className="w-full h-full object-cover"
                            fallbackSrc="/placeholder.svg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <h3 className="text-white font-cinzel font-bold">{jyotirlinga.name}</h3>
                            <p className="text-white/90 text-sm">{jyotirlinga.location}</p>
                          </div>
                        </Link>
                      </div>
                      <div className="p-4 flex-grow">
                        <p className="text-spiritual-maroon/90 text-sm">{jyotirlinga.description}</p>
                        <Button 
                          asChild 
                          variant="ghost" 
                          size="sm" 
                          className="mt-2 text-spiritual-maroon hover:text-spiritual-ochre"
                        >
                          <Link to={`/temple/${jyotirlinga.id}`}>Visit Temple →</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
          <div className="space-y-4 text-spiritual-maroon/80">
            <p>
              The twelve Jyotirlinga (Sanskrit: ज्योतिर्लिङ्ग, "Lingas of Light") are sacred abodes of Lord Shiva, 
              mentioned in the Shiva Purana. According to Hindu mythology, Lord Shiva appeared as a fiery column of light 
              and later manifested as the Jyotirlingas at twelve different locations across India.
            </p>
            <p>
              Each Jyotirlinga has a unique story and significance. Devotees believe that a pilgrimage to these sites 
              bestows immense spiritual benefits and helps in achieving liberation from the cycle of birth and death.
            </p>
            <p>
              The twelve Jyotirlingas are: Somnath, Mallikarjuna, Mahakaleshwar, Omkareshwar, Kedarnath, Bhimashankar, 
              Kashi Vishwanath, Trimbakeshwar, Baidyanath, Nageshwar, Rameshwaram, and Grishneshwar.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Jyotirlingas;
