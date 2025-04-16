// src/data/pricingData.js
const pricingPackages = [
  {
    id: 1,
    name: "Mini Session",
    price: 150,
    description: "Perfect for quick portraits or seasonal shoots.",
    is_featured: false,
    items: [
      { id: 1, description: "20-minute session" },
      { id: 2, description: "5+ edited photos" },
    ],
  },
  {
    id: 2,
    name: "Standard Session",
    price: 300,
    description: "Ideal for families wanting to capture more memories.",
    is_featured: true,
    items: [
      { id: 1, description: "40-minute session" },
      { id: 2, description: "30+ edited photos" },
      { id: 3, description: "1 outfit change" },
    ],
  },
  {
    id: 3,
    name: "Deluxe Session",
    price: 450,
    description: "Great for a bigger family shoots.",
    is_featured: false,
    items: [
      { id: 1, description: "60-minute session" },
      { id: 2, description: "50+ edited photos" },
      { id: 3, description: "2 outfit changes" },
      { id: 4, description: "Priority editing" },
    ],
  },
];

export default pricingPackages;
