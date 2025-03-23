import "./ApplyJobs.css"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";


const testimonials = [
    { img: "li.png" },
    {  img: "indeed.png" },
    { img: "job.png" },
    { img: "na.svg" },
    {  img: "workindia.png" },
    {img: "ap.jpg"}
  ];
export const ApplyJobs = ()=>{
    return<>
        <div className="container">
            <div className="head"><h1>Apply jobs</h1></div>
            <div className="slider-container">
      <Swiper
        spaceBetween={40}
        slidesPerView={5}
        loop={true}
        speed={3000} // Smooth scrolling speed
        autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection:true }}
        modules={[Autoplay]}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slider-card">
              <img src={item.img} alt={item.name} className="slider-img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>
    </>
}