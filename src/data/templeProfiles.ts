/** Extended editorial content for temple detail pages — keyed by slug. */

export interface TempleProfile {
  significance: string;
  history?: string;
  architecture?: string;
  /** Dress code / attire expectations for devotees. */
  templeAttire: string;
  /** Arjitha sevas, poojas, and rituals offered at the temple. */
  poojas: string[];
  /** Major festivals and annual events. */
  events: string[];
  bestTimeToVisit?: string;
  visitingHours?: string;
  photography?: string;
  nearbyAttractions?: string[];
}

const JYOTIRLINGA_PROFILES: Record<string, TempleProfile> = {
  somnath: {
    significance:
      "Somnath is the first among the twelve Jyotirlingas. The shrine marks where Lord Shiva appeared as a column of light (Jyotirlinga) and is mentioned in the Shiv Purana as the eternal abode of Shiva on the western coast.",
    history:
      "The temple was destroyed and rebuilt across millennia — by the Moon God Soma, Ravana, Krishna, and Bhimdev in legend; historically by Mahmud of Ghazni and others. The present structure was consecrated in 1951 by the Shree Somnath Trust after Independence.",
    architecture:
      "Built in Chalukya style with a 150-foot shikhara overlooking the Arabian Sea. The assembly hall has 52 pillars symbolising the weeks of the year.",
    templeAttire: "Modest clothing covering shoulders and knees. Traditional dhoti-kurta or saree recommended for special poojas.",
    poojas: ["Sandhya Aarti", "Rudrabhishek", "Anna Dan (food offering)", "Deep Daan (lamp offering)", "General donation / e-Hundi"],
    events: ["Mahashivratri", "Kartik Purnima", "Shravan Mondays", "Somnath Fair"],
    bestTimeToVisit: "October to March — pleasant coastal weather.",
    visitingHours: "Darshan roughly 6:00 AM – 9:00 PM (confirm on somnath.org).",
    photography: "Prohibited inside the main sanctum.",
    nearbyAttractions: ["Bhalka Tirth", "Triveni Sangam", "Gita Mandir", "Panch Pandava Gufa"],
  },
  mallikarjuna: {
    significance:
      "One of twelve Jyotirlingas and among eighteen Shakti Peethas — where Sati's neck ornament fell. Mallikarjuna (Shiva) and Bhramaramba (Parvati) are worshipped together on the sacred Srisailam hill.",
    history:
      "Inscriptions date patronage from the Chalukya, Kakatiya, and Vijayanagara periods. Legend holds Shiva and Parvati settled here after Kartikeya left Kailash.",
    architecture:
      "Dravidian style with towering gopurams, mandapams, and intricate stone carvings across a vast hilltop complex.",
    templeAttire: "Traditional attire required — men in dhoti with upper cloth; women in saree or salwar kameez.",
    poojas: ["Sparsha Darshan", "Sheeghra / Ati-Sheeghra Darshan", "Abhishekam", "Annadanam", "e-Hundi donation"],
    events: ["Mahashivratri", "Karthika Pournami", "Ugadi", "Dussehra", "Maha Shivaratri Brahmotsavams"],
    bestTimeToVisit: "October to March.",
    visitingHours: "Temple opens early morning; check srisailadevasthanam.org for arjitha seva slots.",
    photography: "Restricted inside the main sanctum.",
    nearbyAttractions: ["Srisailam Dam", "Patala Ganga", "Srisailam Wildlife Sanctuary", "Akkamahadevi Caves"],
  },
  mahakaleshwar: {
    significance:
      "The only Jyotirlinga where the deity faces south (Dakshinamurti). The swayambhu lingam is believed to derive power from within itself. The Bhasma Aarti at dawn is among India's most sought-after rituals.",
    history:
      "Built by Paramara King Udayaditya (11th century), destroyed by Iltutmish, and rebuilt under Maratha patronage especially the Scindias of Gwalior.",
    architecture:
      "Five-level complex with Nagara shikhara, ornate mandapas, and the sanctum on a raised platform.",
    templeAttire: "Modest traditional clothing. Dhoti recommended for Bhasma Aarti participation.",
    poojas: ["Bhasma Aarti (4 AM)", "Shree Mahakal Aarti", "Rudrabhishek", "Mahamrityunjaya Jaap", "Online donation"],
    events: ["Mahashivratri", "Kartik Mela", "Nagpanchami", "Sharad Purnima", "Simhastha Kumbh (Ujjain)"],
    bestTimeToVisit: "October to March; Mahashivratri for Bhasma Aarti (book well in advance).",
    visitingHours: "Bhasma Aarti ~4:00 AM; general darshan through the day.",
    photography: "Not allowed inside the garbhagriha.",
    nearbyAttractions: ["Kal Bhairav Temple", "Ram Ghat", "Harsiddhi Temple", "Mangalnath Temple"],
  },
  omkareshwar: {
    significance:
      "The island of Mandhata is shaped like Om, where the Narmada and Kaveri meet. Omkareshwar and Mamleshwar together form the Jyotirlinga pair worshipped here.",
    history:
      "Inscriptions from Paramara and Chalukya dynasties (10th–13th century). Shiva is said to have appeared as Jyotirlinga on Mandhata mountain.",
    architecture:
      "Blend of North and South Indian styles with Nagara shikhara over the main shrine.",
    templeAttire: "Conservative dress covering shoulders and knees.",
    poojas: ["Mangal Aarti", "Abhishek", "Rudrabhishek", "Narmada Aarti", "Online donation"],
    events: ["Mahashivratri", "Kartik Purnima", "Narmada Jayanti"],
    bestTimeToVisit: "October to March.",
    visitingHours: "Approx. 5:00 AM – 9:00 PM.",
    photography: "Permitted in outer areas; restricted in sanctum.",
    nearbyAttractions: ["Siddhnath Temple", "Kedareshwar Temple", "Gauri Somnath Temple", "Narmada parikrama"],
  },
  kedarnath: {
    significance:
      "One of twelve Jyotirlingas and a Char Dham. The Pandavas sought Shiva here; he evaded them as a bull before manifesting as stone — the hump is worshipped at Kedarnath.",
    history:
      "Revived by Adi Shankaracharya in the 8th century. The 2013 Himalayan floods devastated the valley but the temple structure endured.",
    architecture:
      "Heavy stone slabs on a rectangular platform — classic Himalayan temple architecture with South Indian influences.",
    templeAttire: "Warm layered clothing essential (high altitude). Modest traditional attire for darshan.",
    poojas: ["Morning / evening Aarti", "Abhishek", "Rudrabhishek", "Online donation via BKTC portal"],
    events: ["Mahashivratri", "Kedarnath opening ceremony (Akshaya Tritiya)", "Badri-Kedar Festival"],
    bestTimeToVisit: "May–June and September–October (temple closed in winter).",
    visitingHours: "Seasonal; roughly 4:00 AM – 9:00 PM when open.",
    photography: "Generally allowed; restrictions in inner shrine.",
    nearbyAttractions: ["Vasuki Tal", "Bhairav Temple", "Gandhi Sarovar", "Chorabari Glacier"],
  },
  bhimashankar: {
    significance:
      "Sixth Jyotirlinga at the source of the Bhima river, set in the Sahyadri forests. Associated with Shiva's victory over the demon Tripurasura.",
    history:
      "13th-century origins with Yadava and Maratha renovations. The lingam is swayambhu per local tradition.",
    architecture:
      "Nagara style with Maratha and South Indian influences; main shrine surrounded by smaller mandapas.",
    templeAttire: "Modest clothing; comfortable footwear for hill access.",
    poojas: ["Kakad Aarti", "Abhishek", "Rudrabhishek", "Laghu Rudra", "Online donation"],
    events: ["Mahashivratri", "Tripuri Pournima", "Anant Chaturdashi", "Shravan Mondays"],
    bestTimeToVisit: "October to February; monsoon for lush forests (access can be difficult).",
    visitingHours: "Approx. 4:30 AM – 9:30 PM.",
    photography: "Allowed outside sanctum.",
    nearbyAttractions: ["Bhimashankar Wildlife Sanctuary", "Gupt Bhimashankar", "Hanuman Lake"],
  },
  "kashi-vishwanath": {
    significance:
      "Kashi is among the holiest cities in Hinduism; Vishwanath Jyotirlinga is where Shiva is believed to never leave. Dying in Kashi and cremation at Manikarnika Ghat is said to grant moksha.",
    history:
      "Destroyed and rebuilt many times; the present temple was built by Ahilyabai Holkar (1780). Gold spires donated by Ranjit Singh. The Kashi Vishwanath Corridor opened in 2021.",
    architecture:
      "Gold-domed shikhara, ornate mandapas, and the vast new corridor connecting the temple to the Ganga ghats.",
    templeAttire: "Traditional dress strongly recommended — dhoti-kurta for men, saree or salwar kameez for women.",
    poojas: ["Mangala Aarti", "Bhog Aarti", "Sandhya Aarti", "Shringar Aarti", "Rudrabhishek", "Online booking via official portal"],
    events: ["Mahashivratri", "Dev Deepawali", "Annakut", "Rang Bhari Ekadashi", "Shravan month"],
    bestTimeToVisit: "October to March; Dev Deepawali (Kartik Purnima) for the ghats lit with diyas.",
    visitingHours: "Multiple aarti slots; general darshan through the day — book on shrikashivishwanath.org.",
    photography: "Strictly prohibited inside the garbhagriha.",
    nearbyAttractions: ["Dashashwamedh Ghat", "Manikarnika Ghat", "Sarnath", "Ramnagar Fort"],
  },
  trimbakeshwar: {
    significance:
      "Unique three-faced lingam representing Brahma, Vishnu, and Shiva. The Godavari originates at nearby Brahmagiri — the temple is a Kumbh Mela site.",
    history:
      "Built by Peshwa Nanasaheb (1755–1786) on older foundations. The Trimbakeshwar Trust manages the shrine today.",
    architecture:
      "Black stone Hemadpanti style with Nagara shikhara and enclosed courtyard.",
    templeAttire: "Traditional dress mandatory — dhoti with upper garment for men; saree or salwar for women.",
    poojas: ["Trimbakeshwar Pooja", "Rudrabhishek", "Mahamrityunjaya Jaap", "Narayan Nagbali", "Tripindi Shradha"],
    events: ["Mahashivratri", "Shravan month", "Kumbh Mela (every 12 years at Nashik-Trimbakeshwar)"],
    bestTimeToVisit: "October to March.",
    visitingHours: "Approx. 5:30 AM – 9:00 PM.",
    photography: "Not permitted inside the temple.",
    nearbyAttractions: ["Kushavarta Kund", "Brahmagiri Hill", "Anjaneri Fort", "Gangadwar"],
  },
  vaidyanath: {
    significance:
      "Among twelve Jyotirlingas and fifty-one Shakti Peethas — where Sati's heart is believed to have fallen. Shiva as Vaidyanath (divine physician) healed Ravana here.",
    history:
      "Over 1,500 years of recorded patronage from Gupta and Pala rulers. The complex has 22 subsidiary shrines.",
    architecture:
      "Nagara style with 72-foot shikhara and cylindrical black-stone lingam.",
    templeAttire: "Traditional attire recommended; saffron/orange common among Kanwar pilgrims in Shravan.",
    poojas: ["Shringar Pooja", "Rudrabhishek", "Abhishek", "Online donation via babadham.org"],
    events: ["Mahashivratri", "Shravan month (especially Mondays)", "Basant Panchami", "Kanwar Yatra"],
    bestTimeToVisit: "November to February; Shravan for festival atmosphere.",
    visitingHours: "Approx. 4:00 AM – 9:00 PM.",
    photography: "Not allowed in main temple.",
    nearbyAttractions: ["Nandan Pahar", "Trikuta Hills", "Satsang Ashram", "Naulakha Temple"],
  },
  nageshvara: {
    significance:
      "Jyotirlinga near Dwarka associated with Shiva's victory over the demon Daruka. Devotees believe worship here protects from poison and negative forces.",
    history:
      "Ancient Puranic origins; major 20th-century restoration. A 25-foot seated Shiva statue stands outside the shrine.",
    architecture:
      "Simple elegant design with swayambhu lingam in the garbhagriha.",
    templeAttire: "Modest clothing covering shoulders and knees.",
    poojas: ["Abhishek", "Rudrabhishek", "Aarti", "General donation via Dwarka temple trust"],
    events: ["Mahashivratri", "Shravan month", "Janmashtami (nearby Dwarka)"],
    bestTimeToVisit: "October to March.",
    visitingHours: "Approx. 5:00 AM – 9:00 PM.",
    photography: "Allowed in premises; may be restricted in inner sanctum.",
    nearbyAttractions: ["Dwarkadhish Temple", "Bet Dwarka", "Rukmini Devi Temple", "Gopi Talav"],
  },
  rameshwaram: {
    significance:
      "Southernmost Char Dham and twelfth Jyotirlinga. Lord Rama worshipped Shiva here before crossing to Lanka; the lingam is called Ramalingam, with a sand lingam by Sita.",
    history:
      "Expanded by Pandya rulers (12th century) and Sethupathis of Ramanathapuram. The corridor with 1,200 granite pillars is among the longest in any Hindu temple.",
    architecture:
      "Dravidian style with towering gopurams and the famous pillared corridors.",
    templeAttire: "Traditional dress — dhoti and angavastram for men; saree or salwar kameez for women. Bath in 22 wells before darshan is customary.",
    poojas: ["Spatika Linga Darshan", "Abhishekam", "Sahasra Nama Archana", "General donation via HR&CE portal"],
    events: ["Mahashivratri", "Thai Amavasai", "Aadi Amavasya", "Arudra Darshanam", "Floating festival"],
    bestTimeToVisit: "October to April.",
    visitingHours: "Approx. 5:00 AM – 1:00 PM and 3:00 PM – 9:00 PM.",
    photography: "Restricted inside the temple.",
    nearbyAttractions: ["Dhanushkodi", "Pamban Bridge", "Agni Tirtham", "Abdul Kalam Memorial"],
  },
  grishneshwar: {
    significance:
      "The twelfth and final Jyotirlinga — completing the sacred circuit. Adjacent to the UNESCO Ellora Caves, linking living worship with ancient rock-cut heritage.",
    history:
      "Reconstructed by Ahilyabai Holkar in the 18th century. Legend of devotee Kusuma whose unwavering worship moved Shiva to restore her son.",
    architecture:
      "Red stone Hemadpanti style with intricate mythological carvings.",
    templeAttire: "Modest attire covering shoulders and knees.",
    poojas: ["Rudrabhishek", "Panchamrut Abhishek", "Laghu Rudra", "Mahamrutunjay Jaap", "Online puja booking"],
    events: ["Mahashivratri", "Shravan month"],
    bestTimeToVisit: "October to March.",
    visitingHours: "Approx. 5:30 AM – 9:30 PM.",
    photography: "Allowed outside sanctum.",
    nearbyAttractions: ["Ellora Caves", "Ajanta Caves", "Bibi Ka Maqbara", "Daulatabad Fort"],
  },
};

const EXTRA_PROFILES: Record<string, TempleProfile> = {
  "tirupati-balaji": {
    significance:
      "Lord Venkateswara appeared on Tirumala to save mankind in Kali Yuga. Among the most visited and revered Vishnu shrines in the world.",
    history:
      "Inscriptions from the 9th century; patronage from Pallavas, Cholas, and Vijayanagara. TTD manages the temple today.",
    architecture:
      "Dravidian style with gold-plated Ananda Nilayam vimana and multiple gopurams.",
    templeAttire: "Mandatory traditional dress — dhoti/pancha for men; saree, half-saree, or churidar with dupatta for women.",
    poojas: ["Suprabhatam", "Tomala Seva", "Archana", "Sahasra Namarchana", "Vastralankara Seva", "Online seva booking"],
    events: ["Brahmotsavam (September)", "Vaikunta Ekadashi", "Rathasapthami", "Sri Rama Navami"],
    bestTimeToVisit: "September to February; avoid Brahmotsavam if you prefer shorter queues.",
    visitingHours: "Varies by seva; general darshan from early morning.",
    photography: "Strictly prohibited on Tirumala hill.",
    nearbyAttractions: ["Sri Padmavati Temple", "Sri Govindaraja Swamy Temple", "Chandragiri Fort", "Kapila Theertham"],
  },
  "meenakshi-amman": {
    significance:
      "Madurai's ancient temple to Goddess Meenakshi and Sundareswarar — a Paadal Petra Sthalam and pinnacle of Dravidian architecture.",
    templeAttire: "Modest traditional dress; saree or salwar preferred for women.",
    poojas: ["Abhishekam", "Archana", "Annadanam", "Special darshan tickets"],
    events: ["Chithirai Festival (April–May)", "Avani Moolam", "Navaratri", "Float festival"],
    bestTimeToVisit: "October to March.",
    visitingHours: "Approx. 5:00 AM – 12:30 PM and 4:00 PM – 10:00 PM.",
    nearbyAttractions: ["Thirumalai Nayakkar Mahal", "Gandhi Memorial Museum", "Azhagar Kovil"],
  },
  "jagannath-puri": {
    significance:
      "One of the Char Dham and one of the four great Vaishnava shrines. Lord Jagannath, Balabhadra, and Subhadra are worshipped as wooden deities.",
    templeAttire: "Traditional Hindu dress; non-Hindus may not enter the inner sanctum per temple rules.",
    poojas: ["Abakash", "Gopala Ballava", "Sandhya Aarti", "Mahaprasad offering"],
    events: ["Rath Yatra (June–July)", "Snana Yatra", "Hera Panchami", "Niladri Bije"],
    bestTimeToVisit: "October to March; Rath Yatra for the grand procession.",
    visitingHours: "Approx. 5:00 AM – 11:00 PM (with afternoon break).",
    nearbyAttractions: ["Puri Beach", "Konark Sun Temple", "Chilika Lake", "Raghurajpur heritage village"],
  },
  "golden-temple": {
    significance:
      "Holiest gurdwara of Sikhism — Harmandir Sahib sits on the Amrit Sarovar. Open to all faiths, embodying equality and seva.",
    templeAttire: "Head covered at all times; modest clothing. Remove shoes before entering the complex.",
    poojas: ["Guru Granth Sahib recitation", "Kirtan", "Langar seva (community kitchen)"],
    events: ["Guru Nanak Gurpurab", "Baisakhi", "Bandi Chhor Divas (Diwali)", "Hola Mohalla"],
    bestTimeToVisit: "October to March.",
    visitingHours: "Open nearly 24 hours; best visited early morning or evening for kirtan.",
    nearbyAttractions: ["Jallianwala Bagh", "Partition Museum", "Wagah Border (day trip)"],
  },
  "vaishno-devi": {
    significance:
      "Cave shrine of Mata Vaishno Devi in the Trikuta Mountains — one of India's most visited pilgrimages. The goddess is worshipped as three pindis representing Maha Kali, Maha Lakshmi, and Maha Saraswati.",
    templeAttire: "Comfortable modest clothing and sturdy footwear for the 12 km trek from Katra.",
    poojas: ["Havan", "Archana", "Chhabri offering", "Online donation"],
    events: ["Navaratri", "New Year rush", "Shravan"],
    bestTimeToVisit: "March to October.",
    visitingHours: "Shrine open nearly 24 hours; trek permitted in permitted hours.",
    nearbyAttractions: ["Bhairavnath Temple", "Ardhkuwari Cave", "Sanjichhat"],
  },
  sabarimala: {
    significance:
      "Hill shrine of Lord Ayyappa — a 41-day vratham pilgrimage open to devotees of all backgrounds who observe the mandala vows.",
    templeAttire:
      "Black or blue dhoti/veshti, no upper garment for men during pilgrimage; women of menstruating age traditionally do not undertake the pilgrimage per temple tradition.",
    poojas: ["Abhishekam", "Udayasthamana Pooja", "Kalabhabhishekam"],
    events: ["Mandala season (Nov–Jan)", "Makaravilakku", "Vishu"],
    bestTimeToVisit: "Mandala / Makaravilakku season (November to January).",
    visitingHours: "Seasonal opening; confirm on official Devaswom portal.",
    nearbyAttractions: ["Pampa River", "Malikappurathamma Temple", "Erumeli"],
  },
};

function defaultProfile(name: string, deity: string, blurb: string, state: string): TempleProfile {
  const d = deity.toLowerCase();
  const isShiva = d.includes("shiva") || d.includes("linga");
  const isVishnu = d.includes("vishnu") || d.includes("krishna") || d.includes("venkateswara") || d.includes("jagannath") || d.includes("rama");
  const isShakti = d.includes("shakti") || d.includes("devi") || d.includes("parvati") || d.includes("kali") || d.includes("amman") || d.includes("kamakhya");
  const isGanesha = d.includes("ganesha") || d.includes("ganesh") || d.includes("vinayak");
  const isSouth = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Telangana"].includes(state);

  let attire = "Modest clothing covering shoulders and knees. Traditional Indian dress recommended.";
  if (isSouth) attire = "Traditional attire — dhoti/veshti for men; saree or salwar kameez for women.";
  if (isGanesha) attire = "Modest traditional dress; remove footwear before the sanctum.";
  if (name.includes("Golden Temple") || name.includes("Gurdwara")) attire = "Head covered; modest clothing; remove shoes in the complex.";

  let poojas: string[];
  if (isShiva) poojas = ["Abhishekam", "Rudrabhishek", "Aarti", "Archana", "Online donation (where available)"];
  else if (isVishnu) poojas = ["Archana", "Sahasranama", "Aarti", "Special darshan", "Online seva booking"];
  else if (isShakti) poojas = ["Kumkum Archana", "Abhishekam", "Annadanam", "Aarti"];
  else if (isGanesha) poojas = ["Modak offering", "Abhishekam", "Aarti", "Sankashti Chaturthi puja"];
  else poojas = ["Aarti", "Archana", "General donation"];

  const events = isShiva
    ? ["Mahashivratri", "Shravan month", "Kartik Purnima"]
    : isVishnu
      ? ["Vaikunta Ekadashi", "Ramanavami", "Janmashtami"]
      : isShakti
        ? ["Navaratri", "Diwali", "Annual Brahmotsavam"]
        : ["Major festival days per temple calendar"];

  return {
    significance: blurb,
    templeAttire: attire,
    poojas,
    events,
    bestTimeToVisit: "October to March for most of North and Central India; post-monsoon for hill temples.",
    visitingHours: "Confirm on the official temple website before travel.",
    photography: "Generally restricted inside the garbhagriha; check local rules.",
  };
}

export function getTempleProfile(
  slug: string,
  fallback?: { name: string; deity: string; blurb: string; state: string }
): TempleProfile | undefined {
  if (JYOTIRLINGA_PROFILES[slug]) return JYOTIRLINGA_PROFILES[slug];
  if (EXTRA_PROFILES[slug]) return EXTRA_PROFILES[slug];
  if (fallback) return defaultProfile(fallback.name, fallback.deity, fallback.blurb, fallback.state);
  return undefined;
}
