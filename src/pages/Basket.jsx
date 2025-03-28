import React, { useEffect } from 'react'
import { useCart } from 'react-use-cart';
import EmptyBasket from '../Components/EmptyBasket';
import { Link, useNavigate } from 'react-router-dom';
import Checkout from './PaymentForm';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const Basket = () => {

    const { emptyCart, cartTotal, isEmpty, items, updateItemQuantity, removeItem } = useCart();
    const navigate = useNavigate();
    const {t}= useTranslation();
    useEffect(() => {
        if (!localStorage.getItem('authToken')) {
            Swal.fire("Access Denied", "Please log in first", 'warning');
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
        
        <div>
            {isEmpty ? <EmptyBasket /> : <div className='container'>
                <h4 className='text-center my-5'>Basket</h4>
                <div className="row">
                    <div className="col-9">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, count) => (
                                    <tr key={count}>
                                        <th scope="row">{count + 1}</th>
                                        <td><img src={item.image} alt='' width={70} /></td>
                                        <td>{item.name || "No Title"}</td>

                                        <td>${Math.round(item.price) * item.quantity}.00</td>

                                        <td >
                                            <div className="d-flex align-items-center mx-3">
                                                <button className='btn btn-dark' onClick={() => { item.quantity > 1 && updateItemQuantity(item.id, item.quantity - 1) }} >-</button>
                                                <span className='mx-3'>{item.quantity}</span>
                                                <button className='btn btn-dark' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                        </td>

                                        <td><button onClick={() => { removeItem(item.id) }} className='btn btn-outline-dark'>remove from basket</button></td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>

                    <div className="col-3">
                        <div style={{ width: "100%", height: "auto", border: "1px solid #e3e3e3" }} className="shipping p-4">
                            <h3 className=''>Cart Totals</h3>
                            <h4 className='mt-3' style={{ fontFamily: 'monospace' }}>Sub Total: <span className='text-danger'>${Math.round(cartTotal)}.00</span></h4>
                            <hr />
                            <h4 style={{ fontFamily: 'monospace' }}>Shipping: $15.00</h4>
                            <hr />
                            <h4 style={{ fontFamily: 'monospace' }}>Total: <span className="text-danger">
                                ${Math.round(cartTotal + 15)}.00</span> </h4>
                            <button onClick={emptyCart} variant="danger my-3" className='m-2 btn btn-dark'>Clear all</button>
                            <Link to='/checkout' className='btn btn-dark'>Go to Checkout</Link>
                        </div>
                    </div>
                </div>




            </div>}


        </div>
        </>
    )
}

export default Basket