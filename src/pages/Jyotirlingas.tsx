
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

const Jyotirlingas = () => {
  // Array of jyotirlinga details for the carousel
  const jyotirlingsDetails = [
    {
      id: "somnath",
      name: "Somnath",
      location: "Gujarat",
      description: "First Jyotirlinga, destroyed and rebuilt multiple times throughout history",
      image: "/assets/temples/somnath.png"
    },
    {
      id: "mallikarjuna",
      name: "Mallikarjuna",
      location: "Andhra Pradesh",
      description: "Located on Sri Sailam mountain, one of the 12 Jyotirlingas",
      image: "/assets/temples/mallikarjuna.png"
    },
    {
      id: "mahakaleshwar",
      name: "Mahakaleshwar",
      location: "Madhya Pradesh",
      description: "One of the most sacred Jyotirlingas, situated in Ujjain",
      image: "/assets/temples/mahakaleshwar.png"
    },
    {
      id: "omkareshwar",
      name: "Omkareshwar",
      location: "Madhya Pradesh",
      description: "Temple located on an island in Narmada river",
      image: "/assets/temples/omkareshwar.png"
    },
    {
      id: "kedarnath",
      name: "Kedarnath",
      location: "Uttarakhand",
      description: "Located in the Himalayan ranges at an altitude of 3,583 m",
      image: "/assets/temples/kedarnath-temple.png"
    },
    {
      id: "bhimashankar",
      name: "Bhimashankar",
      location: "Maharashtra",
      description: "Situated in the Sahyadri range, origin of river Bhima",
      image: "/assets/temples/bhimashankar.png"
    },
    {
      id: "kashi-vishwanath",
      name: "Kashi Vishwanath",
      location: "Uttar Pradesh",
      description: "One of the most famous Hindu temples dedicated to Lord Shiva",
      image: "/assets/temples/kashi-vishwanath.png"
    },
    {
      id: "trimbakeshwar",
      name: "Trimbakeshwar",
      location: "Maharashtra",
      description: "Famous for its three-faced embodiment of Lord Shiva",
      image: "/assets/temples/trimbakeshwar.png"
    },
    {
      id: "vaidyanath",
      name: "Vaidyanath",
      location: "Jharkhand",
      description: "Temple dedicated to Lord Shiva as the 'Lord of Physicians'",
      image: "/assets/temples/vaidyanath.png"
    },
    {
      id: "nageshwar",
      name: "Nageshwar",
      location: "Gujarat",
      description: "Protector from all poisons and toxins",
      image: "/assets/temples/nageshwar.png"
    },
    {
      id: "rameshwaram",
      name: "Rameshwaram",
      location: "Tamil Nadu",
      description: "Located at the southern tip of India with significant connection to Ramayana",
      image: "/assets/temples/rameshwaram.png"
    },
    {
      id: "grishneshwar",
      name: "Grishneshwar",
      location: "Maharashtra",
      description: "The last or 12th Jyotirlinga, located near Ellora caves",
      image: "/assets/temples/grishneshwar.png"
    }
  ];

  return (
    <div className="min-h-screen bg-spiritual-ivory/50 py-12">
      <div className="container mx-auto px-4">
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
          className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md"
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
                        <img 
                          src={jyotirlinga.image} 
                          alt={jyotirlinga.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h3 className="text-white font-cinzel font-bold">{jyotirlinga.name}</h3>
                          <p className="text-white/90 text-sm">{jyotirlinga.location}</p>
                        </div>
                      </div>
                      <div className="p-4 flex-grow">
                        <p className="text-spiritual-maroon/90 text-sm">{jyotirlinga.description}</p>
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
              Kashi Vishwanath, Trimbakeshwar, Vaidyanath, Nageshwar, Rameshwaram, and Grishneshwar.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Jyotirlingas;
