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
    image: "https://images.unsplash.com/photo-1649939136299-74c9d4b6acb7?q=80&w=1974&auto=format&fit=crop",
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
  },
  {
    id: "31",
    name: "Amarnath Cave Temple",
    location: "Anantnag, Jammu and Kashmir",
    state: "Jammu and Kashmir",
    rating: 4.92,
    image: "https://images.unsplash.com/photo-1613989878200-53bbab3ee8c3?q=80&w=1974&auto=format&fit=crop",
    hours: "Open during summer pilgrimage season only",
    price: 500,
    tags: ["Ice Lingam", "Pilgrimage", "Himalayan"],
    description: "The Amarnath Cave is a Hindu shrine located in Jammu and Kashmir, India. The cave is situated at an altitude of 3,888 m, about 141 km from Srinagar. The shrine forms an important part of Hinduism and is considered to be one of the holiest shrines in Hinduism."
  },
  {
    id: "32",
    name: "Kamakhya Temple",
    location: "Guwahati, Assam",
    state: "Assam",
    rating: 4.86,
    image: "https://images.unsplash.com/photo-1624281580763-c2d1ec2afd3e?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:30 AM - 7:30 PM",
    price: 150,
    tags: ["Shakti Peetha", "Tantra", "Sacred"],
    description: "Kamakhya Temple is a Hindu temple dedicated to the mother goddess Kamakhya. It is one of the oldest of the 51 Shakti Pithas and is situated on the Nilachal Hill in western part of Guwahati city in Assam, India."
  },
  {
    id: "33",
    name: "Mahakaleshwar Temple",
    location: "Ujjain, Madhya Pradesh",
    state: "Madhya Pradesh",
    rating: 4.89,
    image: "https://images.unsplash.com/photo-1618370264432-801bb0ecfad1?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 4:00 AM - 11:00 PM",
    price: 250,
    tags: ["Jyotirlinga", "Shiva", "Bhasma Aarti"],
    description: "Mahakaleshwar Jyotirlinga is a Hindu temple dedicated to Lord Shiva and is one of the twelve Jyotirlingams, shrines which are said to be the most sacred abodes of Lord Shiva. It is located in the ancient city of Ujjain in the state of Madhya Pradesh, India."
  },
  {
    id: "34",
    name: "Baijnath Temple",
    location: "Baijnath, Himachal Pradesh",
    state: "Himachal Pradesh",
    rating: 4.78,
    image: "https://images.unsplash.com/photo-1604843972312-b716d1bb2992?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 8:00 PM",
    price: 0,
    tags: ["Shiva", "Ancient", "Nagara Style"],
    description: "The Baijnath Temple is a Hindu temple located in Baijnath, Himachal Pradesh, India. The temple is dedicated to Lord Shiva as Vaidyanath, the Lord of Physicians. The temple was built in 1204 AD by two local merchants named Ahuka and Manyuka."
  },
  {
    id: "35",
    name: "Brahma Temple, Pushkar",
    location: "Pushkar, Rajasthan",
    state: "Rajasthan",
    rating: 4.83,
    image: "https://images.unsplash.com/photo-1628104000657-88dbf6448131?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:30 AM - 8:30 PM",
    price: 100,
    tags: ["Brahma", "Rare", "Sacred Lake"],
    description: "The Brahma Temple in Pushkar is one of the very few existing temples dedicated to the Hindu creator-god Brahma in India. The structure of the temple dates to the 14th century, but the temple is believed to be 2000 years old."
  },
  {
    id: "36",
    name: "Koneswaram Temple",
    location: "Trincomalee, Tamil Nadu",
    state: "Tamil Nadu",
    rating: 4.85,
    image: "https://images.unsplash.com/photo-1623407407789-4ed0d0565be6?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:00 AM - 12:00 PM, 4:00 PM - 8:00 PM",
    price: 50,
    tags: ["Coastal", "Ancient", "Shiva"],
    description: "Koneswaram temple is a classical-medieval Hindu temple dedicated to Lord Shiva in Trincomalee, Eastern Province, Sri Lanka. The temple is situated atop Swami Rock, a cliff on the tip of the peninsula that drops 400 feet (120 m) directly into the sea."
  },
  {
    id: "37",
    name: "Gangotri Temple",
    location: "Gangotri, Uttarakhand",
    state: "Uttarakhand",
    rating: 4.91,
    image: "https://images.unsplash.com/photo-1605789345549-38b4a4cc2cf3?q=80&w=1974&auto=format&fit=crop",
    hours: "Open May to November, 6:00 AM - 8:00 PM",
    price: 0,
    tags: ["Ganga", "Himalayan", "Pilgrimage"],
    description: "Gangotri Temple is a Hindu temple dedicated to the goddess Ganga and is one of the four sites in the Chota Char Dham pilgrimage circuit. It is located in Gangotri, Uttarkashi district, Uttarakhand, India. The temple is situated at an altitude of 3,100 metres near the Gangotri Glacier, the origin of the river Ganges."
  },
  {
    id: "38",
    name: "Puri Jagannath Temple",
    location: "Puri, Odisha",
    state: "Odisha",
    rating: 4.92,
    image: "https://images.unsplash.com/photo-1627894659014-0030d7a1dcdb?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM",
    price: 50,
    tags: ["Char Dham", "Rath Yatra", "Krishna"],
    description: "The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu, in Puri in the state of Odisha on the eastern coast of India. The temple is an important pilgrimage destination for many Hindu traditions, particularly worshippers of Krishna and Vishnu, and part of the Char Dham pilgrimages."
  },
  {
    id: "39",
    name: "Sanchi Stupa",
    location: "Sanchi, Madhya Pradesh",
    state: "Madhya Pradesh",
    rating: 4.88,
    image: "https://images.unsplash.com/photo-1600184461441-390dcba13aa1?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:30 AM - 5:30 PM",
    price: 40,
    tags: ["UNESCO", "Buddhist", "Ancient"],
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
    id: "41",
    name: "Kailasanathar Temple",
    location: "Kanchipuram, Tamil Nadu",
    state: "Tamil Nadu",
    rating: 4.82,
    image: "https://images.unsplash.com/photo-1600095760767-ece9c2913d68?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM",
    price: 0,
    tags: ["Shiva", "Sandstone", "Pallava"],
    description: "Kailasanathar Temple is the oldest structure in Kanchipuram. Located in Tamil Nadu, India, it is a Hindu temple in the Dravidian architectural style, dedicated to Lord Shiva. It was built by the Pallava king Narasimhavarman II (Rajasimha) and completed by his son Mahendravarman III."
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
  {
    id: "43",
    name: "Tungnath Temple",
    location: "Rudraprayag, Uttarakhand",
    state: "Uttarakhand",
    rating: 4.88,
    image: "https://images.unsplash.com/photo-1576418293285-4eba60e13f56?q=80&w=1974&auto=format&fit=crop",
    hours: "Open May to October, 7:00 AM - 7:00 PM",
    price: 0,
    tags: ["Panch Kedar", "Himalayan", "Shiva"],
    description: "Tungnath is the highest Shiva temple in the world and is one of the five and highest Panch Kedar temples located in the mountain range of Tunganath in Rudraprayag district, in the state of Uttarakhand, India. The temple is believed to be 1000 years old and is the second in the pecking order of the Panch Kedars."
  },
  {
    id: "44",
    name: "Lingaraja Temple",
    location: "Bhubaneswar, Odisha",
    state: "Odisha",
    rating: 4.88,
    image: "https://images.unsplash.com/photo-1604375628370-e81e413d8a28?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:00 AM - 9:00 PM (Non-Hindus not allowed inside)",
    price: 0,
    tags: ["Shiva", "Ancient", "Architecture"],
    description: "Lingaraja Temple is a Hindu temple dedicated to Shiva and is one of the oldest and largest temples in Bhubaneswar, the capital of the Indian state of Odisha. The temple is believed to be built by the kings from the Somavamsi dynasty, with later additions from the Ganga dynasty."
  },
  {
    id: "45",
    name: "Thiruvallur Temple",
    location: "Kanyakumari, Tamil Nadu",
    state: "Tamil Nadu",
    rating: 4.80,
    image: "https://images.unsplash.com/photo-1623184726549-2df389c8585f?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM",
    price: 25,
    tags: ["Tamil", "Coastal", "Historical"],
    description: "Thiruvallur Temple is a beautiful Hindu temple located in Kanyakumari, Tamil Nadu. It is dedicated to the Tamil poet and saint Thiruvallur. The temple is known for its beautiful architecture and serene atmosphere."
  },
  {
    id: "46",
    name: "Akshardham Temple",
    location: "Gandhinagar, Gujarat",
    state: "Gujarat",
    rating: 4.93,
    image: "https://images.unsplash.com/photo-1622308713661-90c300dca619?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 9:30 AM - 6:30 PM (Closed on Mondays)",
    price: 170,
    tags: ["Modern", "Exhibition", "Light Show"],
    description: "Swaminarayan Akshardham in Gandhinagar, Gujarat is a large Hindu temple complex inspired by Yogiji Maharaj, the fourth spiritual successor of Swaminarayan, and created by Pramukh Swami Maharaj, the fifth spiritual successor. The complex houses exhibitions on Hindu culture and spirituality."
  },
  {
    id: "47",
    name: "Haridwar Har Ki Pauri",
    location: "Haridwar, Uttarakhand",
    state: "Uttarakhand",
    rating: 4.87,
    image: "https://images.unsplash.com/photo-1591018547802-e7d0c7c62f11?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 24 hours",
    price: 0,
    tags: ["Ganga Aarti", "Holy Dip", "Pilgrimage"],
    description: "Har Ki Pauri is a famous ghat on the banks of the Ganges in Haridwar, Uttarakhand. It is the most sacred ghat in Haridwar and literally means 'Footsteps of the Lord'. According to Hindu mythology, it is the exact spot where the Ganges touches the plains for the first time after flowing through the mountains."
  },
  {
    id: "48",
    name: "Dakshineshwar Kali Temple",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: 4.89,
    image: "https://images.unsplash.com/photo-1633612802700-0d8a8ed70dcd?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 6:00 AM - 12:30 PM, 3:00 PM - 8:30 PM",
    price: 0,
    tags: ["Kali", "Bengali", "Historical"],
    description: "Dakshineswar Kali Temple is a Hindu temple located in Dakshineswar near Kolkata. Situated on the eastern bank of the Hooghly River, the presiding deity of the temple is Bhavatarini, an aspect of Kali, meaning 'She who liberates Her devotees from the ocean of existence'."
  },
  {
    id: "49",
    name: "Trimbakeshwar Temple",
    location: "Trimbak, Maharashtra",
    state: "Maharashtra",
    rating: 4.84,
    image: "https://images.unsplash.com/photo-1604344929391-4f30c3783c6b?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:30 AM - 9:00 PM",
    price: 200,
    tags: ["Jyotirlinga", "Shiva", "Ancient"],
    description: "Trimbakeshwar Temple is an ancient Hindu temple in the town of Trimbak, in the Nashik District of Maharashtra, India. It is dedicated to Lord Shiva and is one of the twelve Jyotirlingas where Shiva is worshipped as a Jyotirlinga."
  },
  {
    id: "50",
    name: "Omkareshwar Temple",
    location: "Omkareshwar, Madhya Pradesh",
    state: "Madhya Pradesh",
    rating: 4.81,
    image: "https://images.unsplash.com/photo-1602391860496-696417a913a2?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 5:00 AM - 10:00 PM",
    price: 50,
    tags: ["Jyotirlinga", "Island", "Narmada River"],
    description: "Omkareshwar is a Hindu temple dedicated to God Shiva. It is one of the 12 revered Jyotirlinga shrines of Shiva. It is on an island called Mandhata or Shivapuri in the Narmada river at Khandwa district in Madhya Pradesh, India."
  },
  {
    id: "51",
    name: "Chamundeshwari Temple",
    location: "Mysore, Karnataka",
    state: "Karnataka",
    rating: 4.86,
    image: "https://images.unsplash.com/photo-1599480918457-bf1568ba3d47?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 7:30 AM - 9:00 PM",
    price: 30,
    tags: ["Shakti", "Hill Temple", "Mysore"],
    description: "The Chamundeshwari Temple is a Hindu temple located on the top of Chamundi Hills about 13 km from the palace city of Mysore in Karnataka, India. The temple was named after Chamundeshwari or Durga, the fierce form of Shakti, a tutelary deity held in reverence for centuries by the Mysore Maharajas."
  },
  {
    id: "52",
    name: "Vaishno Devi Temple",
    location: "Katra, Jammu and Kashmir",
    state: "Jammu and Kashmir",
    rating: 4.96,
    image: "https://images.unsplash.com/photo-1626073870047-93131da7ebad?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 24 hours",
    price: 0,
    tags: ["Pilgrimage", "Cave Temple", "Shakti"],
    description: "Vaishno Devi, also known as Mata Rani and Vaishnavi, is a manifestation of the Hindu Mother Goddess Durga or Adi Shakti. The temple is one of the most visited pilgrimage sites in India. Located near the town of Katra, it involves a trek of about 13 kilometers from the base camp."
  },
  {
    id: "53",
    name: "Srisailam Temple",
    location: "Srisailam, Andhra Pradesh",
    state: "Andhra Pradesh",
    rating: 4.85,
    image: "https://images.unsplash.com/photo-1623287360215-1102793b6a56?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 4:30 AM - 10:00 PM",
    price: 100,
    tags: ["Jyotirlinga", "Shakti Peetha", "Mallikarjuna"],
    description: "Sri Bhramaramba Mallikarjuna Temple is an ancient Hindu temple dedicated to Lord Shiva and his consort Parvati. It is situated at Srisailam in Andhra Pradesh, India. It is significant to the Hindu sects of both Shaivism and Shaktism as it is considered to be one of the twelve Jyotirlingas and one of the eighteen Shakti Peethas."
  },
  {
    id: "54",
    name: "Shri Mata Vaishno Devi Shrine",
    location: "Katra, Jammu and Kashmir",
    state: "Jammu and Kashmir",
    rating: 4.94,
    image: "https://images.unsplash.com/photo-1623493569755-bc8461183415?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 24 hours",
    price: 0,
    tags: ["Shakti", "Pilgrimage", "Cave Temple"],
    description: "Shri Mata Vaishno Devi Shrine is a Hindu temple dedicated to the Hindu Goddess, located in Katra at the Trikuta Mountains within the Indian state of Jammu and Kashmir. Every year, millions of devotees visit this shrine, making it one of the most visited religious places in India."
  },
  {
    id: "55",
    name: "Kashi Vishwanath Temple",
    location: "Varanasi, Uttar Pradesh",
    state: "Uttar Pradesh",
    rating: 4.92,
    image: "https://images.unsplash.com/photo-1583102865022-fa2e44c9a207?q=80&w=1974&auto=format&fit=crop",
    hours: "Open 4:00 AM - 11:00 PM",
    price: 300,
    tags: ["Jyotirlinga", "Shiva", "Ganga"],
    description: "Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Vishwanath Gali, Varanasi, Uttar Pradesh, India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples."
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
