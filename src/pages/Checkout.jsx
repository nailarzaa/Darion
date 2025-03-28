import React, { useState } from 'react'
import paypal from '../assets/images/paypal.png'
import shoppay from '../assets/images/shoppay.png'
import PaymentForm from './PaymentForm'
import { useCart } from 'react-use-cart';
import { Link, useNavigate } from 'react-router-dom';
import EmptyBasket from '../Components/EmptyBasket';
import Form from '../Components/Form';
import Swal from 'sweetalert2';


const Checkout = () => {
    const { cartTotal, isEmpty, items } = useCart();
    const navigate = useNavigate()
     const [mail, setMail] = useState('');
     const [ country, setCountry]= useState('')
     const [name, setName]= useState('')
     const [surname, setUsername]= useState('');
     const [address, setAddress]= useState('');
     const [apartment, setApartment]= useState('');
     const [city, setCity]= useState('');
     const [state, setState]=useState('');
     const [ zip, setZip]= useState('');
     const [ phone, setPhone]= useState('')

      const handleSubmit = (e) => {
        if(!mail || !country){
            Swal.fire({
                title: 'Please fill all input!',
                icon:'warning'
              });
            }else{
                e.preventDefault()
                Swal.fire({
                    title: 'Your order is completed!',
                    icon: 'success'
                });
                navigate('/recommend');

            setMail('');
            setCountry('');
            setName('');
            setUsername('');
            setAddress('');
            setApartment('');
            setCity('');
            setState('');
            setZip('');
            setPhone('')
        }
       
      }
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
                            {/* email */}
                            <h4>Contact</h4>
                            <input value={mail} onChange={(e) => setMail(e.target.value)} type="text" name="" placeholder='Email' id="" />
                        </div>
                        <div className="checkout-delivery">
                            <h4 className='mt-3'>Delivery</h4>
                            {/* country */}
                            <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" name="" id="" placeholder='country' />
                            {/* name and surname */}
                            <div style={{width:"100%", display:"flex", gap:"7px"}} className="namesurname d-flex ">
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder='First name' />
                                <input value={surname} onChange={(e) => setUsername(e.target.value)} type="text" name="" id="" placeholder='Last name' />
                            </div>
                            {/* adress */}
                            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="" id="" placeholder='Address' />
                            {/* apartment */}
                            <input value={apartment} onChange={(e) => setApartment(e.target.value)} type="text" name="" id="" placeholder='Apartment, suite, etc. (optional)' />
                            {/* city state zipcode */}
                            <div style={{width:"100%", display:"flex", gap:"7px"}} className="citystate d-flex">
                                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" name="" id="" placeholder='City' />
                                <input value={state} onChange={(e) => setState(e.target.value)} type="text" name="" id="" placeholder='State' />
                                <input value={zip} onChange={(e) => setZip(e.target.value)} type="text" name="" id="" placeholder='ZIP code' />
                            </div>
                            {/* phone */}
                            <input value={phone} onChange={(e) => setPhone(e.target.value)}t type="text" name="" id="" placeholder='Phone' />


                        </div>

                        <div className="checkout-payment">
                            <h4 className='mt-3 mb-4'>Payment</h4>
                            <PaymentForm />
                            <button onClick={handleSubmit} className='mt-3 mb-3 btn btn-dark' type="submit">Pay Now</button>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <div className="right-checkout">

                        {isEmpty ? <EmptyBasket /> :
                            <div className='container p-0'>
                                <h4 className='text-center mb-5 '>Checkout</h4>

                                {items.map((item, count) => (

                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "auto", border: "1px solid #e3e3e3", borderRadius: "10px", padding: "5px 20px" }} className="item m-2 ">
                                        <div className="img position-relative"><img width={70} src={item.image} alt={item.name} />
                                            <span className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-dark">
                                                {item.quantity}

                                            </span>
                                        </div>

                                        <div className="title"><p style={{ fontSize: "17px" }}>{item.name}</p></div>
                                        <div className="price"><span style={{ fontSize: "20px", fontWeight: "600" }}>${Math.round(item.price) * item.quantity}.00</span></div>

                                    </div>

                                ))}
                                <h4 style={{ fontFamily: 'monospace' }} className='m-0 mt-4 px-3'>Subtotal: ${cartTotal}.00</h4>
                                <hr />
                                <h4 style={{ fontFamily: 'monospace' }} className='mt-2 p-0 px-3'>Shipping: $15.00</h4>
                                <hr />

                                <h4 style={{ fontFamily: 'monospace' }} className='px-3'>Total Item: ${cartTotal+15}.00</h4>





                            </div>}
                        {/* <Form /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout