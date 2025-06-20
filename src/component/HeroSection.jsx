
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./HeroSectionImg.module.css"; // CSS Module Import
import Img1 from "../assets/slider_1.jpg";
import Img2 from "../assets/slider_2.jpg";
import Img3 from "../assets/slider_3.jpg";
export const HeroSection = () => {
    const images = [
        Img1,
        Img2,
        Img3,
      ];
    return<>
     <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
}