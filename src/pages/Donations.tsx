
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { 
  BadgeIndianRupee, 
  Building, 
  Users, 
  CheckCircle2, 
  ExternalLink
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { temples } from "@/data/temples";

type DonationFormValues = {
  templeId: string;
};

const DonationPage = () => {
  const { toast } = useToast();
  
  const form = useForm<DonationFormValues>({
    defaultValues: {
      templeId: "",
    },
  });

  const handleDonation = (data: DonationFormValues) => {
    if (!data.templeId) {
      toast({
        title: "Please select a temple",
        description: "Choose a temple to proceed with donation",
        variant: "destructive",
      });
      return;
    }

    if (data.templeId === "all") {
      toast({
        title: "General Fund",
        description: "Redirecting to general temple fund donation portal...",
      });
      // You can replace this with actual general fund URL
      window.open("https://example.com/general-fund", "_blank");
      return;
    }

    const selectedTemple = temples.find(t => t.id === data.templeId);
    if (selectedTemple) {
      toast({
        title: "Redirecting to Temple Trust",
        description: `Taking you to ${selectedTemple.name}'s official donation page`,
      });
      // You can add actual temple trust URLs here
      // For now, using placeholder URLs
      window.open(`https://example.com/temple-trust/${selectedTemple.id}`, "_blank");
    }
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
                              <SelectValue placeholder="Select a temple to donate" />
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
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <ExternalLink className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-blue-900 mb-1">External Donation Portal</h4>
                          <p className="text-blue-700 text-sm">
                            You will be redirected to the selected temple's official donation website where you can complete your contribution securely.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 text-lg flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Proceed to Temple Trust
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
