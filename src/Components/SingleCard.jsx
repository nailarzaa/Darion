import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.scss';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import { useWishlist } from 'react-use-wishlist';
import '../assets/css/Products.scss';
import { useTranslation } from 'react-i18next';
import bestseller from '../assets/images/bestseller.png'

const SingleCard = ({ userdata }) => {
  const { t, i18n } = useTranslation();
  const { addItem } = useCart();

  const { addWishlistItem, getWishlistItem, removeWishlistItem, items } = useWishlist();
  const isInWishlist = items.some((item) => item.id === userdata._id);

  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="product m-0">
        <img src={userdata.coverImage} alt={userdata.title.az} />
        <div className="sale-button">
          {userdata.bestSeller == true ? <div className="hot"><img style={{ width: "52px" }} src={bestseller} alt="" /></div> : ''}

          {userdata.discount !== 0 ? <button className='sale'>%{userdata.discount}</button> : ""}
        </div>
        <div className="three-button">
          <Link className="btn readmore " to={`/product/${userdata._id}`}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link
            className="btn readmore"
            to="/wishlist"
            onClick={(e) => {
              console.log("Adding to cart:", userdata); // Debugging

              e.preventDefault();
              if (!isInWishlist) {
                addWishlistItem({
                  id: userdata._id, // Ensure this is defined
                  price: userdata.price,
                  name: userdata.title.en,
                  image: userdata.coverImage,
                });
                Swal.fire({
                  title: "Added!",
                  text: "Product added to wishlist!",
                  icon: "success",
                });
              } else {
                removeWishlistItem(userdata.id);
                Swal.fire({
                  title: "Removed!",
                  text: "Product removed from wishlist!",
                  icon: "warning",
                });
              }
            }}
          >
            <i className={`fa-${isInWishlist ? "solid" : "regular"} fa-heart`}></i>
          </Link>
        </div>
        <button
          onClick={() => {
            if (!userdata || !userdata._id) {
              console.error("Error: userdata or userdata._id is undefined", userdata);
              Swal.fire({
                title: "Error!",
                text: "Product data is missing!",
                icon: "error",
              });
              return;
            }

            addItem({
              id: userdata._id,
              price: userdata.price,
              name: userdata.title.en,
              image: userdata.coverImage,
            });

            Swal.fire({
              title: "ADDED!",
              text: "Product is added successfully!",
              icon: "success",
            });
          }}
          className="add-to-cart"
        >
          {i18n.language === "az" ? "səbətə əlavə et" : "add to cart"}
        </button>

      </div>
      <p className="product-title p-0 m-1 text-center">{i18n.language === "az" ? userdata.title.az : userdata.title.en}</p>
      <p className="product-price p-0 m-1 text-center">${userdata.price}.00</p>
    </div>
  );
};

export default SingleCard;