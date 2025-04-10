import axios from "axios";

// Determine the base URL based on the current environment
const API_BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://emi-photo-site-backend.onrender.com/api"
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
