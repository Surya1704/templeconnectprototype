
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, Plus, Minus, Users, Calendar as CalendarIcon } from "lucide-react";
import { temples } from "@/data/temples";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

interface PoojaType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  templeId: string;
}

const poojaTypes: PoojaType[] = [
  {
    id: "1",
    name: "Abhishekam",
    description: "Sacred bathing ritual of the deity with various auspicious substances",
    duration: "45 minutes",
    price: 501,
    image: "https://images.unsplash.com/photo-1609603627865-3da33acafa9a?q=80&w=1990&auto=format&fit=crop",
    templeId: "1"
  },
  {
    id: "2",
    name: "Sahasranama Archana",
    description: "Worship with recitation of 1008 divine names",
    duration: "60 minutes",
    price: 351,
    image: "https://images.unsplash.com/photo-1608638562346-20d75541bf83?q=80&w=1974&auto=format&fit=crop",
    templeId: "2"
  },
  {
    id: "3",
    name: "Ganapati Homam",
    description: "Fire ritual to Lord Ganesha for removing obstacles",
    duration: "90 minutes",
    price: 1001,
    image: "https://images.unsplash.com/photo-1618074392982-9422a2439b95?q=80&w=2070&auto=format&fit=crop",
    templeId: "3"
  },
  {
    id: "4",
    name: "Maha Arti",
    description: "Special lamp offering to the deity with mantra chanting",
    duration: "30 minutes",
    price: 251,
    image: "https://images.unsplash.com/photo-1617526793955-cbd3a711c78f?q=80&w=1974&auto=format&fit=crop",
    templeId: "1"
  },
  {
    id: "5",
    name: "Satyanarayan Puja",
    description: "Ceremony dedicated to Lord Vishnu for prosperity and wellbeing",
    duration: "120 minutes",
    price: 1201,
    image: "https://images.unsplash.com/photo-1592305577442-e7c451262729?q=80&w=2070&auto=format&fit=crop",
    templeId: "2"
  },
  {
    id: "6",
    name: "Rudrabhishek",
    description: "Special Abhishekam for Lord Shiva with Vedic mantras",
    duration: "90 minutes",
    price: 1101,
    image: "https://images.unsplash.com/photo-1621166097506-033a99850f12?q=80&w=1974&auto=format&fit=crop",
    templeId: "4"
  }
];

interface BookingItem {
  poojaId: string;
  templeId: string;
  date: string;
  time: string;
  participants: number;
  gotra: string;
  specialRequests: string;
}

const PoojaBooking = () => {
  const [selectedTempleId, setSelectedTempleId] = useState<string>("1");
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [selectedPoojaId, setSelectedPoojaId] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<string>("");
  const [bookingTime, setBookingTime] = useState<string>("08:00");
  const [participants, setParticipants] = useState<number>(1);
  const [gotra, setGotra] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [showDialog, setShowDialog] = useState(false);
  const [myBookings, setMyBookings] = useState<BookingItem[]>([]);
  const { toast } = useToast();

  // Filter pooja types by temple
  const filteredPoojaTypes = poojaTypes.filter(pooja => pooja.templeId === selectedTempleId);
  
  // Get temple by id
  const getTemple = (id: string) => {
    return temples.find(temple => temple.id === id);
  };
  
  // Get pooja by id
  const getPooja = (id: string) => {
    return poojaTypes.find(pooja => pooja.id === id);
  };

  const handleAddBooking = () => {
    if (!selectedPoojaId || !bookingDate || !bookingTime) {
      toast({
        title: "Missing Information",
        description: "Please select pooja type, date and time",
        variant: "destructive"
      });
      return;
    }

    const newBooking: BookingItem = {
      poojaId: selectedPoojaId,
      templeId: selectedTempleId,
      date: bookingDate,
      time: bookingTime,
      participants,
      gotra,
      specialRequests
    };

    setBookings(prev => [...prev, newBooking]);
    
    toast({
      title: "Added to cart",
      description: `${getPooja(selectedPoojaId)?.name} added to your booking cart`
    });

    // Reset form
    setSelectedPoojaId("");
    setParticipants(1);
    setGotra("");
    setSpecialRequests("");
  };

  const handleRemoveBooking = (index: number) => {
    setBookings(prev => prev.filter((_, i) => i !== index));
  };

  const calculateTotalPrice = () => {
    return bookings.reduce((total, booking) => {
      const pooja = getPooja(booking.poojaId);
      return total + (pooja ? pooja.price * booking.participants : 0);
    }, 0);
  };

  const handleCheckout = () => {
    if (bookings.length === 0) {
      toast({
        title: "No bookings",
        description: "Please add at least one pooja booking",
        variant: "destructive"
      });
      return;
    }

    // Add the current bookings to "My Bookings"
    setMyBookings(prev => [...bookings, ...prev]);
    
    toast({
      title: "Booking Successful",
      description: `${bookings.length} pooja${bookings.length > 1 ? 's' : ''} booked successfully`
    });

    // Clear cart
    setBookings([]);
  };

  const formatBookingDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Temple Pooja Booking</h1>
          <p className="text-gray-600">
            Book multiple poojas at various temples across India
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Select a Temple</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {temples.slice(0, 6).map((temple) => (
                  <div
                    key={temple.id}
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedTempleId === temple.id ? "ring-2 ring-orange-500" : ""
                    }`}
                    onClick={() => setSelectedTempleId(temple.id)}
                  >
                    <img 
                      src={temple.image} 
                      alt={temple.name} 
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-medium text-sm">{temple.name}</h3>
                      <p className="text-xs text-gray-500">{temple.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Select Pooja Type</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {filteredPoojaTypes.map((pooja) => (
                  <div
                    key={pooja.id}
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedPoojaId === pooja.id ? "ring-2 ring-orange-500" : ""
                    }`}
                    onClick={() => setSelectedPoojaId(pooja.id)}
                  >
                    <div className="flex h-full">
                      <div className="w-1/3">
                        <img 
                          src={pooja.image} 
                          alt={pooja.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-3">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{pooja.name}</h3>
                          <span className="font-bold">₹{pooja.price}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{pooja.description}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{pooja.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="date">Select Date</Label>
                  <Input 
                    id="date" 
                    type="date" 
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="time">Select Time</Label>
                  <Select value={bookingTime} onValueChange={setBookingTime}>
                    <SelectTrigger id="time" className="mt-1">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {["06:00", "08:00", "10:00", "12:00", "16:00", "18:00"].map((time) => (
                        <SelectItem key={time} value={time}>
                          {time.split(':')[0]}:{time.split(':')[1]} {parseInt(time.split(':')[0]) < 12 ? "AM" : "PM"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="participants">Number of Participants</Label>
                  <div className="flex items-center mt-1">
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={() => setParticipants(prev => Math.max(1, prev - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-4 w-8 text-center">{participants}</span>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={() => setParticipants(prev => Math.min(10, prev + 1))}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="gotra">Gotra (Optional)</Label>
                  <Input 
                    id="gotra" 
                    type="text" 
                    placeholder="Enter your gotra"
                    value={gotra}
                    onChange={(e) => setGotra(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="requests">Special Requests (Optional)</Label>
                <Input 
                  id="requests" 
                  type="text" 
                  placeholder="Any special requirements"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <Button 
                onClick={handleAddBooking}
                disabled={!selectedPoojaId || !bookingDate || !bookingTime}
                className="w-full bg-orange-500 hover:bg-orange-600"
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Your Bookings</h2>
                  <Dialog open={showDialog} onOpenChange={setShowDialog}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        My Bookings
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>My Pooja Bookings</DialogTitle>
                        <DialogDescription>
                          View all your confirmed pooja bookings
                        </DialogDescription>
                      </DialogHeader>
                      
                      {myBookings.length === 0 ? (
                        <div className="py-8 text-center">
                          <Calendar className="mx-auto h-12 w-12 text-gray-300 mb-2" />
                          <p className="text-gray-500">You don't have any confirmed pooja bookings</p>
                        </div>
                      ) : (
                        <div className="space-y-4 mt-4 max-h-[60vh] overflow-y-auto pr-2">
                          {myBookings.map((booking, index) => {
                            const pooja = getPooja(booking.poojaId);
                            const temple = getTemple(booking.templeId);
                            return (
                              <div key={index} className="border rounded-lg p-3">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="font-medium">{pooja?.name}</h4>
                                    <p className="text-sm text-gray-500">{temple?.name}</p>
                                  </div>
                                  <div className="bg-green-100 text-green-800 text-xs rounded-full px-2 py-1">
                                    Confirmed
                                  </div>
                                </div>
                                
                                <div className="mt-2 space-y-1 text-sm">
                                  <div className="flex items-center gap-2">
                                    <CalendarIcon className="h-3 w-3 text-gray-400" />
                                    <span>{formatBookingDate(booking.date)} at {booking.time}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Users className="h-3 w-3 text-gray-400" />
                                    <span>{booking.participants} {booking.participants > 1 ? "participants" : "participant"}</span>
                                  </div>
                                </div>
                                
                                <div className="mt-2 text-right">
                                  <span className="font-medium">₹{pooja ? pooja.price * booking.participants : 0}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Close</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                {bookings.length === 0 ? (
                  <div className="py-8 text-center">
                    <Calendar className="mx-auto h-12 w-12 text-gray-300 mb-2" />
                    <p className="text-gray-500">No bookings added yet</p>
                    <p className="text-sm text-gray-400 mt-1">Select a pooja and add to cart</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                      {bookings.map((booking, index) => {
                        const pooja = getPooja(booking.poojaId);
                        const temple = getTemple(booking.templeId);
                        return (
                          <div key={index} className="border rounded-lg p-3 relative">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute top-2 right-2 h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                              onClick={() => handleRemoveBooking(index)}
                            >
                              ✕
                            </Button>
                            
                            <div className="pr-6">
                              <h4 className="font-medium">{pooja?.name}</h4>
                              <p className="text-sm text-gray-500">{temple?.name}</p>
                            </div>
                            
                            <div className="mt-2 space-y-1 text-sm">
                              <div className="flex items-center gap-2">
                                <CalendarIcon className="h-3 w-3 text-gray-400" />
                                <span>{formatBookingDate(booking.date)} at {booking.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-3 w-3 text-gray-400" />
                                <span>{booking.participants} {booking.participants > 1 ? "participants" : "participant"}</span>
                              </div>
                            </div>
                            
                            <div className="mt-2 text-right">
                              <span className="font-medium">₹{pooja ? pooja.price * booking.participants : 0}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="border-t mt-4 pt-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">₹{calculateTotalPrice()}</span>
                      </div>
                      <div className="flex justify-between mb-4">
                        <span className="text-gray-600">Temple Service Fee</span>
                        <span className="font-medium">₹51</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>₹{calculateTotalPrice() + 51}</span>
                      </div>

                      <Button 
                        onClick={handleCheckout}
                        className="w-full bg-orange-500 hover:bg-orange-600 mt-6"
                      >
                        Book Now
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoojaBooking;
