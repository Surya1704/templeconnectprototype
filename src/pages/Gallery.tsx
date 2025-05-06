
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter, ImageIcon } from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Gallery items without images
  const galleryItems = [
    {
      id: 1,
      title: "Varanasi Kashi Vishwanath Temple",
      category: "Architecture",
      location: "Uttar Pradesh",
      color: "bg-spiritual-maroon/80"
    },
    {
      id: 2,
      title: "Tirupati Balaji Temple",
      category: "Architecture",
      location: "Andhra Pradesh",
      color: "bg-spiritual-saffron/80"
    },
    {
      id: 3,
      title: "Golden Temple During Festival",
      category: "Festival",
      location: "Punjab",
      color: "bg-amber-500/80"
    },
    {
      id: 4,
      title: "Meenakshi Temple Rituals",
      category: "Rituals",
      location: "Tamil Nadu",
      color: "bg-emerald-600/80"
    },
    {
      id: 5,
      title: "Lord Jagannath Deity",
      category: "Deities",
      location: "Odisha",
      color: "bg-indigo-600/80"
    },
    {
      id: 6,
      title: "Somnath Temple Interior",
      category: "Interior",
      location: "Gujarat",
      color: "bg-orange-500/80"
    },
    {
      id: 7,
      title: "Badrinath Temple",
      category: "Architecture",
      location: "Uttarakhand",
      color: "bg-purple-600/80"
    },
    {
      id: 8,
      title: "Kedarnath Festival Celebration",
      category: "Festival",
      location: "Uttarakhand",
      color: "bg-rose-500/80"
    },
    {
      id: 9,
      title: "Brihadeeswara Temple Rituals",
      category: "Rituals",
      location: "Tamil Nadu",
      color: "bg-blue-600/80"
    },
    {
      id: 10,
      title: "Konark Sun Temple",
      category: "Architecture",
      location: "Odisha",
      color: "bg-teal-600/80"
    },
    {
      id: 11,
      title: "Rameshwaram Temple Interior",
      category: "Interior",
      location: "Tamil Nadu",
      color: "bg-cyan-600/80"
    },
    {
      id: 12,
      title: "Akshardham Temple Deity",
      category: "Deities",
      location: "Delhi",
      color: "bg-pink-600/80"
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
        Explore stunning descriptions of temples, festivals, rituals, and more
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
      
      {/* Featured Collection - Removing image and replacing with colored div */}
      <div className="relative mb-10 rounded-lg overflow-hidden">
        <div className="w-full h-64 bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
          <ImageIcon className="h-16 w-16 text-white/40" />
        </div>
        <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Collection: Festival of Lights</h2>
          <p className="mb-4 max-w-2xl">
            Explore our curated collection of temple celebrations during Diwali, with stunning 
            descriptions of temples illuminated by thousands of lamps.
          </p>
          <div>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              View Collection
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gallery Grid - Removing images and replacing with colored divs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="group relative overflow-hidden bg-gray-100 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className={`w-full h-64 ${item.color} flex items-center justify-center`}>
              <ImageIcon className="h-12 w-12 text-white/40" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="text-xs font-medium text-orange-400 mb-1">
                  {item.category} • {item.location}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No items found for this category</p>
        </div>
      )}
      
      <div className="mt-10 text-center">
        <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
          Load More Items
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
