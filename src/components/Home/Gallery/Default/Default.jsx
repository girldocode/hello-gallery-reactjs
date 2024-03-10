import React from "react";

const Default = ({ images, openLightbox }) => {
  return (
    <div className="grid grid-cols-4 gap-4  max-[1050px]:grid-cols-3  max-[814px]:grid-cols-2  max-[600px]:grid-cols-1">
      {images.map((image, index) => (
        <div key={index} onClick={() => openLightbox(index)}>
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default Default;
