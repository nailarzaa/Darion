import React, { useEffect } from "react";
import { useWishlist } from "react-use-wishlist";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

import '../assets/css/Products.scss'
import WishlistLoader from "../Components/WishlistLoader";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";

const Wishlist = ({ userdata }) => {
  const { items, removeWishlistItem, emptyWishlist, isWishlistEmpty } = useWishlist();
  const { addItem } = useCart();
  const { t, i18n } = useTranslation();



  const uniqueItems = items.filter((item, index, self) =>
    index === self.findIndex((t) => t.id === item.id)
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      Swal.fire("Access denied", "Please log in first", 'warning');
      navigate('/login')
    }
  })

  return (
    <>
      <div className="about-photo">
        <img style={{ width: "100%", objectFit: 'cover' }} src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/bg-breadcrumb.jpg" alt="" />
        <div className="about-text">
          <p><Link to='/' style={{ color: 'black', textDecoration: 'none' }}>{t('home')}</Link>/ <span>Wishlist</span></p>
          <h1>Wishlist</h1>
        </div>
      </div>
      <div className="container mt-4">
        <h2 className="text-center">Your Wishlist</h2>
        {uniqueItems.length === 0 ? (
          <WishlistLoader />
        ) : (
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Product Title</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {uniqueItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img width={100} src={item.image} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td><p style={{fontSize:"20px"}}>${item.price}</p></td>
                  <td>
                    
                 
                    <button style={{padding:"10px 30px"}}
                      onClick={() => {
                        addItem({
                          id: item.id,
                          price: item.price,
                          name: item.name,
                          image: item.image,
                        });

                        Swal.fire({
                          title: "ADDED!",
                          text: "Product is added successfully!",
                          icon: "success",
                        });
                      }}
                      className="add-to-cart btn btn-outline-dark"
                    >
                      {i18n.language === "az" ? "səbətə əlavə et" : "add to cart"}
                    </button>
                    <button style={{padding:"10px 13px"}}
                      className="btn btn-outline-danger mx-2"
                      onClick={() => {
                        Swal.fire({
                          title: "Removed!",
                          text: "Product removed from wishlist.",
                          icon: "warning",
                        });
                        removeWishlistItem(item.id);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}


        {!isWishlistEmpty && <button onClick={emptyWishlist} className="btn btn-outline-dark m-3">clear all</button>}
      </div >
    </>
  );
};

export default Wishlist;
