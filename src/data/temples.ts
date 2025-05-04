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
    id: "14",
    name: "Kamakhya Temple",
    location: "Guwahati, Assam",
    state: "Assam",
    rating: 4.76,
    image: "https://images.unsplash.com/photo-1605274280925-9dd1baacb97b?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 8:00 AM - 6:00 PM",
    price: 100,
    tags: ["Shakti Peeth", "Darshan", "Sacred"],
    description: "The Kamakhya Temple is a Hindu temple dedicated to the mother goddess Kamakhya. It is one of the oldest of the 51 Shakti Peethas and is situated on the Nilachal Hill in western part of Guwahati city in Assam, India."
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
    id: "17",
    name: "Lingaraja Temple",
    location: "Bhubaneswar, Odisha",
    state: "Odisha",
    rating: 4.85,
    image: "https://images.unsplash.com/photo-1519006187260-eb220229bd4d?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 7:00 PM (Non-Hindus not allowed)",
    price: 0,
    tags: ["Shiva", "Architecture", "Ancient"],
    description: "Lingaraja Temple is a Hindu temple dedicated to Shiva and is one of the oldest and largest temples in Bhubaneswar, the capital of the Indian state of Odisha. The temple is believed to be built by the kings from the Somavamsi dynasty, with later additions from the Ganga dynasty."
  },
  {
    id: "18",
    name: "Chidambaram Nataraja Temple",
    location: "Chidambaram, Tamil Nadu",
    state: "Tamil Nadu",
    rating: 4.88,
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 12:00 PM, 5:00 PM - 10:00 PM",
    price: 75,
    tags: ["Shiva", "Dance", "Architecture"],
    description: "Chidambaram Nataraja Temple is a Hindu temple dedicated to Nataraja – Shiva as the lord of dance. The temple has ancient roots and a Shiva shrine existed at the site when the town was known as Thillai. The 13th century thought that the temple was the center of the universe."
  },
  {
    id: "19",
    name: "Kashi Karvat Temple",
    location: "Varanasi, Uttar Pradesh",
    state: "Uttar Pradesh",
    rating: 4.75,
    image: "https://images.unsplash.com/photo-1627889536284-fd6f46120166?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 7:00 PM",
    price: 100,
    tags: ["Darshan", "Ghat", "Holy"],
    description: "Kashi Karvat Temple is a small but significant temple located near the ghats of Varanasi. It is dedicated to Lord Shiva and is known for its unique rituals and peaceful atmosphere away from the crowds of the main Kashi Vishwanath temple."
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
    id: "21",
    name: "Lepakshi Temple",
    location: "Lepakshi, Andhra Pradesh",
    state: "Andhra Pradesh",
    rating: 4.82,
    image: "https://images.unsplash.com/photo-1649939136299-74c9d4b6ba6e?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 7:00 AM - 6:00 PM",
    price: 30,
    tags: ["Nandi", "Architecture", "Historical"],
    description: "Lepakshi Temple, also known as Veerabhadra Temple, is a 16th-century temple of the Vijayanagara Empire located in Lepakshi, Anantapur District, Andhra Pradesh. It's renowned for its architecture, paintings, and a large monolithic Nandi (bull)."
  },
  {
    id: "22",
    name: "Dwarkadhish Temple",
    location: "Dwarka, Gujarat",
    state: "Gujarat",
    rating: 4.90,
    image: "https://images.unsplash.com/photo-1627302992807-a257491a0daf?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:30 AM - 1:00 PM, 5:00 PM - 9:30 PM",
    price: 0,
    tags: ["Char Dham", "Krishna", "Pilgrimage"],
    description: "The Dwarkadhish Temple, also known as the Jagat Mandir, is a Hindu temple dedicated to the god Krishna, who is worshiped here by the name Dwarkadhish, or 'King of Dwarka'. The temple is located at Dwarka, Gujarat, India."
  },
  {
    id: "23",
    name: "Kailasa Temple, Ellora",
    location: "Ellora, Maharashtra",
    state: "Maharashtra",
    rating: 4.95,
    image: "https://images.unsplash.com/photo-1630974632788-de1fe7091750?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 6:00 PM (Closed on Tuesdays)",
    price: 40,
    tags: ["UNESCO", "Rock-cut", "Historical"],
    description: "The Kailasa temple is one of the largest rock-cut ancient Hindu temples located in Ellora, Maharashtra, India. A megalith carved from a rock cliff face, it is considered one of the most remarkable cave temples in India because of its size, architecture and sculptural treatment."
  },
  {
    id: "24",
    name: "Khajuraho Group of Temples",
    location: "Khajuraho, Madhya Pradesh",
    state: "Madhya Pradesh",
    rating: 4.93,
    image: "https://images.unsplash.com/photo-1600337752115-de44021671dc?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 8:00 AM - 6:00 PM",
    price: 35,
    tags: ["UNESCO", "Architecture", "Sculpture"],
    description: "The Khajuraho Group of Monuments are a group of Hindu temples and Jain temples in Chhatarpur district, Madhya Pradesh, India. They are one of the UNESCO World Heritage Sites in India. The temples are famous for their nagara-style architectural symbolism and their erotic sculptures."
  },
  {
    id: "25",
    name: "Padmanabhaswamy Temple",
    location: "Thiruvananthapuram, Kerala",
    state: "Kerala",
    rating: 4.91,
    image: "https://images.unsplash.com/photo-1626411940777-5c7d8699bfe5?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 3:30 AM - 12:00 PM, 5:00 PM - 8:30 PM",
    price: 0,
    tags: ["Vishnu", "Dress Code", "Sacred"],
    description: "Sri Padmanabhaswamy Temple is a Hindu temple dedicated to Lord Vishnu located in Thiruvananthapuram, Kerala, India. The shrine is currently run by a trust headed by the royal family of Travancore. The temple features a blend of the indigenous Kerala style and the Dravidian style of architecture."
  },
  {
    id: "26",
    name: "Ranakpur Jain Temple",
    location: "Ranakpur, Rajasthan",
    state: "Rajasthan",
    rating: 4.86,
    image: "https://images.unsplash.com/photo-1591777629375-351780c9ec0e?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 12:00 PM - 5:00 PM for non-Jains",
    price: 200,
    tags: ["Jain", "Marble", "Architecture"],
    description: "Ranakpur Jain Temple is a Jain temple at Ranakpur dedicated to Tirthankara Rishabhanatha. The temple is located in a village of Ranakpur near Sadri town in the Pali district of Rajasthan. Ranakpur is widely known for its marble Jain temple and is one of the five major pilgrimages of Jains."
  },
  {
    id: "27",
    name: "Belur Math",
    location: "Belur, West Bengal",
    state: "West Bengal",
    rating: 4.80,
    image: "https://images.unsplash.com/photo-1599030304296-73fc16be2cb7?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 11:30 AM, 4:00 PM - 7:00 PM",
    price: 0,
    tags: ["Ramakrishna", "Architecture", "Ganga View"],
    description: "Belur Math is the headquarters of the Ramakrishna Math and Mission, founded by Swami Vivekananda, a chief disciple of Ramakrishna Paramahamsa. It is located on the west bank of Hooghly River, Belur, West Bengal, India."
  },
  {
    id: "28",
    name: "Sun Temple Modhera",
    location: "Modhera, Gujarat",
    state: "Gujarat",
    rating: 4.87,
    image: "https://images.unsplash.com/photo-1649939147384-8644970dc0fe?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 7:00 AM - 6:00 PM",
    price: 25,
    tags: ["Sun", "Architecture", "Historical"],
    description: "The Sun Temple is a Hindu temple dedicated to the solar deity Surya located at Modhera village of Mehsana district, Gujarat, India. It is situated on the bank of the river Pushpavati. It was built after 1026-27 CE during the reign of Bhima I of the Chaulukya dynasty."
  },
  {
    id: "29",
    name: "Basilica of Bom Jesus",
    location: "Old Goa, Goa",
    state: "Goa",
    rating: 4.79,
    image: "https://images.unsplash.com/photo-1631026438110-2123da953d7c?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 9:00 AM - 6:30 PM (Closed Sundays)",
    price: 0,
    tags: ["UNESCO", "Christian", "Historical"],
    description: "The Basilica of Bom Jesus is a Roman Catholic basilica located in Goa, India. It holds the mortal remains of St. Francis Xavier. The church is located in Old Goa, former capital of Portuguese India, and is a UNESCO World Heritage Site."
  },
  {
    id: "30",
    name: "Jhula Devi Temple",
    location: "Ranikhet, Uttarakhand",
    state: "Uttarakhand",
    rating: 4.82,
    image: "https://images.unsplash.com/photo-1606298855013-71937e9967c2?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 7:00 PM",
    price: 0,
    tags: ["Shakti", "Bells", "Mountain"],
    description: "Jhula Devi Temple is a Hindu temple dedicated to Goddess Durga. It's situated near Ranikhet in the Almora district of Uttarakhand, India. The temple is famous for the hundreds of bells that hang in its premises, offered by devotees whose wishes were fulfilled."
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
