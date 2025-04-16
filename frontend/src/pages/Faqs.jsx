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
      "I offer both outdoor and indoor sessions. Outdoor sessions often take place at local parks, beaches, or meaningful family spots. Indoor lifestyle sessions can also be done in the comfort of your home.",
  },
  {
    question: "How long is a typical family session?",
    answer:
      "A standard session usually lasts 45 minutes. This allows plenty of time for candid moments, individual portraits, and group shots—without overwhelming the little ones!",
  },
  {
    question: "When will we receive our photos?",
    answer:
      "You'll receive an online gallery within 48 hours of your session. Once you send me your picks, you will receive the final edited pictures within 2 weeks.",
  },
  {
    question: "What if my kids don't cooperate during the session?",
    answer:
      "I recommend my clients prepare kids for the session in advance and talk about what to expect when you are on the way to your session. If they still don't cooperate it's totally okay—and very common! My approach is relaxed and playful to help kids feel comfortable. I always capture beautiful moments, even in the chaos. Some of the best photos come from unposed, candid interactions.",
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
