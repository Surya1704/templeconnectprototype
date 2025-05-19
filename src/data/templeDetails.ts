
import { Temple } from './temples';

// Extended interface for detailed temple information
export interface TempleDetails {
  id: string;
  history: string;
  significance: string;
  architecture: string;
  travelInfo: {
    nearestAirport?: string;
    nearestRailway?: string;
    roadAccess: string;
    localTransport: string;
  };
  visitingInfo: {
    bestTimeToVisit: string;
    festivals: string[];
    dressCode: string;
    photography: string;
    timeTaken: string;
  };
  accommodation: string;
  nearbyAttractions: string[];
}

// Collection of detailed temple information
export const templeDetails: Record<string, TempleDetails> = {
  // Jyotirlingas
  "24": { // Somnath Temple
    id: "24",
    history: "Somnath Temple has been destroyed and reconstructed several times in its history. The original temple is believed to have been built in gold by the Moon God Soma, rebuilt in silver by Ravana, in wood by Krishna, and in stone by Bhimdev. It was repeatedly demolished by various Muslim rulers, including Mahmud of Ghazni in 1026 CE. The current structure was built in 1951 after India's independence.",
    significance: "Somnath is the first among the twelve Jyotirlinga shrines of Shiva and is mentioned in ancient texts like the Shiv Purana. The temple's Jyotirlinga is believed to be the place where Lord Shiva appeared as a fiery column of light.",
    architecture: "The temple is built in the Chalukya style with intricate carvings and a 150-foot high spire. The main structure stands on a heavily molded plinth, and the assembly hall features 52 pillars symbolizing 52 weeks of the year.",
    travelInfo: {
      nearestAirport: "Rajkot Airport (130 km)",
      nearestRailway: "Veraval Railway Station (5 km)",
      roadAccess: "Well-connected by state highways from major cities in Gujarat",
      localTransport: "Auto-rickshaws and taxis are available from Veraval to Somnath"
    },
    visitingInfo: {
      bestTimeToVisit: "October to March when the weather is pleasant",
      festivals: ["Mahashivratri", "Kartik Purnima", "Shravana Mondays"],
      dressCode: "Modest clothing that covers shoulders and knees",
      photography: "Prohibited inside the main temple sanctuary",
      timeTaken: "1-2 hours for darshan and exploring the temple complex"
    },
    accommodation: "Various hotels and dharamshalas (pilgrim rest houses) are available near the temple, ranging from budget to luxury options",
    nearbyAttractions: ["Bhalka Tirth", "Triveni Sangam", "Gita Mandir", "Panch Pandava Gufa"]
  },
  
  "25": { // Rameshwaram Temple
    id: "25",
    history: "The Ramanathaswamy Temple at Rameshwaram has a rich history dating back to the Ramayana period. According to legend, Lord Rama worshipped Lord Shiva here to cleanse himself of the sin of killing Ravana. The temple in its current form was expanded during the 12th century by the Pandya Dynasty and later contributions were made by various rulers including the Sethupathis of Ramanathapuram.",
    significance: "It is one of the twelve Jyotirlingas and also a part of the Char Dham pilgrimage. The lingam here is believed to have been installed by Lord Rama himself, along with a lingam made of sand by Sita called Ramalingam.",
    architecture: "The temple is famous for having the longest corridor among all Hindu temples in India, with over 1,200 magnificently carved granite pillars. The temple has two main towers (gopurams) facing east and west, reaching heights of about 126 feet.",
    travelInfo: {
      nearestAirport: "Madurai Airport (174 km)",
      nearestRailway: "Rameshwaram Railway Station (2 km)",
      roadAccess: "Connected by Pamban Bridge to the mainland, accessible via NH49",
      localTransport: "Auto-rickshaws, cycle rickshaws, and local buses are available"
    },
    visitingInfo: {
      bestTimeToVisit: "October to April when the weather is moderate",
      festivals: ["Mahashivratri", "Aadi Amavasya", "Thai Amavasya", "Maha Shivaratri"],
      dressCode: "Traditional attire is recommended; men should wear dhoti and angavastram, women in sarees or salwar kameez",
      photography: "Restricted inside the temple premises",
      timeTaken: "3-4 hours to fully experience the temple including the sacred bath in the 22 wells"
    },
    accommodation: "Several options from budget lodges to premium hotels are available near the temple",
    nearbyAttractions: ["Dhanushkodi", "Pamban Bridge", "Agni Tirtham", "Abdul Kalam Memorial"]
  },

  "26": { // Mahakaleshwar Temple
    id: "26",
    history: "The Mahakaleshwar Temple's origins are shrouded in legend but historical records indicate it was built by the Paramara King Udayaditya in the 11th century CE. It was destroyed by Sultan Iltutmish during his raid of Ujjain in 1234-35 CE, and subsequently rebuilt. The structure was further developed during the Maratha period, particularly under the Scindias of Gwalior.",
    significance: "This temple houses one of the twelve Jyotirlingas. The lingam at Mahakal is believed to be swayambhu (self-manifested) deriving currents of power from within itself. The deity, also referred to as Dakshinamurti, faces the south and this is a unique feature as the deity in all other Jyotirlinga temples faces the east.",
    architecture: "The temple complex is spread over a large area and consists of five levels. The shikhara (spire) of the main shrine is adorned with intricate carvings. The inner sanctum is on a raised platform and houses the lingam.",
    travelInfo: {
      nearestAirport: "Indore Airport (55 km)",
      nearestRailway: "Ujjain Junction Railway Station (3 km)",
      roadAccess: "Well-connected by road to major cities like Indore, Bhopal, and Ahmedabad",
      localTransport: "Auto-rickshaws, taxis, and city buses are available"
    },
    visitingInfo: {
      bestTimeToVisit: "October to March is ideal; Mahashivratri (February-March) is particularly significant",
      festivals: ["Mahashivratri", "Kartik Mela", "Nagpanchami", "Sharad Purnima"],
      dressCode: "Modest clothing is required; traditional attire is recommended",
      photography: "Not allowed inside the sanctum sanctorum",
      timeTaken: "2-3 hours, more during festival seasons or for Bhasma Aarti"
    },
    accommodation: "Various hotels and dharamshalas are available in Ujjain city",
    nearbyAttractions: ["Kal Bhairav Temple", "Ram Ghat", "Harsiddhi Temple", "Mangalnath Temple"]
  },

  "27": { // Omkareshwar Temple
    id: "27",
    history: "Omkareshwar Temple is situated on an island called Mandhata or Shivapuri in the Narmada river. The shape of the island resembles the Hindu 'Om' symbol, giving the temple its name. The temple's history dates back to the early medieval period, with inscriptions suggesting activities from the Paramara and Chalukya dynasties (10th-13th centuries CE).",
    significance: "Omkareshwar houses one of the twelve Jyotirlingas. According to Hindu mythology, when Lord Shiva was pleased with the devotion of his devotees, he took the form of a Jyotirlinga and descended on the Mandhata mountain here.",
    architecture: "The temple architecture showcases a blend of South and North Indian architectural styles. The main shrine has a simple yet elegant design with a shikhara (spire) built in the Nagara style of North India.",
    travelInfo: {
      nearestAirport: "Indore Airport (77 km)",
      nearestRailway: "Omkareshwar Road Railway Station (12 km)",
      roadAccess: "Connected by roads to Indore, Ujjain, and other major cities",
      localTransport: "Auto-rickshaws and local buses operate from Omkareshwar Road to the temple"
    },
    visitingInfo: {
      bestTimeToVisit: "October to March when the weather is pleasant",
      festivals: ["Mahashivratri", "Kartik Purnima", "Narmada Jayanti"],
      dressCode: "Conservative attire that covers shoulders and knees",
      photography: "Permitted in the outer areas but not in the main sanctum",
      timeTaken: "2-3 hours to explore the temple and surrounding areas"
    },
    accommodation: "Several budget hotels and dharamshalas are available near the temple",
    nearbyAttractions: ["Siddhnath Temple", "Kedareshwar Temple", "Gauri Somnath Temple", "Narmada River Boat Ride"]
  },

  "28": { // Kedarnath Temple
    id: "28",
    history: "Kedarnath Temple is believed to have been built by the Pandavas and later revived by Adi Shankaracharya in the 8th century CE. The present structure dates back to the early medieval period. The temple has withstood the ravages of time, including a devastating flood in 2013 that caused extensive damage to the surrounding area but miraculously spared the temple.",
    significance: "It is one of the twelve Jyotirlingas and also part of the Char Dham pilgrimage. According to legend, the Pandavas sought Lord Shiva here to atone for their sins after the Kurukshetra War. Shiva evaded them by taking the form of a bull, later transforming into stone when recognized.",
    architecture: "The temple is built of large, heavy stone slabs over a rectangular platform. The architecture reflects the North Indian Himalayan style with influences from South Indian temple architectures.",
    travelInfo: {
      nearestAirport: "Jolly Grant Airport, Dehradun (238 km)",
      nearestRailway: "Rishikesh Railway Station (216 km)",
      roadAccess: "Road access up to Gaurikund, followed by a 16 km trek",
      localTransport: "Helicopter services are available from Phata, Guptkashi, and Sirsi to Kedarnath during the pilgrimage season"
    },
    visitingInfo: {
      bestTimeToVisit: "May to June and September to October (temple closed during winter)",
      festivals: ["Mahashivratri", "Kedarnath Dham Opening Day", "Badri-Kedar Festival"],
      dressCode: "Warm clothing is essential due to the cold climate; modest traditional attire preferred",
      photography: "Generally allowed, but restrictions apply inside the main shrine",
      timeTaken: "1-2 days including the trek and temple visit"
    },
    accommodation: "GMVN (Garhwal Mandal Vikas Nigam) guest houses and private lodges are available during the season",
    nearbyAttractions: ["Vasuki Tal", "Bhairav Temple", "Gandhi Sarovar", "Chorabari Glacier"]
  },

  "29": { // Bhimashankar Temple
    id: "29",
    history: "Bhimashankar Temple has origins dating back to the 13th century, though it has been modified several times since. According to legend, after Bhima (of the Pandavas) defeated the demon Tripurasura, Lord Shiva appeared in the form of a Swayambhu (self-manifested) Jyotirlinga at this spot. Archaeological evidence suggests contributions from the Yadava dynasty, with later renovations by Maratha rulers.",
    significance: "It is the sixth among the twelve Jyotirlinga shrines and is surrounded by dense forests and wildlife. The temple is also important because the river Bhima originates from here, which eventually joins the Krishna River.",
    architecture: "The temple represents Nagara style of architecture with influences from both South Indian and Maratha architectural styles. The main shrine houses the lingam in its sanctum sanctorum, while various smaller shrines and mandapas are located within the complex.",
    travelInfo: {
      nearestAirport: "Pune International Airport (125 km)",
      nearestRailway: "Pune Railway Station (110 km)",
      roadAccess: "Connected by road from Pune via Manchar and Bhorgiri villages",
      localTransport: "Local buses and shared taxis are available from Manchar to Bhimashankar"
    },
    visitingInfo: {
      bestTimeToVisit: "October to February is ideal; monsoon season (June-September) offers lush green surroundings but difficult access",
      festivals: ["Mahashivratri", "Tripuri Pournima", "Anant Chaturdashi"],
      dressCode: "Modest clothing is recommended",
      photography: "Allowed in the temple premises but not inside the main sanctum",
      timeTaken: "2-3 hours for temple visit; additional time if exploring the surrounding wildlife sanctuary"
    },
    accommodation: "Limited accommodation options are available near the temple; better facilities are in Pune",
    nearbyAttractions: ["Bhimashankar Wildlife Sanctuary", "Gupt Bhimashankar", "Bombay Point", "Nagphani (Duke's Nose)"]
  },

  "30": { // Kashi Vishwanath
    id: "30",
    history: "The Kashi Vishwanath Temple is one of the most ancient Hindu temples dedicated to Lord Shiva. The temple has been destroyed and rebuilt multiple times throughout history. The current structure was built in 1780 by the Maratha ruler, Ahilyabai Holkar of Indore. The iconic gold plating on the spires was donated by Maharaja Ranjit Singh of Punjab in 1839. In 2019, a massive corridor development project began to connect the temple directly to the Ganges River.",
    significance: "It houses the Vishwanath Jyotirlinga, one of the twelve Jyotirlingas. Kashi (Varanasi) is considered one of the holiest pilgrimage sites in Hinduism, and it is believed that Lord Shiva never leaves this place. According to Hindu mythology, a person who dies in Kashi and is cremated at Manikarnika Ghat attains salvation.",
    architecture: "The temple's main structure features a gold dome and gold spires. The assembly hall has an ornate ceiling and dozens of small shrines. The recent corridor development has created a 50-foot wide pathway from the temple to the Ganges River, exposing many previously hidden smaller temples.",
    travelInfo: {
      nearestAirport: "Lal Bahadur Shastri International Airport, Varanasi (25 km)",
      nearestRailway: "Varanasi Junction Railway Station (6 km)",
      roadAccess: "Well-connected by road to major cities; accessible via taxis and auto-rickshaws within the city",
      localTransport: "The narrow streets near the temple are best navigated on foot or by cycle rickshaws"
    },
    visitingInfo: {
      bestTimeToVisit: "October to March when the weather is pleasant and during festivals like Dev Deepawali",
      festivals: ["Mahashivratri", "Dev Deepawali", "Annakut", "Rang Bhari Ekadashi"],
      dressCode: "Traditional attire is recommended; men often wear dhoti-kurta and women wear sarees or salwar kameez",
      photography: "Prohibited inside the main temple sanctuary",
      timeTaken: "2-3 hours, longer during peak season and festivals due to queues"
    },
    accommodation: "Various options from budget guesthouses to luxury hotels are available along the ghats and in the city",
    nearbyAttractions: ["Dashashwamedh Ghat", "Manikarnika Ghat", "Sarnath", "Ramnagar Fort", "Banaras Hindu University"]
  },

  "31": { // Trimbakeshwar 
    id: "31",
    history: "The Trimbakeshwar Temple was built by the third Peshwa, Balaji Bajirao (also known as Nanasaheb) in 1755-1786 CE on the foundation of an older temple. The town and the temple derive their name from the three-faced embodiment of Lord Shiva as Brahma, Vishnu, and Rudra. The temple gained significant patronage during the Maratha period.",
    significance: "It is one of the twelve Jyotirlingas and has special significance because three sacred rivers - Godavari, Gautami, and Vaitarna - originate from the Brahmagiri mountain near the temple. The Jyotirlinga here is unique as it has three faces symbolizing Brahma, Vishnu, and Shiva.",
    architecture: "The temple is built in black stone in the Hemadpanti style (named after Hemadri Pandit, a minister of the Seuna Yadavas). The main shrine is enclosed by massive walls, and the shikhara (spire) rises above the sanctum sanctorum in a typical Nagara style.",
    travelInfo: {
      nearestAirport: "Nashik Airport (30 km) for domestic flights; Mumbai Airport (180 km) for international flights",
      nearestRailway: "Nashik Road Railway Station (28 km)",
      roadAccess: "Well-connected by road from Nashik and Mumbai",
      localTransport: "Buses, taxis, and auto-rickshaws are available from Nashik to Trimbakeshwar"
    },
    visitingInfo: {
      bestTimeToVisit: "October to March when the weather is pleasant; Kumbh Mela period when it falls in Nashik",
      festivals: ["Mahashivratri", "Shravan month (July-August)", "Kumbh Mela (every 12 years)"],
      dressCode: "Traditional attire is required for entry; men must wear dhoti and upper garment, women should wear saree or salwar kameez",
      photography: "Not allowed inside the temple",
      timeTaken: "2-3 hours for darshan and exploring the temple complex"
    },
    accommodation: "Limited options in Trimbakeshwar town; better facilities available in Nashik city",
    nearbyAttractions: ["Kushavarta Kund", "Brahmagiri Hill", "Anjaneri Fort", "Gangadwar"]
  },

  "32": { // Vaidyanath 
    id: "32",
    history: "The Baidyanath or Vaidyanath Temple has a history dating back over 1,500 years. According to Hindu mythology, it is where Ravana (the demon king from Ramayana) offered his ten heads to Lord Shiva as a sacrifice. The name Vaidyanath comes from 'Vaidya' meaning physician, as Shiva cured Ravana here. Historically, the temple has received patronage from various dynasties including the Gupta and Pala rulers.",
    significance: "It is one of the twelve Jyotirlingas and also one of the 51 Shakti Peethas, making it doubly sacred. According to legend, Sati's heart fell here after her body was cut into pieces by Lord Vishnu's Sudarshan Chakra.",
    architecture: "The main temple is built in the Nagara style with a 72-foot high shikhara (tower). The complex contains 22 temples dedicated to various deities. The main shrine houses the cylindrical lingam made of black stone.",
    travelInfo: {
      nearestAirport: "Ranchi Airport (250 km)",
      nearestRailway: "Jasidih Junction Railway Station (7 km)",
      roadAccess: "Connected by road to major cities in Jharkhand and Bihar",
      localTransport: "Auto-rickshaws, taxis, and cycle rickshaws are available from Jasidih to Deoghar"
    },
    visitingInfo: {
      bestTimeToVisit: "November to February for pleasant weather; July-August during the month of Shravan for special festivities",
      festivals: ["Mahashivratri", "Shravan month (particularly Mondays)", "Basant Panchami"],
      dressCode: "Traditional attire is recommended; many pilgrims wear orange/saffron clothes",
      photography: "Not allowed inside the main temple",
      timeTaken: "3-4 hours to explore the entire temple complex"
    },
    accommodation: "Various dharamshalas, budget hotels, and some mid-range hotels are available in Deoghar",
    nearbyAttractions: ["Nandan Pahar", "Trikuta Hills", "Satsang Ashram", "Naulakha Temple"]
  },

  "33": { // Nageshwar 
    id: "33",
    history: "The Nageshwar Jyotirlinga Temple has ancient origins, with legends dating back to the time of the Puranas. According to mythology, a demon named Daruka imprisoned a Shiva devotee named Supriya, and when Supriya's prayers were answered, Lord Shiva appeared and defeated the demon. The temple has been renovated multiple times throughout history, with major restoration work done in the 20th century.",
    significance: "It is one of the twelve Jyotirlingas, representing the victory of good over evil. The temple is believed to protect devotees from all poisons, with 'Naga' referring to snake or cobra, a symbol often associated with Lord Shiva.",
    architecture: "The temple features a simple yet elegant architecture. A massive 25-foot statue of Lord Shiva in a seated position is a notable feature outside the main temple. The main shrine houses the self-manifested (Swayambhu) lingam.",
    travelInfo: {
      nearestAirport: "Jamnagar Airport (140 km)",
      nearestRailway: "Dwarka Railway Station (12 km)",
      roadAccess: "Connected by road from major cities in Gujarat like Jamnagar, Rajkot, and Porbandar",
      localTransport: "Auto-rickshaws and taxis are available from Dwarka town"
    },
    visitingInfo: {
      bestTimeToVisit: "October to March when the weather is pleasant",
      festivals: ["Mahashivratri", "Shravan month (July-August)", "Janmashtami (as it's close to Dwarka)"],
      dressCode: "Modest clothing covering shoulders and knees",
      photography: "Allowed in the temple premises but may be restricted in the inner sanctum",
      timeTaken: "1-2 hours to visit the temple"
    },
    accommodation: "Limited options near the temple; better facilities available in Dwarka town",
    nearbyAttractions: ["Dwarkadheesh Temple", "Bet Dwarka", "Rukmini Devi Temple", "Gopi Talav"]
  },

  "34": { // Mallikarjuna 
    id: "34",
    history: "The Mallikarjuna Temple on Srisailam has a history dating back to the 7th century, with inscriptions from different periods including the Chalukya, Kakatiya, and Vijayanagara empires. According to legend, this is where Lord Shiva and Parvati settled as Mallikarjuna and Bhramaramba after their son Kartikeya (Murugan) left Kailash upset that his parents favored his brother Ganesha.",
    significance: "It is one of the twelve Jyotirlingas and also one of the 18 Shakti Peethas, where the upper part of Sati's throat and some ornaments fell. The presiding deities are Mallikarjuna (Shiva) and Bhramaramba (Parvati).",
    architecture: "The temple is built in the Dravidian style with impressive gopurams (gateway towers), mandapams (pillared halls), and intricate stone carvings. The temple complex covers a large area with numerous smaller shrines and structures.",
    travelInfo: {
      nearestAirport: "Rajiv Gandhi International Airport, Hyderabad (215 km)",
      nearestRailway: "Markapur Road Railway Station (80 km) or Cumbum Railway Station (90 km)",
      roadAccess: "Connected by roads from major cities in Andhra Pradesh and Telangana",
      localTransport: "APSRTC buses operate regularly from nearby towns; taxis are also available"
    },
    visitingInfo: {
      bestTimeToVisit: "October to March when the weather is pleasant",
      festivals: ["Mahashivratri", "Karthika Pournami", "Ugadi", "Dussehra", "Maha Shivaratri Brahmotsavams"],
      dressCode: "Traditional attire is recommended; men in dhoti and women in saree/salwar kameez",
      photography: "Restricted inside the main temple",
      timeTaken: "3-4 hours to explore the entire temple complex"
    },
    accommodation: "Devotee accommodations run by the temple trust and private hotels are available in Srisailam",
    nearbyAttractions: ["Srisailam Dam", "Patala Ganga", "Srisailam Wildlife Sanctuary", "Akkamahadevi Caves", "Hatakeswaram"]
  },

  "35": { // Grishneshwar 
    id: "35",
    history: "The Grishneshwar Temple (also known as Ghushmeshwar) was reconstructed by Ahilya Bai Holkar in the 18th century. However, the Jyotirlinga itself has ancient origins mentioned in the Shiva Purana. According to local legend, a devout woman named Kusuma lost her son but continued to worship Shiva by making 101 lingas daily and immersing them in a tank. Impressed, Lord Shiva restored her son's life and manifested as a Jyotirlinga at this site.",
    significance: "It is the twelfth and last of the traditional twelve Jyotirlingas, making it highly significant for devotees completing the sacred pilgrimage circuit. Its proximity to the Ellora Caves (a UNESCO World Heritage Site) adds to its cultural importance.",
    architecture: "The temple is built of red stone in the Hemadpanthi style (named after Hemadri Pandit, a minister of the Seuna Yadavas). The temple features intricate stone carvings and sculptures depicting various deities and scenes from Hindu mythology.",
    travelInfo: {
      nearestAirport: "Chhatrapati Sambhaji International Airport, Aurangabad (30 km)",
      nearestRailway: "Aurangabad Railway Station (30 km)",
      roadAccess: "Well-connected by road from Aurangabad and other major cities in Maharashtra",
      localTransport: "Auto-rickshaws, taxis, and buses are available from Aurangabad to Verul (Ellora)"
    },
    visitingInfo: {
      bestTimeToVisit: "October to March when the weather is pleasant",
      festivals: ["Mahashivratri", "Shravan month (July-August)"],
      dressCode: "Modest attire covering shoulders and knees is required",
      photography: "Allowed in the temple premises but not inside the sanctum sanctorum",
      timeTaken: "1-2 hours for the temple visit"
    },
    accommodation: "Limited options near the temple; better facilities available in Aurangabad city",
    nearbyAttractions: ["Ellora Caves", "Ajanta Caves", "Bibi Ka Maqbara", "Daulatabad Fort", "Aurangabad Caves"]
  },

  // Add details for more temples here...
  "1": { // Varanasi Kashi Vishwanath
    id: "1",
    history: "Kashi Vishwanath Temple is one of the most ancient Hindu temples dedicated to Lord Shiva. It has been destroyed and rebuilt multiple times throughout history, most notably by Mughal emperor Aurangzeb who constructed the Gyanvapi Mosque in its place. The current structure was built in 1780 by the Maratha queen Ahilyadevi Holkar of Indore. In 2019, Prime Minister Narendra Modi initiated the Kashi Vishwanath Corridor project to create a direct pathway from the temple to the Ganges River.",
    significance: "It is one of the twelve Jyotirlingas and is considered the holiest of all Shiva temples. Kashi (Varanasi) itself is regarded as one of the oldest continuously inhabited cities in the world and a major pilgrimage destination. According to Hindu belief, death in Kashi leads to moksha (liberation from the cycle of rebirth).",
    architecture: "The main temple stands on an elevated platform with a gold spire and dome. The current temple complex, after the corridor development, spans over 5 lakh square feet with 24 buildings including a museum, guest house, spiritual book center, and various facilities for pilgrims.",
    travelInfo: {
      nearestAirport: "Lal Bahadur Shastri International Airport, Varanasi (25 km)",
      nearestRailway: "Varanasi Junction (6 km)",
      roadAccess: "Well-connected by road to all major cities in North India",
      localTransport: "Auto-rickshaws, cycle-rickshaws, and e-rickshaws are available for local transport"
    },
    visitingInfo: {
      bestTimeToVisit: "October to March when the weather is pleasant; during festivals like Dev Deepawali for a unique experience",
      festivals: ["Mahashivratri", "Dev Deepawali", "Ganga Mahotsav", "Budhwa Mangal"],
      dressCode: "Traditional attire is recommended; men often wear dhoti-kurta and women wear sarees",
      photography: "Prohibited inside the main temple sanctuary",
      timeTaken: "2-3 hours, longer during peak season and festivals due to queues"
    },
    accommodation: "Various options from budget guesthouses to luxury hotels are available along the ghats and in the city",
    nearbyAttractions: ["Dashashwamedh Ghat", "Manikarnika Ghat", "Sarnath", "Ramnagar Fort", "Banaras Hindu University"]
  },

  "2": { // Tirupati Balaji Temple
    id: "2",
    history: "Sri Venkateswara Temple, commonly known as Tirupati Balaji Temple, has origins dating back to the 3rd century CE, with inscriptional evidence from the 9th century. The temple received patronage from various dynasties including the Pallavas, Cholas, and Vijayanagara rulers. During the medieval period, it survived invasions due to its remote location. In modern times, it has become one of the richest and most visited religious institutions in the world.",
    significance: "The temple is dedicated to Lord Venkateswara, a form of Vishnu, who is believed to have appeared here to save mankind from the trials of Kali Yuga. The deity is also known as the 'Lord of Seven Hills' as the temple is located on the seventh peak of Tirumala Hills.",
    architecture: "The temple is built in Dravidian architectural style with a gold-plated Vimana (tower) called the Ananda Nilayam. The main structure features intricate carvings and is surrounded by several gopurams (gateway towers) and mandapams (pillared halls).",
    travelInfo: {
      nearestAirport: "Tirupati International Airport (16 km)",
      nearestRailway: "Tirupati Railway Station (22 km)",
      roadAccess: "Well-connected by road from Chennai, Bangalore, and other major cities",
      localTransport: "APSRTC buses run frequently from Tirupati to Tirumala; taxis and prepaid cabs are also available"
    },
    visitingInfo: {
      bestTimeToVisit: "September to February when the weather is pleasant; avoid peak seasons like Brahmotsavam for shorter queues",
      festivals: ["Annual Brahmotsavam", "Vaikunta Ekadashi", "Rathasapthami", "Sri Rama Navami"],
      dressCode: "Traditional dress is mandatory - dhotis for men and sarees/half-sarees/churidars for women",
      photography: "Strictly prohibited inside the temple premises",
      timeTaken: "4-8 hours for darshan during normal days, can extend to 12-24 hours during peak seasons"
    },
    accommodation: "TTD (Tirumala Tirupati Devasthanams) provides various accommodation options from free dormitories to paid rooms; private hotels are available in Tirupati town",
    nearbyAttractions: ["Sri Padmavati Temple", "Sri Govindaraja Swamy Temple", "Chandragiri Fort", "Kapila Theertham", "ISKON Temple"]
  }
  // Continue with more temple details...
};
