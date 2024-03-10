import React from "react";

const CustomLeftArrowButton = ({ onPrev }) => {
  return (
    <div className="ml-5 z-20">
      <button
        className="border p-2 cursor-pointer hover:border-[#876464]"
        onClick={onPrev}
      >
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="12.5"
          viewBox="0 0 320 512"
        >
          <path
            className="hover:fill-[#876464]"
            fill="#ffffff"
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          />
        </svg>
      </button>
    </div>
  );
};

export default CustomLeftArrowButton;
