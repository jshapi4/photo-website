// src/services/api.jsx
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// API service functions
export const getPhotos = (params) => {
  return api.get("/photos/", { params });
};

export const getPhotoCategories = () => {
  return api.get("/categories/");
};

export const getPageContent = (slug) => {
  return api.get(`/pages/${slug}/`);
};

export const getTestimonials = () => {
  return api.get("/testimonials/");
};

export const getPricingPackages = () => {
  return api.get("/pricing/");
};

export const getFaqs = () => {
  return api.get("/faqs/");
};

export const submitContactForm = (formData) => {
  return api.post("/contact/", formData);
};
