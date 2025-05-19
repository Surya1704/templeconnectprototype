
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { 
  BadgeIndianRupee, 
  Building, 
  Users, 
  CheckCircle2, 
  BadgeDollarSign, 
  CreditCard, 
  Banknote, 
  Smartphone, 
  Globe, 
  Bitcoin,
  Pray
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { temples } from "@/data/temples";

type DonationFormValues = {
  templeId: string;
  amount: string;
  customAmount: string;
  paymentMethod: "card" | "upi" | "netbanking" | "wallet" | "international" | "crypto";
};

const DonationPage = () => {
  const { toast } = useToast();
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const predefinedAmounts = ["101", "501", "1001", "2100"];
  
  const form = useForm<DonationFormValues>({
    defaultValues: {
      templeId: "all",
      amount: "501",
      customAmount: "",
      paymentMethod: "card",
    },
  });
  
  const selectedAmount = form.watch("amount");
  const customAmount = form.watch("customAmount");

  const handleDonation = (data: DonationFormValues) => {
    const finalAmount = data.amount === "custom" ? data.customAmount : data.amount;
    const templeInfo = data.templeId === "all" ? "All Temples (General Fund)" : 
      temples.find(t => t.id === data.templeId)?.name || "Unknown Temple";
    
    toast({
      title: "Donation Submitted",
      description: `Thank you for your ${donationType} donation of ₹${finalAmount} to ${templeInfo}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side - Why Donate */}
        <div>
          <h1 className="text-3xl font-bold text-orange-800 mb-10">Why Donate?</h1>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Building className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Temple Maintenance</h3>
                <p className="text-gray-600">
                  Help maintain ancient temple structures and preserve their architectural heritage.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Support Priests & Services</h3>
                <p className="text-gray-600">
                  Support priests and staff who maintain daily rituals and ceremonies.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Programs</h3>
                <p className="text-gray-600">
                  Fund educational programs, festivals, and community services provided by temples.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 p-6 bg-orange-50 rounded-lg border border-orange-200">
            <h3 className="text-lg font-medium mb-3">Your Impact</h3>
            <p className="text-gray-600 mb-4">
              Your generous donations help preserve our cultural heritage and traditions for future generations.
              Every contribution, regardless of size, makes a meaningful difference.
            </p>
            <div className="flex items-center gap-2 text-orange-600">
              <BadgeIndianRupee className="h-5 w-5" />
              <span className="font-medium">100% of your donation goes directly to the temples</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Donation Form */}
        <div>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="bg-orange-600 text-white p-6 rounded-t-lg">
                <h2 className="text-2xl font-bold mb-1">Make a Donation</h2>
                <p>Support temples across India</p>
              </div>
              
              <div className="p-6">
                <Tabs 
                  defaultValue="one-time" 
                  className="mb-6" 
                  onValueChange={(v) => setDonationType(v as "one-time" | "monthly")}
                >
                  <TabsList className="grid grid-cols-2 w-full">
                    <TabsTrigger value="one-time">One-time</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleDonation)} className="space-y-6">
                    <div>
                      <label className="font-medium block mb-2">Select Temple</label>
                      <FormField
                        control={form.control}
                        name="templeId"
                        render={({ field }) => (
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a temple" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Temples (General Fund)</SelectItem>
                              {temples.map((temple) => (
                                <SelectItem key={temple.id} value={temple.id}>
                                  {temple.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    
                    <div>
                      <label className="font-medium block mb-2">Donation Amount (₹)</label>
                      <div className="grid grid-cols-4 gap-3 mb-3">
                        {predefinedAmounts.map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant={selectedAmount === amount ? "default" : "outline"}
                            className={selectedAmount === amount ? "bg-orange-600 hover:bg-orange-700" : "border-orange-200 hover:border-orange-500"}
                            onClick={() => form.setValue("amount", amount)}
                          >
                            ₹{amount}
                          </Button>
                        ))}
                      </div>
                      
                      <div className="relative">
                        <Input
                          placeholder="Other amount"
                          value={selectedAmount === "custom" ? customAmount : ""}
                          onChange={(e) => {
                            form.setValue("amount", "custom");
                            form.setValue("customAmount", e.target.value);
                          }}
                          className="pl-8"
                        />
                        <div className="absolute left-3 top-2.5 text-gray-500">₹</div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="font-medium block mb-2">Payment Method</label>
                      <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="space-y-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                              <FormControl>
                                <RadioGroupItem value="card" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex items-center">
                                <CreditCard className="h-5 w-5 mr-2 text-orange-600" />
                                Credit/Debit Card
                              </FormLabel>
                            </FormItem>
                            
                            <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                              <FormControl>
                                <RadioGroupItem value="upi" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex items-center">
                                <Smartphone className="h-5 w-5 mr-2 text-orange-600" />
                                UPI/Mobile Wallet
                              </FormLabel>
                            </FormItem>
                            
                            <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                              <FormControl>
                                <RadioGroupItem value="netbanking" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex items-center">
                                <Banknote className="h-5 w-5 mr-2 text-orange-600" />
                                Net Banking
                              </FormLabel>
                            </FormItem>
                            
                            <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                              <FormControl>
                                <RadioGroupItem value="crypto" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex items-center">
                                <Bitcoin className="h-5 w-5 mr-2 text-orange-600" />
                                Cryptocurrency
                              </FormLabel>
                            </FormItem>
                            
                            <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                              <FormControl>
                                <RadioGroupItem value="international" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex items-center">
                                <Globe className="h-5 w-5 mr-2 text-orange-600" />
                                International Payment
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        )}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 text-lg flex items-center justify-center gap-2"
                    >
                      <BadgeDollarSign className="h-5 w-5" />
                      Donate Now
                    </Button>
                  </form>
                </Form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
