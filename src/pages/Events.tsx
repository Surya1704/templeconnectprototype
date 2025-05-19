
import React from "react";
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageWithFallback from "@/components/ImageWithFallback";

const Events = () => {
  // Sample events data without images
  const events = [
    {
      id: "1",
      title: "Kumbh Mela",
      date: "January 15, 2025",
      time: "All Day",
      location: "Prayagraj, Uttar Pradesh",
      temple: "Triveni Sangam",
      description: "One of the largest religious gatherings in the world, the Kumbh Mela is celebrated every 12 years at the Triveni Sangam in Prayagraj.",
      attendees: 342,
      category: "festival",
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a78-shivaratrisomnath.jpg"
    },
    {
      id: "2",
      title: "Navratri Celebrations",
      date: "October 12-20, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Ahmedabad, Gujarat",
      temple: "Ambaji Temple",
      description: "Nine nights dedicated to the worship of Goddess Durga with traditional Garba dance performances and special puja ceremonies.",
      attendees: 156,
      category: "festival",
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a79-kartikpurnima.jpg"
    },
    {
      id: "3",
      title: "Maha Shivaratri",
      date: "March 8, 2025",
      time: "All Day",
      location: "Varanasi, Uttar Pradesh",
      temple: "Kashi Vishwanath",
      description: "The great night of Shiva celebrated with night-long temple rituals, fasting, and meditation dedicated to Lord Shiva.",
      attendees: 289,
      category: "ceremony",
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a82-shivaratrimahakal.jpg"
    },
    {
      id: "4",
      title: "Ganesh Chaturthi",
      date: "September 2, 2024",
      time: "8:00 AM - 9:00 PM",
      location: "Mumbai, Maharashtra",
      temple: "Siddhivinayak Temple",
      description: "A 10-day festival celebrating the birth of Lord Ganesha with elaborate idol installations, prayers, and immersion ceremonies.",
      attendees: 210,
      category: "festival",
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a80-chariotfestival.jpg"
    },
    {
      id: "5",
      title: "Rath Yatra",
      date: "July 7, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Puri, Odisha",
      temple: "Jagannath Temple",
      description: "The famous chariot festival where deities are placed on large chariots and pulled through the streets by thousands of devotees.",
      attendees: 387,
      category: "procession",
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a81-arudradarshan.jpg"
    },
    {
      id: "6",
      title: "Diwali Celebrations",
      date: "November 12, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Ayodhya, Uttar Pradesh",
      temple: "Ram Janmabhoomi",
      description: "The festival of lights celebrated with millions of diyas illuminating the temples, special prayers, and festive decorations.",
      attendees: 432,
      category: "festival",
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a96-diwali.jpg"
    },
    {
      id: "7",
      title: "Makar Sankranti",
      date: "January 14, 2025",
      time: "6:00 AM - 6:00 PM",
      location: "Mysuru, Karnataka",
      temple: "Chamundeshwari Temple",
      description: "A harvest festival marking the transition of the sun into Capricorn with special pujas, kite flying, and charitable activities.",
      attendees: 189,
      category: "ceremony",
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a83-shravanmonth.jpg"
    },
    {
      id: "8",
      title: "Guru Purnima",
      date: "July 21, 2024",
      time: "9:00 AM - 1:00 PM",
      location: "Rishikesh, Uttarakhand",
      temple: "Parmarth Niketan",
      description: "A day to honor spiritual and academic teachers with special worship services, knowledge-sharing sessions, and cultural programs.",
      attendees: 123,
      category: "ceremony",
      image: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a86-rameshwaramresthouse.jpg"
    }
  ];

  // Filter events by category
  const festivals = events.filter(event => event.category === "festival");
  const ceremonies = events.filter(event => event.category === "ceremony");
  const processions = events.filter(event => event.category === "procession");
  const upcoming = events.slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Sacred Events Calendar</h1>
        <p className="text-gray-600 mb-6">
          Discover upcoming temple events, festivals, and ceremonies across India
        </p>

        {/* Featured Event */}
        <div className="relative rounded-lg overflow-hidden mb-10">
          <ImageWithFallback 
            src={events[0].image}
            alt={events[0].title}
            className="w-full h-64 object-cover"
            fallbackSrc="/placeholder.svg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-center text-white">
            <span className="inline-block bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
              Featured Event
            </span>
            <h2 className="text-3xl font-bold mb-2">{events[0].title}</h2>
            <p className="mb-4 max-w-2xl">{events[0].description}</p>
            
            <div className="flex flex-wrap gap-4 mb-4 text-white/90">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{events[0].date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{events[0].time}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{events[0].location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{events[0].attendees} attending</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Register Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Events Tabs */}
      <Tabs defaultValue="upcoming" className="mb-6">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="festivals">Festivals</TabsTrigger>
          <TabsTrigger value="ceremonies">Ceremonies</TabsTrigger>
          <TabsTrigger value="processions">Processions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="festivals">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="ceremonies">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ceremonies.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="processions">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processions.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Calendar View */}
      <div className="bg-white rounded-lg shadow p-6 mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Monthly Calendar</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">&lt; Previous</Button>
            <Button variant="outline" size="sm">Next &gt;</Button>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-7 bg-gray-50">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-3 text-center font-medium border-b">{day}</div>
            ))}
          </div>
          
          <div className="grid grid-cols-7">
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 3; // Offset to start month correctly
              return (
                <div 
                  key={i} 
                  className={`p-3 min-h-24 border ${day <= 0 ? 'text-gray-400' : ''} ${
                    [7, 12, 21].includes(day) ? 'relative' : ''
                  }`}
                >
                  <span>{day <= 0 ? 30 + day : day > 31 ? day - 31 : day}</span>
                  
                  {day === 7 && (
                    <div className="mt-1 p-1 text-xs bg-orange-100 text-orange-800 rounded">
                      Rath Yatra
                    </div>
                  )}
                  
                  {day === 12 && (
                    <div className="mt-1 p-1 text-xs bg-purple-100 text-purple-800 rounded">
                      Navratri
                    </div>
                  )}
                  
                  {day === 21 && (
                    <div className="mt-1 p-1 text-xs bg-blue-100 text-blue-800 rounded">
                      Guru Purnima
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Event card component
const EventCard = ({ event }: { event: any }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative h-48">
      <ImageWithFallback
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover"
        fallbackSrc="/placeholder.svg"
      />
      <div className="absolute top-2 right-2 bg-white/90 text-orange-500 text-xs font-medium px-2 py-1 rounded">
        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
      </div>
    </div>
    <CardContent className="p-5">
      <h3 className="font-bold text-lg mb-2">{event.title}</h3>
      
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4 text-orange-500" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="h-4 w-4 text-orange-500" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 text-orange-500" />
          <span>{event.location}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Users className="h-4 w-4" />
          <span>{event.attendees} attending</span>
        </div>
        
        <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600">
          <Link to={`/events/${event.id}`}>Details</Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default Events;
