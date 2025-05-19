import { temples as originalTemples, Temple } from './temples';
import { extendedTemples } from './extendedTemples';
import { extendedTemples2 } from './extendedTemples2';
import { extendedTemples3 } from './extendedTemples3';
import { extendedTemples4 } from './extendedTemples4';
import { extendedTemples5 } from './extendedTemples5';
import { templeDetails, TempleDetails } from './templeDetails';

// This merges all the temple data into one array
export const allTemples: Temple[] = [
  ...originalTemples,
  ...extendedTemples,
  ...extendedTemples2,
  ...extendedTemples3,
  ...extendedTemples4,
  ...extendedTemples5
];

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
  "vaidyanath": "32",
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
  // Jyotirlingas
  "24": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a30-somnath1.jpg",
    "/lovable-uploads/8954a8b9-9631-4a12-8bbb-02d9615d4c76.png",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a31-somnath2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a32-somnath3.jpg"
  ],
  "25": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a33-rameshwaram1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a34-rameshwaram2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a35-rameshwaram3.jpg"
  ],
  "26": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a36-mahakaleshwar1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a37-mahakaleshwar2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a38-mahakaleshwar3.jpg"
  ],
  "27": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a39-omkareshwar1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a40-omkareshwar2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a41-omkareshwar3.jpg"
  ],
  "28": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a42-kedarnath1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a43-kedarnath2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a44-kedarnath3.jpg"
  ],
  "29": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a45-bhimashankar1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a46-bhimashankar2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a47-bhimashankar3.jpg"
  ],
  "30": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a48-kashi1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a49-kashi2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a50-kashi3.jpg"
  ],
  "31": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a51-trimbakeshwar1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a52-trimbakeshwar2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a53-trimbakeshwar3.jpg"
  ],
  "32": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a54-vaidyanath1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a55-vaidyanath2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a56-vaidyanath3.jpg"
  ],
  "33": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a57-nageshwar1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a58-nageshwar2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a59-nageshwar3.jpg"
  ],
  "34": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a60-mallikarjuna1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a61-mallikarjuna2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a62-mallikarjuna3.jpg"
  ],
  "35": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a63-grishneshwar1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a64-grishneshwar2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a65-grishneshwar3.jpg"
  ],
  // Other popular temples
  "1": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a66-tirupatibalaji1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a67-tirupatibalaji2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a68-tirupatibalaji3.jpg"
  ],
  "2": [
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a69-goldentemple1.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a70-goldentemple2.jpg",
    "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a71-goldentemple3.jpg"
  ]
  // Add more temple images as needed
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
  return templeImages[numericId] || ["/lovable-uploads/placeholder.svg"];
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
