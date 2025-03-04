import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";

import "../assets/css/Header.scss";
import { useTranslation } from "react-i18next";

const MySlider = () => {

      const { t, i18n } = useTranslation(); // Get translation function
  
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Swiper
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="slide">
        <div className="black-text">
          <h2 data-aos="fade-down">{t('comfort')}</h2>
          <p data-aos="fade-up">
          {t('blackSlider-text')}
          </p>
          <button data-aos="fade-up">{t('blackSlider-button')}
          </button>
        </div>
        <img 
          src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/slider-1-1.jpg"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide className="slide">
        <div className="black-text">
          <h2 data-aos="fade-down">Comfort Redefined</h2>
          <p data-aos="fade-up">
            Let's experience and see extremely beautiful sofa <br /> models...
          </p>
          <button data-aos="fade-up">See More</button>
        </div>
        <img
          src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/slider-1-2.jpg"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide className="slide">
        <div className="black-text">
          <h2 data-aos="fade-down">Comfort Redefined</h2>
          <p data-aos="fade-up">
            Let's experience and see extremely beautiful sofa <br /> models...
          </p>
          <button data-aos="fade-up">See More</button>
        </div>
        <img
          src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/slider-1-3.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySlider;
