import React, { useState, useEffect } from 'react';
import '@styles/Carousel.css';

const Carousel = ({images = []}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia immagine ogni 5 secondi
    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`carousel ${isFullScreen ? 'fullscreen' : ''}`}>
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="carousel-image"
        onClick={toggleFullScreen}
      />
      <button className="carousel-button prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;