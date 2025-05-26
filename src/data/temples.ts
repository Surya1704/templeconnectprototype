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

export const temples: Temple[] = [
  {
    id: "1",
    name: "Tirupati Balaji Temple",
    location: "Tirupati, Andhra Pradesh",
    state: "Andhra Pradesh",
    rating: 4.85,
    image: "https://www.shutterstock.com/image-photo/tirupati-andhra-pradesh-indiaoctober-12-2024a-2312345678", // Replace with actual Shutterstock image URL
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
    image: "https://www.gettyimages.in/detail/photo/golden-temple-amritsar-india-royalty-free-image-1234567890", // Replace with actual Getty Images URL
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
    image: "https://www.shutterstock.com/image-photo/lotus-temple-new-delhi-india-july-29th-2018-1234567890", // Replace with actual Shutterstock image URL
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
    image: "https://www.gettyimages.in/detail/photo/meenakshi-amman-temple-madurai-india-royalty-free-image-1234567890", // Replace with actual Getty Images URL
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
    image: "https://www.gettyimages.com/detail/photo/jagannath-temple-puri-india-royalty-free-image-1234567890", // Replace with actual Getty Images URL
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
    image: "https://www.gettyimages.in/detail/photo/badrinath-temple-uttarakhand-india-royalty-free-image-1234567890", // Replace with actual Getty Images URL
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
    image: "https://www.gettyimages.com/detail/photo/akshardham-temple-new-delhi-india-royalty-free-image-1234567890", // Replace with actual Getty Images URL
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
    image: "https://sai.org.in/en/photo-gallery", // Official photo gallery
    hours: "Open 4:00 AM - 11:00 PM",
    price: 0,
    tags: ["Sai Baba", "Darshan", "Prasad"],
    description: "This temple is dedicated to Sai Baba of Shirdi, a revered saint worshipped by people of all faiths. One of the richest temples in India."
  },
  {
    id: "24",
    name: "Somnath Temple",
    location: "Somnath, Gujarat",
    state: "Gujarat",
    rating: 4.95,
    image: "https://www.gettyimages.in/detail/photo/somnath-temple-gujarat-india-royalty-free-image-1234567890", // Replace with actual Getty Images URL
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
    image: "https://www.gettyimages.in/detail/photo/rameshwaram-temple-tamil-nadu-india-royalty-free-image-1234567890", // Replace with actual Getty Images URL
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
    image: "https://shrimahakaleshwar.com/", // Official website
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
    image: "https://www.gettyimages.com/detail/photo/omkareshwar-temple-madhya-pradesh-india-royalty-free-image-1234567890", // Replace with actual Getty Images URL
    hours: "Open 5:00 AM - 10:00 PM",
    price: 50,
    tags: ["Jyotirlinga", "River Island", "Sacred"],
    description: "Located on an island in the Narmada River, Omkareshwar is one of the twelve Jyotirlingas and a deeply spiritual center in Madhya Pradesh."
  }
];
