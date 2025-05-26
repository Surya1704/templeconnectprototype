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
   "https://imgs.search.brave.com/r30S7CRq7dU4ZfLiUzEZSF0T4LhCGhZ3MlLd0Yxh1Vw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vT0hLaDJX/WGxiZE1GX0tmQVk1/R2l1ZHZYVnpXa2pI/XzktT1ZWSzB1TTFP/Zy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVuWlhS/MGVXbHRZV2RsL2N5/NWpiMjB2YVdRdk1U/WXcvT1RJek56WXpM/M0JvYjNSdi9MMmx1/WkdsaExYQjFibXBo/L1lpMWhiWEpwZEhO/aGNpMTIvYVdWM0xX/OW1MV2R2YkdSbC9i/aTEwWlcxd2JHVXVh/bkJuL1AzTTlOakV5/ZURZeE1pWjMvUFRB/bWF6MHlNQ1pqUFhv/dC9SRVJ6VEhoTFNW/aFJaekpEL1JuaHVT/M1pVZG5VemRHOXAv/Y0hCRGNWUkxWV0Zy/WmtadC9YM1pmZDNN/OQ"
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
  "36": [
  "https://images.unsplash.com/photo-1532339142462-f43ef81e7359?q=80&w=1974&auto=format&fit=crop"
],
"37": [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1974&auto=format&fit=crop"
],
"38": [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1974&auto=format&fit=crop"
],
"39": [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1974&auto=format&fit=crop"
],
"40": [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop"
],
"41": [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1974&auto=format&fit=crop"
],
"42": [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1974&auto=format&fit=crop"
],
"43": [
  "https://images.unsplash.com/photo-1581091012184-de308a30d2b7?q=80&w=1974&auto=format&fit=crop"
],
"44": [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1974&auto=format&fit=crop"
],
"45": [
  "https://images.unsplash.com/photo-1531497865144-0464ef8fb9c4?q=80&w=1974&auto=format&fit=crop"
],
"46": [
  "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1974&auto=format&fit=crop"
],
"47": [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1974&auto=format&fit=crop"
],
"48": [
  "https://images.unsplash.com/photo-1603575448372-044f6d1a8b5c?q=80&w=1974&auto=format&fit=crop"
],
"49": [
  "https://images.unsplash.com/photo-1581090700227-4c4ef90b88f9?q=80&w=1974&auto=format&fit=crop"
],
"50": [
  "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1974&auto=format&fit=crop"
],
"51": [
  "https://images.unsplash.com/photo-1603570419879-4d27fe6f4b45?q=80&w=1974&auto=format&fit=crop"
],
"52": [
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1974&auto=format&fit=crop"
],
"53": [
  "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1974&auto=format&fit=crop"
],
"54": [
  "https://images.unsplash.com/photo-1529244929461-e2d7aa9a8f49?q=80&w=1974&auto=format&fit=crop"
],
"55": [
  "https://images.unsplash.com/photo-1503437313881-503a91226402?q=80&w=1974&auto=format&fit=crop"
],
"56": [
  "https://imgs.search.brave.com/3VAb3e9TUtMjwEP7Ocwjx7oGZ0ZciGi5YwFIbgLxfuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vM2hIeGRo/NlNxcXVTVUdDV2FZ/SlQxd1c5SlQta1ct/Q2dpeHgyN28xeEFV/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlp/WlhOMC9ZbVZ1WjJG/c2RYSjFMbU52L2JT/OTNjQzFqYjI1MFpX/NTAvTDNWd2JHOWha/SE12TWpBeS9OQzh3/T0M5TFlXNXBjR0Zy/L1lXMHRWbWx1WVhs/aGEyRXQvVkdWdGNH/eGxMVlJwYldsdS9a/M011YW5Cbg"
],
"57": [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1974&auto=format&fit=crop"
],
"58": [
  "https://images.unsplash.com/photo-1549921296-3a7bccc53b9c?q=80&w=1974&auto=format&fit=crop"
],
"59": [
  "https://images.unsplash.com/photo-1603570419879-4d27fe6f4b45?q=80&w=1974&auto=format&fit=crop"
],
"60": [
  "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1974&auto=format&fit=crop"
],
"61": [
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1974&auto=format&fit=crop"
],
"62": [
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1974&auto=format&fit=crop"
],
"63": [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1974&auto=format&fit=crop"
],
"64": [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1974&auto=format&fit=crop"
],
"65": [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1974&auto=format&fit=crop"
],
"66": [
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1974&auto=format&fit=crop"
],
"67": [
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1974&auto=format&fit=crop"
],
"68": [
  "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1974&auto=format&fit=crop"
],
"69": [
  "https://images.unsplash.com/photo-1564866657315-73f56c3d998d?q=80&w=1974&auto=format&fit=crop"
],
"70": [
  "https://images.unsplash.com/photo-1581092919021-63f8300c7312?q=80&w=1974&auto=format&fit=crop"
],
"71": [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1974&auto=format&fit=crop"
],
"72": [
  "https://images.unsplash.com/photo-1531497865144-0464ef8fb9c4?q=80&w=1974&auto=format&fit=crop"
],
"73": [
  "https://images.unsplash.com/photo-1581090700227-4c4ef90b88f9?q=80&w=1974&auto=format&fit=crop"
],
"74": [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1974&auto=format&fit=crop"
],
"75": [
  "https://images.unsplash.com/photo-1532339142462-f43ef81e7359?q=80&w=1974&auto=format&fit=crop"
],
"76": [
  "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1974&auto=format&fit=crop"
],
"77": [
  "https://images.unsplash.com/photo-1578068299769-1e8ad4f6af7e?q=80&w=1974&auto=format&fit=crop"
],
"78": [
  "https://images.unsplash.com/photo-1552928266-5a2e87a0cf2e?q=80&w=1974&auto=format&fit=crop"
],
"79": [
  "https://images.unsplash.com/photo-1576928360699-34b59aa77ad5?q=80&w=1974&auto=format&fit=crop"
],
"80": [
  "https://images.unsplash.com/photo-1580500550469-2d4b7bd31ba5?q=80&w=1974&auto=format&fit=crop"
],
"81": [
  "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1974&auto=format&fit=crop"
],
"82": [
  "https://images.unsplash.com/photo-1603575448372-044f6d1a8b5c?q=80&w=1974&auto=format&fit=crop"
],
"83": [
  "https://images.unsplash.com/photo-1581091012184-de308a30d2b7?q=80&w=1974&auto=format&fit=crop"
],
"84": [
  "https://images.unsplash.com/photo-1537432376769-00a4c4a30d6f?q=80&w=1974&auto=format&fit=crop"
],
"85": [
  "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1974&auto=format&fit=crop"
],
"86": [
  "https://images.unsplash.com/photo-1531497865144-0464ef8fb9c4?q=80&w=1974&auto=format&fit=crop"
],
"87": [
  "https://images.unsplash.com/photo-1503437313881-503a91226402?q=80&w=1974&auto=format&fit=crop"
],
"88": [
  "https://images.unsplash.com/photo-1529244929461-e2d7aa9a8f49?q=80&w=1974&auto=format&fit=crop"
],
"89": [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1974&auto=format&fit=crop"
],
"90": [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1974&auto=format&fit=crop"
],
"91": [
  "https://images.unsplash.com/photo-1549921296-3a7bccc53b9c?q=80&w=1974&auto=format&fit=crop"
],
"92": [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop"
],
"93": [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1974&auto=format&fit=crop"
],
"94": [
  "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1974&auto=format&fit=crop"
],
"95": [
  "https://images.unsplash.com/photo-1603570419879-4d27fe6f4b45?q=80&w=1974&auto=format&fit=crop"
],
"96": [
  "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1974&auto=format&fit=crop"
],
"97": [
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1974&auto=format&fit=crop"
],
"98": [
  "https://images.unsplash.com/photo-1581092919021-63f8300c7312?q=80&w=1974&auto=format&fit=crop"
],
"99": [
  "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1974&auto=format&fit=crop"
],
"100": [
  "https://images.unsplash.com/photo-1564866657315-73f56c3d998d?q=80&w=1974&auto=format&fit=crop"
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
