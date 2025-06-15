import  "./Testimonial.css"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const testimonials = [
  {
      name: "Amit Kumar",
      review: "Great experience! The quality is top-notch.",
      img: "https://randomuser.me/api/portraits/men/50.jpg"
  },
  {
      name: "Neha Singh",
      review: "Excellent service! Highly recommended.",
      img: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
      name: "Vikas Gupta",
      review: "Affordable and reliable! Loved the support.",
      img: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
      name: "Priya Mehta",
      review: "Best customer support ever. Totally worth it!",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];
export const Testimonial = ()=>{
    return<>
        <div className="container">
            <div className="head"><h1>What Our Students Say</h1></div>
            <div className="testimonial-wrapper">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 25 },
      }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={item.img} alt={item.name} className="testimonial-img" />
              <h3>{item.name}</h3>
              <p>"{item.review}"</p>
            </div>
          </SwiperSlide>
          ))}
      </Swiper>
    </div>
        </div>
    </>
}