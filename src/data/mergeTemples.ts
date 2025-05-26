import { temples as originalTemples, Temple } from './temples';
import { extendedTemples } from './extendedTemples';
import { extendedTemples2 } from './extendedTemples2';
import { extendedTemples3 } from './extendedTemples3';
import { extendedTemples4 } from './extendedTemples4';
import { extendedTemples5 } from './extendedTemples5';
import { templeDetails, TempleDetails } from './templeDetails';

// Filter out duplicate temples - specifically remove Bhimashankar duplicate (ID 81)
const filteredExtendedTemples4 = extendedTemples4.filter(temple => temple.id !== "81");

// Combine all temple arrays
const combinedTemples: Temple[] = [
  ...originalTemples,
  ...extendedTemples,
  ...extendedTemples2,
  ...extendedTemples3,
  ...filteredExtendedTemples4,
  ...extendedTemples5
];

// Remove duplicates based on temple name (case-insensitive)
const deduplicateTemples = (temples: Temple[]): Temple[] => {
  const seen = new Set<string>();
  return temples.filter(temple => {
    const normalizedName = temple.name.toLowerCase().trim();
    if (seen.has(normalizedName)) {
      console.log(`Removing duplicate temple: ${temple.name} (ID: ${temple.id})`);
      return false;
    }
    seen.add(normalizedName);
    return true;
  });
};

// This merges all the temple data into one array with duplicates removed
export const allTemples: Temple[] = deduplicateTemples(combinedTemples);

// Map of temple name slugs to IDs for easier lookup
const templeNameToIdMap: Record<string, string> = {
  "somnath": "24",
  "rameshwaram": "25",
  "mahakaleshwar": "26",
  "omkareshwar": "27",
  "kedarnath": "28",
  "bhimashankar": "29",
  "kashi-vishwanath": "30",
  "trimbakeshwar": "31",
  "baidyanath": "32", // Changed from "vaidyanath" to "baidyanath"
  "nageshwar": "33",
  "mallikarjuna": "34",
  "grishneshwar": "35"
};

// Enhanced getTempleById to support both numeric IDs and name-based IDs
export const getTempleById = (id: string) => {
  // If the ID is a name slug, convert it to numeric ID
  const numericId = templeNameToIdMap[id.toLowerCase()] || id;
  
  // Find the temple by ID
  const temple = allTemples.find((temple) => temple.id === numericId);
  
  if (!temple) {
    console.warn(`Temple with ID ${id} (mapped to ${numericId}) not found. Available IDs: ${allTemples.slice(0, 5).map(t => t.id).join(', ')}...`);
  }
  
  return temple;
};

// Function to get detailed information about a temple
export const getTempleDetails = (id: string): TempleDetails | undefined => {
  // If the ID is a name slug, convert it to numeric ID
  const numericId = templeNameToIdMap[id.toLowerCase()] || id;
  
  // Find the temple details
  return templeDetails[numericId];
};

// Function to filter temples by state
export const getTemplesByState = (state: string) => {
  if (state === "All States") {
    return allTemples;
  }
  return allTemples.filter((temple) => temple.state === state);
};

// Function to filter temples by tag
export const getTemplesByTag = (tag: string) => {
  if (!tag) {
    return allTemples;
  }
  return allTemples.filter((temple) => temple.tags.includes(tag));
};

// Function to filter temples by multiple criteria
export const filterTemples = ({ state, tag, search }: { state?: string; tag?: string; search?: string }) => {
  let filtered = allTemples;
  
  if (state && state !== "All States") {
    filtered = filtered.filter((temple) => temple.state === state);
  }
  
  if (tag && tag !== "all") {
    filtered = filtered.filter((temple) => temple.tags.includes(tag));
  }
  
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (temple) => 
        temple.name.toLowerCase().includes(searchLower) ||
        temple.location.toLowerCase().includes(searchLower) ||
        temple.state.toLowerCase().includes(searchLower)
    );
  }
  
  return filtered;
};

// Map temple IDs to image arrays - each temple gets multiple high-quality images
export const templeImages: Record<string, string[]> = {
  // Tirupati Balaji Temple - ID 1
  "1": [
    "https://www.shutterstock.com/shutterstock/photos/2460970041/display_1500/stock-photo-main-gopuram-of-balaji-temple-at-tirumala-tirupati-india-march-2460970041.jpg",
    "https://images.unsplash.com/photo-1600516124918-79a230d1b66f?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578068299769-1e8ad4f6af7e?q=80&w=1974&auto=format&fit=crop"
  ],
  // Golden Temple - ID 2
  "2": [
    "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583920772519-29e0c3c90156?q=80&w=1974&auto=format&fit=crop"
  ],
  // Lotus Temple - ID 3
  "3": [
    "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1974&auto=format&fit=crop"
  ],
  // Meenakshi Amman Temple - ID 4
  "4": [
    "https://images.unsplash.com/photo-1591014101761-a4172786fbbe?q=80&w=2071&auto=format&fit=crop"
  ],
  // Jagannath Temple - ID 5
  "5": [
    "https://images.unsplash.com/photo-1627894486874-b830e5a8be76?q=80&w=2070&auto=format&fit=crop"
  ],
  // Badrinath Temple - ID 7
  "7": [
    "https://images.unsplash.com/photo-1623953858703-9c7c4f5ceb73?q=80&w=1974&auto=format&fit=crop"
  ],
  // Akshardham Temple - ID 12
  "12": [
    "https://images.unsplash.com/photo-1545126178-862cdb469409?q=80&w=1974&auto=format&fit=crop"
  ],
  // Shirdi Sai Baba Temple - ID 42
  "42": [
    "https://images.unsplash.com/photo-1600516124918-79a230d1b66f?q=80&w=1974&auto=format&fit=crop"
  ],
  // Jyotirlingas
  "24": [
    "https://images.unsplash.com/photo-1582632728747-04b27b2d7c62?q=80&w=1974&auto=format&fit=crop"
  ],
  "25": [
    "https://images.unsplash.com/photo-1583920772519-29e0c3c90156?q=80&w=1974&auto=format&fit=crop"
  ],
  "26": [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1974&auto=format&fit=crop"
  ],
  "27": [
    "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1974&auto=format&fit=crop"
  ],
  "28": [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1974&auto=format&fit=crop"
  ],
  "29": [
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1974&auto=format&fit=crop"
  ],
  "30": [
    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1974&auto=format&fit=crop"
  ],
  "31": [
    "https://images.unsplash.com/photo-1580500550469-2d4b7bd31ba5?q=80&w=1974&auto=format&fit=crop"
  ],
  "32": [
    "https://images.unsplash.com/photo-1576928360699-34b59aa77ad5?q=80&w=1974&auto=format&fit=crop"
  ],
  "33": [
    "https://images.unsplash.com/photo-1552928266-5a2e87a0cf2e?q=80&w=1974&auto=format&fit=crop"
  ],
  "34": [
    "https://images.unsplash.com/photo-1578068299769-1e8ad4f6af7e?q=80&w=1974&auto=format&fit=crop"
  ],
  "35": [
    "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1974&auto=format&fit=crop"
  ]
};

// Prasad images by temple ID
export const prasadImages: Record<string, Record<string, string>> = {
  "24": {
    "Somnath Laddu": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a72-somnathladdu.jpg",
    "Dry Fruit Prasad": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a73-dryfruitprasad.jpg"
  },
  "25": {
    "Rameshwaram Sweet Rice": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a74-sweetrice.jpg",
    "Panchamrit": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a75-panchamrit.jpg"
  },
  "26": {
    "Mahakaleshwar Pedha": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a76-pedha.jpg",
    "Dry Fruit Mix": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a77-dryfruits.jpg"
  }
  // Add more prasad images for other temples
};

// Event images by temple ID
export const eventImages: Record<string, Record<string, string>> = {
  "24": {
    "Maha Shivaratri": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a78-shivaratrisomnath.jpg",
    "Kartik Purnima": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a79-kartikpurnima.jpg"
  },
  "25": {
    "Annual Chariot Festival": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a80-chariotfestival.jpg",
    "Arudra Darshan": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a81-arudradarshan.jpg"
  },
  "26": {
    "Maha Shivaratri": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a82-shivaratrimahakal.jpg",
    "Shravan Month": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a83-shravanmonth.jpg"
  }
  // Add more event images for other temples
};

// Accommodation images by temple ID
export const accommodationImages: Record<string, Record<string, string>> = {
  "24": {
    "Somnath Temple Trust Guest House": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a84-somnathguesthouse.jpg",
    "Nearby Hotels": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a85-somnathhotels.jpg"
  },
  "25": {
    "Rameshwaram Temple Rest House": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a86-rameshwaramresthouse.jpg",
    "Pilgrim Accommodations": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a87-pilgrimstay.jpg"
  },
  "26": {
    "Mahakaleshwar Temple Trust Guest House": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a88-mahakaleshwarguesthouse.jpg",
    "Devotee Accommodations": "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a89-devoteestay.jpg"
  }
  // Add more accommodation images for other temples
};

// Function to get images for a temple by ID
export const getTempleImages = (id: string): string[] => {
  // If the ID is a name slug, convert it to numeric ID
  const numericId = templeNameToIdMap[id.toLowerCase()] || id;
  
  // Return the image array for this temple, or a default image if not found
  return templeImages[numericId] || ["https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1974&auto=format&fit=crop"];
};

// Function to get prasad images for a temple by ID
export const getTemplePrasadImages = (id: string): Record<string, string> => {
  // If the ID is a name slug, convert it to numeric ID
  const numericId = templeNameToIdMap[id.toLowerCase()] || id;
  
  // Return the prasad images for this temple, or an empty object if not found
  return prasadImages[numericId] || {};
};

// Function to get event images for a temple by ID
export const getTempleEventImages = (id: string): Record<string, string> => {
  // If the ID is a name slug, convert it to numeric ID
  const numericId = templeNameToIdMap[id.toLowerCase()] || id;
  
  // Return the event images for this temple, or an empty object if not found
  return eventImages[numericId] || {};
};

// Function to get accommodation images for a temple by ID
export const getTempleAccommodationImages = (id: string): Record<string, string> => {
  // If the ID is a name slug, convert it to numeric ID
  const numericId = templeNameToIdMap[id.toLowerCase()] || id;
  
  // Return the accommodation images for this temple, or an empty object if not found
  return accommodationImages[numericId] || {};
};
