import React from "react";
import ContactForm from "../components/ContactForm";
// import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Have any questions or inquiries? Feel free to reach out using the form
        below.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
