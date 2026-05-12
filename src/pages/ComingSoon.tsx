
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft } from "lucide-react";
import MobileOptimizedLayout from "@/components/MobileOptimizedLayout";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-ivory/50 to-white flex items-center justify-center">
      <MobileOptimizedLayout>
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <div className="w-20 h-20 bg-spiritual-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 text-spiritual-saffron" />
            </div>
            <h1 className="text-3xl font-cinzel font-bold text-spiritual-maroon mb-4">
              Coming Soon
            </h1>
            <p className="text-gray-600 text-lg mb-2">
              🛠️ This service will be launching soon.
            </p>
            <p className="text-gray-500">
              Stay connected for updates!
            </p>
          </div>
          
          <div className="space-y-3">
            <Button 
              asChild 
              className="w-full bg-spiritual-saffron hover:bg-spiritual-ochre"
            >
              <Link to="/temples">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Temples
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              asChild 
              className="w-full border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon/5"
            >
              <Link to="/">
                Go to Homepage
              </Link>
            </Button>
          </div>
        </div>
      </MobileOptimizedLayout>
    </div>
  );
};

export default ComingSoon;
