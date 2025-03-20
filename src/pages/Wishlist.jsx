import React from "react";
import { useWishlist } from "react-use-wishlist";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import '../assets/css/Products.scss'
import WishlistLoader from "../Components/WishlistLoader";

const Wishlist = () => {
  const { items, removeWishlistItem, emptyWishlist, isWishlistEmpty } = useWishlist();

  // Remove duplicates based on 'id'
  const uniqueItems = items.filter((item, index, self) =>
    index === self.findIndex((t) => t.id === item.id)
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center">Your Wishlist</h2>
      {uniqueItems.length === 0 ? (
        <WishlistLoader />
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Product Title</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {uniqueItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img width={100} src={item.img} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <Link to={`/product/${item.id}`} className="btn btn-primary me-2">
                    View Details
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      Swal.fire({
                        title: "Removed!",
                        text: "Product removed from wishlist.",
                        icon: "warning",
                      });
                      removeWishlistItem(item.id);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}


      {!isWishlistEmpty && <button onClick={emptyWishlist} className="btn btn-outline-dark m-3">clear all</button>}
    </div>
  );
};

export default Wishlist;
