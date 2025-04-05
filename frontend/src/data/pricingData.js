// src/data/pricingData.js
const pricingPackages = [
  {
    id: 1,
    name: "Mini Session",
    price: 150,
    description: "Perfect for quick portraits or seasonal shoots.",
    is_featured: false,
    items: [
      { id: 1, description: "30-minute session" },
      { id: 2, description: "10 edited photos" },
      { id: 3, description: "Online gallery" },
    ],
  },
  {
    id: 2,
    name: "Standard Session",
    price: 300,
    description: "Ideal for families, engagements, or events.",
    is_featured: true,
    items: [
      { id: 1, description: "1-hour session" },
      { id: 2, description: "30 edited photos" },
      { id: 3, description: "Print release" },
      { id: 4, description: "Online gallery" },
    ],
  },
  {
    id: 3,
    name: "Deluxe Session",
    price: 500,
    description: "Great for branding, maternity, or full-day shoots.",
    is_featured: false,
    items: [
      { id: 1, description: "2-hour session" },
      { id: 2, description: "60+ edited photos" },
      { id: 3, description: "All raw images included" },
      { id: 4, description: "Priority editing" },
    ],
  },
];

export default pricingPackages;
