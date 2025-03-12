import { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/css/Header.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ApiContext } from "../context/ApiContext";

const MySlider = () => {
    const { t, i18n } = useTranslation();
    const [endPoint] = useContext(ApiContext);
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });

        // ✅ API-dən slider məlumatlarını çəkmək
        const fetchSliderData = async () => {
            try {
                const response = await axios.get(`${endPoint}/slider`);
                setSliderData(response.data);
            } catch (error) {
                console.error("Error fetching slider data:", error);
            }
        };

        fetchSliderData();
    }, []);

    return (
        <Swiper
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
        >
            {sliderData.length > 0 ? (
                sliderData.map((item) => (
                    <SwiperSlide key={item._id} className="slide">
                        <div className="black-text">
                            <h2 data-aos="fade-down">
                                {i18n.language === "az" ? item.title.az : item.title.en}
                            </h2>
                            <p data-aos="fade-up">
                                {i18n.language === "az" ? item.description.az : item.description.en}
                            </p>
                            <button data-aos="fade-up">{t("blackSlider-button")}</button>
                        </div>
                        <img src={`${item.image}`} alt={item.title.en} />
                    </SwiperSlide>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </Swiper>
    );
};

export default MySlider;
