
import { temples as originalTemples, Temple } from './temples';
import { extendedTemples } from './extendedTemples';
import { extendedTemples2 } from './extendedTemples2';
import { extendedTemples3 } from './extendedTemples3';
import { extendedTemples4 } from './extendedTemples4';
import { extendedTemples5 } from './extendedTemples5';
import { templeDetails, TempleDetails } from './templeDetails';

// Filter out duplicate temples - specifically remove Bhimashankar duplicate (ID 81)
const filteredExtendedTemples4 = extendedTemples4.filter(temple => temple.id !== "81");

// Filter out removed temples (ID 66 and 87)
const filteredExtendedTemples2 = extendedTemples2.filter(temple => temple.id !== "66" && temple.id !== "87");

// Combine all temple arrays
const combinedTemples: Temple[] = [
  ...originalTemples,
  ...extendedTemples,
  ...filteredExtendedTemples2,
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
    "https://i.pinimg.com/736x/af/d0/58/afd058d7267b41f19f6bded357903146.jpg"
  ],
  // Shirdi Sai Baba Temple - ID 42
  "42": [
    "https://i.pinimg.com/736x/32/27/3b/32273b8b0a807e88d85c1c081e420219.jpg"
  ],
  // Kanipakam Vinayaka Temple - ID 56
  "56": [
    "https://i.pinimg.com/736x/85/45/29/854529ef2677ebe28d95a2e6f3ad5b52.jpg"
  ],
  // Updated temple images with your provided URLs
  "57": [
    "https://i.pinimg.com/736x/45/d6/55/45d6553f2e84b96f9e5d9ea944039a4b.jpg"
  ],
  "58": [
    "https://i.pinimg.com/736x/15/cb/4f/15cb4fe465442af1bd54bc295d6a4796.jpg"
  ],
  "59": [
    "https://i.pinimg.com/736x/9a/d1/ef/9ad1ef1ddd43513fdb30aafe360e1b96.jpg"
  ],
  "60": [
    "https://i.pinimg.com/736x/45/cc/0f/45cc0f66b2710c48d044f3ef3b5d9346.jpg"
  ],
  "61": [
    "https://i.pinimg.com/736x/29/52/73/29527361d968687d35a171ae418a9564.jpg"
  ],
  "62": [
    "https://i.pinimg.com/736x/9c/0f/5d/9c0f5d6da8120cbc97ed43ec995ac575.jpg"
  ],
  "63": [
    "https://i.pinimg.com/736x/42/2d/19/422d19eca7f96ec20a9eafad3ef4b13f.jpg"
  ],
  "64": [
    "https://i.pinimg.com/736x/0a/29/94/0a29948da31e6581e8f72a26d881eed9.jpg"
  ],
  "65": [
    "https://i.pinimg.com/736x/45/96/75/45967566ad0e150f5b9338b8125d1fb4.jpg"
  ],
  // Removed ID 66 (Baba Dhansar Temple)
  "67": [
    "https://i.pinimg.com/736x/df/50/07/df5007e9dd12950adc6edae03069c233.jpg"
  ],
  "68": [
    "https://i.pinimg.com/736x/de/45/2a/de452a9ebd5a3c0205f10a8b0fe81ef2.jpg"
  ],
  "69": [
    "https://i.pinimg.com/736x/32/04/0d/32040d72050834e813d28a264fc17bda.jpg"
  ],
  "70": [
    "https://i.pinimg.com/736x/93/21/97/93219730609d93701bebc135443d8a77.jpg"
  ],
  "71": [
    "https://i.pinimg.com/736x/54/5c/a1/545ca174de45f04ed17c553ae1568069.jpg"
  ],
  "72": [
    "https://i.pinimg.com/736x/bf/60/88/bf60886c58e4ffd17540c7f8e4f5d583.jpg"
  ],
  "73": [
    "https://i.pinimg.com/736x/c3/88/84/c38884ed136d73dc66b1ac3ec931dce6.jpg"
  ],
  "74": [
    "https://i.pinimg.com/736x/0b/13/06/0b130683f9b04666997bb5ca571d4c6d.jpg"
  ],
  "75": [
    "https://i.pinimg.com/736x/ca/9c/de/ca9cde57aa2ef1dc807de88282e5efb0.jpg"
  ],
  "76": [
    "https://i.pinimg.com/736x/ab/4a/b0/ab4ab0626602fb85dea5c4d665c90363.jpg"
  ],
  "77": [
    "https://i.pinimg.com/736x/88/1d/fb/881dfbb20a3c3fc4792f0a490e6c0edf.jpg"
  ],
  "78": [
    "https://imgs.search.brave.com/pbuTDwMChVY7iFTW4hkptviL411BEe_P9Lc0U3Y1P34/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc2FrYWxh/bS5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDUvQW1h/cmFyYW1hLVRlbXBs/ZS1Hb3B1cmFtLmpw/Zz9maXQ9NTQwLDY1/NSZzc2w9MQ"
  ],
  "79": [
    "https://i.pinimg.com/736x/0e/83/97/0e83974e37817619b285a15f4a0c1e42.jpg"
  ],
  "80": [
    "https://i.pinimg.com/736x/a6/8e/ca/a68eca302e0996ce1085c140202f9c48.jpg"
  ],
  "81": [
    "https://i.pinimg.com/736x/3c/a9/4d/3ca94d76eb9650121a0dbca9223f0ced.jpg"
  ],
  "82": [
    "https://i.pinimg.com/736x/aa/82/41/aa82419e422ca9106e939c0131f0067e.jpg"
  ],
  "83": [
    "https://i.pinimg.com/736x/0c/63/43/0c6343f6e8a0b66e35d889ebdc2ce09e.jpg"
  ],
  "84": [
    "https://i.pinimg.com/736x/5c/74/bd/5c74bd1beb1d7b21340a28da947bd3b6.jpg"
  ],
  "85": [
    "https://i.pinimg.com/736x/21/87/61/2187612930d5d9c7ab072381b77ad4b6.jpg"
  ],
  "86": [
    "https://i.pinimg.com/736x/df/86/e7/df86e70a23282ba200cb8444456e2405.jpg"
  ],
  // Removed ID 87 (Shri Kashi Math Temple)
  "88": [
    "https://i.pinimg.com/736x/60/6f/65/606f6553b09e09c6c646928356139f17.jpg"
  ],
  "89": [
    "https://imgs.search.brave.com/h9DUN-mJpbcxMUTstajNpQbljkFmdBDf7jHwiDkMdGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm92ZWQuY29t/L2FzdHJvcGVkaWEv/YXNzZXRzL2ltYWdl/cy90ZW1wbGVzL2Rp/dnlhLWRlc2FtLXRl/bXBsZXMvVGhpcnV2/YWxsdXItVmVlcmFy/YWdoYXZhLVN3YW15/LVRlbXBsZS5qcGc"
  ],
  "90": [
    "https://i.pinimg.com/736x/ad/27/84/ad2784a631fdd8dcc1bfeeaa2ca95446.jpg"
  ],
  "91": [
    "https://i.pinimg.com/736x/14/0b/5c/140b5c3b052b5886faaaef58ff3143ce.jpg"
  ],
  "92": [
    "https://i.pinimg.com/736x/52/6f/6e/526f6e98957796ff12c7e752749ce271.jpg"
  ],
  "93": [
    "https://i.pinimg.com/736x/a3/44/50/a34450f7a9c419d158fbebf0765322c6.jpg"
  ],
  "94": [
    "https://i.pinimg.com/736x/f5/a7/a2/f5a7a26d3dadc7dd689365f83593dfbf.jpg"
  ],
  "95": [
    "https://i.pinimg.com/736x/fb/2c/a8/fb2ca85a9cb23cc23ac8859dbb6b6e84.jpg"
  ],
  "96": [
    "https://i.pinimg.com/736x/66/00/b9/6600b999d3f1443be7f0fcb413d8e9c1.jpg"
  ],
  "97": [
    "https://i.pinimg.com/736x/96/4f/02/964f02b23005ea033cad4b1732451a58.jpg"
  ],
  "98": [
    "https://i.pinimg.com/736x/ec/a8/63/eca86392c182c58c1ffcb6b4ffed9a19.jpg"
  ],
  "99": [
    "https://i.pinimg.com/736x/35/a3/43/35a3437ef3ae73d2a7390e88e23a08aa.jpg"
  ],
  "100": [
    "https://i.pinimg.com/736x/13/49/d4/1349d4a50c78bbfdea17360d14b6ebbd.jpg"
  ],
  "101": [
    "https://i.pinimg.com/736x/2c/6b/cd/2c6bcd201cc04ae94459a9a89fd67220.jpg"
  ],
  "102": [
    "https://i.pinimg.com/736x/44/73/eb/4473eb717a1bef31bbcc983b323a0e20.jpg"
  ],
  "103": [
    "https://i.pinimg.com/736x/7d/74/32/7d74321bdc6feca58fbb72ed2f945337.jpg"
  ],
  "104": [
    "https://i.pinimg.com/736x/f2/e3/7b/f2e37be39fe302a786abe78ceb4db786.jpg"
  ],
  "105": [
    "https://i.pinimg.com/736x/9e/d5/8f/9ed58f7a343bfed80dfbc71c24a19b1c.jpg"
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
