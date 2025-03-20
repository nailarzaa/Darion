import React from 'react'
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import '../assets/css/Header.scss'
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import { useWishlist } from 'react-use-wishlist';
import '../assets/css/Products.scss'

const SingleCard = ({ userdata }) => {
  const { addItem } = useCart();
  const { addWishlistItem, getWishlistItem, removeWishlistItem,items } = useWishlist();
  const isInWishlist = items.some((item) => item.id === userdata.id);



  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="product">
        <img src={userdata.img} alt={userdata.title} />
        <div className="sale-button">
          <div className="hot"></div>
          <button className="sale">-25%</button>
        </div>
        <div className="three-button">
          <Link className="btn readmore " to={`/product/${userdata.id}`}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link
      className="btn readmore"
      to="/wishlist"
      onClick={(e) => {
        e.preventDefault(); // Prevent page refresh

        if (!isInWishlist) {
          addWishlistItem(userdata); // Add only if not already added
          Swal.fire({
            title: "Added!",
            text: "Product added to wishlist!",
            icon: "success",
          });
        } else {
          removeWishlistItem(userdata.id); // Remove if already in wishlist
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
            Swal.fire({
              title: "ADDED!",
              text: "Product is added successfully!",
              icon: "success",
            });
            addItem(userdata);
          }}
          className="add-to-cart"
        >
          Add to cart
        </button>
      </div>
      <p className="product-title p-0 m-1 text-center">{userdata.title}</p>
      <p className="product-price p-0 m-1 text-center">${userdata.price}</p>
    </div>
  )
}

export default SingleCard