import React from "react";

const Grid = ({ openLightbox, images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => openLightbox(index)}
          className={`relative overflow-hidden ${
            (index === 0 && "col-span-2") ||
            (index === 5 && "col-span-2") ||
            (index === 11 && "col-span-2") ||
            (index === 6 && "col-span-2")
          }`}
        >
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className={` cursor-pointer object-cover w-full ${
              index === 0 || index === 5 || index === 11 || index === 6
                ? "h-[200px]"
                : "h-full"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Grid;
