// src/pages/Faqs.jsx
import React, { useState } from "react";
import "../styles/Faqs.css";
import PageTitle from "../components/PageTitle";

const faqs = [
  {
    question: "What should we wear for our family photo session?",
    answer:
      "We recommend coordinating outfits with complementary colors rather than matching exactly. Soft, neutral tones photograph beautifully, and adding textures or subtle patterns can enhance your photos. Avoid clothing with large logos or busy prints.",
  },
  {
    question: "Where will the session take place?",
    answer:
      "I offer both outdoor and indoor sessions. Outdoor sessions often take place at local parks, beaches, or meaningful family spots during golden hour for the best lighting. Indoor lifestyle sessions can also be done in the comfort of your home.",
  },
  {
    question: "How long is a typical family session?",
    answer:
      "A standard session usually lasts between 45 minutes. This allows plenty of time for candid moments, individual portraits, and group shots—without overwhelming the little ones!",
  },
  {
    question: "When will we receive our photos?",
    answer:
      "You'll receive a fully edited online gallery within 3 weeks of your session. I'll also include a few sneak peek images within a few days to get you excited!",
  },
  {
    question: "What if my kids don't cooperate during the session?",
    answer:
      "That's totally okay—and very common! My approach is relaxed and playful to help kids feel comfortable. I always capture beautiful moments, even in the chaos. Some of the best photos come from unposed, candid interactions.",
  },
];

const Faqs = () => {
  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleFaq = (index) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="faqs-page">
      <PageTitle title="FAQs" />
      <h1>Frequently Asked Questions</h1>
      <p className="subtitle">
        Find answers to common questions below. If you don't see an answer to
        your question, reach out!
      </p>
      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openFaqs.includes(index);
          return (
            <div className={`faq-card ${isOpen ? "active" : ""}`} key={index}>
              <div
                className="faq-question"
                onClick={() => toggleFaq(index)}
                role="button"
                tabIndex={0}
              >
                {faq.question}
                <span className="arrow">{isOpen ? "▲" : "▼"}</span>
              </div>
              <div
                className="faq-answer"
                style={{ maxHeight: isOpen ? "500px" : "0" }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
