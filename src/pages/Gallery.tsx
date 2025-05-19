
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter, ImageIcon, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { toast } = useToast();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageDescription, setImageDescription] = useState("");
  const [imageCategory, setImageCategory] = useState("Architecture");
  const [imageLocation, setImageLocation] = useState("");
  
  // Gallery items without images
  const galleryItems = [
    {
      id: 1,
      title: "Varanasi Kashi Vishwanath Temple",
      category: "Architecture",
      location: "Uttar Pradesh",
      color: "bg-spiritual-maroon/80",
      status: "approved" // Adding status to each item
    },
    {
      id: 2,
      title: "Tirupati Balaji Temple",
      category: "Architecture",
      location: "Andhra Pradesh",
      color: "bg-spiritual-saffron/80",
      status: "approved"
    },
    {
      id: 3,
      title: "Golden Temple During Festival",
      category: "Festival",
      location: "Punjab",
      color: "bg-amber-500/80",
      status: "approved"
    },
    {
      id: 4,
      title: "Meenakshi Temple Rituals",
      category: "Rituals",
      location: "Tamil Nadu",
      color: "bg-emerald-600/80",
      status: "approved"
    },
    {
      id: 5,
      title: "Lord Jagannath Deity",
      category: "Deities",
      location: "Odisha",
      color: "bg-indigo-600/80",
      status: "approved"
    },
    {
      id: 6,
      title: "Somnath Temple Interior",
      category: "Interior",
      location: "Gujarat",
      color: "bg-orange-500/80",
      status: "approved"
    },
    {
      id: 7,
      title: "Badrinath Temple",
      category: "Architecture",
      location: "Uttarakhand",
      color: "bg-purple-600/80",
      status: "approved"
    },
    {
      id: 8,
      title: "Kedarnath Festival Celebration",
      category: "Festival",
      location: "Uttarakhand",
      color: "bg-rose-500/80",
      status: "approved"
    },
    {
      id: 9,
      title: "Brihadeeswara Temple Rituals",
      category: "Rituals",
      location: "Tamil Nadu",
      color: "bg-blue-600/80",
      status: "pending"
    },
    {
      id: 10,
      title: "Konark Sun Temple",
      category: "Architecture",
      location: "Odisha",
      color: "bg-teal-600/80",
      status: "approved"
    },
    {
      id: 11,
      title: "Rameshwaram Temple Interior",
      category: "Interior",
      location: "Tamil Nadu",
      color: "bg-cyan-600/80",
      status: "approved"
    },
    {
      id: 12,
      title: "Akshardham Temple Deity",
      category: "Deities",
      location: "Delhi",
      color: "bg-pink-600/80",
      status: "pending"
    }
  ];
  
  const filteredItems = activeCategory === "all" 
    ? galleryItems.filter(item => item.status === "approved")
    : galleryItems.filter(item => item.category === activeCategory && item.status === "approved");
    
  const categories = ["all", ...Array.from(new Set(galleryItems.map(item => item.category)))];

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image submission
  const handleImageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!imageFile) {
      toast({
        title: "No image selected",
        description: "Please select an image to upload",
        variant: "destructive"
      });
      return;
    }
    
    if (!imageDescription || !imageLocation) {
      toast({
        title: "Missing information",
        description: "Please provide a description and location",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would be an API call to upload the image
    // For now, we just show a success message
    toast({
      title: "Image submitted for approval",
      description: "Thank you for your contribution. Your image will be reviewed before being added to the gallery.",
    });
    
    // Reset form
    setImageFile(null);
    setImagePreview(null);
    setImageDescription("");
    setImageLocation("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Temple Gallery</h1>
      <p className="text-gray-600 mb-6">
        Explore stunning descriptions of temples, festivals, rituals, and more
      </p>
      
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        {/* Search & Filter */}
        <div className="bg-white rounded-lg shadow p-4 mb-4 md:mb-0 w-full md:w-2/3">
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
        
        {/* Upload Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-spiritual-maroon hover:bg-spiritual-maroon/90 flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Image
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Your Temple Image</DialogTitle>
              <DialogDescription>
                Share your spiritual journey with the community. All images will be reviewed before being added to the gallery.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleImageSubmit} className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label htmlFor="image-upload" className="text-sm font-medium">
                  Select Image
                </label>
                <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-md border-gray-300 cursor-pointer bg-gray-50 hover:bg-gray-100">
                  {imagePreview ? (
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="h-full object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <ImageIcon className="w-10 h-10 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 2MB)</p>
                    </div>
                  )}
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows={3}
                  placeholder="Describe your temple image..."
                  value={imageDescription}
                  onChange={(e) => setImageDescription(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="text-sm font-medium">
                    Category
                  </label>
                  <select
                    id="category"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    value={imageCategory}
                    onChange={(e) => setImageCategory(e.target.value)}
                  >
                    {categories.filter(c => c !== "all").map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="text-sm font-medium">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., Gujarat, Tamil Nadu"
                    value={imageLocation}
                    onChange={(e) => setImageLocation(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4">
                <DialogTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogTrigger>
                <Button type="submit" className="bg-spiritual-maroon hover:bg-spiritual-maroon/90">
                  Submit for Approval
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Featured Collection - Modified to always show explore button */}
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
      
      {/* Gallery Grid - Modified to always show details button */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="group relative overflow-hidden bg-gray-100 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className={`w-full h-64 ${item.color} flex items-center justify-center`}>
              <ImageIcon className="h-12 w-12 text-white/40" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
              <div>
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
