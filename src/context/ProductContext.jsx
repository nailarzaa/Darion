import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
export const ProductProvider =({children})=>{
    const [product, setProduct]= useState([]);
    useEffect(()=>{
        axios.get('https://mocki.io/v1/f74792dd-04d6-4987-80f0-3aed6f2eaa93')
        .then(res=>{
            setProduct(res.data.products)
            console.log(res.data.products);
            
        })
    },[])

    return <ProductContext.Provider value={[product, setProduct]}>{children}</ProductContext.Provider>
}