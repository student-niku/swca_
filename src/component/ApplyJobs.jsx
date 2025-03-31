import "./ApplyJobs.css"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";  // ✅ Correct Import

const testimonials = [
    { img: "li.png" , link: "https://www.linkedin.com/feed/" },
    { img: "indeed.png", link: "https://www.indeed.com/" },
    { img: "job.png", link: "https://www.job.com/" },
    { img: "na.svg", link: "https://www.naukri.com/" },
    { img: "workindia.png", link: "https://www.workindia.in/" },
    { img: "ap.jpg", link: "https://www.apna.co/" }
];

export const ApplyJobs = () => {
    const navigate = useNavigate();  // ✅ Correct way to use Navigation

    return (
        <>
            <div className="container">
                <div className="head"><h1>Apply Jobs</h1></div>
                <div className="slider-container">
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={5}
                        loop={true}
                        speed={3000}
                        autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            480: { slidesPerView: 2, spaceBetween: 15 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 25 },
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="slider-card" onClick={() => window.open(item.link, "_blank")}>
                                    <img src={item.img} alt={`Job ${index}`} className="slider-img" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

