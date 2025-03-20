import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
// import '../assets/css/BlackSlider.scss'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BlackSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperch"
        style={{height:"50vh"}}
      >
        <SwiperSlide><div className="comments-black">
        <div className="comment-text">
        <p>"The furniture selection here is exceptional!
          I found exactly what I needed for my home renovation.
          The quality and design surpassed my expectations."</p>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="comments-black">
        <div className="comment-text">
        <p>"The furniture selection here is exceptional!
          I found exactly what I needed for my home renovation.
          The quality and design surpassed my expectations."</p>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="comments-black">
        <div className="comment-text">
        <p>"The furniture selection here is exceptional!
          I found exactly what I needed for my home renovation.
          The quality and design surpassed my expectations."</p>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="comments-black">
        <div className="comment-text">
        <p>"The furniture selection here is exceptional!
          I found exactly what I needed for my home renovation.
          The quality and design surpassed my expectations."</p>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="comments-black">
        <div className="comment-text">
        <p>"The furniture selection here is exceptional!
          I found exactly what I needed for my home renovation.
          The quality and design surpassed my expectations."</p>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="comments-black">
        <div className="comment-text">
        <p>"The furniture selection here is exceptional!
          I found exactly what I needed for my home renovation.
          The quality and design surpassed my expectations."</p>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="comments-black">
        <div className="comment-text">
        <p>"The furniture selection here is exceptional!
          I found exactly what I needed for my home renovation.
          The quality and design surpassed my expectations."</p>
        </div>
      </div></SwiperSlide>
       
      </Swiper>
    </>
  );
}