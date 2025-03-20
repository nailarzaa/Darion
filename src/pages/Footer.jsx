import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Footer.scss'
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

const Footer = () => {
  // useEffect(() => {
  //     Aos.init({ duration: 1000, once: true });
  //   }, []);

  const [info, setInfo] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Subscribed!',
      icon: 'success'
    });
    setInfo('');
  }


  const { t, i18n } = useTranslation();

  return (
    <>
      <footer className='pt-5'>
        <div className='line'></div>
        <div className="container py-5 px-3">
          <div className="row g-5">
            <div className="col-12 col-sm-4 col-lg-3">
              <div className="first">
                <Link to='/'><img width={100} src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/logo.png" alt="" /></Link>
                <p className="footer-text mt-4">Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures</p>
                <div className="contact-icons m-2 mt-4">
                  <i className="fa-brands fa-youtube" /><i className="fa-brands fa-youtube" /><i className="fa-brands fa-youtube" /><i className="fa-brands fa-youtube" /><i className="fa-brands fa-youtube" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-3 ">
              <div className="second">
                <h5 className="footer-text mb-4">{t('footer')}</h5>
                <ul className="nav flex-column">
                  <li className="nav-item ">
                    <Link to='/' className="nav-link p-0 text-body-secondary footer-text ">{t('shop')}</Link>
                  </li>
                  <li className="nav-item ">
                    <Link to='/about' className="nav-link p-0 text-body-secondary footer-text">{t('aboutus')}</Link>
                  </li>
                  <li className="nav-item ">
                    <Link to='/contact' className="nav-link p-0 text-body-secondary footer-text">{t('contactus')}</Link>
                  </li>

                  <li className="nav-item">
                    <Link to='/faq' className="nav-link p-0 text-body-secondary footer-text">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-3">
              <div className="third">
                <h5 className="footer-text mb-4">{t('learnmore')}</h5>
                <ul className="nav flex-column">
                  <li className="nav-item ">
                    <Link to='/' className="nav-link p-0 text-body-secondary footer-text ">{t('home')}</Link>
                  </li>
                  <li className="nav-item ">
                    <Link to='/' href="#" className="nav-link p-0 text-body-secondary footer-text">{t('features')}</Link>
                  </li>
                  <li className="nav-item ">
                    <a href="#" className="nav-link p-0 text-body-secondary footer-text">{t('aboutus')}</a>
                  </li>
                  <li className="nav-item ">
                    <a href="#" className="nav-link p-0 text-body-secondary footer-text">{t('privacy')}</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-body-secondary footer-text">{t('termofuse')}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-3">
              <div className="fourth">
                <form className='mt-4'>
                  <h5 className="footer-text">Subscribe to our newsletter</h5>
                  <p className="footer-text">Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden ">Email address</label>
                    <input value={info} onChange={(e) => setInfo(e.target.value)} id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button onClick={handleSubmit} className="btn btn-outline-dark btn-light subs footer-text">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='line'></div>

      </footer>
    </>
  )
}

export default Footer