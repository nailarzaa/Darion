import Slider from "react-slick";
import '../assets/css/Products.scss'

const MySlider = () => {
    const settings = {
      dots: true,        // Show navigation dots
      infinite: true,    // Infinite loop
      speed: 500,        // Animation speed
      slidesToShow: 4,   // Number of slides visible
      slidesToScroll: 1, // Number of slides to scroll
      autoplay: true,    // Auto-play enabled
      autoplaySpeed: 2000, // Auto-play speed (2s)
    };
  
    return (
      <div className="slider-container container">
        <div className="row">
        <Slider {...settings}>
          <div className="col-lg-3 col-md-6 col-sm-12"><img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/category-5.jpg" alt="Slide 1" /></div>
          <div className="col-lg-3 col-md-6 col-sm-12"  ><img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/category-3.jpg" alt="Slide 2" /></div>
          <div  className="col-lg-3 col-md-6 col-sm-12"><img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/category-4.jpg" alt="Slide 3" /></div>
          <div className="col-lg-3 col-md-6 col-sm-12"><img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/category-2.jpg" alt="Slide 4" /></div>
          <div className="col-lg-3 col-md-6 col-sm-12"><img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/category-1.jpg" alt="Slide 5" /></div>
        </Slider>
        </div>
      </div>
    );
  };
  
  export default MySlider;
  