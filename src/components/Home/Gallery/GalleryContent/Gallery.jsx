import React, { useState } from "react";
import CustomLightBox from "../../LightBox/CustomLightBox";
import Default from "../Default/Default";
import Grid from "../Grid/Grid";
import ImageSwiper from "../ImageSwiper/ImageSwiper";
import Slider from "../Slider/Slider";

const IMAGES = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897881/react-projects/hello-gallery/hquibuxrksnberb72l0w.jpg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897881/react-projects/hello-gallery/qdj2iquibs3s5hbfatsv.jpg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897878/react-projects/hello-gallery/lolydxkoauhd4pnd4kww.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897876/react-projects/hello-gallery/fu7uurmvdervbn5iocln.jpg",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897873/react-projects/hello-gallery/vergudwdznrwjgk5wocb.jpg",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897873/react-projects/hello-gallery/ckzd3pxgmx00rnqqhknn.jpg",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897871/react-projects/hello-gallery/mhmlygelwftaydaduj5o.jpg",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897867/react-projects/hello-gallery/w7mysh1npgvotbmhq7in.jpg",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897860/react-projects/hello-gallery/ccu2ghea873e6kmvgnpk.jpg",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897853/react-projects/hello-gallery/eknbnjbfxa9sifjycdru.jpg",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897851/react-projects/hello-gallery/dokpmcwvkgwpdygr8tsn.jpg",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dgguobw5s/image/upload/c_fill,g_auto:subject,q_auto:eco,w_1920,h_1080/v1709897850/react-projects/hello-gallery/a4zgjseo0hwkff1lgv7o.jpg",
  },
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [viewMode, setViewMode] = useState("default");

  const gotoPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : IMAGES.length - 1
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const gotoNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < IMAGES.length ? prevIndex + 1 : 0
    );
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const RenderViewMode = () => {
    switch (viewMode) {
      case "default":
        return <Default images={IMAGES} openLightbox={openLightbox} />;
      case "slider":
        return <Slider openLightbox={openLightbox} images={IMAGES} />;
      case "swiper":
        return <ImageSwiper openLightbox={openLightbox} images={IMAGES} />;
      case "grid":
        return <Grid openLightbox={openLightbox} images={IMAGES} />;

      default:
        return null;
    }
  };

  return (
    <div className="mt-2">
      <div className="flex justify-center mb-4">
        <div className="space-x-6 mt-6 mb-20 max-[519px]:space-x-2">
          <button
            className={`cursor-pointer transition-all border border-[#876464] text-[#876464] px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] max-[519px]:px-2 ${
              viewMode === "default" ? "bg-[#876464] text-white" : ""
            }`}
            onClick={() => toggleViewMode("default")}
          >
            Default
          </button>
          <button
            onClick={() => toggleViewMode("slider")}
            className={`cursor-pointer transition-all border border-[#876464] text-[#876464] px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  max-[519px]:px-2 ${
              viewMode === "slider" ? "bg-[#876464] text-white" : ""
            }`}
          >
            Slider
          </button>
          <button
            className={`cursor-pointer transition-all border border-[#876464] text-[#876464] px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  max-[519px]:px-2 ${
              viewMode === "swiper" ? "bg-[#876464] text-white" : ""
            }`}
            onClick={() => toggleViewMode("swiper")}
          >
            Swiper
          </button>
          <button
            onClick={() => toggleViewMode("grid")}
            className={`cursor-pointer transition-all border border-[#876464] text-[#876464] px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  max-[519px]:px-2 ${
              viewMode === "grid" ? "bg-[#876464] text-white" : ""
            }`}
          >
            Grid
          </button>
        </div>
      </div>
      <RenderViewMode />
      <>
        <CustomLightBox
          isOpen={isOpen}
          currentIndex={currentImageIndex}
          images={IMAGES.map((image) => ({ src: image.src }))}
          onNext={gotoNext}
          onPrev={gotoPrevious}
          onClose={handleClose}
        />
      </>
    </div>
  );
};

export default Gallery;
