import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Contact Form POST request
export const submitContactForm = (formData) => {
  return api.post("/contact/submit/", formData); // Adjusted to match your backend endpoint
};
