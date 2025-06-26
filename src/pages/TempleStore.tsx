
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { getTempleById, getTemplePrasadImages } from "@/data/mergeTemples";
import { temples } from "@/data/temples";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Search, ShoppingCart, Filter, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TempleStore = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<any[]>([]);
  const [selectedTemple, setSelectedTemple] = useState("24"); // Default to Somnath
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  
  // Temple store items with proper categories and shelf-life info
  const storeItems = [
    {
      id: "1",
      name: "Laddu Prasad",
      description: "Traditional sweet offering blessed at the temple",
      price: 151,
      temple: "Tirupati Balaji",
      category: "prasad",
      shelfLife: "15 days",
      canBeShipped: true,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a72-somnathladdu.jpg"
    },
    {
      id: "2",
      name: "Modak Prasad",
      description: "Sweet dumpling offering for special occasions",
      price: 201,
      temple: "Siddhivinayak",
      category: "prasad",
      shelfLife: "7 days",
      canBeShipped: true,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a73-dryfruitprasad.jpg"
    },
    {
      id: "3",
      name: "Kheer Prasad",
      description: "Sacred rice pudding blessed by priests",
      price: 111,
      temple: "Golden Temple",
      category: "prasad",
      shelfLife: "2 days",
      canBeShipped: false,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a74-sweetrice.jpg"
    },
    {
      id: "4",
      name: "Halwa Prasad",
      description: "Semolina sweet offering for prosperity",
      price: 131,
      temple: "Vaishno Devi",
      category: "prasad",
      shelfLife: "10 days",
      canBeShipped: true,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a75-panchamrit.jpg"
    },
    {
      id: "5",
      name: "Panjiri Prasad",
      description: "Nutritious whole wheat offering for strength",
      price: 171,
      temple: "Kashi Vishwanath",
      category: "prasad",
      shelfLife: "30 days",
      canBeShipped: true,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a76-pedha.jpg"
    },
    {
      id: "6",
      name: "Chandan Tilak",
      description: "Sacred sandalwood paste for blessings",
      price: 51,
      temple: "Jagannath Puri",
      category: "ritual-items",
      shelfLife: "90 days",
      canBeShipped: true,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a77-dryfruits.jpg"
    },
    {
      id: "7",
      name: "Gangajal",
      description: "Holy water from the River Ganges",
      price: 101,
      temple: "Kashi Vishwanath",
      category: "ritual-items",
      shelfLife: "Unlimited",
      canBeShipped: true,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a78-shivaratrisomnath.jpg"
    },
    {
      id: "8",
      name: "Rudraksha Mala",
      description: "Prayer beads made from Rudraksha seeds",
      price: 501,
      temple: "Kedarnath",
      category: "religious-goods",
      shelfLife: "Years",
      canBeShipped: true,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a79-kartikpurnima.jpg"
    },
    {
      id: "9",
      name: "Temple Memento",
      description: "Beautiful souvenir from the temple",
      price: 351,
      temple: "Meenakshi",
      category: "souvenirs",
      shelfLife: "Years",
      canBeShipped: true,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a80-chariotfestival.jpg"
    },
    {
      id: "10",
      name: "Brass Diya",
      description: "Traditional lamp for prayer ceremonies",
      price: 251,
      temple: "Somnath",
      category: "religious-goods",
      shelfLife: "Years",
      canBeShipped: true,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a81-arudradarshan.jpg"
    },
    {
      id: "11",
      name: "Incense Sticks",
      description: "Aromatic sticks for worship",
      price: 75,
      temple: "Rameshwaram",
      category: "ritual-items",
      shelfLife: "1 year",
      canBeShipped: true,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a82-shivaratrimahakal.jpg"
    },
    {
      id: "12",
      name: "Sacred Thread",
      description: "Blessed thread for protection",
      price: 31,
      temple: "Badrinath",
      category: "ritual-items",
      shelfLife: "Years",
      canBeShipped: true,
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a83-shravanmonth.jpg"
    }
  ];
  
  const handleAddToCart = (item: any) => {
    setCart([...cart, item]);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };
  
  // Filter items based on search, temple, and category
  const filteredItems = storeItems.filter((item) => {
    const matchesSearch = searchQuery 
      ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.temple.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
      
    const matchesFilter = filter === "all" || item.category === filter;
    
    // Only show items that can be shipped
    const canBeShipped = item.canBeShipped === true;
    
    return matchesSearch && matchesFilter && canBeShipped;
  });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Temple Store</h1>
          <p className="text-gray-600">
            Shop for blessed prasad and sacred items from temples across India
          </p>
        </div>
        <Button className="bg-spiritual-ochre hover:bg-spiritual-ochre/90 flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          <span>Cart ({cart.length})</span>
        </Button>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <select 
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            onChange={(e) => setSelectedTemple(e.target.value)}
            value={selectedTemple}
          >
            <option value="all">All Temples</option>
            {temples.slice(0, 20).map((temple) => (
              <option key={temple.id} value={temple.id}>
                {temple.name}
              </option>
            ))}
          </select>
          
          <div className="flex gap-2">
            <select 
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white flex-grow"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="all">All Categories</option>
              <option value="prasad">Prasad</option>
              <option value="ritual-items">Ritual Items</option>
              <option value="religious-goods">Religious Goods</option>
              <option value="souvenirs">Souvenirs</option>
            </select>
            
            <Button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Featured Items */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Featured Items</h2>
          <Button variant="outline" className="text-spiritual-maroon border-spiritual-maroon hover:bg-spiritual-maroon/10">
            View All
          </Button>
        </div>
        
        <div className="relative overflow-hidden rounded-xl mb-8">
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {storeItems
              .filter(item => item.canBeShipped)
              .slice(0, 4)
              .map((item) => (
                <div key={item.id} className="min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden">
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.name}
                    className="h-48 w-full object-cover"
                    fallbackSrc="/placeholder.svg"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.temple}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="font-bold text-spiritual-maroon">₹{item.price}</span>
                      <Button 
                        className="bg-spiritual-saffron hover:bg-spiritual-saffron/90"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Shop Content */}
      <div className="mb-8">
        <Tabs defaultValue="shippable" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="shippable">Shippable Items</TabsTrigger>
            <TabsTrigger value="prasad">Prasad</TabsTrigger>
            <TabsTrigger value="ritual">Ritual Items</TabsTrigger>
            <TabsTrigger value="souvenirs">Souvenirs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="shippable">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <StoreItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <Store className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">No items found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="prasad">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems
                .filter(item => item.category === "prasad")
                .map((item) => (
                  <StoreItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ritual">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems
                .filter(item => item.category === "ritual-items")
                .map((item) => (
                  <StoreItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="souvenirs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems
                .filter(item => item.category === "souvenirs")
                .map((item) => (
                  <StoreItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Shipping Policy */}
      <div className="bg-orange-50 border border-orange-100 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Temple Store Shipping Policy</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>• Prasad Shipping:</strong> We only ship prasad items with a shelf life of 7 days or more.
          </p>
          <p>
            <strong>• Packaging:</strong> All items are carefully packed to maintain sanctity during transit.
          </p>
          <p>
            <strong>• Delivery Time:</strong> Most items are delivered within 3-5 business days across India.
          </p>
          <p>
            <strong>• International Shipping:</strong> Available for select items. Additional charges apply.
          </p>
        </div>
      </div>
    </div>
  );
};

// Store Item Card Component
const StoreItemCard = ({ item, onAddToCart }: { item: any, onAddToCart: (item: any) => void }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 bg-gray-50">
        <ImageWithFallback 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
          fallbackSrc="/placeholder.svg"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-orange-500">{item.temple}</span>
          {item.shelfLife && (
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
              {item.shelfLife} shelf life
            </span>
          )}
        </div>
        
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-spiritual-maroon">₹{item.price}</span>
          <Button 
            size="sm" 
            className="bg-spiritual-saffron hover:bg-spiritual-saffron/90"
            onClick={() => onAddToCart(item)}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TempleStore;
