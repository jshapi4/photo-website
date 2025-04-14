import axios from "axios";

// Determine the base URL based on the current environment
// old url from render: https://photo-website-backend.onrender.com/api

const API_BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://emis-website-backend.fly.dev/api"
    : "http://localhost:8000/api";

console.log("Using API base URL:", API_BASE_URL); // Helpful for debugging

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Contact Form POST request
export const submitContactForm = (formData) => {
  return api.post("/contact/submit/", formData);
};
