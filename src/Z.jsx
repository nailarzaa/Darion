import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Z = () => {
    const [product, setProduct] = useState();
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProduct(res.data)
        )
    }, [])
    return (
        <ul>
            {product.map(item=>(
                <li>{item.title}</li>
            ))}
        </ul>
           
    )
}

export default Z