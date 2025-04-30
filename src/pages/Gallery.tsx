
import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const Gallery = () => {
  // Generate some placeholder images
  const generateGalleryItems = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      title: `Temple Image ${i + 1}`,
      category: i % 5 === 0 ? "Architecture" : 
               i % 5 === 1 ? "Festival" : 
               i % 5 === 2 ? "Rituals" : 
               i % 5 === 3 ? "Deities" : "Interior",
      location: i % 4 === 0 ? "Tamil Nadu" : 
                i % 4 === 1 ? "Karnataka" : 
                i % 4 === 2 ? "Uttar Pradesh" : "Gujarat",
      imageUrl: `https://via.placeholder.com/600x400?text=Temple+Image+${i + 1}`
    }));
  };

  const galleryItems = generateGalleryItems(12);

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
            <select className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
              <option>All Categories</option>
              <option>Architecture</option>
              <option>Festivals</option>
              <option>Rituals</option>
              <option>Deities</option>
              <option>Interior</option>
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
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-amber-500/80 rounded-lg"></div>
        <div className="relative p-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Featured Collection: Festival of Lights</h2>
          <p className="mb-4 max-w-2xl">
            Explore our curated collection of temple celebrations during Diwali, with stunning 
            images of temples illuminated by thousands of lamps.
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white/20">
            View Collection
          </Button>
        </div>
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
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
      
      <div className="mt-10 text-center">
        <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
          Load More Images
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
