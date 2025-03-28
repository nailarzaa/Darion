import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Header.scss';
import Aos from 'aos';
import { useTranslation } from 'react-i18next'; 
import { useTheme } from '../context/ThemeContext';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import Switch from '../Components/modeButton';
import Swal from 'sweetalert2';

const Header = () => {
  const { t, i18n } = useTranslation(); 
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    const updateAuthState = () => {
      setUsername(localStorage.getItem("username"));
      setIsLoggedIn(!!localStorage.getItem("authToken"));
    };

    window.addEventListener("storage", updateAuthState);
    
    return () => {
      window.removeEventListener("storage", updateAuthState);
    };
  }, []);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();

  // Logout Function
  const handleLogout = () => {
    localStorage.clear(); // Clears all stored user data
    sessionStorage.clear(); // Clears session data if any
    setUsername(null);
    setIsLoggedIn(false);
    
    Swal.fire("Logged Out", "You have been logged out successfully.", "success").then(() => {
      navigate("/login"); // Redirect to login
      window.location.reload(); // Force reloading to update authentication state
    });
  };
  

  // Prevent unauthorized access to Basket & Wishlist
  const handleProtectedNavigation = (path) => {
    if (!isLoggedIn) {
      Swal.fire("Access Denied", "Please log in first.", "warning");
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
      <nav className="navbar navbar-expand-lg p-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img width={100} src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/logo.png" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="offcanvas offcanvas-end offcanvas-lg" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Darion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-2">
                    <Link to='/' className="nav-link active">{t('home')}</Link>
                  </li>
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
                <button onClick={() => handleProtectedNavigation("/wishlist")} className="btn position-relative">
                  <i className="fa-regular fa-heart"></i>
                  {totalWishlistItems > 0 && (
                    <span className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-dark">
                      {totalWishlistItems}
                    </span>
                  )}
                </button>

                <button onClick={() => handleProtectedNavigation("/basket")} className="btn position-relative">
                  <i className="fa-solid fa-cart-shopping"></i>
                  {totalItems > 0 && (
                    <span className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-dark">
                      {totalItems}
                    </span>
                  )}
                </button>

                {isLoggedIn ? (
                  <>
                    <span className="navbar-text">Welcome, {username}!</span>
                    <button onClick={handleLogout} className="btn btn-outline-dark">
                      <i className="fa-solid fa-right-from-bracket"></i>
                    </button>
                  </>
                ) : (
                  <Link to='/login' className="btn">
                    <i className="fa-solid fa-user"></i>
                  </Link>
                )}

                <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'az' : 'en')} className="btn">
                  {t('changeLang')}
                </button>

                <Switch />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Header;
