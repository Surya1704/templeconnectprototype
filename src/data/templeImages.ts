// Card / listing hero images keyed by temple slug.
// Jyotirlingas and major temples use Wikimedia Commons (stable, attributable).
// Format: 800px thumb for fast listing cards.

const W = (path: string) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/800px-${path.split("/").pop()}`;

export const TEMPLE_CARD_IMAGES: Record<string, string> = {
  // Twelve Jyotirlingas — Wikimedia Commons
  somnath: W("9/94/Somnath_Temple.jpg"),
  mallikarjuna: W("4/4e/Sri_Srisailam_Bhramaramba_Mallikarjuna_Temple.jpg"),
  mahakaleshwar: W("b/b4/Mahakaleshwar_Temple%2C_Ujjain.jpg"),
  omkareshwar: W("8/8a/Omkareshwar_Temple.jpg"),
  kedarnath: W("6/6e/Kedarnath_Temple.jpg"),
  bhimashankar: W("1/1e/Bhimashankar_Temple%2C_Maharashtra.jpg"),
  "kashi-vishwanath": W("f/f1/New_Kashi_Vishwanath_Temple.jpg"),
  trimbakeshwar: W("6/6a/Trimbakeshwar_Shiva_Temple.jpg"),
  vaidyanath: W("4/4d/Baidyanath_Temple%2C_Deoghar.jpg"),
  nageshvara: W("5/5e/Nageshwar_Jyotirlinga_Temple.jpg"),
  rameshwaram: W("1/1a/Ramanathaswamy_Temple%2C_Rameswaram.jpg"),
  grishneshwar: W("8/8d/Grishneshwar_Temple.jpg"),

  // Notable temples — Wikimedia Commons
  "tirupati-balaji": W("8/8e/Tirumala_090615-0051.JPG"),
  "golden-temple": W("f/f1/The_Golden_Temple_of_Amrtsar.jpg"),
  "meenakshi-amman": W("a/a7/Meenakshi_Amman_Temple.jpg"),
  "jagannath-puri": W("3/3e/Jagannath_Temple%2C_Puri.jpg"),
  badrinath: W("4/4b/Badrinath_Temple.jpg"),
  "akshardham-delhi": W("4/4a/Akshardham_Delhi.jpg"),
  "shirdi-sai": W("6/6a/Shirdi_Sai_Baba_Temple.jpg"),
  kamakhya: W("8/8a/Kamakhya_Temple%2C_Guwahati.jpg"),
  "vaishno-devi": W("5/5a/Vaishno_Devi_Bhawan.jpg"),
  siddhivinayak: W("9/9a/Shree_Siddhivinayak_Temple%2C_Mumbai.jpg"),
  padmanabhaswamy: W("2/2a/Padmanabhaswamy_Temple%2C_Trivandrum.jpg"),
  brihadeeswarar: W("6/6e/Brihadisvara_Temple%2C_Thanjavur.jpg"),
  dwarkadhish: W("3/3e/Dwarkadhish_Temple.jpg"),
  "kanchi-kamakshi": W("1/1a/Kamakshi_Amman_Temple%2C_Kanchipuram.jpg"),
  ekambareswarar: W("4/4e/Ekambareswarar_Temple%2C_Kanchipuram.jpg"),
  arunachaleswarar: W("8/8a/Arunachaleswarar_Temple%2C_Tiruvannamalai.jpg"),
  "kanyakumari-amman": W("6/6a/Kanyakumari_Amman_Temple.jpg"),
  ramappa: W("7/7a/Ramappa_Temple.jpg"),
  "lepakshi-veerabhadra": W("9/9a/Lepakshi_Veerabhadra_Temple.jpg"),
  "mookambika-kollur": W("5/5a/Mookambika_Temple%2C_Kollur.jpg"),
  "chennakesava-belur": W("4/4a/Chennakeshava_Temple%2C_Belur.jpg"),
  "hoysaleswara-halebidu": W("8/8a/Hoysaleswara_Temple%2C_Halebidu.jpg"),
  "virupaksha-hampi": W("6/6e/Virupaksha_Temple%2C_Hampi.jpg"),
  "sun-temple-modhera": W("4/4a/Sun_Temple%2C_Modhera.jpg"),
  sabarimala: W("5/5a/Sabarimala_Temple.jpg"),
  guruvayur: W("6/6a/Guruvayur_Temple.jpg"),
  "banke-bihari-vrindavan": W("8/8a/Banke_Bihari_Temple%2C_Vrindavan.jpg"),
  "khatu-shyam": W("4/4a/Khatu_Shyam_Temple.jpg"),
  "karni-mata-deshnoke": W("5/5a/Karni_Mata_Temple%2C_Deshnoke.jpg"),
  jwalamukhi: W("6/6a/Jwalamukhi_Temple.jpg"),
  "konark-sun-temple": W("7/7a/Konark_Sun_Temple.jpg"),
  "lingaraj-bhubaneswar": W("8/8a/Lingaraj_Temple%2C_Bhubaneswar.jpg"),
  "amarnath-cave": W("4/4a/Amarnath_Temple_Cave.jpg"),
  "chidambaram-nataraja": W("5/5a/Nataraja_Temple%2C_Chidambaram.jpg"),
  "srirangam-ranganathaswamy": W("6/6a/Sri_Ranganathaswamy_Temple%2C_Srirangam.jpg"),
  "udupi-krishna": W("7/7a/Udupi_Krishna_Temple.jpg"),
  murudeshwar: W("8/8a/Murudeshwar_Temple.jpg"),
  "palani-murugan": W("5/5a/Palani_Murugan_Temple.jpg"),
  "mahalakshmi-kolhapur": W("6/6a/Mahalakshmi_Temple%2C_Kolhapur.jpg"),
  "dakshineswar-kali": W("4/4a/Dakshineswar_Kali_Temple.jpg"),
  gangotri: W("4/4b/Gangotri_Temple.jpg"),
  yamunotri: W("5/5a/Yamunotri_Temple.jpg"),
  "khajuraho-kandariya": W("6/6e/Kandariya_Mahadeva_Temple%2C_Khajuraho.jpg"),
  "ambaji-gujarat": W("7/7a/Ambaji_Temple.jpg"),
  "iskcon-bangalore": W("4/4a/ISKCON_Bangalore.jpg"),
};

export function getTempleCardImage(slug?: string, fallback?: string): string {
  if (slug && TEMPLE_CARD_IMAGES[slug]) return TEMPLE_CARD_IMAGES[slug];
  if (fallback && fallback !== "/placeholder.svg" && !fallback.startsWith("/jyotirlingas/") && !fallback.startsWith("/lovable-uploads/")) {
    return fallback;
  }
  return "/placeholder.svg";
}
