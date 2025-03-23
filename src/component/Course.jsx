import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { MdDoubleArrow } from "react-icons/md";
import { NavLink } from "react-router-dom";
import  "./Course.css"

const Course = () => {
  const data = [
    { title: "ADVANCE DIPLOMA IN COMPUTER APPLICATION ( S-ADCA )",
      eqr: "ENQUIRY NOW" ,
      detail:"DETAILS",
      fee: "Course Fees : 6500.00/-",
      minfee: "Minimum Amount To Pay : Rs.2500.00",
      code:"Course Code : S-ADCA",
      cutfee:" 8500.00/-",
      src : "../public/ADCA.jpg"
    },
    { title: "CERIFICATE IN ADVANCE EXCEL ( S-01 )",
      eqr: "ENQUIRY NOW" ,
      detail:"DETAILS",
      fee: "Course Fees : 1500.00/-",
      minfee: "Minimum Amount To Pay : Rs.500.00",
      code:"Course Code : S-01",
      cutfee:" 2500.00/-",
      src :"../public/adexcel.jpg"
    },
    {title: "DIPLOMA IN COMPUTER APPLICATION ( M-DCA01 )",
      eqr: "ENQUIRY NOW" ,
      detail:"DETAILS",
      fee: "Course Fees : 3500.00/-",
      minfee: "Minimum Amount To Pay : Rs.500.00",
      code:"Course Code : M-DCA01",
      cutfee:" 4500.00/-",
      src :"../public/DCA.jpg"
    },
    { title: "TYPING                       ",
      eqr: "ENQUIRY NOW" ,
      detail:"DETAILS",
      fee: "Course Fees : 2000.00/-",
      minfee: "Minimum Amount To Pay : Rs.500.00",
      code:"Course Code : T-TY",
      cutfee:" 4500.00/-",
      src :"../public/Typing.jpg"
    },
    
   
  ];

  return (
    <div className="swiper-container">
      <div className="head">
          <h1>OUR POPULAR COURSES</h1>
      </div>
      <Swiper
        slidesPerView={3} // 3 Box ek sath dikhane ke liye
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Autoplay ]}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
        loop={true}
      >
       
        {data.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="box">
              <div className="img">
                <img src={item.src} alt="" />
              </div>
              <div className="detail">
                <h2>{item.title}</h2>
                <h1>{item.fee} <span>{item.cutfee}</span></h1>
                <h2>{item.minfee}</h2>
                <p>{item.code}</p>
              </div>
              <div className="eqr">
                <NavLink to="/enquiry"><h4>{item.eqr}<MdDoubleArrow /> </h4></NavLink>
                <NavLink to="/coursedetais"><h4>{item.detail}<MdDoubleArrow /> </h4></NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Course;
