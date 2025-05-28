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
    "https://www.citybit.in/wp-content/uploads/2023/08/Tirupati-Balaji-Temple.jpg"
  ],
  // Golden Temple - ID 2
  "2": [
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTuyrdbTd2MdbmhvpfMIyeyoiPfUSA-ydnw&s"
  ],
  // Lotus Temple - ID 3
  "3": [
    "https://sceneloc8.com/wp-content/uploads/2024/03/5-34.png"
  ],
  // Meenakshi Amman Temple - ID 4
  "4": [
    "https://admin.southindiatoursandtravels.com/pages/gallery/24742.jpg"
  ],
  // Jagannath Temple - ID 5
  "5": [
    "https://s7ap1.scene7.com/is/image/incredibleindia/sri-jagannath-temple-puri-odisha-1-attr-hero?qlt=82&ts=1726663747217"
  ],
  // Badrinath Temple - ID 7
  "7": [
    "https://majesticjourney.in/wp-content/uploads/2020/05/badrinath-temple.jpg"
  ],
  // Akshardham Temple - ID 12
  "12": [
    "https://temple.yatradham.org/public/Product/temple/temple_11AClJMV_202408181323200.jpg"
  ],
  // Shirdi Sai Baba Temple - ID 42
  "42": [
    "https://i.pinimg.com/736x/32/27/3b/32273b8b0a807e88d85c1c081e420219.jpg"
  ],
  // Kanipakam Vinayaka Temple - ID 56
  "56": [
    "https://i.pinimg.com/736x/85/45/29/854529ef2677ebe28d95a2e6f3ad5b52.jpg"
  ],
  // Jyotirlingas
  "24": [
    "https://i.pinimg.com/736x/cd/84/8d/cd848d413a478fa85d11e1068fb669f3.jpg"
  ],
  "25": [
    "https://i.pinimg.com/736x/93/59/70/93597094f822d72ffdef77060377da59.jpg"
  ],
  "26": [
    "https://i.pinimg.com/736x/09/29/b6/0929b612a990073813c7a0beb4379dbf.jpg"
  ],
  "27": [
    "https://i.pinimg.com/736x/00/00/bf/0000bf4d7ed3ed4e71cd26cd917b999f.jpg"
  ],
  "28": [
    "https://i.pinimg.com/736x/36/da/9d/36da9dea692a7f4b93d7705a824da3f1.jpg"
  ],
  "29": [
    "https://i.pinimg.com/736x/b0/f3/ea/b0f3eaf06804243e4012b3f0ca13664d.jpg"
  ],
  "30": [
    "https://i.pinimg.com/736x/bf/60/88/bf60886c58e4ffd17540c7f8e4f5d583.jpg"
  ],
  "31": [
    "https://i.pinimg.com/736x/69/3c/10/693c10b64f3e25876d9e56d324e5ebf0.jpg"
  ],
  "32": [
    "https://i.pinimg.com/736x/cf/79/ee/cf79eef56bd59e234c855407c7f655b2.jpg"
  ],
  "33": [
    "https://i.pinimg.com/736x/16/ba/94/16ba9415c8a9538d8a96142f5a415477.jpg"
  ],
  "34": [
    "https://i.pinimg.com/736x/d7/1c/56/d71c5636a100eab080d68b5d53906a7a.jpg"
  ],
  "35": [
    "https://i.pinimg.com/736x/88/1d/fb/881dfbb20a3c3fc4792f0a490e6c0edf.jpg"
  ],
  "36": [
    "https://images.unsplash.com/photo-1532339142462-f43ef81e7359?q=80&w=1974&auto=format&fit=crop"
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
