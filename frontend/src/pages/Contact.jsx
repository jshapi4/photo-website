import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { submitContactForm } from "../services/api";
import "../styles/Contact.css";
import pricingPackages from "../data/pricingData";
import PageTitle from "../components/PageTitle";

const Contact = () => {
  const location = useLocation();
  const [submittedData, setSubmittedData] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Pre-fill package if URL contains query parameter
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const selectedPackageFromURL = queryParams.get("packageButton");

    if (selectedPackageFromURL) {
      const packageData = pricingPackages.find(
        (pkg) => pkg.name === decodeURIComponent(selectedPackageFromURL)
      );
      if (packageData) {
        setSelectedPackage(packageData); // Pre-fill with selected package

        setFormData((prev) => ({ ...prev, pricing_package: packageData.name }));
      }
    }
  }, [location]);

  // Form state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    pricing_package: "", // Hold package name for submission
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Update selectedPackage if user selects a different option from dropdown
    if (name === "pricing_package") {
      const selectedPkg = pricingPackages.find((pkg) => pkg.name === value);
      setSelectedPackage(selectedPkg); // Update details when package changes
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await submitContactForm(formData);

      if (response.data.success) {
        setSubmitSuccess(true);
        setSubmittedData(formData); // Store the submitted data

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          pricing_package: "",
          message: "",
        });
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);

      const serverMessage =
        error.response?.data?.error ||
        error.response?.data?.detail ||
        error.message;

      setSubmitError(
        `Submission failed. Please try reaching us directly at our email below!\n\nError: ${
          serverMessage || "An unexpected error occurred."
        }`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <PageTitle title="Contact Us" />
      <h1>Contact Us</h1>
      <h4>
        Have any questions or inquiries? Feel free to reach out using the form
        below.
      </h4>

      <div className="contact-form-container">
        {submitSuccess ? (
          <div className="success-message">
            <h3>Thank you for contacting us, {submittedData.first_name}!</h3>
            <p>We'll get back to you as soon as possible.</p>

            <h4>Your Submitted Information:</h4>

            <div className="submission-details">
              <div className="detail-row">
                <div className="detail-label">First Name:</div>
                <div className="detail-value">{submittedData.first_name}</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Last Name:</div>
                <div className="detail-value">{submittedData.last_name}</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Email:</div>
                <div className="detail-value">{submittedData.email}</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Phone:</div>
                <div className="detail-value">
                  {submittedData.phone || "Not provided"}
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Interested In:</div>
                <div className="detail-value">
                  {submittedData.pricing_package || "Not selected"}
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Message:</div>
                <div className="detail-value message-value">
                  {submittedData.message}
                </div>
              </div>
            </div>

            <button
              className="send-another-btn"
              onClick={() => setSubmitSuccess(false)}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name and Email Fields */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first_name">First Name *</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className={errors.first_name ? "error" : ""}
                  placeholder="Enter your first name"
                />
                {errors.first_name && (
                  <span className="error-text">{errors.first_name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="last_name">Last Name *</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className={errors.last_name ? "error" : ""}
                  placeholder="Enter your last name"
                />
                {errors.last_name && (
                  <span className="error-text">{errors.last_name}</span>
                )}
              </div>
            </div>

            {/* Email and Phone Fields */}
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="e.g., name@example.com"
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
              />
            </div>

            {/* Package Selection Dropdown */}
            <div className="form-group">
              <label htmlFor="pricing_package">Interested In:</label>
              <select
                id="pricing_package"
                name="pricing_package"
                value={
                  formData.pricing_package ||
                  (selectedPackage ? selectedPackage.name : "")
                }
                onChange={handleChange}
              >
                <option value="">-- Please choose an option --</option>
                {pricingPackages.map((pkg) => (
                  <option key={pkg.id} value={pkg.name}>
                    {pkg.name} (${pkg.price})
                  </option>
                ))}
                <option value="I'm not sure">I'm not sure</option>
              </select>
            </div>

            {/* Package Details Section */}
            {selectedPackage && (
              <div className="package-details" key={selectedPackage.id}>
                <h5>
                  {selectedPackage.name} — ${selectedPackage.price}
                </h5>
                <p>{selectedPackage.description}</p>
                <ul>
                  {selectedPackage.items.map((item) => (
                    <li key={item.id}>{item.description}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
              />
              {errors.message && (
                <span className="error-text">{errors.message}</span>
              )}
            </div>
            {submitError && <div className="error-message">{submitError}</div>}

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
