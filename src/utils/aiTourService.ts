
import { useToast } from "@/hooks/use-toast";
import { getTempleById } from "@/data/mergeTemples";

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

// Get temple-specific tour data
export const getTempleTourPoints = (templeName: string): Record<string, string> => {
  // This would normally come from a database, but we'll hardcode some examples
  const tourPoints: Record<string, Record<string, string>> = {
    "Brihadishwara Temple": {
      "Main Entrance": "The towering entrance known as 'gopuram' is an architectural marvel standing at 216 feet high, making it one of the tallest temple towers in India.",
      "Nandi Mandapam": "The massive monolithic Nandi (bull) statue, carved from a single stone, weighs approximately 25 tons and is one of the largest in India.",
      "Biggest Shiva Lingam": "This is one of the largest Shiva Lingams in India. The Lingam is made from a single piece of granite stone and represents the formless nature of Lord Shiva.",
      "Main Sanctum": "The sanctum houses the massive Lingam and is designed so that it's illuminated by natural light during specific times of the day.",
      "Dancing Hall": "This hall features intricate carvings depicting the 108 poses of the classical dance form Bharatanatyam."
    },
    "Meenakshi Temple": {
      "East Tower": "The eastern tower, with its thousands of colorful sculptures, is dedicated to Lord Shiva.",
      "Golden Lotus Tank": "This sacred tank is where devotees take ritual baths before worship. It's surrounded by a corridor with 12 intricately carved pillars.",
      "Hall of Thousand Pillars": "Actually containing 985 pillars, each one is carved with unique designs and when struck, produces a different musical note.",
      "Main Shrine": "The inner sanctum houses the self-manifested crystal lingam of Lord Sundareshwarar (Shiva).",
      "Meenakshi Shrine": "This shrine houses the beautiful emerald-colored idol of Goddess Meenakshi, who is believed to have fish-shaped eyes."
    },
    "Kashi Vishwanath": {
      "Main Ghat": "The main entrance facing the Ganges river is considered highly auspicious for ritual bathing before entering the temple.",
      "Golden Spire": "The temple's main spire is covered with 800 kg of gold, donated by Maharaja Ranjit Singh in the 19th century.",
      "Jyotirlinga": "This is one of the 12 special Shiva lingams across India believed to be self-manifested and representing infinite nature.",
      "Gyan Vapi Well": "Located in the temple complex, this well is considered to hold the knowledge of the universe.",
      "Shringar Gauri Shrine": "This shrine within the complex is dedicated to Goddess Parvati in her beautified form."
    },
    "Somnath Temple": {
      "Main Shrine": "Houses the sacred Jyotirlinga of Lord Somnath, one of the 12 sacred Jyotirlingas in India.",
      "Prabhas Patan Museum": "Displays artifacts excavated from the ruins of the old temple, showcasing its rich historical significance.",
      "Bhalka Tirth": "The sacred site where Lord Krishna is believed to have been accidentally wounded by a hunter's arrow.",
      "Surya Temple": "An ancient temple dedicated to the Sun God, showcasing exquisite architectural details.",
      "Dehotsarga": "The place where Lord Krishna is said to have left his mortal body and ascended to his heavenly abode."
    },
    "Kedarnath Temple": {
      "Main Sanctum": "Houses the conical shaped Shiva Lingam, which is the main object of worship and one of the 12 Jyotirlingas.",
      "Mandakini River": "The sacred river that flows near the temple, believed to absolve devotees of their sins.",
      "Bhairav Temple": "Dedicated to Bhairava, a fierce manifestation of Lord Shiva who is considered the protector of the area.",
      "Gandhi Sarovar": "A glacial lake located at an altitude of about 3,900 meters, named after Mahatma Gandhi.",
      "Chorabari Tal": "A glacier-fed lake that offers spectacular views of the surrounding Himalayan peaks."
    },
    "Mahakaleshwar Temple": {
      "Bhasm Aarti": "The famous ritual where Lord Shiva is worshipped with holy ash at dawn, unique to this temple.",
      "Nandi Hall": "Houses a large statue of Nandi, the bull mount of Lord Shiva, facing the main shrine.",
      "Omkareshwar Setu": "The bridge connecting the temple to the main city area, offering beautiful views.",
      "Underground Garbhagriha": "The unique underground sanctum sanctorum where the Jyotirlinga resides.",
      "Temple Tank": "The sacred water body where devotees take ritual baths before entering the temple."
    }
  };
  
  return tourPoints[templeName] || {
    "Entrance": "The temple entrance features traditional architecture with intricate carvings.",
    "Main Sanctum": "The main sanctum houses the deity and is the most sacred part of the temple.",
    "Meditation Area": "A peaceful space designated for quiet reflection and spiritual practices.",
    "Ceremonial Hall": "Where major religious ceremonies and cultural events take place.",
    "Sacred Garden": "A beautifully maintained garden with plants mentioned in ancient texts."
  };
};

// Main AI Tour generation function
export const generateAITour = async (templeName: string, templateTags: string[], specificPoint?: string): Promise<AITourStep[]> => {
  console.log(`Generating AI tour for: ${templeName} with tags: ${templateTags.join(", ")}, point: ${specificPoint || "all"}`);
  
  // Wait a moment to simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // If a specific temple point is requested
  if (specificPoint) {
    const tourPoints = getTempleTourPoints(templeName);
    const pointDescription = tourPoints[specificPoint] || 
      "Detailed information about this specific point is currently being updated by our historians.";
    
    return [
      {
        title: specificPoint,
        description: pointDescription,
        imageUrl: `/lovable-uploads/${Math.floor(Math.random() * 12) + 1}.png`
      },
      {
        title: "Historical Context",
        description: `This area of ${templeName} has great historical significance. It represents the 
        ${templateTags.includes("Ancient") ? "ancient" : "traditional"} architectural style and spiritual practices 
        of the period when the temple was built.`
      }
    ];
  }
  
  // Generate custom content based on temple name
  let customDescription = "";
  let customImage = "";
  
  if (templeName.toLowerCase().includes("somnath")) {
    customDescription = "Somnath Temple is the first among the twelve Jyotirlingas, located in Prabhas Patan, Gujarat. The temple has been destroyed and rebuilt multiple times throughout history.";
    customImage = "/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png";
  } else if (templeName.toLowerCase().includes("kedarnath")) {
    customDescription = "Kedarnath Temple is located in the Himalayan ranges at an altitude of 3,583 meters. It is one of the most remote Jyotirlingas and remains closed during winter months due to heavy snowfall.";
    customImage = "/lovable-uploads/8a415d87-63d9-44f9-bb8e-583856ad0fa5.png";
  } else if (templeName.toLowerCase().includes("kashi") || templeName.toLowerCase().includes("vishwanath")) {
    customDescription = "The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva, located in Varanasi. It stands on the western bank of the holy river Ganga.";
    customImage = "/lovable-uploads/ea8558eb-ef06-4c98-8f0c-23095bb29074.png";
  }
  
  // Return general tour if no specific point
  return [
    {
      title: `Welcome to ${templeName}`,
      description: customDescription || `${templeName} is a beautiful temple known for ${templateTags.slice(0, 2).join(" and ")}. 
      As you begin your tour, take a moment to appreciate the stunning architecture and spiritual atmosphere.`,
      imageUrl: customImage || undefined
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

// Helper function to get valid temple IDs for the trip planner
const getValidTempleId = (index: number): string => {
  // Use actual temple IDs from the database instead of generating dummy ones
  const validIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return validIds[index % validIds.length];
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
  
  // Generate a plan with valid temple IDs
  const dummyPlan: AITripPlan = {
    days: Array(duration).fill(null).map((_, index) => ({
      day: index + 1,
      temples: Array(Math.floor(Math.random() * 3) + 2).fill(null).map((_, tIndex) => {
        const templeId = getValidTempleId(index * 3 + tIndex);
        const templeData = getTempleById(templeId);
        
        return {
          id: templeId, // Use valid temple ID
          name: templeData ? templeData.name : `${states[index % states.length]} Temple ${tIndex + 1}`,
          location: templeData ? templeData.location : `${states[index % states.length]} City ${tIndex + 1}`,
          state: templeData ? templeData.state : states[index % states.length],
          description: templeData ? 
            (templeData.description || `A beautiful temple with ${preferences ? preferences : "traditional"} architecture.`) :
            `A beautiful temple with ${preferences ? preferences : "traditional"} architecture.`
        };
      })
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

// Create a function to simulate location-based tours for Jyotirlingas
export const getJyotirlinga = (name: string): any => {
  const jyotirlingas = [
    {
      id: "somnath",
      name: "Somnath",
      location: "Gujarat",
      description: "First Jyotirlinga, destroyed and rebuilt multiple times throughout history",
      image: "/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png",
      history: "The Somnath temple has been destroyed and reconstructed several times in the past. The present temple was reconstructed in the Chalukya style of Hindu temple architecture and completed in 1951."
    },
    {
      id: "mallikarjuna",
      name: "Mallikarjuna",
      location: "Andhra Pradesh",
      description: "Located on Sri Sailam mountain, one of the 12 Jyotirlingas",
      image: "/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png",
      history: "The Mallikarjuna Temple is situated on a mountain on the bank of the Krishna river. The temple represents the southern Jyotirlinga of Lord Shiva."
    },
    {
      id: "mahakaleshwar",
      name: "Mahakaleshwar",
      location: "Madhya Pradesh",
      description: "One of the most sacred Jyotirlingas, situated in Ujjain",
      image: "/lovable-uploads/b668b893-dac5-4d67-9be0-425045941429.png",
      history: "The Mahakaleshwar Jyotirlinga is a revered shrine dedicated to Lord Shiva and one of the twelve Jyotirlingas. It is located in the ancient city of Ujjain."
    },
    // Add more Jyotirlinga details here
  ];

  return jyotirlingas.find(j => j.name.toLowerCase() === name.toLowerCase()) || jyotirlingas[0];
};
