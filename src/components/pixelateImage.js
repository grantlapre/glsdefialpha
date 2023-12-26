import React, { useState, useEffect } from 'react';
import './PixelateImage.css'; // Import the CSS file for styling

const images = [
  './image1.png',
  './image2.png',
  './image3.png',
  './image4.png',
  './image5.png',
  // Add more image URLs as needed
];

const PixelateImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPixelated, setIsPixelated] = useState(false);

  useEffect(() => {
    // Change image and pixelation state every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsPixelated((prevIsPixelated) => !prevIsPixelated);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`image-container ${isPixelated ? 'pixelated' : ''}`}>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="image"
      />
    </div>
  );
};

export default PixelateImage;