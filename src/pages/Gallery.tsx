
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Real temple images instead of placeholders
  const galleryItems = [
    {
      id: 1,
      title: "Varanasi Kashi Vishwanath Temple",
      category: "Architecture",
      location: "Uttar Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1566636544546-61d736ee499e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Tirupati Balaji Temple",
      category: "Architecture",
      location: "Andhra Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1621831714462-bec666e92454?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Golden Temple During Festival",
      category: "Festival",
      location: "Punjab",
      imageUrl: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Meenakshi Temple Rituals",
      category: "Rituals",
      location: "Tamil Nadu",
      imageUrl: "https://images.unsplash.com/photo-1591014101761-a4172786fbbe?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Lord Jagannath Deity",
      category: "Deities",
      location: "Odisha",
      imageUrl: "https://images.unsplash.com/photo-1627894486874-b830e5a8be76?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Somnath Temple Interior",
      category: "Interior",
      location: "Gujarat",
      imageUrl: "https://images.unsplash.com/photo-1599319191289-a530dbf24f4c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Badrinath Temple",
      category: "Architecture",
      location: "Uttarakhand",
      imageUrl: "https://images.unsplash.com/photo-1623953858703-9c7c4f5ceb73?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Kedarnath Festival Celebration",
      category: "Festival",
      location: "Uttarakhand",
      imageUrl: "https://images.unsplash.com/photo-1590667046966-1e0e11a9b2ad?q=80&w=1972&auto=format&fit=crop"
    },
    {
      id: 9,
      title: "Brihadeeswara Temple Rituals",
      category: "Rituals",
      location: "Tamil Nadu",
      imageUrl: "https://images.unsplash.com/photo-1616843413587-9b1d52fd4437?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 10,
      title: "Konark Sun Temple",
      category: "Architecture",
      location: "Odisha",
      imageUrl: "https://images.unsplash.com/photo-1600687623593-1c503a8d4d8d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 11,
      title: "Rameshwaram Temple Interior",
      category: "Interior",
      location: "Tamil Nadu",
      imageUrl: "https://images.unsplash.com/photo-1626439710312-8ecc612cf587?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 12,
      title: "Akshardham Temple Deity",
      category: "Deities",
      location: "Delhi",
      imageUrl: "https://images.unsplash.com/photo-1545126178-862cdb469409?q=80&w=1974&auto=format&fit=crop"
    }
  ];
  
  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
    
  const categories = ["all", ...Array.from(new Set(galleryItems.map(item => item.category)))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Temple Gallery</h1>
      <p className="text-gray-600 mb-8">
        Explore stunning images of temples, festivals, rituals, and more
      </p>
      
      {/* Search & Filter */}
      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search gallery..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <select 
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
            <select className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
              <option>All Regions</option>
              <option>North India</option>
              <option>South India</option>
              <option>East India</option>
              <option>West India</option>
            </select>
            <Button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
      </div>
      
      {/* Featured Collection */}
      <div className="relative mb-10 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1618769122190-371113a9651f?q=80&w=2070&auto=format&fit=crop" 
          alt="Festival of Lights" 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-amber-500/80"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Collection: Festival of Lights</h2>
          <p className="mb-4 max-w-2xl">
            Explore our curated collection of temple celebrations during Diwali, with stunning 
            images of temples illuminated by thousands of lamps.
          </p>
          <div>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              View Collection
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="group relative overflow-hidden bg-gray-100 rounded-lg hover:shadow-lg transition-shadow"
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="text-xs font-medium text-orange-400 mb-1">
                  {item.category} • {item.location}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
                  View Image
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No images found for this category</p>
        </div>
      )}
      
      <div className="mt-10 text-center">
        <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
          Load More Images
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
