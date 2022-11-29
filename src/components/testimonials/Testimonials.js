import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium voluptate beatae recusandae. Aperiam, corporis necessitatibus, consequatur, debitis doloribus temporibus modi beatae molestias qui consequuntur repellat! Doloribus quia atque inventore",
  },
  {
    avatar: AVTR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium voluptate beatae recusandae. Aperiam, corporis necessitatibus, consequatur, debitis doloribus temporibus modi beatae molestias qui consequuntur repellat! Doloribus quia atque inventore",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium voluptate beatae recusandae. Aperiam, corporis necessitatibus, consequatur, debitis doloribus temporibus modi beatae molestias qui consequuntur repellat! Doloribus quia atque inventore",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium voluptate beatae recusandae. Aperiam, corporis necessitatibus, consequatur, debitis doloribus temporibus modi beatae molestias qui consequuntur repellat! Doloribus quia atque inventore",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        
        modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 01" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials