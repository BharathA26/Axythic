// ─── Types ─────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  colors: string[];
  description: string;
  features: string[];
  badge?: string;
  isNew?: boolean;
  isDeal?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

// ─── Products ────────────────────────────────────────────────────────────────

export const products: Product[] = [
  // ── Headphones ──
  {
    id: 1,
    name: "Wireless Earbuds IPX8",
    brand: "SoundCore",
    category: "Headphone",
    price: 89,
    originalPrice: 129,
    rating: 4.5,
    reviews: 121,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#1a1a1a", "#2563eb", "#ffffff"],
    description:
      "Bone conduction technology with IPX8 waterproof rating — perfect for workouts.",
    features: [
      "IPX8 Waterproof",
      "12h Battery",
      "Bluetooth 5.0",
      "Touch Controls",
      "Fast Charging",
    ],
    badge: "Sale",
    isDeal: true,
  },
  {
    id: 2,
    name: "AirPods Max",
    brand: "Apple",
    category: "Headphone",
    price: 559,
    rating: 4.8,
    reviews: 121,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#e8c4b8", "#1a1a1a", "#2d5a4f"],
    description:
      "A perfect balance of high-fidelity audio with industry-leading Active Noise Cancellation.",
    features: [
      "Active Noise Cancellation",
      "Transparency Mode",
      "Spatial Audio",
      "30h Battery",
      "H1 Chip",
    ],
    badge: "Premium",
    isNew: true,
  },
  {
    id: 3,
    name: "Bose BT Earphones",
    brand: "Bose",
    category: "Headphone",
    price: 289,
    originalPrice: 359,
    rating: 4.7,
    reviews: 121,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#1a1a1a", "#4a4a4a"],
    description:
      "Signature Bose sound with world-class noise cancellation and adjustable EQ.",
    features: [
      "Noise Cancelling",
      "20h Battery",
      "Foldable Design",
      "Alexa Built-in",
      "USB-C Charging",
    ],
    isDeal: true,
  },
  {
    id: 4,
    name: "VIVEFOX Headphones",
    brand: "Vivefox",
    category: "Headphone",
    price: 39,
    rating: 4.3,
    reviews: 121,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#dc2626", "#1a1a1a", "#2563eb"],
    description:
      "Wired Stereo Headsets with Mic — great sound at an affordable price.",
    features: [
      "Wired 3.5mm",
      "Built-in Mic",
      "Foldable",
      "Noise Isolating",
      "Adjustable Band",
    ],
    badge: "Best Value",
    isDeal: true,
  },
  {
    id: 5,
    name: "JBL TUNE 600BTNC",
    brand: "JBL",
    category: "Headphone",
    price: 59,
    originalPrice: 99,
    rating: 4.4,
    reviews: 121,
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#1a1a1a", "#2563eb", "#f59e0b"],
    description:
      "Lightweight, foldable ANC headphones with JBL Pure Bass sound.",
    features: [
      "Active Noise Cancelling",
      "16h Battery",
      "JBL Pure Bass",
      "Voice Assistant",
      "Foldable",
    ],
    badge: "Sale",
    isDeal: true,
  },
  {
    id: 6,
    name: "Tagry Bluetooth",
    brand: "Tagry",
    category: "Headphone",
    price: 109,
    rating: 4.6,
    reviews: 121,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#1a1a1a", "#6b7280"],
    description:
      "True wireless earbuds with 40h total battery and intelligent AI noise cancellation.",
    features: [
      "Active Noise Cancellation",
      "40h Total Battery",
      "IPX5 Water Resistant",
      "Wireless Charging",
    ],
    isNew: true,
  },
  {
    id: 7,
    name: "Monster MNFLEX",
    brand: "Monster",
    category: "Headphone",
    price: 89,
    originalPrice: 149,
    rating: 4.2,
    reviews: 121,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e736c3a0e2?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e736c3a0e2?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#1a1a1a", "#3b82f6"],
    description:
      "Flex Active Noise Canceling Bluetooth — flexible comfort design for all-day wear.",
    features: [
      "Flex Design",
      "Active Noise Cancelling",
      "24h Battery",
      "Quick Charge",
      "Foldable",
    ],
    badge: "New",
    isNew: true,
  },
  {
    id: 8,
    name: "Mpow CH6 Kids",
    brand: "Mpow",
    category: "Headphone",
    price: 29,
    rating: 4.5,
    reviews: 121,
    image:
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#3b82f6", "#ec4899", "#1a1a1a"],
    description:
      "Kids Headphones, volume limited 85dB — safe for young ears, durable for adventures.",
    features: [
      "85dB Volume Limit",
      "Foldable",
      "Wired 3.5mm",
      "Extra Durability",
      "Colorful Design",
    ],
    isDeal: true,
  },

  // ── Furniture ──
  {
    id: 9,
    name: "Nordic Lounge Chair",
    brand: "ArteWood",
    category: "Furniture",
    price: 349,
    originalPrice: 499,
    rating: 4.6,
    reviews: 84,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#d4a373", "#6b4c2a", "#4a4a4a"],
    description:
      "Handcrafted solid oak lounge chair with premium fabric upholstery.",
    features: [
      "Solid Oak Frame",
      "Premium Fabric",
      "Ergonomic Design",
      "Easy Assembly",
      "2-Year Warranty",
    ],
    isDeal: true,
  },
  {
    id: 10,
    name: "MinimalistDesk Pro",
    brand: "WorkNest",
    category: "Furniture",
    price: 229,
    rating: 4.4,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#f5f5f5", "#1a1a1a", "#d4a373"],
    description:
      "Clean minimal office desk with integrated cable management and sturdy steel legs.",
    features: [
      "Cable Management",
      "Steel Legs",
      "MDF Top",
      "140×60cm",
      "Easy Clean",
    ],
    isNew: true,
  },
  {
    id: 11,
    name: "Velvet Sofa 3-Seat",
    brand: "LuxHome",
    category: "Furniture",
    price: 799,
    originalPrice: 1099,
    rating: 4.7,
    reviews: 103,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#7c3aed", "#1a1a1a", "#d4a373"],
    description:
      "Premium velvet 3-seat sofa with high-density foam cushions and solid wood legs.",
    features: [
      "Premium Velvet",
      "High-Density Foam",
      "Solid Wood Legs",
      "3 Seater",
      "Easy Clean",
    ],
    isDeal: true,
  },

  // ── Shoe ──
  {
    id: 12,
    name: "Air Runner X",
    brand: "NoveSport",
    category: "Shoe",
    price: 119,
    originalPrice: 159,
    rating: 4.5,
    reviews: 214,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#dc2626", "#1a1a1a", "#ffffff"],
    description:
      "Lightweight running shoes with air-cushion sole and breathable mesh upper.",
    features: [
      "Air Cushion",
      "Breathable Mesh",
      "Rubber Outsole",
      "Sizes 6–13",
      "Unisex",
    ],
    isDeal: true,
    badge: "Sale",
  },
  {
    id: 13,
    name: "Classic Leather Oxford",
    brand: "BrownStone",
    category: "Shoe",
    price: 189,
    rating: 4.8,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#6b4c2a", "#1a1a1a"],
    description:
      "Hand-stitched full-grain leather Oxford with a Goodyear welt construction.",
    features: [
      "Full-Grain Leather",
      "Goodyear Welt",
      "Leather Sole",
      "Hand-Stitched",
      "UK/EU Sizes",
    ],
    isNew: true,
  },
  {
    id: 14,
    name: "Urban Sneaker Lo",
    brand: "StreetPulse",
    category: "Shoe",
    price: 79,
    rating: 4.3,
    reviews: 176,
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#ffffff", "#1a1a1a", "#2563eb"],
    description:
      "Low-top canvas sneakers with premium rubber outsole and padded collar.",
    features: [
      "Canvas Upper",
      "Rubber Outsole",
      "Padded Collar",
      "Unisex",
      "Vulcanized",
    ],
    isDeal: true,
  },

  // ── Bag ──
  {
    id: 15,
    name: "Leather Tote Bag",
    brand: "PortaModa",
    category: "Bag",
    price: 149,
    rating: 4.6,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#6b4c2a", "#1a1a1a", "#d4a373"],
    description:
      "Genuine leather tote with multiple internal compartments and gold-tone hardware.",
    features: [
      "Genuine Leather",
      "Multiple Pockets",
      "Gold Hardware",
      "Shoulder Strap",
      "Interior Zip",
    ],
    isNew: true,
  },
  {
    id: 16,
    name: "Packable Backpack",
    brand: "TrailCo",
    category: "Bag",
    price: 59,
    originalPrice: 89,
    rating: 4.4,
    reviews: 143,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#2563eb", "#1a1a1a", "#16a34a"],
    description:
      "Ultra-lightweight packable daypack — folds into its own pocket when not in use.",
    features: [
      "Packable",
      "20L Capacity",
      "Water-Resistant",
      "Laptop Sleeve",
      "USB Port",
    ],
    isDeal: true,
    badge: "Sale",
  },
  {
    id: 17,
    name: "Crossbody Mini Bag",
    brand: "PortaModa",
    category: "Bag",
    price: 89,
    rating: 4.5,
    reviews: 61,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#ec4899", "#1a1a1a", "#d4a373"],
    description:
      "Compact crossbody with adjustable strap — perfect for everyday essentials.",
    features: [
      "Adjustable Strap",
      "Card Slots",
      "Magnetic Closure",
      "Faux Leather",
      "Lightweight",
    ],
    isNew: true,
  },

  // ── Laptop ──
  {
    id: 18,
    name: "UltraSlim Pro 14",
    brand: "Nexora",
    category: "Laptop",
    price: 1299,
    originalPrice: 1599,
    rating: 4.7,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#c0c0c0", "#1a1a1a", "#d4a373"],
    description:
      '14" ultrabook with Intel Core i7, 16GB RAM, 512GB NVMe SSD — just 1.2 kg.',
    features: [
      "Intel Core i7",
      "16GB RAM",
      "512GB NVMe",
      '14" IPS FHD',
      "Thunderbolt 4",
    ],
    isDeal: true,
    badge: "Sale",
  },
  {
    id: 19,
    name: "CreatorBook X1",
    brand: "PixelForge",
    category: "Laptop",
    price: 1799,
    rating: 4.8,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#1a1a1a", "#c0c0c0"],
    description:
      "Professional creator laptop with OLED 4K display, RTX 4060, and 32GB RAM.",
    features: [
      "OLED 4K Display",
      "RTX 4060",
      "32GB RAM",
      "1TB SSD",
      "2x Thunderbolt",
    ],
    isNew: true,
    badge: "New",
  },
  {
    id: 20,
    name: "Student Lite 15",
    brand: "Eduto",
    category: "Laptop",
    price: 499,
    rating: 4.2,
    reviews: 254,
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#c0c0c0", "#2563eb"],
    description:
      'Budget-friendly 15" laptop for students — fast everyday performance at a great price.',
    features: [
      "Intel Core i5",
      "8GB RAM",
      "256GB SSD",
      '15.6" FHD',
      "10h Battery",
    ],
    isDeal: true,
  },

  // ── Book ──
  {
    id: 21,
    name: "Atomic Habits",
    brand: "James Clear",
    category: "Book",
    price: 18,
    rating: 4.9,
    reviews: 5621,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#f59e0b"],
    description:
      "The #1 New York Times bestseller on building good habits and breaking bad ones.",
    features: [
      "320 Pages",
      "Paperback",
      "International Bestseller",
      "Self-Help",
      "English",
    ],
    badge: "Bestseller",
    isNew: false,
    isDeal: false,
  },
  {
    id: 22,
    name: "The Design of Things",
    brand: "Don Norman",
    category: "Book",
    price: 22,
    rating: 4.7,
    reviews: 1832,
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#2563eb"],
    description:
      "A foundational guide to human-centered design — a must-read for designers.",
    features: [
      "368 Pages",
      "Hardcover",
      "Design Classic",
      "UX & Product",
      "English",
    ],
    isNew: true,
  },
  {
    id: 23,
    name: "Clean Code",
    brand: "Robert C. Martin",
    category: "Book",
    price: 35,
    originalPrice: 49,
    rating: 4.6,
    reviews: 2415,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80",
    ],
    colors: ["#1a1a1a"],
    description:
      "A handbook of agile software craftsmanship — learn to write elegant, maintainable code.",
    features: [
      "431 Pages",
      "Paperback",
      "Programming",
      "Software Engineering",
      "English",
    ],
    isDeal: true,
    badge: "Sale",
  },
];

export const categories = [
  {
    name: "Headphone",
    count: 8,
    icon: "🎧",
    color: "bg-blue-50 border-blue-100",
  },
  {
    name: "Furniture",
    count: 3,
    icon: "🪑",
    color: "bg-amber-50 border-amber-100",
  },
  { name: "Shoe", count: 3, icon: "👟", color: "bg-rose-50 border-rose-100" },
  { name: "Bag", count: 3, icon: "👜", color: "bg-pink-50 border-pink-100" },
  {
    name: "Laptop",
    count: 3,
    icon: "💻",
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    name: "Book",
    count: 3,
    icon: "📚",
    color: "bg-emerald-50 border-emerald-100",
  },
];

export const languages = [
  "English",
  "Hindi",
  "French",
  "Spanish",
  "German",
  "Japanese",
  "Arabic",
];
export const locations = [
  "New York, USA",
  "London, UK",
  "Mumbai, IN",
  "Tokyo, JP",
  "Sydney, AU",
  "Dubai, UAE",
  "Paris, FR",
];
