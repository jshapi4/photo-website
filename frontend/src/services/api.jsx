import axios from "axios";

// Determine the base URL based on the current environment
const API_BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://emis-website-backend.fly.dev/api"
    : "http://localhost:8000/api";

// Log the base URL for debugging purposes
// console.log("Environment:", import.meta.env.MODE);
// console.log("API base URL:", API_BASE_URL);

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Contact Form POST request
export const submitContactForm = (formData) => {
  return api.post("/contact/submit/", formData);
};
