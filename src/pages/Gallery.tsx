
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ImageWithFallback";

const galleryImages = [
  {
    id: "1",
    src: "/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png",
    alt: "Somnath Temple Architecture",
    category: "architecture",
    temple: "Somnath Temple",
    location: "Gujarat"
  },
  {
    id: "2", 
    src: "/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png",
    alt: "Temple Festival Celebration",
    category: "festivals",
    temple: "Tirupati Balaji",
    location: "Andhra Pradesh"
  },
  {
    id: "3",
    src: "/lovable-uploads/b668b893-dac5-4d67-9be0-425045941429.png",
    alt: "Golden Temple Dawn",
    category: "spiritual",
    temple: "Golden Temple",
    location: "Punjab"
  },
  {
    id: "4",
    src: "/lovable-uploads/bff90acf-434f-4b5d-a02a-f8cd060e2ec9.png",
    alt: "Temple Art and Sculptures",
    category: "art",
    temple: "Kashi Vishwanath",
    location: "Uttar Pradesh"
  },
  {
    id: "5",
    src: "/lovable-uploads/8a415d87-63d9-44f9-bb8e-583856ad0fa5.png",
    alt: "Kedarnath Mountain View",
    category: "spiritual",
    temple: "Kedarnath",
    location: "Uttarakhand"
  },
  {
    id: "6",
    src: "/lovable-uploads/bed64bd3-3688-44d2-9bad-a6918b67c9a6.png",
    alt: "Devotees in Prayer",
    category: "spiritual",
    temple: "Jagannath Temple",
    location: "Odisha"
  },
  {
    id: "7",
    src: "/lovable-uploads/ea8558eb-ef06-4c98-8f0c-23095bb29074.png",
    alt: "Temple Interior Design",
    category: "architecture",
    temple: "Meenakshi Temple",
    location: "Tamil Nadu"
  },
  {
    id: "8",
    src: "/lovable-uploads/3c73bbb4-d8d9-439c-bac6-16dfc1940d71.png",
    alt: "Evening Aarti Ceremony",
    category: "festivals",
    temple: "Vaishno Devi",
    location: "Jammu & Kashmir"
  },
  {
    id: "9",
    src: "/lovable-uploads/3e630441-b218-447f-a772-6d16110739b2.png",
    alt: "Traditional Temple Carvings",
    category: "art",
    temple: "Konark Sun Temple",
    location: "Odisha"
  },
  {
    id: "10",
    src: "/lovable-uploads/f6e17f2f-fd67-45c1-8f9b-bdd05ef346ce.png",
    alt: "Pilgrimage Journey",
    category: "spiritual",
    temple: "Amarnath Cave",
    location: "Jammu & Kashmir"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Photos", emoji: "📷" },
    { id: "architecture", name: "Architecture", emoji: "🏛️" },
    { id: "festivals", name: "Festivals", emoji: "🎉" },
    { id: "spiritual", name: "Spiritual Moments", emoji: "🙏" },
    { id: "art", name: "Art & Culture", emoji: "🎨" }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-spiritual-maroon mb-4">
            Temple Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the beauty and spirituality of India's sacred temples through our curated photo collection
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-spiritual-saffron text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.emoji} {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    fallbackSrc="/placeholder.svg"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-sm">{image.temple}</h3>
                    <p className="text-white/80 text-xs">{image.location}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center bg-spiritual-saffron/10 rounded-lg p-8 border border-spiritual-saffron/20">
          <h3 className="text-xl font-semibold text-spiritual-maroon mb-2">New Galleries Added Every Month</h3>
          <p className="text-gray-700 mb-4">
            Our photography team is constantly capturing the beauty of India's temples. 
            Check back regularly for new collections and high-resolution images.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white">
              Submit Your Photos
            </Button>
            <Button variant="outline" className="border-spiritual-saffron text-spiritual-saffron hover:bg-spiritual-saffron hover:text-white">
              Follow for Updates
            </Button>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Gallery Image" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
