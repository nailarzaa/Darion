import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Products from './pages/Products'
import FAQ from './pages/FAQ'
import Footer from './pages/Footer'
import Swiper from 'swiper'
import 'swiper/css'
import MySlider from './pages/MySlider'
import CustomCursor from './CustomCursor'
import 'i18next'
// import NotFound from './pages/PageNotFound'
import PageNotFound from './pages/PageNotFound'
// import PageNotFound from './pages/PageNotFound'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductDetails from './pages/ProductDetails'
import ScrollToTop from './Components/ScrollToTop'
import Basket from './pages/Basket'
import Navbar from './pages/Navbar'
import Z from './Z'
import SignUp from './auth/SignUp'
import SliderPage from './dashboard/slider'
const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header />
          <ScrollToTop/>
          {/* <Z/> */}
          {/* <CustomCursor/> */}
        <Routes>
        <Route path='/dashboard' element={<SliderPage/>}/>

          <Route path='/basket' element={<Basket/>}/>
          <Route path='/login' element={<SignUp/>}/>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/product' element={<Products />} />
          <Route path='/product/:urlid' element={<ProductDetails />}></Route>

          <Route path='/faq' element={<FAQ/>} />
          <Route path='*' element={<PageNotFound/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App