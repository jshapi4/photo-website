// src/data/pricingData.js
const pricingPackages = [
  {
    id: 1,
    name: "Mini Session",
    price: 150,
    description: "Perfect for quick portraits or seasonal shoots.",
    is_featured: false,
    items: [
      { id: 1, description: "25-minute session" },
      { id: 2, description: "10 edited photos" },
      { id: 3, description: "Online gallery" },
    ],
  },
  {
    id: 2,
    name: "Standard Session",
    price: 300,
    description: "Ideal for families wanting to capture more memories.",
    is_featured: true,
    items: [
      { id: 1, description: "45-minute session" },
      { id: 2, description: "30 edited photos" },
      { id: 3, description: "1 outfit change" },
      { id: 4, description: "Online gallery" },
    ],
  },
  {
    id: 3,
    name: "Deluxe Session",
    price: 450,
    description: "Great for a bigger family shoots.",
    is_featured: false,
    items: [
      { id: 1, description: "70-minute session" },
      { id: 2, description: "50+ edited photos" },
      { id: 3, description: "2 outfit changes" },
      { id: 4, description: "100+ images included digitally" },
      { id: 5, description: "Priority editing" },
    ],
  },
];

export default pricingPackages;
