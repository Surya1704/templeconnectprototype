// Card / listing hero images keyed by temple slug.
// Jyotirlingas use the original lovable-uploads photos; others use URLs from the
// bundled temple datasets the user provided (Unsplash + extended temple imports).

export const TEMPLE_CARD_IMAGES: Record<string, string> = {
  // Twelve Jyotirlingas — full photos from lovable-uploads
  somnath: "/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png",
  mallikarjuna: "/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png",
  mahakaleshwar: "/lovable-uploads/b668b893-dac5-4d67-9be0-425045941429.png",
  omkareshwar: "/lovable-uploads/bff90acf-434f-4b5d-a02a-f8cd060e2ec9.png",
  kedarnath: "/lovable-uploads/8a415d87-63d9-44f9-bb8e-583856ad0fa5.png",
  bhimashankar: "/lovable-uploads/bed64bd3-3688-44d2-9bad-a6918b67c9a6.png",
  "kashi-vishwanath": "/lovable-uploads/ea8558eb-ef06-4c98-8f0c-23095bb29074.png",
  trimbakeshwar: "/lovable-uploads/3c73bbb4-d8d9-439c-bac6-16dfc1940d71.png",
  vaidyanath: "/lovable-uploads/3e630441-b218-447f-a772-6d16110739b2.png",
  nageshvara: "/lovable-uploads/f6e17f2f-fd67-45c1-8f9b-bdd05ef346ce.png",
  rameshwaram: "/lovable-uploads/c868ae47-1318-4239-9e0b-8e11ffd2ab53.png",
  grishneshwar: "/lovable-uploads/55fb5f1f-b855-4295-a028-e2385fe97d48.png",

  // Notable temples — from original temples.ts / extendedTemples*.ts
  "tirupati-balaji": "https://images.unsplash.com/photo-1621831714462-bec666e92454?q=80&w=1200&auto=format&fit=crop",
  "golden-temple": "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1200&auto=format&fit=crop",
  "meenakshi-amman": "https://images.unsplash.com/photo-1591014101761-a4172786fbbe?q=80&w=1200&auto=format&fit=crop",
  "jagannath-puri": "https://images.unsplash.com/photo-1627894486874-b830e5a8be76?q=80&w=1200&auto=format&fit=crop",
  badrinath: "https://images.unsplash.com/photo-1623953858703-9c7c4f5ceb73?q=80&w=1200&auto=format&fit=crop",
  "akshardham-delhi": "https://images.unsplash.com/photo-1545126178-862cdb469409?q=80&w=1200&auto=format&fit=crop",
  "shirdi-sai": "https://images.unsplash.com/photo-1600516124918-79a230d1b66f?q=80&w=1200&auto=format&fit=crop",
  kamakhya: "https://images.unsplash.com/photo-1582632728747-04b27b2d7c62?q=80&w=1200&auto=format&fit=crop",
  "vaishno-devi": "https://images.unsplash.com/photo-1583920772519-29e0c3c90156?q=80&w=1200&auto=format&fit=crop",
  siddhivinayak: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200&auto=format&fit=crop",
  padmanabhaswamy: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1200&auto=format&fit=crop",
  brihadeeswarar: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
  dwarkadhish: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1200&auto=format&fit=crop",
  "kanchi-kamakshi": "https://i.pinimg.com/736x/15/cb/4f/15cb4fe465442af1bd54bc295d6a4796.jpg",
  ekambareswarar: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop",
  arunachaleswarar: "https://i.pinimg.com/736x/45/d6/55/45d6553f2e84b96f9e5d9ea944039a4b.jpg",
  "kanyakumari-amman": "https://images.unsplash.com/photo-1580500550469-2d4b7bd31ba5?q=80&w=1200&auto=format&fit=crop",
  ramappa: "https://images.unsplash.com/photo-1576928360699-34b59aa77ad5?q=80&w=1200&auto=format&fit=crop",
  "lepakshi-veerabhadra": "https://images.unsplash.com/photo-1552928266-5a2e87a0cf2e?q=80&w=1200&auto=format&fit=crop",
  "mookambika-kollur": "https://images.unsplash.com/photo-1578068299769-1e8ad4f6af7e?q=80&w=1200&auto=format&fit=crop",
  "chennakesava-belur": "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
  "hoysaleswara-halebidu": "https://i.pinimg.com/736x/60/6f/65/606f6553b09e09c6c646928356139f17.jpg",
  "virupaksha-hampi": "https://i.pinimg.com/736x/ad/27/84/ad2784a631fdd8dcc1bfeeaa2ca95446.jpg",
  "sun-temple-modhera": "https://i.pinimg.com/736x/14/0b/5c/140b5c3b052b5886faaaef58ff3143ce.jpg",
  sabarimala: "https://i.pinimg.com/736x/52/6f/6e/526f6e98957796ff12c7e752749ce271.jpg",
  guruvayur: "https://i.pinimg.com/736x/a3/44/50/a34450f7a9c419d158fbebf0765322c6.jpg",
  "banke-bihari-vrindavan": "https://i.pinimg.com/736x/29/52/73/29527361d968687d35a171ae418a9564.jpg",
  "khatu-shyam": "https://i.pinimg.com/736x/9a/d1/ef/9ad1ef1ddd43513fdb30aafe360e1b96.jpg",
  "karni-mata-deshnoke": "https://i.pinimg.com/736x/f5/a7/a2/f5a7a26d3dadc7dd689365f83593dfbf.jpg",
  jwalamukhi: "https://i.pinimg.com/736x/fb/2c/a8/fb2ca85a9cb23cc23ac8859dbb6b6e84.jpg",
  "konark-sun-temple": "https://i.pinimg.com/736x/66/00/b9/6600b999d3f1443be7f0fcb413d8e9c1.jpg",
  "lingaraj-bhubaneswar": "https://i.pinimg.com/736x/96/4f/02/964f02b23005ea033cad4b1732451a58.jpg",
  "amarnath-cave": "https://i.pinimg.com/736x/ec/a8/63/eca86392c182c58c1ffcb6b4ffed9a19.jpg",
  "chidambaram-nataraja": "https://i.pinimg.com/736x/35/a3/43/35a3437ef3ae73d2a7390e88e23a08aa.jpg",
  "srirangam-ranganathaswamy": "https://i.pinimg.com/736x/13/49/d4/1349d4a50c78bbfdea17360d14b6ebbd.jpg",
  "udupi-krishna": "https://i.pinimg.com/736x/2c/6b/cd/2c6bcd201cc04ae94459a9a89fd67220.jpg",
  murudeshwar: "https://i.pinimg.com/736x/44/73/eb/4473eb717a1bef31bbcc983b323a0e20.jpg",
  "palani-murugan": "https://i.pinimg.com/736x/7d/74/32/7d74321bdc6feca58fbb72ed2f945337.jpg",
  "mahalakshmi-kolhapur": "https://i.pinimg.com/736x/f2/e3/7b/f2e37be39fe302a786abe78ceb4db786.jpg",
  "dakshineswar-kali": "https://i.pinimg.com/736x/9e/d5/8f/9ed58f7a343bfed80dfbc71c24a19b1c.jpg",
  gangotri: "https://images.unsplash.com/photo-1623953858703-9c7c4f5ceb73?q=80&w=1200&auto=format&fit=crop",
  yamunotri: "https://images.unsplash.com/photo-1623953858703-9c7c4f5ceb73?q=80&w=1200&auto=format&fit=crop",
  "khajuraho-kandariya": "https://i.pinimg.com/736x/df/86/e7/df86e70a23282ba200cb8444456e2405.jpg",
  "ambaji-gujarat": "https://i.pinimg.com/736x/a3/44/50/a34450f7a9c419d158fbebf0765322c6.jpg",
  "iskcon-bangalore": "https://images.unsplash.com/photo-1545126178-862cdb469409?q=80&w=1200&auto=format&fit=crop",
};

export function getTempleCardImage(slug?: string, fallback?: string): string {
  if (slug && TEMPLE_CARD_IMAGES[slug]) return TEMPLE_CARD_IMAGES[slug];
  if (fallback && fallback !== "/placeholder.svg") return fallback;
  return "/placeholder.svg";
}
