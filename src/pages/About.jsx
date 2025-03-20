import React from 'react'
import '../assets/css/About.scss'
import Subscribe from './Subscribe'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import BlackSlider from './BlackSlider'

const About = () => {
  const { t } = useTranslation();



  return (
    <>

      <div className="about-photo">
        <img style={{ width: "100%", objectFit: 'cover' }} src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/bg-breadcrumb.jpg" alt="" />
        <div className="about-text">
          <p><Link to='/' style={{ color: 'black', textDecoration: 'none' }}>{t('home')}</Link>/ <span>{t('about')}</span></p>
          <h1>{t('about')}</h1>
        </div>
      </div>

      <div className="text-photo pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-6">
              <div className="left-photo"><img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/banner-31.jpg" alt="" /></div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 textt">
              <div className="right-text"><h1 className='mb-4'>{t('comfortanddesign')}</h1>
                <p>{t('abouttext')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-team">
        <h1>Our Team</h1>
        <div className="team">
          <div className="container">
            <div className="row g-3">
              <div className="col-lg-3 col-md-6 col-sm-6 depend">
                <div className="member">
                  <img src="https://darion.wpbingosite.com/wp-content/uploads/2023/01/ourteam-1.jpg" alt="" />

                  <div className="social-media-links">
                    <a href="http://facebook.com"><i className="fa-brands fa-facebook"></i></a>
                    <a href="http://x.com"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="http://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                    <a href="http://pinterest.com"><i className="fa-brands fa-pinterest"></i></a>
                  </div>
                </div>
              </div>


              <div className="col-lg-3 col-md-6 col-sm-6 depend">
                <div className="member">
                  <img src="https://darion.wpbingosite.com/wp-content/uploads/2023/01/ourteam-2.jpg" alt="" />

                  <div className="social-media-links">
                    <a href="http://facebook.com"><i className="fa-brands fa-facebook"></i></a>
                    <a href="http://x.com"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="http://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                    <a href="http://pinterest.com"><i className="fa-brands fa-pinterest"></i></a>
                  </div>
                </div>
              </div>


              <div className="col-lg-3 col-md-6 col-sm-6 depend">
                <div className="member">
                  <img src="https://darion.wpbingosite.com/wp-content/uploads/2023/01/ourteam-3.jpg" alt="" />

                  <div className="social-media-links">
                    <a href="http://facebook.com"><i className="fa-brands fa-facebook"></i></a>
                    <a href="http://x.com"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="http://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                    <a href="http://pinterest.com"><i className="fa-brands fa-pinterest"></i></a>
                  </div>
                </div>
              </div>


              <div className="col-lg-3 col-md-6 col-sm-6 depend">
                <div className="member">
                  <img src="https://darion.wpbingosite.com/wp-content/uploads/2023/01/ourteam-4.jpg" alt="" />

                  <div className="social-media-links">
                    <a href="http://facebook.com"><i className="fa-brands fa-facebook"></i></a>
                    <a href="http://x.com"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="http://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                    <a href="http://pinterest.com"><i className="fa-brands fa-pinterest"></i></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="video">
        <div class="video">
          <i className="fa-solid fa-chevron-right"></i>
          <div class="circle delay1"></div>
          <div class="circle delay2"></div>
          <div class="circle delay3"></div>
          <div class="circle delay4"></div>
        </div></div>

      <BlackSlider />

      {/* <div className="brands container">
        <div className="row ">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="brand-item">
              <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-5.png" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="brand-item">
              <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-4.png" alt="" />
            </div>
          </div>


          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="brand-item">
              <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-3.png" alt="" />
            </div>
          </div>


          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="brand-item">
              <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-2.png" alt="" />
            </div>
          </div>


          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="brand-item">
              <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-1.png" alt="" />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="brand-item">
              <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-5.png" alt="" />
            </div>
          </div>

        </div>
      </div> */}


      <div className="brands-items">
        <div className="brand-each-item">
          <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-5.png" alt="" />
        </div>


        <div className="brand-each-item">
          <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-4.png" alt="" />
        </div>


        <div className="brand-each-item">
          <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-3.png" alt="" />
        </div>


        <div className="brand-each-item">
          <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-2.png" alt="" />
        </div>


        <div className="brand-each-item">
          <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-1.png" alt="" />
        </div>

        <div className="brand-each-item">
          <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/brand-5.png" alt="" />
        </div>
      </div>


      {/* <div className="brands">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <img src="https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/brand_1_3.svg" alt="" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <img src="https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/brand_1_4.svg" alt="" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <img src="https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/brand_1_2.svg" alt="" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <img src="https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/brand_1_5.svg" alt="" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <img src="https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/brand_1_6.svg" alt="" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <img src="https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/brand_1_7.svg" alt="" />
            </div>

            
          </div>
        </div>
      </div> */}
      <Subscribe />
    </>
  )
}

export default About