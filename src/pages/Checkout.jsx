import React from 'react'
import paypal from '../assets/images/paypal.png'
import shoppay from '../assets/images/shoppay.png'
import PaymentForm from './PaymentForm'
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import EmptyBasket from '../Components/EmptyBasket';
import Form from '../Components/Form';


const Checkout = () => {
    const { cartTotal, isEmpty, items } = useCart();
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="left-checkout  ">
                        <img className='mb-4' width={130} src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/logo.png" alt="" />
                        <div className="express-checkout">
                            <p>Express checkout</p>
                            <div className="checkout-button">
                                <button className='shoppay'><img src={shoppay} alt="" /></button>
                                <button className='paypal'><img src={paypal} alt="" /></button>
                            </div>
                            <div className="or-line">
                                <div className="left-line"></div>
                                <p>OR</p>
                                <div className="right-line"></div>
                            </div>

                        </div>

                        <div className="checkout-contact">
                            <h4>Contact</h4>
                            <input type="text" name="" placeholder='Email' id="" />
                        </div>
                        <div className="checkout-delivery">
                            <h4 className='mt-3'>Delivery</h4>
                            {/* country */}
                            <input type="text" name="" id="" placeholder='country' />
                            {/* name and surname */}
                            <div className="namesurname d-flex ">
                                <input type="text" name="" id="" placeholder='First name' />
                                <input type="text" name="" id="" placeholder='Last name' />
                            </div>
                            {/* adress */}
                            <input type="text" name="" id="" placeholder='Address' />
                            {/* apartment */}
                            <input type="text" name="" id="" placeholder='Apartment, suite, etc. (optional)' />
                            {/* city state zipcode */}
                            <div className="citystate d-flex">
                                <input type="text" name="" id="" placeholder='City' />
                                <input type="text" name="" id="" placeholder='State' />
                                <input type="text" name="" id="" placeholder='ZIP code' />
                            </div>
                            {/* phone */}
                            <input type="text" name="" id="" placeholder='Phone' />


                        </div>

                        <div className="checkout-payment">
                            <h4 className='mt-3 mb-4'>Payment</h4>
                            <PaymentForm />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <div className="right-checkout">

                        {isEmpty ? <EmptyBasket /> :
                            <div className='container p-0'>
                                <h4 className='text-center mb-5 '>Checkout</h4>

                                {items.map((item, count) => (

                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "auto", border:"1px solid #e3e3e3", borderRadius:"10px", padding:"5px 20px" }} className="item m-2 ">
                                        <div className="img position-relative"><img width={70} src={item.img} alt={item.title} />
                                        <span  className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-dark">
                        { item.quantity}

                    </span>
                                        </div>

                                        <div className="title"><p style={{fontSize:"17px"}}>{item.title}</p></div>
                                        <div className="price"><span style={{fontSize:"20px", fontWeight:"600"}}>${Math.round(item.price)*item.quantity}</span></div>

                                    </div>
                                    
                                ))}
                                <h4>Total Item: ${cartTotal}</h4>





                            </div>}
                        {/* <Form /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout