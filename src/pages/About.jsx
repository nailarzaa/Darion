import React from 'react'
import '../assets/css/About.scss'
import Subscribe from './Subscribe'
import { Link } from 'react-router-dom'

const About = () => {

  
  return (
    <>

      <div className="about-photo">
        <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/bg-breadcrumb.jpg" alt="" />
        <div className="about-text">
          <p><Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>/ <span>About Us</span></p>
          <h1>About Us</h1>
        </div>
      </div>

      <div className="text-photo mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="left-photo"><img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/banner-31.jpg" alt="" /></div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 textt">
              <div className="right-text"><h1 className='mb-4'>Comfort and Style: <br />The Art of Interior Decor</h1>
                <p>Familiar furniture unexpectedly accumulates dust in the house.
                  Choosing and using suitable furniture is of great significance
                  in reducing the amount of dust accumulated…</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="our-team">
        <h1>Meet with Our Team</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="team-member">
                <img className='bg-img' src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/newsletter-image.jpg" alt="" />
                <div className="person-img"><img src="https://darion.wpbingosite.com/wp-content/uploads/2023/01/ourteam-1.jpg" alt="" /></div>
                <div className="title">
                  <h3>Crystel Casper</h3>
                  <p>Expert Guider</p>
                </div>
              </div>

            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="team-member">
                <img className='bg-img' src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/newsletter-image.jpg" alt="" />
                <div className="person-img"><img src="https://darion.wpbingosite.com/wp-content/uploads/2023/01/ourteam-2.jpg" alt="" /></div>
                <div className="title">
                  <h3>Crystel Casper</h3>
                  <p>Expert Guider</p>
                </div>
              </div>

            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="team-member">
                <img className='bg-img' src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/newsletter-image.jpg" alt="" />
                <div className="person-img"><img src="https://darion.wpbingosite.com/wp-content/uploads/2023/01/ourteam-3.jpg" alt="" /></div>
                <div className="title">
                  <h3>Crystel Casper</h3>
                  <p>Expert Guider</p>
                </div>
              </div>

            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="team-member">
                <img className='bg-img' src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/newsletter-image.jpg" alt="" />
                <div className="person-img"><img src="https://darion.wpbingosite.com/wp-content/uploads/2023/01/ourteam-4.jpg" alt="" /></div>
                <div className="title">
                  <h3>Crystel Casper</h3>
                  <p>Expert Guider</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div> */}

      <div className="video"><video src=""></video></div>


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