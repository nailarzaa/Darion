import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.scss';
import Aos from 'aos';
import { useTranslation } from 'react-i18next'; 
import { useTheme } from '../context/ThemeContext';
import { useCart } from 'react-use-cart';
import { ProductContext } from '../context/ProductContext';

const Header = () => {
  const { t, i18n } = useTranslation(); 
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {totalItems}= useCart();
  const [product]= useContext(ProductContext);
  const [keyword, setKeyword]= useState()


  return (
    <>
      {/* <div className="lineee">
        <div className="news-line container">
          <div>{t('quick')}</div> 
          <div>{t('mail')}</div>
        </div>
      </div> */}

      <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
        <nav className="navbar navbar-expand-lg p-4">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img width={100} src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/logo.png" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="offcanvas offcanvas-end offcanvas-lg" tabIndex="-1" id="offcanvasNavbar">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Darion</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-2">
                    <Link to='/product' className="nav-link active">{t('products')}</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link to='/about' className="nav-link active">{t('about')}</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link to='/contact' className="nav-link active">{t('contact')}</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link to='/blog' className="nav-link active">{t('blog')}</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link to='/faq' className="nav-link active">{t('faq')}</Link>
                  </li>
                </ul>
                <div className="navbar-right d-flex gap-2">
                  <button className="btn">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <Link to='/basket' className="btn position-relative">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span  className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-dark">
                        {totalItems}

                    </span>
                  </Link>
                  {/* <button className="btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button> */}
                  <Link to='/login' className="btn">
                    <i className="fa-solid fa-user"></i>
                  </Link>
                  <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'az' : 'en')} className="btn">
                    {t('changeLang')}
                  </button>
                  <button className="btn" onClick={toggleTheme}>
                    {theme === "light" ? "🌙" : "☀️"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </>
  );
};

export default Header;
