import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import Loader from '../Components/Preloader';
import { useGetProductsQuery } from '../tools/services/productApi';
import { useTranslation } from 'react-i18next';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: products } = useGetProductsQuery();
  const { i18n } = useTranslation()
  
  const findProduct = products.find((p) => p._id === id);
  return (
    <div>{findProduct == undefined ? <Loader /> : <div className="container">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={findProduct.coverImage}
            className="d-block mx-lg-auto img-fluid"
            alt={findProduct.title.az}
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{i18n.language === "az" ? findProduct.title.az : findProduct.title.en}</h1>
          <p>{findProduct.tags.join(", ")}</p>
          <p style={{ fontSize: "30px", color: "red", fontWeight: "600" }} className="lead ">${findProduct.price}</p>
          <p>{i18n.language === "az" ? findProduct.description.az : findProduct.description.en}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-danger btn-lg px-4 me-md-2">Next</button>
            <Link to="/product" type="button" className="btn btn-outline-danger btn-lg px-4">Back</Link>
          </div>
        </div>
      </div>
    </div>}</div>
  )
}

export default ProductDetails