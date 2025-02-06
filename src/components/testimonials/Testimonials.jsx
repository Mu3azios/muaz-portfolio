import React from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/avatar1.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.png";
import Avatar4 from "../../assets/avatar4.png";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "John Smith",
    review: "l Lorem ipsum dolor sit amet consectetur adipisic",
    index: 1,
  },

  {
    avatar: Avatar2,
    name: "Dwayne Jonsn",
    review: "muaz is very good",
    index: 1,
  },

  {
    avatar: Avatar3,
    name: "Anna Lisa",
    review: "muaz is amazing",
    index: 1,
  },

  {
    avatar: Avatar4,
    name: "John Smith",
    review: "muaz is so profissional",
    index: 1,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-testimonials">
      <h5>Review From Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
      
        {data.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="name">{name}</h5>
              <small className="review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
