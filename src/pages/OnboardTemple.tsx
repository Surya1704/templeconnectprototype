import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, ArrowLeft } from "lucide-react";

const OnboardTemple = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-spiritual-saffron/10 text-spiritual-saffron">
          <Building2 className="w-7 h-7" />
        </div>
        <h1 className="font-fraunces text-4xl md:text-5xl text-spiritual-maroon">
          Bring Your Temple to Faith Connect
        </h1>
        <p className="text-spiritual-maroon/70 text-lg leading-relaxed">
          A premium institutional onboarding system for temple boards, trusts, HR&amp;CE
          departments, and independent temples. The verified application portal opens shortly.
        </p>
        <p className="text-sm text-spiritual-maroon/50">
          For early access, please reach out via the contact section.
        </p>
        <div className="pt-4">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardTemple;
