// All values below are sourced directly from Eulalee Beckford Designs' own
// Instagram, Facebook, Shopify store, and public business listings.

export const business = {
  name: "Eulalee Beckford Designs",
  tagline: "Fur Felt Hats, Handcrafted in Brooklyn",
  description:
    "Milliner, jewelry, and fashion house based in DUMBO, Brooklyn — fur felt hats, kimonos, and jewelry, ready-to-wear or made to order.",
};

export const contact = {
  address: {
    line1: "145 Front Street, Shop 17",
    line2: "Brooklyn, NY 11201",
    crossStreets: "Between Pearl St & Jay St, DUMBO",
    mapsQuery: "145 Front St Shop 17, Brooklyn, NY 11201",
  },
  phone: "(347) 915-9883",
  phoneHref: "tel:+13479159883",
  email: "eulaleebeckford.designs1914@gmail.com",
  emailHref: "mailto:eulaleebeckford.designs1914@gmail.com",
};

export const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "1:00 PM – 7:30 PM" },
  { day: "Wednesday", time: "1:00 PM – 7:30 PM" },
  { day: "Thursday", time: "1:00 PM – 7:30 PM" },
  { day: "Friday", time: "12:30 PM – 7:30 PM" },
  { day: "Saturday", time: "12:30 PM – 7:30 PM" },
  { day: "Sunday", time: "12:30 PM – 6:00 PM" },
];

export const social = {
  instagram: "https://www.instagram.com/eulalee_beckford_designs/",
  instagramHandle: "@eulalee_beckford_designs",
  facebook: "https://www.facebook.com/EulaleeBeckfordDesigns/",
  youtube: "https://www.youtube.com/channel/UCn7S-ighakSmEA2rRyMOj3w",
  shop: "https://eulaleebeckforddesigns.com/",
};

export const collections = [
  {
    id: "hats",
    title: "Fur Felt Hats",
    description:
      "Fedora and open-crown styles, shaped from 100% fur felt. Ready-to-wear or made to order.",
    priceRange: "$150 – $350",
    ctaLabel: "Shop Hats",
  },
  {
    id: "kimonos",
    title: "Kimonos",
    description: "Statement layers designed to pair with the hat collection.",
    priceRange: null,
    ctaLabel: "Shop Kimonos",
  },
  {
    id: "jewelry",
    title: "Jewelry",
    description: "Fashion jewelry designed to complete the look.",
    priceRange: null,
    ctaLabel: "Shop Jewelry",
  },
] as const;

export const customOrderSteps = [
  { title: "Share your vision", description: "Silhouette, color, trim, and occasion." },
  { title: "Get fitted", description: "Crown height, brim width, and size." },
  { title: "Handcrafted to order", description: "Your hat is hand-blocked in fur felt to your fit." },
];

export const credentials = [
  { label: "Featured Vendor", detail: "Kwanzaa Unity Marketplace, Brooklyn" },
];