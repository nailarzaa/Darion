import React, { useContext, useEffect, useMemo, useState } from 'react'
import MySlider from './MySlider'
import '../assets/css/Header.scss'
import HomePageSlider from './HomePageSlide'
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { ProductContext } from '../context/ProductContext';
import SingleCard from '../Components/SingleCard';
import BlackSlider from './BlackSlider';
import axios from 'axios';
import { ApiContext } from '../context/ApiContext';
import { useGetCategoriesQuery } from '../tools/services/categoryApi';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const { data, isLoading, refetch } = useGetCategoriesQuery();
  const categories = data?.categories || [];
  

  // fetch api
  const [threeImageData, setThreeImageData] = useState([]);
 

  //   const fetchImageData = async () => {
  //     try {
  //       const response = await axios.get(`${endPoint}/threeImage`);
  //       setThreeImageData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching slider data:", error);
  //     }
  //   };

  //   fetchImageData();
  // }, []);


  return (
    <div>
     
      <MySlider />
      {/* Categories cards */}
      <div data-aos="fade-up" className="black-categories">
        <div className="container-fluid p-4">
          <h1>{t('ctg')}</h1>
          <p className='mb-5'>{t('ctg-text')} </p>
          <div className="row">

            {categories?.map((ctg) => (

              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="cards">
                  <img src={ctg.image} alt="" />
                </div>
                <p>{ctg.name}</p>
              </div>
            ))}

        


          </div>
        </div>
      </div>


      {/* Three box in Homepage */}
      <section className="threebox">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="col-lg-12">
                <div className="box">
                  <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-1.jpg" alt />
                  <div className="text">
                    <span>CHAISE LOUNGE </span>
                    <h5>Axis Left Arm Double Chaise Lounge</h5>
                    <p>Add sensory exitment and personality to your living space woth our Ambile chair
                    </p>
                  </div>
                  <div className="wavy-border-button">
                    <button>{t('shopnow')} <i className="fa-solid fa-arrow-right-long " /></button>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="box">
                  <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-2.jpg" alt />
                  <div className="text">
                    <span>CHAISE LOUNGE </span>
                    <h5>Axis Left Arm Double Chaise Lounge</h5>
                    <p>Add sensory exitment and personality to your living space woth our Ambile chair
                    </p>
                  </div>
                  <div className="wavy-border-button">
                    <button>{t('shopnow')} <i className="fa-solid fa-arrow-right-long" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box box-3" id="lighting">
                <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-3.jpg" alt />
                <div className="text">
                  <span>CEILING LIGHTING</span>
                  <h5>Andre Black Cone Pendant Light</h5>
                  <p>Wheter you want to brighten up a dim hallway or add a statement.</p>
                  <div className="wavy-border-button">
                    <button>{t('shopnow')} <i className="fa-solid fa-arrow-right-long" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============Product cards============== */}
      <div className="slider-cards">
        <div className="products">
          <div className="container-fluid p-5">
            <h1>{t('bestseller')}</h1>
            <p>{t('experience')}</p>
            <div className="row">
             
            </div>

          </div>
        </div>


        <HomePageSlider />
      </div>

      <BlackSlider />
    </div>
  )
}

export default HomePage