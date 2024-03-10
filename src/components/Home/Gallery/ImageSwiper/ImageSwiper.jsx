import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./imageswiper.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

const ImageSwiper = ({ openLightbox, images }) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              onClick={() => openLightbox(index)}
              className="cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSwiper;
