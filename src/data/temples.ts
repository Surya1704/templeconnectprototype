import {
  Flame, Mountain, Church, Book, Home,
  Users, Sun, Moon, Star, Waves
} from "lucide-react";
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

// Top temples with images and descriptions
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
    description: "Sri Venkateswara Swami Temple is a Hindu temple situated in the hill town of Tirumala at Tirupati in Andhra Pradesh. It is dedicated to Lord Venkateswara, an incarnation of Vishnu."
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
    description: "The Golden Temple, also known as Harmandir Sahib, is the holiest gurdwara and the most important pilgrimage site of Sikhism, located in Amritsar."
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
    description: "The Lotus Temple is a Bahá'í House of Worship in Delhi, notable for its flower-like shape. Open to all, it promotes unity and peace."
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
    description: "A historic Hindu temple on the southern bank of the Vaigai River. It is dedicated to Meenakshi (Parvati) and her consort Sundareshwar (Shiva)."
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
    description: "Located in Puri, the Jagannath Temple is dedicated to Jagannath (a form of Vishnu) and is one of the four Char Dham pilgrimage sites."
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
    description: "Dedicated to Vishnu, Badrinath is one of the four Char Dham and Chota Char Dham pilgrimage sites. Located in the Himalayas of Uttarakhand."
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
    description: "Swaminarayan Akshardham is a Hindu temple and spiritual-cultural campus in Delhi. It showcases the essence of Indian art, culture, and spirituality."
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
    description: "This temple is dedicated to Sai Baba of Shirdi, a revered saint worshipped by people of all faiths. One of the richest temples in India."
  },
  // Jyotirlinga temples
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
    description: "Located on Gujarat's coast, Somnath is one of the twelve Jyotirlingas of Shiva. Known for its historical and spiritual significance."
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
    description: "Ramanathaswamy Temple is a major pilgrimage site, part of the Char Dham, and one of the 12 Jyotirlingas. Known for its longest temple corridor."
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
    description: "Mahakaleshwar Jyotirlinga is located in Ujjain and is one of the twelve sacred Jyotirlingas of Shiva. Famous for its Bhasma Aarti."
  },
  {
    id: "27",
    name: "Omkareshwar Temple",
    location: "Omkareshwar, Madhya Pradesh",
    state: "Madhya Pradesh",
    rating: 4.87,
    image: "https://images.unsplash.com/photo-1619015523660-4c452fa10bd1?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:00 AM - 10:00 PM",
    price: 50,
    tags: ["Jyotirlinga", "River Island", "Sacred"],
    description: "Located on an island in the Narmada River, Omkareshwar is one of the twelve Jyotirlingas and a deeply spiritual center in Madhya Pradesh."
  }
];
