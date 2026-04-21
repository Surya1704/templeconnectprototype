export interface Pooja {
  id: string;
  name: string;
  duration: string;
  description: string;
}

export interface Temple {
  id: string;
  name: string;
  location: string;
  state: string;
  image: string;
  rating: number;
  description: string;
  poojas: Pooja[];
}

// Public-domain Wikimedia Commons images (Indian temples).
export const TEMPLES: Temple[] = [
  {
    id: "meenakshi",
    name: "Meenakshi Temple",
    location: "Madurai",
    state: "Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Madurai_Meenakshi_temple_01.jpg/1280px-Madurai_Meenakshi_temple_01.jpg",
    rating: 4.9,
    description:
      "An ancient Dravidian temple dedicated to Goddess Meenakshi and Lord Sundareshwarar. Famed for its towering, intricately sculpted gopurams and the magnificent Thousand Pillar Hall.",
    poojas: [
      { id: "darshan", name: "Darshan", duration: "30 min", description: "General darshan with priest blessings." },
      { id: "abhishekam", name: "Abhishekam", duration: "45 min", description: "Sacred bathing ritual of the deity." },
      { id: "archana", name: "Archana", duration: "20 min", description: "Personalised name & gotra prayer." },
    ],
  },
  {
    id: "tirupati",
    name: "Sri Venkateswara Temple",
    location: "Tirumala",
    state: "Andhra Pradesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Tirumala_090615.jpg/1280px-Tirumala_090615.jpg",
    rating: 4.9,
    description:
      "One of the world's most visited pilgrimage sites, dedicated to Lord Venkateswara. Nestled in the Tirumala hills, it draws millions of devotees annually.",
    poojas: [
      { id: "darshan", name: "Sarva Darshan", duration: "1 hr", description: "Standard hill-top darshan." },
      { id: "suprabhatam", name: "Suprabhatam Seva", duration: "30 min", description: "Early morning awakening ritual." },
      { id: "archana", name: "Archana", duration: "20 min", description: "Personalised prayer with sankalpam." },
    ],
  },
  {
    id: "kashi",
    name: "Kashi Vishwanath",
    location: "Varanasi",
    state: "Uttar Pradesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Kashi_Vishvanath_Temple.jpg/1280px-Kashi_Vishvanath_Temple.jpg",
    rating: 4.8,
    description:
      "One of the twelve Jyotirlingas, situated on the western bank of the holy Ganges. The temple's golden spire is a beacon of Shaivite devotion.",
    poojas: [
      { id: "darshan", name: "Darshan", duration: "30 min", description: "General Jyotirlinga darshan." },
      { id: "rudrabhishek", name: "Rudrabhishek", duration: "1 hr", description: "Recitation of Shri Rudram with abhishekam." },
      { id: "mangalaarti", name: "Mangala Aarti", duration: "45 min", description: "Pre-dawn aarti — seats limited." },
    ],
  },
  {
    id: "jagannath",
    name: "Jagannath Temple",
    location: "Puri",
    state: "Odisha",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Jagannath_temple_Puri.jpg/1280px-Jagannath_temple_Puri.jpg",
    rating: 4.8,
    description:
      "A 12th-century Vaishnav temple dedicated to Lord Jagannath. Renowned for its annual Rath Yatra and the colossal kitchen serving Mahaprasad.",
    poojas: [
      { id: "darshan", name: "Darshan", duration: "30 min", description: "Inner sanctum darshan." },
      { id: "mahaprasad", name: "Mahaprasad Seva", duration: "1 hr", description: "Sacred meal offering ritual." },
      { id: "bhog", name: "Bhog Offering", duration: "20 min", description: "Naivedyam offering on your behalf." },
    ],
  },
  {
    id: "somnath",
    name: "Somnath Temple",
    location: "Veraval",
    state: "Gujarat",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Somnath_mandir_%28cropped%29.jpg/1280px-Somnath_mandir_%28cropped%29.jpg",
    rating: 4.7,
    description:
      "The first among the twelve Jyotirlingas, set on the western coast facing the Arabian Sea. A symbol of resilience, rebuilt many times over centuries.",
    poojas: [
      { id: "darshan", name: "Darshan", duration: "30 min", description: "General darshan." },
      { id: "abhishekam", name: "Abhishekam", duration: "45 min", description: "Jyotirlinga abhishekam ritual." },
      { id: "aarti", name: "Sandhya Aarti", duration: "30 min", description: "Evening aarti with sea-front view." },
    ],
  },
  {
    id: "golden",
    name: "Harmandir Sahib",
    location: "Amritsar",
    state: "Punjab",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Golden_Temple_in_evening.jpg/1280px-Golden_Temple_in_evening.jpg",
    rating: 4.9,
    description:
      "The holiest gurdwara of Sikhism, set within the sacred Amrit Sarovar. Open to all faiths, with the world's largest community kitchen (Langar).",
    poojas: [
      { id: "darshan", name: "Darshan", duration: "45 min", description: "Walk through the parikrama and inner sanctum." },
      { id: "kirtan", name: "Kirtan Seva", duration: "1 hr", description: "Listen to live Gurbani recital." },
      { id: "langar", name: "Langar Seva", duration: "30 min", description: "Volunteer or partake in the community meal." },
    ],
  },
  {
    id: "konark",
    name: "Konark Sun Temple",
    location: "Konark",
    state: "Odisha",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Konarka_Temple.jpg/1280px-Konarka_Temple.jpg",
    rating: 4.6,
    description:
      "A 13th-century UNESCO World Heritage Site shaped like a colossal stone chariot of the Sun God Surya, with twelve pairs of intricately carved wheels.",
    poojas: [
      { id: "darshan", name: "Heritage Darshan", duration: "1 hr", description: "Guided heritage walk-through." },
      { id: "surya-namaskar", name: "Surya Namaskar Seva", duration: "30 min", description: "Sunrise prayer to Lord Surya." },
      { id: "archana", name: "Archana", duration: "20 min", description: "Personalised prayer offering." },
    ],
  },
  {
    id: "rameswaram",
    name: "Ramanathaswamy Temple",
    location: "Rameswaram",
    state: "Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Rameshwaram_Temple_%28Sethu_Karai%29.jpg/1280px-Rameshwaram_Temple_%28Sethu_Karai%29.jpg",
    rating: 4.8,
    description:
      "A Jyotirlinga temple on Rameswaram island, famed for its 1,200 m long sculpted corridors — the longest in any Hindu temple.",
    poojas: [
      { id: "darshan", name: "Darshan", duration: "45 min", description: "Jyotirlinga darshan." },
      { id: "theertham", name: "22 Theertham Snanam", duration: "1.5 hr", description: "Holy bath at all 22 sacred wells." },
      { id: "abhishekam", name: "Abhishekam", duration: "45 min", description: "Sacred Ganga jal abhishekam." },
    ],
  },
  {
    id: "lotus",
    name: "Lotus Temple",
    location: "New Delhi",
    state: "Delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lotus_Temple_in_New_Delhi_03-2016.jpg/1280px-Lotus_Temple_in_New_Delhi_03-2016.jpg",
    rating: 4.7,
    description:
      "A Bahá'í House of Worship in the form of a lotus flower with 27 marble petals. Open to people of all faiths for silent prayer and meditation.",
    poojas: [
      { id: "darshan", name: "Silent Visit", duration: "30 min", description: "Meditative visit inside the prayer hall." },
      { id: "guided", name: "Guided Tour", duration: "1 hr", description: "Architectural & spiritual tour." },
    ],
  },
  {
    id: "akshardham",
    name: "Akshardham Temple",
    location: "New Delhi",
    state: "Delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Akshardham-Delhi-temple-September-2014.jpg/1280px-Akshardham-Delhi-temple-September-2014.jpg",
    rating: 4.8,
    description:
      "A modern marvel of Indian architecture, dedicated to Bhagwan Swaminarayan. Features 20,000 sculpted figures, lush gardens, and a sacred stepwell.",
    poojas: [
      { id: "darshan", name: "Mandir Darshan", duration: "1 hr", description: "Walk through the main monument." },
      { id: "abhishek", name: "Abhishek Mandap", duration: "30 min", description: "Personal water offering ritual." },
      { id: "aarti", name: "Sandhya Aarti", duration: "30 min", description: "Evening aarti with the deity." },
    ],
  },
];

export const getTempleById = (id: string) => TEMPLES.find((t) => t.id === id);
