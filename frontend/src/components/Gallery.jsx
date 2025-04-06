// src/components/Gallery.js
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/Gallery.css";

const Gallery = ({ photos, onProtectImages = true }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (photos) {
      const formattedImages = photos.map((photo) => ({
        original: photo.image,
        thumbnail: photo.thumbnail || photo.image,
        description: photo.description,
        originalTitle: photo.title,
      }));
      setImages(formattedImages);
    }
  }, [photos]);

  // Add right-click protection
  useEffect(() => {
    if (onProtectImages) {
      const handleContextMenu = (e) => {
        e.preventDefault();
        return false;
      };

      document.addEventListener("contextmenu", handleContextMenu);

      return () => {
        document.removeEventListener("contextmenu", handleContextMenu);
      };
    }
  }, [onProtectImages]);

  if (images.length === 0) {
    return <div className="loading">Loading gallery...</div>;
  }

  return (
    <div className="gallery-container">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        slideInterval={4000}
        slideDuration={450}
      />
    </div>
  );
};

export default Gallery;
