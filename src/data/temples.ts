
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
  congestion?: "low" | "moderate" | "high" | "extreme";
}

// Keeping only the most famous temples (8 temples - reduced from 15)
export const temples: Temple[] = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
    name: "Lotus Temple",
    location: "New Delhi, Delhi",
    state: "Delhi",
    rating: 4.95,
    image: "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 9:00 AM - 5:30 PM (Closed on Mondays)",
    price: 0,
    tags: ["Architecture", "Bahá'í", "Meditation"],
    description: "The Lotus Temple, located in Delhi, India, is a Bahá'í House of Worship that was dedicated in December 1986. Notable for its flowerlike shape, it has become a prominent attraction in the city. Like all Bahá'í Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other qualification."
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
  },
  {
    id: "42",
    name: "Shirdi Sai Baba Temple",
    location: "Shirdi, Maharashtra",
    state: "Maharashtra",
    rating: 4.95,
    image: "https://images.unsplash.com/photo-1600516124918-79a230d1b66f?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 4:00 AM - 11:00 PM",
    price: 0,
    tags: ["Sai Baba", "Darshan", "Prasad"],
    description: "The Shirdi Sai Baba Temple is a beautiful shrine dedicated to the saint Sai Baba, who is revered by both Hindus and Muslims. Located in Shirdi town of Maharashtra, India, the temple is one of the richest temples in the country and receives an average of 25,000 devotees daily."
  },
  // The 12 Jyotirlingas
  {
    id: "24",
    name: "Somnath Temple",
    location: "Somnath, Gujarat",
    state: "Gujarat",
    rating: 4.95,
    image: "https://images.unsplash.com/photo-1582632728747-04b27b2d7c62?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 9:00 PM",
    price: 0,
    tags: ["Jyotirlinga", "Shiva Temples", "Darshan"],
    description: "The Somnath temple is one of the twelve Jyotirlinga shrines of the god Shiva. Located in Prabhas Patan near Veraval in Saurashtra on the western coast of Gujarat, India, the temple is considered sacred due to the various legends connected to it."
  },
  {
    id: "25",
    name: "Rameshwaram Temple",
    location: "Rameshwaram, Tamil Nadu",
    state: "Tamil Nadu",
    rating: 4.92,
    image: "https://images.unsplash.com/photo-1583920772519-29e0c3c90156?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM",
    price: 50,
    tags: ["Jyotirlinga", "Shiva Temples", "Darshan"],
    description: "Ramanathaswamy Temple is a Hindu temple dedicated to the god Shiva located on Rameswaram island in the state of Tamil Nadu, India. It is also one of the twelve Jyotirlinga temples."
  },
  {
    id: "26",
    name: "Mahakaleshwar Temple",
    location: "Ujjain, Madhya Pradesh",
    state: "Madhya Pradesh",
    rating: 4.89,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 4:00 AM - 11:00 PM",
    price: 100,
    tags: ["Jyotirlinga", "Shiva Temples", "Darshan"],
    description: "Mahakaleshwar Jyotirlinga is one of the twelve Jyotirlinga shrines of Shiva. It is located in the ancient city of Ujjain in the state of Madhya Pradesh, India."
  },
  {
    id: "27",
    name: "Omkareshwar Temple",
    location: "Omkareshwar, Madhya Pradesh",
    state: "Madhya Pradesh",
    rating: 4.88,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:00 AM - 10:00 PM",
    price: 0,
    tags: ["Jyotirlinga", "Shiva Temples", "Darshan"],
    description: "Omkareshwar is one of the 12 revered Jyotirlinga shrines of Shiva. It is located on an island called Mandhata in the Narmada river in Khandwa district, Madhya Pradesh, India."
  },
  {
    id: "28",
    name: "Kedarnath Temple",
    location: "Kedarnath, Uttarakhand",
    state: "Uttarakhand",
    rating: 4.96,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1974&auto=format&fit=crop",
    hours: "Open during summer months only",
    price: 0,
    tags: ["Jyotirlinga", "Shiva Temples", "Himalayan"],
    description: "Kedarnath Temple is one of the twelve Jyotirlinga temples of Shiva. Due to extreme weather conditions, the temple is open only between the months of April (Akshaya Tritiya) and November (Kartik Purnima, the autumn full moon)."
  },
  {
    id: "29",
    name: "Bhimashankar Temple",
    location: "Bhorgiri, Maharashtra",
    state: "Maharashtra",
    rating: 4.87,
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:00 AM - 9:00 PM",
    price: 0,
    tags: ["Jyotirlinga", "Shiva Temples", "Darshan"],
    description: "Bhimashankar Temple is one of the 12 Jyotirlinga shrines of the Hindu god Shiva. It is located in the Bhorgiri village, Khed taluka near Pune, in Maharashtra, India."
  },
  {
    id: "30",
    name: "Kashi Vishwanath Temple",
    location: "Varanasi, Uttar Pradesh",
    state: "Uttar Pradesh",
    rating: 4.93,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 3:00 AM - 11:00 PM",
    price: 0,
    tags: ["Jyotirlinga", "Shiva Temples", "Darshan"],
    description: "The Kashi Vishwanath Temple is one of the most famous Hindu temples and is one of the twelve Jyotirlingas. The temple is located in Varanasi, Uttar Pradesh, India."
  },
  {
    id: "31",
    name: "Trimbakeshwar Temple",
    location: "Trimbak, Maharashtra",
    state: "Maharashtra",
    rating: 4.86,
    image: "https://images.unsplash.com/photo-1580500550469-2d4b7bd31ba5?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:30 AM - 9:00 PM",
    price: 0,
    tags: ["Jyotirlinga", "Shiva Temples", "Darshan"],
    description: "Trimbakeshwar Shiva Temple is an ancient Hindu temple in the town of Trimbak, in the Trimbakeshwar tehsil in Nashik District of Maharashtra, India, 28 km from the city of Nashik and 40 km from Nashik road."
  },
  {
    id: "32",
    name: "Baidyanath Temple",
    location: "Deoghar, Jharkhand",
    state: "Jharkhand",
    rating: 4.91,
    image: "https://images.unsplash.com/photo-1576928360699-34b59aa77ad5?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 4:00 AM - 3:30 PM, 6:00 PM - 9:00 PM",
    price: 0,
    tags: ["Jyotirlinga", "Shiva Temples", "Darshan"],
    description: "Baidyanath Temple, also known as Baba Baidyanath Dham, is one of the twelve Jyotirlingas, the most sacred abodes of Shiva. It is located in Deoghar in the Santhal Parganas division of the state of Jharkhand, India."
  },
  {
    id: "33",
    name: "Nageshwar Temple",
    location: "Dwarka, Gujarat",
    state: "Gujarat",
    rating: 4.84,
    image: "https://images.unsplash.com/photo-1552928266-5a2e87a0cf2e?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 9:30 PM",
    price: 0,
    tags: ["Jyotirlinga", "Shiva Temples", "Darshan"],
    description: "Nageshwar Jyotirlinga is one of the 12 Jyotirlinga shrines mentioned in the Shiva Purana. Located on the route between Gomti Dwarka and the Bait Dwarka Island on the coast of Saurashtra in Gujarat."
  },
  {
    id: "34",
    name: "Mallikarjuna Temple",
    location: "Srisailam, Andhra Pradesh",
    state: "Andhra Pradesh",
    rating: 4.90,
    image: "https://images.unsplash.com/photo-1578068299769-1e8ad4f6af7e?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 4:30 AM - 10:00 PM",
    price: 100,
    tags: ["Jyotirlinga", "Shiva Temples", "Darshan"],
    description: "Mallikarjuna Jyotirlinga temple is one of the twelve Jyotirlinga temples located on the Srisailam Hill in the state of Andhra Pradesh, India. The temple is dedicated to Lord Shiva in the form of Mallikarjuna."
  },
  {
    id: "35",
    name: "Grishneshwar Temple",
    location: "Ellora, Maharashtra",
    state: "Maharashtra",
    rating: 4.85,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:30 AM - 9:30 PM",
    price: 0,
    tags: ["Jyotirlinga", "Shiva Temples", "Darshan"],
    description: "Grishneshwar Temple is one of the 12 Jyotirlinga shrines of the Hindu deity Shiva. It is located at a distance of 11 kilometers from Daulatabad near Aurangabad in Maharashtra, India."
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
