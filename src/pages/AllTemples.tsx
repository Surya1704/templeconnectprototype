
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { filterTemples, indianStates } from "@/data/temples";
import StateFilter from "@/components/StateFilter";
import CongestionIndicator from "@/components/CongestionIndicator";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const AllTemples = () => {
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedTag, setSelectedTag] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  const filteredTemples = filterTemples({
    state: selectedState,
    tag: selectedTag !== "all" ? selectedTag : "",
    search: searchQuery,
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredTemples.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTemples = filteredTemples.slice(indexOfFirstItem, indexOfLastItem);

  // Available tags from all temples
  const allTags = Array.from(
    new Set(
      filteredTemples.flatMap((temple) => temple.tags)
    )
  ).sort();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-start mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Explore Sacred Temples</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Discover temples across India, filter by state, and find information about darshan timings, 
          prasad offerings, and special ceremonies.
        </p>
        
        {/* Filters section */}
        <div className="w-full bg-white rounded-xl shadow-sm border p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search temples by name or location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <StateFilter 
                selectedState={selectedState} 
                onStateChange={setSelectedState} 
                showLabel={false}
              />
              
              <Select value={selectedTag} onValueChange={setSelectedTag}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by amenity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Amenities</SelectItem>
                  {allTags.map((tag) => (
                    <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          {filteredTemples.length} {filteredTemples.length === 1 ? 'temple' : 'temples'} found
          {filteredTemples.length > 0 && ` (showing ${indexOfFirstItem + 1}-${Math.min(indexOfLastItem, filteredTemples.length)})`}
        </p>
        <Button variant="outline" size="sm" className="flex gap-2">
          <Filter className="h-4 w-4" />
          More Filters
        </Button>
      </div>
      
      {filteredTemples.length === 0 ? (
        <div className="w-full py-16 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">No temples found</h3>
          <p className="text-gray-600">Try changing your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentTemples.map((temple) => (
            <Card key={temple.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Link to={`/temple/${temple.id}`}>
                  <div className="w-full h-48 bg-orange-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-800">{temple.name.charAt(0)}</span>
                  </div>
                </Link>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 bg-white/80 rounded-full hover:bg-white"
                >
                  <Heart className="h-5 w-5 text-orange-500" />
                </Button>
                
                <div className="absolute bottom-2 right-2">
                  <CongestionIndicator level={["low", "moderate", "high", "extreme"][Math.floor(Math.random() * 4)] as any} />
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Link 
                    to={`/temple/${temple.id}`}
                    className="text-lg font-semibold hover:text-orange-500"
                  >
                    {temple.name}
                  </Link>
                  <div className="flex items-center text-amber-500">
                    <span>★</span>
                    <span className="ml-1 text-sm text-gray-700">{temple.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-1">{temple.location}</p>
                <p className="text-gray-600 text-sm mb-3">{temple.hours}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {temple.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs rounded-full px-2 py-1 bg-orange-50 text-orange-800 border border-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {temple.tags.length > 3 && (
                    <span className="text-xs text-gray-500 py-1">
                      +{temple.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold">₹{temple.price}</span>
                    <span className="text-gray-500 text-sm ml-1">darshan</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                      Book
                    </Button>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                      Donate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination using shadcn/ui components */}
      {totalPages > 1 && (
        <div className="mt-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => handlePageChange(index + 1)}
                    isActive={currentPage === index + 1}
                    className="cursor-pointer"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default AllTemples;
