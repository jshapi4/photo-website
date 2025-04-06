// // src/pages/Testimonials.jsx
// import React from "react";
// import testimonialData from "../data/testimonialData";
// import "../styles/Testimonials.css";

// import familyPhoto from "../assets/sample-family.jpg";
// import family2 from "../assets/sample-fam-2.jpg";
// import newbornPhoto from "../assets/newborn-sample.jpg";
// import newborn2 from "../assets/newborn2.jpg";

// const Testimonials = () => {
//   return (
//     <div className="testimonials-page">
//       {/* Testimonials Section */}
//       <div className="testimonials-section">
//         <h1>What Families Are Saying</h1>
//         {testimonialData.map((testimonial, index) => (
//           <div className="testimonial-card" key={index}>
//             <div className="testimonial-quote">{testimonial.quote}</div>
//             <div className="testimonial-author">
//               {testimonial.image && (
//                 <div className="testimonial-image">
//                   <img src={testimonial.image} alt={testimonial.name} />
//                 </div>
//               )}
//               <div className="testimonial-info">
//                 <h4>{testimonial.name}</h4>
//                 {testimonial.position && <p>{testimonial.position}</p>}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Stock Photos Section */}
//       <div className="images-section">
//         <img src={familyPhoto} alt="Stock Family" />
//         <img src={family2} alt="Stock Fam 2" />
//         <img src={newbornPhoto} alt="Stock Newborn" />
//         <img src={newborn2} alt="Stock Newborn" />
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

// src/pages/Testimonials.jsx
import React from "react";
import testimonialData from "../data/testimonialData";
import "../styles/Testimonials.css";

import familyPhoto from "../assets/sample-family.jpg";
import family2 from "../assets/sample-fam-2.jpg";
import newbornPhoto from "../assets/newborn-sample.jpg";
import newborn2 from "../assets/newborn2.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <div className="testimonials-section">
        <h1>What Families Are Saying</h1>
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-quote">{testimonial.quote}</div>
            <div className="testimonial-author">
              {testimonial.image && (
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
              )}
              <div className="testimonial-info">
                <h4>{testimonial.name}</h4>
                {testimonial.position && <p>{testimonial.position}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="images-section">
        <img src={familyPhoto} alt="Stock Family" />
        <img src={family2} alt="Stock Fam 2" />
        <img src={newbornPhoto} alt="Stock Newborn" />
        <img src={newborn2} alt="Stock Newborn" />
      </div>
    </div>
  );
};

export default Testimonials;
