
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flower } from "lucide-react"; // Changed from FlowerLotus to Flower which exists in lucide-react
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PoojaBooking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", { name, email, phone, date, occasion });
    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setOccasion("");
  };

  return (
    <div className="min-h-screen bg-spiritual-ivory/50 py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-spiritual-maroon mb-4">
            Pooja & Archana Booking
          </h1>
          <p className="text-xl text-spiritual-maroon/70 max-w-3xl mx-auto">
            Book a Pooja or Archana to receive divine blessings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md"
        >
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="occasion">Select Occasion</Label>
                  <Select onValueChange={setOccasion}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose an occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Birthday">Birthday</SelectItem>
                      <SelectItem value="Anniversary">Anniversary</SelectItem>
                      <SelectItem value="Special Pooja">Special Pooja</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">
                  Book Now <Flower className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PoojaBooking;
