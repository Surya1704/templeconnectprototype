
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allTemples, filterTemples, getTempleImages } from "@/data/mergeTemples";
import StateFilter from "@/components/StateFilter";
import { categories, indianStates } from "@/data/temples";
import { Search, Map as MapIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import CongestionIndicator from "@/components/CongestionIndicator";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import GuidedTourButton from "@/components/GuidedTourButton";
import TripPlannerButton from "@/components/TripPlannerButton";
import TempleAttireInfo from "@/components/TempleAttireInfo";
import MobileOptimizedLayout from "@/components/MobileOptimizedLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import ImageWithFallback from "@/components/ImageWithFallback";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const AllTemples = () => {
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedTag, setSelectedTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTemples, setFilteredTemples] = useState([]);
  const [activeSortOption, setActiveSortOption] = useState("popularity");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    console.log("Total temples in allTemples:", allTemples.length);
    console.log("All temple IDs:", allTemples.map(t => `${t.id} (${t.name})`));
    
    // Check specifically for Jyotirlingas (IDs 24-35)
    const jyotirlingaIds = Array.from({ length: 12 }, (_, i) => (i + 24).toString());
    const jyotirlingas = jyotirlingaIds
      .map(id => allTemples.find(temple => temple.id === id))
      .filter(Boolean);
    
    console.log("Found Jyotirlingas:", jyotirlingas.map(j => `${j.id} (${j.name})`));
    
    // Apply filters using the filterTemples function
    const filtered = filterTemples({
      state: selectedState,
      tag: selectedTag,
      search: searchQuery,
    });
    
    console.log("Filtered temples:", filtered.length);
    console.log("Search query:", searchQuery);
    
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      console.log("Temples matching search:", filtered.filter(temple => 
        temple.name.toLowerCase().includes(searchLower) ||
        temple.location.toLowerCase().includes(searchLower) ||
        temple.state.toLowerCase().includes(searchLower)
      ).map(t => `${t.id} (${t.name})`));
    }
    
    setFilteredTemples(filtered);
  }, [selectedState, selectedTag, searchQuery]);

  // Sorted based on selected option
  const sortedTemples = [...filteredTemples].sort((a, b) => {
    if (activeSortOption === "popularity") {
      // Sort by name as a fallback since we're removing ratings
      return a.name.localeCompare(b.name);
    } else if (activeSortOption === "price-low") {
      return a.price - b.price;
    } else if (activeSortOption === "price-high") {
      return b.price - a.price;
    } else if (activeSortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-ivory/50 to-white pt-4 pb-20">
      <MobileOptimizedLayout>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-cinzel font-bold text-spiritual-maroon">Explore Temples</h1>
            <p className="text-sm md:text-base text-gray-600 mt-2">Discover sacred destinations across India</p>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <TripPlannerButton variant="secondary" className="w-full sm:w-auto" />
            <div className="flex w-full md:w-auto items-center gap-2">
              <Input
                placeholder="Search temples..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
              <Button variant="default" size="icon" className="shrink-0 bg-spiritual-saffron hover:bg-spiritual-ochre">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {isMobile ? (
          <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="mb-6">
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full flex justify-between items-center mb-4"
              >
                <span>Filter Options</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'transform rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-4 p-4 bg-white rounded-xl shadow-sm">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-spiritual-maroon">Filter by State</h3>
                  <StateFilter
                    selectedState={selectedState}
                    onStateChange={setSelectedState}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-spiritual-maroon">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedTag("")}
                      className={cn(
                        "px-3 py-1 rounded-lg transition-colors",
                        !selectedTag ? "bg-spiritual-saffron/10 text-spiritual-ochre" : "hover:bg-gray-100 bg-gray-50"
                      )}
                    >
                      All
                    </button>

                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <button
                          key={category.name}
                          onClick={() => setSelectedTag(category.name)}
                          className={cn(
                            "px-3 py-1 rounded-lg transition-colors flex items-center gap-1",
                            selectedTag === category.name ? "bg-spiritual-saffron/10 text-spiritual-ochre" : "hover:bg-gray-100 bg-gray-50"
                          )}
                        >
                          <IconComponent className="h-3 w-3" />
                          <span>{category.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-spiritual-maroon">Price</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveSortOption("price-low")}
                      className={cn(
                        "px-3 py-1 rounded-lg transition-colors flex-1",
                        activeSortOption === "price-low" ? "bg-spiritual-saffron/10 text-spiritual-ochre" : "hover:bg-gray-100 bg-gray-50"
                      )}
                    >
                      Low to High
                    </button>
                    <button
                      onClick={() => setActiveSortOption("price-high")}
                      className={cn(
                        "px-3 py-1 rounded-lg transition-colors flex-1",
                        activeSortOption === "price-high" ? "bg-spiritual-saffron/10 text-spiritual-ochre" : "hover:bg-gray-100 bg-gray-50"
                      )}
                    >
                      High to Low
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-spiritual-maroon">Sort</h3>
                  <Select
                    defaultValue={activeSortOption}
                    onValueChange={(value) => setActiveSortOption(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Sort Alphabetically</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="name">Sort Alphabetically</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
            {/* Filters sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-spiritual-sandstone/10">
                <h3 className="font-semibold text-lg mb-3 text-spiritual-maroon">Filter by State</h3>
                <StateFilter
                  selectedState={selectedState}
                  onStateChange={setSelectedState}
                />
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-spiritual-sandstone/10">
                <h3 className="font-semibold text-lg mb-3 text-spiritual-maroon">Categories</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedTag("")}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-lg transition-colors",
                      !selectedTag ? "bg-spiritual-saffron/10 text-spiritual-ochre" : "hover:bg-gray-100"
                    )}
                  >
                    All Categories
                  </button>

                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.name}
                        onClick={() => setSelectedTag(category.name)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2",
                          selectedTag === category.name ? "bg-spiritual-saffron/10 text-spiritual-ochre" : "hover:bg-gray-100"
                        )}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span>{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-spiritual-sandstone/10">
                <h3 className="font-semibold text-lg mb-3 text-spiritual-maroon">Price Range</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveSortOption("price-low")}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-lg transition-colors",
                      activeSortOption === "price-low" ? "bg-spiritual-saffron/10 text-spiritual-ochre" : "hover:bg-gray-100"
                    )}
                  >
                    Low to High
                  </button>
                  <button
                    onClick={() => setActiveSortOption("price-high")}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-lg transition-colors",
                      activeSortOption === "price-high" ? "bg-spiritual-saffron/10 text-spiritual-ochre" : "hover:bg-gray-100"
                    )}
                  >
                    High to Low
                  </button>
                </div>
              </div>
            </div>

            {/* Temple listings */}
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <div className="text-gray-600">
                  <span className="font-medium text-spiritual-maroon">{sortedTemples.length}</span> temples found
                </div>

                <Select
                  defaultValue={activeSortOption}
                  onValueChange={(value) => setActiveSortOption(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Sort Alphabetically</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Sort Alphabetically</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {sortedTemples.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-4xl mb-4">🕉️</div>
                  <h3 className="text-xl font-medium text-spiritual-maroon mb-2">No temples found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {sortedTemples.map((temple, index) => {
                    const templeImages = getTempleImages(temple.id);
                    const templeImage = templeImages && templeImages.length > 0 ? templeImages[0] : "/lovable-uploads/placeholder.svg";
                    
                    return (
                      <motion.div
                        key={temple.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <div className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-spiritual-sandstone/10">
                          <div className="h-40 md:h-48 relative">
                            <ImageWithFallback
                              src={templeImage}
                              alt={temple.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <div className="absolute bottom-3 left-3 text-white">
                              <h3 className="font-bold text-lg">{temple.name}</h3>
                              <p className="text-sm text-white/90">{temple.location}</p>
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="flex items-center gap-1 mb-3">
                              {temple.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="bg-spiritual-saffron/10 text-spiritual-maroon text-xs px-2 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                              <TempleAttireInfo templeName={temple.name} templeType={temple.tags[0]} />
                            </div>
                            
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-sm">
                                {temple.price === 0 ? (
                                  <span className="text-green-600">Free Entry</span>
                                ) : (
                                  <span>From <span className="font-medium">₹{temple.price}</span></span>
                                )}
                              </span>
                              <CongestionIndicator level={temple.congestion || "low"} />
                            </div>
                            
                            <div className="flex gap-2">
                              <GuidedTourButton
                                templeName={temple.name}
                                templeTags={temple.tags}
                                variant="outline"
                                className="w-full"
                              />
                              <Button 
                                variant="default" 
                                className="w-full bg-spiritual-saffron hover:bg-spiritual-ochre"
                                asChild
                              >
                                <Link to={`/temple/${temple.id}`}>View Details</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Temple Listings */}
        {isMobile && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-gray-600">
                <span className="font-medium text-spiritual-maroon">{sortedTemples.length}</span> temples found
              </div>
            </div>

            {sortedTemples.length === 0 ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">🕉️</div>
                <h3 className="text-xl font-medium text-spiritual-maroon mb-2">No temples found</h3>
                <p className="text-gray-500">Try adjusting your filters or search criteria</p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedTemples.map((temple, index) => {
                  const templeImages = getTempleImages(temple.id);
                  const templeImage = templeImages && templeImages.length > 0 ? templeImages[0] : "/lovable-uploads/placeholder.svg";
                  
                  return (
                    <motion.div
                      key={temple.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                    >
                      <div className="flex bg-white rounded-xl overflow-hidden shadow-sm border border-spiritual-sandstone/10">
                        <div className="w-1/3 h-28 relative">
                          <ImageWithFallback
                            src={templeImage}
                            alt={temple.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="w-2/3 p-3 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h3 className="font-bold text-base">{temple.name}</h3>
                            </div>
                            <p className="text-xs text-gray-600 mb-1">{temple.location}</p>
                            <div className="flex flex-wrap gap-1 mb-1">
                              {temple.tags.slice(0, 1).map((tag) => (
                                <span
                                  key={tag}
                                  className="bg-spiritual-saffron/5 text-spiritual-maroon text-xs px-1.5 py-0.5 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs">
                              {temple.price === 0 ? (
                                <span className="text-green-600">Free</span>
                              ) : (
                                <span>₹{temple.price}</span>
                              )}
                            </span>
                            <Button 
                              variant="default" 
                              size="sm"
                              className="h-7 text-xs bg-spiritual-saffron hover:bg-spiritual-ochre"
                              asChild
                            >
                              <Link to={`/temple/${temple.id}`}>View Temple</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </MobileOptimizedLayout>
    </div>
  );
};

export default AllTemples;
