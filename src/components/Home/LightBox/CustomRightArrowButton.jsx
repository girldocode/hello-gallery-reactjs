import React from "react";

const CustomRightArrowButton = ({ onNext }) => {
  return (
    <div className="mr-5 z-20">
      <button
        className="border p-2 cursor-pointer hover:border-[#876464]"
        onClick={onNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="12.5"
          viewBox="0 0 320 512"
        >
          <path
            className="hover:fill-[#876464]"
            fill="#ffffff"
            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
          />
        </svg>
      </button>
    </div>
  );
};

export default CustomRightArrowButton;
