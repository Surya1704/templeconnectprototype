
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flower } from "lucide-react"; // Changed from Candle to Flower which exists in lucide-react
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label"; // Added missing Label import

const PujaTiming = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-spiritual-ivory/50 py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-spiritual-maroon mb-4">
            Puja & Archana Timings
          </h1>
          <p className="text-xl text-spiritual-maroon/70 max-w-3xl mx-auto">
            View the daily schedule for pujas and archanas at the temple.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md"
        >
          <Card>
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-semibold">
                Today's Schedule
              </CardTitle>
              <CardDescription>
                Select a date to view the puja timings for that day.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="center" side="bottom">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) =>
                          date > new Date() || date < new Date("2023-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-spiritual-maroon">
                  Morning Pujas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Flower className="h-5 w-5 text-spiritual-gold" />
                    <span>Abhishekam: 6:00 AM - 7:00 AM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Flower className="h-5 w-5 text-spiritual-gold" />
                    <span>Suprabhatam: 7:00 AM - 7:30 AM</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-spiritual-maroon">
                  Afternoon Pujas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Flower className="h-5 w-5 text-spiritual-gold" />
                    <span>Ucha Kala Puja: 12:00 PM - 12:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-spiritual-maroon">
                  Evening Pujas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Flower className="h-5 w-5 text-spiritual-gold" />
                    <span>Pradosham: 6:00 PM - 7:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Flower className="h-5 w-5 text-spiritual-gold" />
                    <span>Sayana Aarti: 8:30 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Book a Puja</Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PujaTiming;
