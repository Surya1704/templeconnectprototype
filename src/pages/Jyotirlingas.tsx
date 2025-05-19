
import React from "react";
import { motion } from "framer-motion";
import JyotirlingsCollage from "@/components/JyotirlingsCollage";

const Jyotirlingas = () => {
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
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-4 text-center">
            About The 12 Jyotirlingas
          </h2>
          <p className="text-spiritual-maroon/80 mb-6">
            The twelve Jyotirlinga (Sanskrit: ज्योतिर्लिङ्ग, "Lingas of Light") are sacred abodes of Lord Shiva, 
            mentioned in the Shiva Purana. According to Hindu mythology, Lord Shiva appeared as a fiery column of light 
            and later manifested as the Jyotirlingas at twelve different locations across India.
          </p>
          <p className="text-spiritual-maroon/80 mb-6">
            Each Jyotirlinga has a unique story and significance. Devotees believe that a pilgrimage to these sites 
            bestows immense spiritual benefits and helps in achieving liberation from the cycle of birth and death.
          </p>
          <p className="text-spiritual-maroon/80">
            The twelve Jyotirlingas are: Somnath, Mallikarjuna, Mahakaleshwar, Omkareshwar, Kedarnath, Bhimashankar, 
            Kashi Vishwanath, Trimbakeshwar, Vaidyanath, Nageshwar, Rameshwaram, and Grishneshwar.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Jyotirlingas;
