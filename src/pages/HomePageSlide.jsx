import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../assets/css/HomePageSlider.scss'
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function HomePageSlider() {
    const {t}= useTranslation();
    return (
        <>

           <div className="comfort-d">
           <h1>{t('tailored')}</h1>
                <button className='see-more'>{t('button')}</button>
           </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="HomePageSlider"
            >
                <SwiperSlide>
                    <img  src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-4.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
