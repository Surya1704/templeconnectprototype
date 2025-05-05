
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterTemples } from "@/data/mergeTemples";
import StateFilter from "@/components/StateFilter";
import { categories, indianStates } from "@/data/temples";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import CongestionIndicator from "@/components/CongestionIndicator";
import { motion } from "framer-motion";

const AllTemples = () => {
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedTag, setSelectedTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTemples, setFilteredTemples] = useState(filterTemples({}));
  const [activeSortOption, setActiveSortOption] = useState("popularity");

  useEffect(() => {
    setFilteredTemples(filterTemples({
      state: selectedState,
      tag: selectedTag,
      search: searchQuery,
    }));
  }, [selectedState, selectedTag, searchQuery]);

  // Sorted based on selected option
  const sortedTemples = [...filteredTemples].sort((a, b) => {
    if (activeSortOption === "popularity") {
      return b.rating - a.rating;
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
    <div className="min-h-screen bg-gradient-to-b from-spiritual-ivory/50 to-white pt-8 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon">Explore Temples</h1>
            <p className="text-sm md:text-base text-gray-600 mt-2">Discover sacred destinations across India</p>
          </div>

          <div className="flex w-full md:w-auto items-center gap-2">
            <Input
              placeholder="Search temples..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-xs"
            />
            <Button variant="default" size="icon" className="shrink-0 bg-spiritual-saffron hover:bg-spiritual-ochre">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

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
                  <SelectItem value="popularity">Sort by Popularity</SelectItem>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedTemples.map((temple, index) => (
                  <motion.div
                    key={temple.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link
                      to={`/temple/${temple.id}`}
                      className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-spiritual-sandstone/10"
                    >
                      <div className="h-48 bg-spiritual-sandstone/30 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-3 right-3">
                          <div className="flex items-center gap-1 bg-white/90 rounded-full py-1 px-2">
                            <span className="text-spiritual-ochre">★</span>
                            <span className="text-sm font-medium">{temple.rating}</span>
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-3 text-white">
                          <h3 className="font-bold text-lg">{temple.name}</h3>
                          <p className="text-sm text-white/90">{temple.location}</p>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center gap-1 mb-3">
                          {temple.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="bg-spiritual-saffron/10 text-spiritual-maroon text-xs px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm">
                            {temple.price === 0 ? (
                              <span className="text-green-600">Free Entry</span>
                            ) : (
                              <span>From <span className="font-medium">₹{temple.price}</span></span>
                            )}
                          </span>
                          <CongestionIndicator level={temple.congestion || "low"} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTemples;
