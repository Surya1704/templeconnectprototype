import { Flame, Mountain, Church, Book, Home, Users, Sun, Moon, Star, Waves } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Temple {
  id: string;
  name: string;
  location: string;
  state: string;
  rating: number;
  image: string;
  hours: string;
  price: number;
  tags: string[];
  description?: string;
}

export const temples: Temple[] = [
  {
    id: "1",
    name: "Varanasi Kashi Vishwanath",
    location: "Varanasi, Uttar Pradesh",
    state: "Uttar Pradesh",
    rating: 4.92,
    image: "https://images.unsplash.com/photo-1566636544546-61d736ee499e?q=80&w=1974&auto=format&fit=crop",
    hours: "Open daily 3:00 AM - 11:00 PM",
    price: 500,
    tags: ["Darshan", "Aarti", "Prasad"],
    description: "One of the most famous Hindu temples dedicated to Lord Shiva. It is one of the twelve Jyotirlingas, the holiest of Shiva temples. The main deity is known by the names Shri Vishwanath and Vishweshwara (IAST: Vishveshvara) literally meaning Lord of the Universe."
  },
  {
    id: "2",
    name: "Tirupati Balaji Temple",
    location: "Tirupati, Andhra Pradesh",
    state: "Andhra Pradesh",
    rating: 4.85,
    image: "https://images.unsplash.com/photo-1621831714462-bec666e92454?q=80&w=1974&auto=format&fit=crop",
    hours: "Booking required",
    price: 300,
    tags: ["Darshan", "Prasad", "Accommodation"],
    description: "Sri Venkateswara Swami Temple is a Hindu temple situated in the hill town of Tirumala at Tirupati in Tirupati district of Andhra Pradesh, India. The Temple is dedicated to Lord Sri Venkateswara, an incarnation of Vishnu, who is believed to have appeared here to save mankind from trials and troubles of Kali Yuga."
  },
  {
    id: "3",
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    state: "Punjab",
    rating: 4.98,
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop",
    hours: "Open 24 hours",
    price: 0,
    tags: ["Darshan", "Langar", "Amrit Sarovar"],
    description: "The Golden Temple, also known as Harmandir Sahib, is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. The temple is built around a man-made pool (sarovar) that was completed by the fourth Sikh Guru, Guru Ram Das, in 1577."
  },
  {
    id: "4",
    name: "Meenakshi Amman Temple",
    location: "Madurai, Tamil Nadu",
    state: "Tamil Nadu",
    rating: 4.91,
    image: "https://images.unsplash.com/photo-1591014101761-a4172786fbbe?q=80&w=2071&auto=format&fit=crop",
    hours: "Open 5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM",
    price: 100,
    tags: ["Darshan", "Aarti", "Cultural Tour"],
    description: "Meenakshi Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwar, a form of Shiva. The temple forms the heart and lifeline of the ancient city of Madurai."
  },
  {
    id: "5",
    name: "Jagannath Temple",
    location: "Puri, Odisha",
    state: "Odisha",
    rating: 4.89,
    image: "https://images.unsplash.com/photo-1627894486874-b830e5a8be76?q=80&w=2070&auto=format&fit=crop",
    hours: "Open 5:00 AM - 11:00 PM",
    price: 150,
    tags: ["Darshan", "Aarti", "Prasad"],
    description: "The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu, in Puri in the state of Odisha on the eastern coast of India. The temple is an important pilgrimage destination and one of the four great 'Char Dham' pilgrimages."
  },
  {
    id: "6",
    name: "Somnath Temple",
    location: "Veraval, Gujarat",
    state: "Gujarat",
    rating: 4.87,
    image: "https://images.unsplash.com/photo-1599319191289-a530dbf24f4c?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 9:00 PM",
    price: 200,
    tags: ["Darshan", "Aarti", "Coastal View"],
    description: "Somnath Temple is one of the most sacred pilgrimage sites for Hindus and is believed to be the first among the twelve jyotirlinga shrines of Shiva. It is located in Prabhas Patan, Gujarat, India. The temple is known for its stunning location on the Arabian Sea coast."
  },
  {
    id: "7",
    name: "Badrinath Temple",
    location: "Badrinath, Uttarakhand",
    state: "Uttarakhand",
    rating: 4.94,
    image: "https://images.unsplash.com/photo-1623953858703-9c7c4f5ceb73?q=80&w=1974&auto=format&fit=crop",
    hours: "Open during summer months only",
    price: 250,
    tags: ["Darshan", "Himalayan", "Sacred"],
    description: "Badrinath Temple is a Hindu temple dedicated to Vishnu which is situated in the town of Badrinath in Uttarakhand, India. The temple and town form one of the four Char Dham and Chota Char Dham pilgrimage sites. The temple is also one of the 108 Divya Desams dedicated to Vishnu."
  },
  {
    id: "8",
    name: "Kedarnath Temple",
    location: "Kedarnath, Uttarakhand",
    state: "Uttarakhand",
    rating: 4.96,
    image: "https://images.unsplash.com/photo-1590667046966-1e0e11a9b2ad?q=80&w=1972&auto=format&fit=crop",
    hours: "Open during summer months only",
    price: 250,
    tags: ["Darshan", "Himalayan", "Trek"],
    description: "Kedarnath Temple is a Hindu temple dedicated to Lord Shiva and is located on the Garhwal Himalayan range near the Mandakini river in Kedarnath, Uttarakhand, India. Due to extreme weather conditions, the temple is open only between the end of April to November."
  },
  {
    id: "9",
    name: "Brihadeeswara Temple",
    location: "Thanjavur, Tamil Nadu",
    state: "Tamil Nadu",
    rating: 4.93,
    image: "https://images.unsplash.com/photo-1616843413587-9b1d52fd4437?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 8:00 PM",
    price: 100,
    tags: ["Darshan", "UNESCO", "Architecture"],
    description: "Brihadeeswara Temple, also called Rajarajesvaram or Peruvudaiyār Kōvil, is a Hindu temple dedicated to Shiva located in South bank of Kaveri river in Thanjavur, Tamil Nadu, India. It is one of the largest South Indian temples and an exemplary example of a fully realized Tamil architecture."
  },
  {
    id: "10",
    name: "Konark Sun Temple",
    location: "Konark, Odisha",
    state: "Odisha",
    rating: 4.90,
    image: "https://images.unsplash.com/photo-1600687623593-1c503a8d4d8d?q=80&w=2070&auto=format&fit=crop",
    hours: "Open 6:00 AM - 8:00 PM",
    price: 150,
    tags: ["UNESCO", "Architecture", "Historical"],
    description: "Konark Sun Temple is a 13th-century CE Sun temple at Konark about 35 kilometres northeast from Puri on the coastline of Odisha, India. The temple is attributed to king Narasimhadeva I of the Eastern Ganga Dynasty about 1250 CE."
  },
  {
    id: "11",
    name: "Rameshwaram Temple",
    location: "Rameshwaram, Tamil Nadu",
    state: "Tamil Nadu",
    rating: 4.88,
    image: "https://images.unsplash.com/photo-1626439710312-8ecc612cf587?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:00 AM - 9:00 PM",
    price: 100,
    tags: ["Darshan", "Char Dham", "Pilgrimage"],
    description: "Ramanathaswamy Temple is a Hindu temple dedicated to the god Shiva located on Rameswaram island in the state of Tamil Nadu, India. It is also one of the twelve Jyotirlinga temples, where Shiva is worshipped in the form of a Jyotirlinga meaning 'pillar of light'."
  },
  {
    id: "12",
    name: "Akshardham Temple",
    location: "New Delhi, Delhi",
    state: "Delhi",
    rating: 4.91,
    image: "https://images.unsplash.com/photo-1545126178-862cdb469409?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 9:30 AM - 6:30 PM (Closed on Mondays)",
    price: 200,
    tags: ["Architecture", "Modern", "Cultural"],
    description: "Swaminarayan Akshardham is a Hindu temple, and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture."
  }
];

// List of major Indian states for filtering
export const indianStates = [
  "All States",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

export interface Category {
  name: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  { name: "Popular", icon: Flame },
  { name: "Shiva Temples", icon: Mountain },
  { name: "Vishnu Temples", icon: Church },
  { name: "Shakti Temples", icon: Book },
  { name: "Ganesh Temples", icon: Home },
  { name: "Morning Aarti", icon: Sun },
  { name: "Evening Aarti", icon: Moon },
  { name: "Special Pujas", icon: Star },
  { name: "Prasad Delivery", icon: Users },
  { name: "Riverside", icon: Waves },
  { name: "Festivals", icon: Users }
];

export const getTempleById = (id: string) => {
  return temples.find((temple) => temple.id === id);
};

// New function to filter temples by state
export const getTemplesByState = (state: string) => {
  if (state === "All States") {
    return temples;
  }
  return temples.filter((temple) => temple.state === state);
};

// Function to filter temples by tag
export const getTemplesByTag = (tag: string) => {
  if (!tag) {
    return temples;
  }
  return temples.filter((temple) => temple.tags.includes(tag));
};

// Function to filter temples by multiple criteria
export const filterTemples = ({ state, tag, search }: { state?: string; tag?: string; search?: string }) => {
  let filtered = temples;
  
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
