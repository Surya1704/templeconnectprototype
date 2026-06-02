// Bundled directory of notable temples beyond the twelve Jyotirlingas.
// These ship with the app so Explore + the map are populated even when
// Supabase is not configured (demo mode). Coordinates are approximate and
// these listings are community-sourced, not verified temple-trust partners.

import { jyotirlingas } from "./jyotirlingas";

export interface BundledTemple {
  slug: string;
  name: string;
  deity: string;
  state: string;
  lat: number;
  lng: number;
  blurb: string;
  imageUrl: string;
  officialWebsite?: string;
  donationLink?: string;
}

export const extraTemples: BundledTemple[] = [
  {
    slug: "tirupati-balaji",
    name: "Tirumala Venkateswara (Tirupati Balaji)",
    deity: "Vishnu",
    state: "Andhra Pradesh",
    lat: 13.6833,
    lng: 79.3472,
    blurb: "One of the most visited and richest temples in the world, perched on the Tirumala hills and dedicated to Lord Venkateswara.",
    imageUrl: "/placeholder.svg",
    officialWebsite: "https://www.tirumala.org/",
    donationLink: "https://www.ttdsevaonline.com/",
  },
  {
    slug: "meenakshi-amman",
    name: "Meenakshi Amman Temple",
    deity: "Parvati (Meenakshi)",
    state: "Tamil Nadu",
    lat: 9.9195,
    lng: 78.1193,
    blurb: "A towering Dravidian complex in Madurai with vividly sculpted gopurams, dedicated to Goddess Meenakshi and Sundareswarar.",
    imageUrl: "/placeholder.svg",
    officialWebsite: "https://maduraimeenakshi.org/",
  },
  {
    slug: "jagannath-puri",
    name: "Jagannath Temple, Puri",
    deity: "Vishnu (Jagannath)",
    state: "Odisha",
    lat: 19.8048,
    lng: 85.8180,
    blurb: "Home of the famous Rath Yatra, this 12th-century temple is one of the Char Dham pilgrimage sites.",
    imageUrl: "/placeholder.svg",
    officialWebsite: "https://www.shreejagannatha.in/",
  },
  {
    slug: "badrinath",
    name: "Badrinath Temple",
    deity: "Vishnu (Badrinarayan)",
    state: "Uttarakhand",
    lat: 30.7433,
    lng: 79.4938,
    blurb: "A Char Dham shrine high in the Garhwal Himalayas on the bank of the Alaknanda, dedicated to Lord Vishnu.",
    imageUrl: "/placeholder.svg",
    officialWebsite: "https://badrinath-kedarnath.gov.in/",
  },
  {
    slug: "kamakhya",
    name: "Kamakhya Temple",
    deity: "Shakti (Kamakhya)",
    state: "Assam",
    lat: 26.1664,
    lng: 91.7055,
    blurb: "One of the most revered Shakti Peethas, set on Nilachal Hill overlooking Guwahati and the Brahmaputra.",
    imageUrl: "/placeholder.svg",
    officialWebsite: "https://kamakhyatemple.org/",
  },
  {
    slug: "vaishno-devi",
    name: "Vaishno Devi (Mata Vaishno Devi)",
    deity: "Shakti (Vaishno Devi)",
    state: "Jammu & Kashmir",
    lat: 33.0308,
    lng: 74.9490,
    blurb: "A cave shrine in the Trikuta Mountains reached by a hill trek from Katra, among India's most visited pilgrimages.",
    imageUrl: "/placeholder.svg",
    officialWebsite: "https://www.maavaishnodevi.org/",
  },
  {
    slug: "siddhivinayak",
    name: "Shree Siddhivinayak Temple",
    deity: "Ganesha",
    state: "Maharashtra",
    lat: 19.0169,
    lng: 72.8302,
    blurb: "Mumbai's beloved Ganesha temple in Prabhadevi, known for its golden-domed sanctum and devoted crowds.",
    imageUrl: "/placeholder.svg",
    officialWebsite: "https://www.siddhivinayak.org/",
  },
  {
    slug: "shirdi-sai",
    name: "Shri Saibaba Sansthan, Shirdi",
    deity: "Sai Baba",
    state: "Maharashtra",
    lat: 19.7667,
    lng: 74.4769,
    blurb: "The samadhi shrine of Sai Baba of Shirdi, drawing pilgrims of every faith to the town of Shirdi.",
    imageUrl: "/placeholder.svg",
    officialWebsite: "https://www.sai.org.in/",
  },
  {
    slug: "padmanabhaswamy",
    name: "Padmanabhaswamy Temple",
    deity: "Vishnu (Anantha Padmanabha)",
    state: "Kerala",
    lat: 8.4828,
    lng: 76.9436,
    blurb: "A Dravidian-Kerala style temple in Thiruvananthapuram where Vishnu reclines on the serpent Anantha.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "brihadeeswarar",
    name: "Brihadeeswarar Temple (Big Temple)",
    deity: "Shiva",
    state: "Tamil Nadu",
    lat: 10.7828,
    lng: 79.1318,
    blurb: "A UNESCO-listed Chola masterpiece in Thanjavur, crowned by one of the tallest temple vimanas in the world.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "dwarkadhish",
    name: "Dwarkadhish Temple",
    deity: "Krishna",
    state: "Gujarat",
    lat: 22.2378,
    lng: 68.9685,
    blurb: "A Char Dham temple on the Gomti creek in Dwarka, honouring Krishna as the king of Dwarka.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "golden-temple",
    name: "Golden Temple (Harmandir Sahib)",
    deity: "Sikh Gurdwara",
    state: "Punjab",
    lat: 31.6200,
    lng: 74.8765,
    blurb: "The holiest gurdwara of Sikhism in Amritsar, its gilded sanctum set amid the Amrit Sarovar.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "kanchi-kamakshi",
    name: "Kamakshi Amman Temple, Kanchipuram",
    deity: "Shakti (Kamakshi)",
    state: "Tamil Nadu",
    lat: 12.8419,
    lng: 79.7036,
    blurb: "A principal Shakti shrine in the temple-town of Kanchipuram, dedicated to Goddess Kamakshi.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "ekambareswarar",
    name: "Ekambareswarar Temple",
    deity: "Shiva",
    state: "Tamil Nadu",
    lat: 12.8470,
    lng: 79.7000,
    blurb: "One of the Pancha Bhoota Sthalams representing the earth element, with a vast gopuram in Kanchipuram.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "arunachaleswarar",
    name: "Arunachaleswarar Temple",
    deity: "Shiva",
    state: "Tamil Nadu",
    lat: 12.2317,
    lng: 79.0672,
    blurb: "The fire-element shrine at the foot of Arunachala hill in Tiruvannamalai, famed for the Karthigai Deepam.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "kanyakumari-amman",
    name: "Kumari Amman Temple",
    deity: "Shakti (Kanya Kumari)",
    state: "Tamil Nadu",
    lat: 8.0779,
    lng: 77.5562,
    blurb: "A coastal Shakti Peetha at the southern tip of India where three seas meet.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "ramappa",
    name: "Ramappa Temple (Rudreshwara)",
    deity: "Shiva",
    state: "Telangana",
    lat: 18.2602,
    lng: 79.9447,
    blurb: "A UNESCO World Heritage Kakatiya-era temple near Warangal, known for its floating-brick shikhara and dancing sculptures.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "lepakshi-veerabhadra",
    name: "Veerabhadra Temple, Lepakshi",
    deity: "Shiva (Veerabhadra)",
    state: "Andhra Pradesh",
    lat: 13.8086,
    lng: 77.6065,
    blurb: "A Vijayanagara temple celebrated for its hanging pillar, mural ceilings, and monolithic Nandi.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "mookambika-kollur",
    name: "Mookambika Temple, Kollur",
    deity: "Shakti (Mookambika)",
    state: "Karnataka",
    lat: 13.8645,
    lng: 74.9420,
    blurb: "A revered Devi temple on the banks of the Souparnika river in the Western Ghats.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "chennakesava-belur",
    name: "Chennakeshava Temple, Belur",
    deity: "Vishnu (Chennakeshava)",
    state: "Karnataka",
    lat: 13.1623,
    lng: 75.8648,
    blurb: "A Hoysala-era jewel covered in intricate friezes, built on the banks of the Yagachi river.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "hoysaleswara-halebidu",
    name: "Hoysaleswara Temple, Halebidu",
    deity: "Shiva",
    state: "Karnataka",
    lat: 13.2127,
    lng: 75.9943,
    blurb: "A twin-shrine Hoysala temple in Halebidu renowned for densely carved soapstone walls.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "virupaksha-hampi",
    name: "Virupaksha Temple, Hampi",
    deity: "Shiva (Virupaksha)",
    state: "Karnataka",
    lat: 15.3350,
    lng: 76.4600,
    blurb: "The living temple at the heart of the Hampi UNESCO site, continuously worshipped for centuries.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "sun-temple-modhera",
    name: "Sun Temple, Modhera",
    deity: "Surya",
    state: "Gujarat",
    lat: 23.5832,
    lng: 72.1326,
    blurb: "A Solanki-era temple to the Sun god with a stepped kunda, aligned so light reaches the sanctum at equinox.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "sabarimala",
    name: "Sabarimala Ayyappa Temple",
    deity: "Ayyappa",
    state: "Kerala",
    lat: 9.4319,
    lng: 77.0817,
    blurb: "A forest hill shrine to Lord Ayyappa, reached after a vow-bound pilgrimage through the Periyar ranges.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "guruvayur",
    name: "Guruvayur Sri Krishna Temple",
    deity: "Krishna (Guruvayurappan)",
    state: "Kerala",
    lat: 10.5946,
    lng: 76.0391,
    blurb: "A major Krishna temple in Thrissur district, often called the Dwarka of the South.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "banke-bihari-vrindavan",
    name: "Banke Bihari Temple, Vrindavan",
    deity: "Krishna (Banke Bihari)",
    state: "Uttar Pradesh",
    lat: 27.5826,
    lng: 77.6962,
    blurb: "A much-loved Krishna temple in Vrindavan where the deity's darshan is given in brief, curtained glimpses.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "khatu-shyam",
    name: "Khatu Shyam Ji Temple",
    deity: "Krishna (Khatu Shyam)",
    state: "Rajasthan",
    lat: 27.3960,
    lng: 75.4060,
    blurb: "A hugely popular Shyam temple in Sikar district drawing vast crowds during the Phalguna Mela.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "karni-mata-deshnoke",
    name: "Karni Mata Temple, Deshnoke",
    deity: "Shakti (Karni Mata)",
    state: "Rajasthan",
    lat: 27.7906,
    lng: 73.3411,
    blurb: "The famous 'rat temple' near Bikaner, where kabas are revered as part of the goddess's lineage.",
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "jwalamukhi",
    name: "Jwala Ji Temple",
    deity: "Shakti (Jwala Devi)",
    state: "Himachal Pradesh",
    lat: 31.8757,
    lng: 76.3203,
    blurb: "A Shakti Peetha in Kangra where natural flames are worshipped as the goddess, with no idol in the sanctum.",
    imageUrl: "/placeholder.svg",
  },
];

// Total number of temples bundled with the app (Jyotirlingas + the directory above).
export const TOTAL_TEMPLE_COUNT = jyotirlingas.length + extraTemples.length;

export interface BundledTempleDetail {
  slug: string;
  name: string;
  deity: string;
  state: string;
  lat: number;
  lng: number;
  blurb: string;
  imageUrl: string;
  donationLink?: string;
  officialWebsite?: string;
  isJyotirlinga: boolean;
  whatsappLink?: string;
  telegramLink?: string;
  nearestAirport?: string;
  nearestRailway?: string;
  localTransport?: string;
}

// Unified slug lookup across Jyotirlingas and the bundled directory,
// used by the temple detail page so every bundled listing resolves.
export function getBundledTemple(slug: string): BundledTempleDetail | undefined {
  const j = jyotirlingas.find((x) => x.slug === slug);
  if (j) return { ...j, isJyotirlinga: true };
  const e = extraTemples.find((x) => x.slug === slug);
  if (e) return { ...e, isJyotirlinga: false };
  return undefined;
}
