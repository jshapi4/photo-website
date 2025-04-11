// // src/components/PhotoGrid.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/PhotoGrid.css";

// const PhotoGrid = ({ photos, onPhotoClick }) => {
//   if (!photos || photos.length === 0) {
//     return <div className="loading">No photos available.</div>;
//   }

//   return (
//     <div className="photo-grid">
//       {photos.map((photo) => (
//         <div key={photo.id} className="photo-item">
//           <div
//             className="photo-wrapper"
//             onClick={() => onPhotoClick && onPhotoClick(photo)}
//           >
//             <img
//               src={photo.thumbnail || photo.image}
//               alt={photo.title}
//               className="photo-image"
//             />
//             <div className="photo-overlay">
//               <h3>{photo.title}</h3>
//               <p>{photo.category_name}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PhotoGrid;
