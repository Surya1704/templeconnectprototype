
import { useToast } from "@/components/ui/use-toast";

// Types for AI responses
export interface AITourStep {
  title: string;
  description: string;
  imageUrl?: string;
}

export interface AITripPlan {
  days: {
    day: number;
    temples: Array<{
      id: string;
      name: string;
      location: string;
      state: string;
      description: string;
    }>;
  }[];
}

export interface DressCodeRecommendation {
  men: string[];
  women: string[];
  general: string[];
}

// Main AI Tour generation function
export const generateAITour = async (templeName: string, templateTags: string[]): Promise<AITourStep[]> => {
  // For now, we'll use a template-based approach since we don't have an actual AI backend
  console.log(`Generating AI tour for: ${templeName} with tags: ${templateTags.join(", ")}`);
  
  // Wait a moment to simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    {
      title: `Welcome to ${templeName}`,
      description: `${templeName} is a beautiful temple known for ${templateTags.slice(0, 2).join(" and ")}. 
      As you begin your tour, take a moment to appreciate the stunning architecture and spiritual atmosphere.`
    },
    {
      title: "Historical Background",
      description: `Built centuries ago, this temple has witnessed many historical events. 
      The architectural style reflects the ${templateTags.includes("Ancient") ? "ancient" : "traditional"} 
      craftsmanship of the region, with intricate carvings and symbolic representations.`
    },
    {
      title: "Main Sanctum",
      description: `The main sanctum houses the primary deity and is considered the most sacred part of the temple. 
      Devotees come here to offer prayers and seek blessings. The sanctum follows ${templateTags.includes("Dravidian") ? "Dravidian" : "traditional"} 
      architectural principles.`
    },
    {
      title: "Temple Rituals",
      description: `Daily rituals include morning and evening prayers, aarti ceremonies, and special celebrations 
      during festivals. These rituals have been preserved for generations, maintaining the spiritual traditions.`
    },
    {
      title: "Spiritual Significance",
      description: `This temple holds great spiritual significance for devotees. The peaceful environment 
      provides a perfect setting for meditation and spiritual reflection. Many visitors report feeling a 
      sense of calm and connection when visiting.`
    },
    {
      title: "Dress Code & Etiquette",
      description: `When visiting ${templeName}, it's important to dress modestly and respectfully. 
      Men should wear shirts with sleeves and full-length pants. Women should wear sarees, salwar kameez, 
      or long skirts with covered shoulders. Everyone must remove footwear before entering the temple premises.`
    }
  ];
};

// Trip planner AI function
export const generateAITripPlan = async (
  states: string[], 
  duration: number, 
  preferences: string
): Promise<AITripPlan> => {
  console.log(`Generating AI trip plan for states: ${states.join(", ")}, duration: ${duration}, preferences: ${preferences}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // This would be replaced with actual AI-generated content in a production environment
  const dummyPlan: AITripPlan = {
    days: Array(duration).fill(null).map((_, index) => ({
      day: index + 1,
      temples: Array(Math.floor(Math.random() * 3) + 2).fill(null).map((_, tIndex) => ({
        id: `temple-${index}-${tIndex}`,
        name: `${states[index % states.length]} Temple ${tIndex + 1}`,
        location: `${states[index % states.length]} City ${tIndex + 1}`,
        state: states[index % states.length],
        description: `A beautiful temple with ${preferences ? preferences : "traditional"} architecture.`
      }))
    }))
  };
  
  return dummyPlan;
};

// Function to get dress code recommendations for temples
export const getTempleDressCode = async (templeName: string, templeType: string): Promise<DressCodeRecommendation> => {
  console.log(`Generating dress code for: ${templeName}, type: ${templeType}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Base recommendations
  const baseRecommendations = {
    men: ["Shirts with sleeves", "Full-length pants or dhotis", "Avoid leather items inside the temple"],
    women: ["Sarees, salwar kameez, or long skirts", "Covered shoulders", "Covered head in some temples"],
    general: ["Remove footwear before entering", "Avoid revealing or tight clothing", "Dress modestly and respectfully"]
  };

  if (templeType.toLowerCase().includes("modern")) {
    return {
      men: ["Formal or smart casual attire", "Full-length pants", "Shirts with sleeves"],
      women: ["Modest dresses or pants", "Covered shoulders", "Scarves for head covering if needed"],
      general: ["Remove footwear before entering", "Avoid shorts and sleeveless tops", "Dress modestly"]
    };
  }

  return baseRecommendations;
};
