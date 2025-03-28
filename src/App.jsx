import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './pages/Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Products from './pages/Products';
import FAQ from './pages/FAQ';
import Footer from './pages/Footer';
import ProductDetails from './pages/ProductDetails';
import ScrollToTop from './Components/ScrollToTop';
import Basket from './pages/Basket';
import Wishlist from './pages/Wishlist';
import Register from './auth/Register';
import Login from './auth/Login';
import PageNotFound from './pages/PageNotFound';

// Dashboard Components
import CombineDashboard from './dashboard/CombineDashboard';
import SliderPage from './dashboard/Slider';
import CategoryDashboard from './dashboard/CategoryDashboard';
import HeroSectionDashboard from './dashboard/HeroSectionDashboard';
import ProductDashboard from './dashboard/ProductDashboard';
import SubCategoryDashboard from './dashboard/SubCategoryDashboard';
import PrivateRoute from './utils/ProtectedRoutes';
import PaymentForm from './pages/PaymentForm';
import Checkout from './pages/Checkout';
import AdminRoute from './ProtectedRoute';
import BlogDetail from './pages/BlogDetail';
import { useGetProductsQuery } from './tools/services/productApi';
import Loader from './Components/Preloader';
import RecommendProduct from './pages/RecommendProduct';

const Layout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isCheckout = location.pathname.startsWith('/checkout')

  const{ data:products, isLoading}= useGetProductsQuery();
  if(isLoading){
    return <Loader/>
  }

  return (
    <>

      {!isDashboard && !isCheckout && <Header />}
      {children}
      {!isDashboard && !isCheckout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routes>

          {/* Dashboard part starts */}
          <Route element={<AdminRoute/>}>

          <Route path="/dashboard" element={<CombineDashboard />}>
            <Route path="sliderdashboard" element={<SliderPage />} />
            <Route path="categorydashboard" element={<CategoryDashboard />} />
            <Route path="herosection" element={<HeroSectionDashboard />} />
            <Route path="productdashboard" element={<ProductDashboard />} />
            <Route path="subcategory" element={<SubCategoryDashboard />} />
          </Route>
          </Route>
          {/* Dashboard part ends */}

          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path='/blog/:urlid' element={<BlogDetail/>}/>
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='recommend' element={<RecommendProduct/>}/>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/checkout" element={<Checkout />} />


        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
