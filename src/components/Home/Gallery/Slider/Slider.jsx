import React, { useEffect, useRef, useState } from "react";
import "tailwindcss/tailwind.css";

const Slider = ({ images, openLightbox }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageContainerRef = useRef(null);
  const [imagesPerView, setImagesPerView] = useState(3);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayIntervalRef = useRef(null);

  const handleImageChange = (direction) => {
    const newImageIndex = currentImageIndex + direction * imagesPerView;

    if (newImageIndex >= 0 && newImageIndex < images.length) {
      setCurrentImageIndex(newImageIndex);
    } else if (direction === 1 && newImageIndex >= images.length) {
      setCurrentImageIndex(0);
    }
  };

  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth >= 1000) {
        setImagesPerView(3);
      } else if (window.innerWidth >= 600) {
        setImagesPerView(2);
      } else {
        setImagesPerView(1);
      }
    };

    window.addEventListener("resize", updateImagesPerView);
    updateImagesPerView();

    return () => {
      window.removeEventListener("resize", updateImagesPerView);
    };
  }, []);

  useEffect(() => {
    const autoplayHandler = () => {
      if (isAutoplay) {
        autoplayIntervalRef.current = setInterval(() => {
          handleImageChange(1);
        }, 1000);
      } else {
        clearInterval(autoplayIntervalRef.current);
      }
    };

    autoplayHandler();

    return () => {
      clearInterval(autoplayIntervalRef.current);
    };
  }, [isAutoplay, currentImageIndex, handleImageChange]);

  return (
    <div className="w-full overflow-hidden mx-auto relative image-slider-container">
      <div
        className="flex transition-transform duration-500 ease-in-out image-slider-wrapper"
        ref={imageContainerRef}
      >
        {images
          .slice(currentImageIndex, currentImageIndex + imagesPerView)
          .map((image, index) => (
            <div
              key={index}
              className={`flex-none ${
                imagesPerView === 1 ? "w-full" : "w-1/2 md:w-1/3"
              } px-2 sm:px-4 box-border`}
            >
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                onClick={() => openLightbox(currentImageIndex + index)}
                className={`cursor-pointer w-full h-auto object-cover ${
                  index === 0 ? "active" : ""
                }`}
              />
            </div>
          ))}
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-black bg-opacity-50 text-white border-none px-4 py-2 cursor-pointer z-10 prev-button"
        onClick={() => handleImageChange(-1)}
        disabled={currentImageIndex === 0}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-black bg-opacity-50 text-white border-none px-4 py-2 cursor-pointer z-10 next-button"
        onClick={() => handleImageChange(1)}
        disabled={currentImageIndex >= images.length - imagesPerView}
      >
        Next
      </button>

      <button
        className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white border-none px-3 py-1 cursor-pointer z-10 autoplay-toggle"
        onClick={() => setIsAutoplay(!isAutoplay)}
      >
        {isAutoplay ? "Pause Autoplay" : "Start Autoplay"}
      </button>
    </div>
  );
};

export default Slider;
