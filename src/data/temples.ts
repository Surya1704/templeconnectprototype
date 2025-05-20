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

// Keeping only 15 temples (excluding jyotirlingas)
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
    id: "13",
    name: "Siddhivinayak Temple",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    rating: 4.85,
    image: "https://images.unsplash.com/photo-1587899765100-c5153ec94e19?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:30 AM - 10:00 PM",
    price: 50,
    tags: ["Darshan", "Prasad", "Morning Aarti"],
    description: "Shree Siddhivinayak Ganapati Mandir is a Hindu temple dedicated to Lord Shri Ganesh. It is located in Prabhadevi, Mumbai, Maharashtra. It was originally built by Laxman Vithu and Deubai Patil on 19 November 1801."
  },
  {
    id: "15",
    name: "ISKCON Temple Bangalore",
    location: "Bangalore, Karnataka",
    state: "Karnataka",
    rating: 4.87,
    image: "https://images.unsplash.com/photo-1626619001521-33c81762da47?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 4:15 AM - 8:30 PM",
    price: 0,
    tags: ["Darshan", "Prasad", "Cultural Programs"],
    description: "Sri Radha Krishna Temple is a Krishna Hindu temple situated in Rajajinagar, Bangalore, India. The temple is one of the largest ISKCON temples in the world and is a major attraction for devotees and tourists visiting Bangalore."
  },
  {
    id: "16",
    name: "Mahabodhi Temple",
    location: "Bodh Gaya, Bihar",
    state: "Bihar",
    rating: 4.92,
    image: "https://images.unsplash.com/photo-1623484280771-a432c65bbb7a?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:00 AM - 9:00 PM",
    price: 300,
    tags: ["UNESCO", "Buddhist", "Meditation"],
    description: "The Mahabodhi Temple Complex is one of the four holy sites related to the life of the Lord Buddha, and particularly to the attainment of Enlightenment. The first temple was built by Emperor Asoka in the 3rd century B.C., and the present temple dates from the 5th or 6th centuries."
  },
  {
    id: "20",
    name: "Sanchi Stupa",
    location: "Sanchi, Madhya Pradesh",
    state: "Madhya Pradesh",
    rating: 4.89,
    image: "https://images.unsplash.com/photo-1590579446305-8155823517c5?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 9:00 AM - 5:00 PM",
    price: 75,
    tags: ["UNESCO", "Buddhist", "Historical"],
    description: "The Great Stupa at Sanchi is one of the oldest stone structures in India and was originally commissioned by the emperor Ashoka in the 3rd century BCE. Its nucleus was a simple hemispherical brick structure built over the relics of the Buddha."
  },
  {
    id: "40",
    name: "Dilwara Temples",
    location: "Mount Abu, Rajasthan",
    state: "Rajasthan",
    rating: 4.94,
    image: "https://images.unsplash.com/photo-1618737739989-3b716a768071?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 12:00 PM - 5:00 PM",
    price: 100,
    tags: ["Jain", "Marble", "Architecture"],
    description: "The Dilwara Temples are a group of Jain temples located about 2½ kilometers from Mount Abu, Rajasthan. These temples were built between the 11th and 13th centuries AD and are famous for their stunning use of marble and intricate marble carvings."
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
