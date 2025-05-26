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

// Map temple IDs to image arrays - using existing placeholder images that are actually available
export const templeImages: Record<string, string[]> = {
  // Jyotirlingas - using existing placeholder images
  "24": ["/lovable-uploads/8954a8b9-9631-4a12-8bbb-02d9615d4c76.png"],
  "25": ["/lovable-uploads/adc13ff4-6e68-4df2-aa6c-ba386b70fcc9.png"],
  "26": ["/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png"],
  "27": ["/lovable-uploads/b668b893-dac5-4d67-9be0-425045941429.png"],
  "28": ["/lovable-uploads/bed64bd3-3688-44d2-9bad-a6918b67c9a6.png"],
  "29": ["/lovable-uploads/bff90acf-434f-4b5d-a02a-f8cd060e2ec9.png"],
  "30": ["/lovable-uploads/c868ae47-1318-4239-9e0b-8e11ffd2ab53.png"],
  "31": ["/lovable-uploads/dc0a16f8-c635-404e-8e78-b77eb4b37792.png"],
  "32": ["/lovable-uploads/ea3c8734-1903-4391-bad2-38836ad90d38.png"],
  "33": ["/lovable-uploads/ea8558eb-ef06-4c98-8f0c-23095bb29074.png"],
  "34": ["/lovable-uploads/f6e17f2f-fd67-45c1-8f9b-bdd05ef346ce.png"],
  "35": ["/lovable-uploads/960cbaec-20d3-4cc9-b47c-b237a3a0301d.png"],
  // Other popular temples
  "1": ["/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png"],
  "2": ["/lovable-uploads/28a331ad-d3c0-4157-8b9a-32af5d26e785.png"],
  "3": ["/lovable-uploads/3c73bbb4-d8d9-439c-bac6-16dfc1940d71.png"],
  "4": ["/lovable-uploads/3e630441-b218-447f-a772-6d16110739b2.png"],
  "5": ["/lovable-uploads/55fb5f1f-b855-4295-a028-e2385fe97d48.png"],
  "6": ["/lovable-uploads/5ef6ad5e-6ea5-4e4f-b2da-57175381c635.png"],
  "7": ["/lovable-uploads/79f0f7ee-07d3-44a6-a1b9-3e35e6530e64.png"],
  "8": ["/lovable-uploads/8a415d87-63d9-44f9-bb8e-583856ad0fa5.png"]
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
  return templeImages[numericId] || ["/placeholder.svg"];
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
