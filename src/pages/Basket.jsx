import React from 'react'
import { useCart } from 'react-use-cart';
import EmptyBasket from '../Components/EmptyBasket';
import { Link } from 'react-router-dom';
import Checkout from './PaymentForm';

const Basket = () => {
    const {emptyCart,cartTotal, isEmpty, items,updateItemQuantity,removeItem } = useCart();
  return (
    <div>
      {isEmpty ? <EmptyBasket/> : <div className='container'>
                <h4 className='text-center my-5'>Basket</h4>
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
                            <tr  key={count}>
                                <th scope="row">{count + 1}</th>
                                <td><img src={item.img} alt={item.title} width={70} /></td>
                                <td>{item.title}</td>
                                <td>${Math.round(item.price)*item.quantity}</td>

                                <td>
                                    <button className='btn btn-dark' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span className='mx-3'>{item.quantity}</span>
                                    <button className='btn btn-dark'onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                </td>

                                <td><button onClick={()=>{removeItem(item.id)}} className='btn btn-outline-dark'>remove from basket</button></td>
                            </tr>
                        ))}


                    </tbody>
                </table>
                <h3 className='mt-3' style={{fontFamily:'monospace'}}>Total price: <span className='text-danger'>${Math.round(cartTotal)}</span></h3>
                <button  onClick={emptyCart} variant="danger my-3" className='m-2 btn btn-dark'>Clear all</button>
                <Link to='/checkout' className='btn btn-dark'>Go to Checkout</Link>

                

            </div>}


        </div>
  )
}

export default Basket