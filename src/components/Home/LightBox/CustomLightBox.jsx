import React from "react";
import LightBox from "react-spring-lightbox";
import CustomHeader from "./CustomHeader";
import CustomLeftArrowButton from "./CustomLeftArrowButton";
import CustomRightArrowButton from "./CustomRightArrowButton";

const CustomLightBox = ({
  isOpen,
  currentIndex,
  images,
  onNext,
  onPrev,
  onClose,
}) => {
  return (
    <LightBox
      isOpen={isOpen}
      currentIndex={currentIndex}
      images={images}
      onNext={onNext}
      onPrev={onPrev}
      onClose={onClose}
      style={{ background: "rgba(0, 0, 0, 0.8)" }}
      renderHeader={() => <CustomHeader onClose={onClose} />}
      renderPrevButton={() => <CustomLeftArrowButton onPrev={onPrev} />}
      renderNextButton={() => <CustomRightArrowButton onNext={onNext} />}
    />
  );
};

export default CustomLightBox;
