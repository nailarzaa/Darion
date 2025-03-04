import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Products.scss'
import Slider from 'react-slick';
import MySlider from './Slick';
import { Select, Space } from 'antd';
import { Rate } from 'antd';
import { Pagination } from 'antd';
import axios from 'axios';
import { ProductContext } from '../context/ProductContext';
import SingleCard from '../Components/SingleCard';



const Products = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [product] = useContext(ProductContext);
  const [filtered, setFiltered] = useState([]);
  const selectCategory = (cat) => {
    const filteredProduct = product.filter(p => p.categories === cat);
    setFiltered(filteredProduct)
  }
  return (
    <>

      <div className="product-photo">
        <div className="product-text">
          <p><Link to='/' style={{ color: 'palette ', textDecoration: 'none' }}>Home</Link>/ <span>Products</span></p>
          <h1>Products </h1>
        </div>
        {/* <MySlider /> */}
      </div>


      <div className="products-categories mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <div className="category-filter px-4">
                <div className="category-items">
                  <h4 className='mb-3'>Categories</h4>
                  <div className="item d-flex m-0 p-0 "><input onClick={() => { selectCategory('Cheesy') }} type="checkbox" name="bathroom" id="" /> <p  className='p-0 m-0 mx-2'>Cheesy</p></div>
                  <div className="item d-flex m-0 p-0 "><input onClick={() => { selectCategory('withOlives') }} type="checkbox" name="chair" id="" /> <p  className='p-0 m-0 mx-2'>Chair</p></div>
                  <div className="item d-flex m-0 p-0 "><input onClick={() => { selectCategory('Chicken') }} type="checkbox" name="decor" id="" /> <p  className='p-0 m-0 mx-2'>Decor</p></div>



                </div>

                <hr />

                <div className="price-filter">
                  <h4>
                    Price
                  </h4>
                  <div className="filter-item"></div>
                  <p>Range: <span>$20.00-$250.00</span></p>
                </div>

                <div className="color-filter">
                  <h4>Color</h4>
                  <div className="color-item">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="palette"></div>
                      </div>
                      <div className="col-lg-2">
                        <div className="palette"></div>
                      </div>
                      <div className="col-lg-2">
                        <div className="palette"></div>
                      </div>
                      <div className="col-lg-2">
                        <div className="palette"></div>
                      </div>
                      <div className="col-lg-2">
                        <div className="palette"></div>
                      </div>

                      <div className="col-lg-2">
                        <div className="palette"></div>
                      </div>

                      <div className="col-lg-2">
                        <div className="palette"></div>
                      </div>
                      <div className="col-lg-2">
                        <div className="palette"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="brand-filter">
                  <h4>Brands</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="brand-item">
                        <p>Asoka</p>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="brand-item">
                        <p>Interior Premium</p>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="brand-item">
                        <p>Lavish Cuisine</p>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="brand-item">
                        <p>Medd</p>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="brand-item">
                        <p>Vetter</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="feature-product">
                  <h4>
                    Feature Product
                  </h4>
                  <div className="feature-product-item d-flex m-2 col-md-12 col-sm-12">
                    <img style={{ width: '100px' }} src="https://darion.wpbingosite.com/wp-content/uploads/2020/12/pro-12.jpg" alt="" />
                    <div className="feature-product-item-detail mx-2">
                      <Rate className='rate-stars' allowHalf defaultValue={2.5} />
                      <p className='feature-product-title'>Suspension Archives</p>
                      <span className='feature-product-price'>$90.00</span>
                    </div>
                  </div>

                  <div className="feature-product-item d-flex m-2 col-md-12 col-sm-12">
                    <img style={{ width: '100px' }} src="https://darion.wpbingosite.com/wp-content/uploads/2020/12/pro-12.jpg" alt="" />
                    <div className="feature-product-item-detail mx-2">
                      <Rate className='rate-stars' allowHalf defaultValue={3} />

                      <p className='feature-product-title'>Suspension Archives</p>
                      <span className='feature-product-price'>$90.00</span>
                    </div>
                  </div>

                  <div className="feature-product-item d-flex m-2">
                    <img style={{ width: '100px' }} src="https://darion.wpbingosite.com/wp-content/uploads/2020/12/pro-12.jpg" alt="" />
                    <div className="feature-product-item-detail mx-2">
                      <Rate className='rate-stars' allowHalf defaultValue={5} />

                      <p className='feature-product-title'>Suspension Archives</p>
                      <span className='feature-product-price'>$90.00</span>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div className="col-9 p-0 ">
              <Space wrap>
                <Select
                  defaultValue="Default sorting"
                  className='mx-5'
                  style={{
                    width: 100,
                  }}
                  onChange={handleChange}
                  options={[
                    
                    {
                      value: 'rating',
                      label: 'Sort By Rating',
                    },
                   
                    {
                      value: 'lowprice',
                      label: 'Sort By Price: Low To High',
                    },
                    {
                      value: 'highprice',
                      label: 'Sort By Price: High To Low',
                    },
                  ]}
                />

              </Space>

              <div className="product-cards m-5">
                <div className="row">
                  {filtered.length === 0 ? product.map(item => (
                    <SingleCard userdata={item} key={item.id} />
                  )) : filtered.map(item => (
                    <SingleCard userdata={item} key={item.id} />
                  ))}






                </div>
              </div>


              <Pagination defaultCurrent={1} total={50} className='d-flex justify-content-center mb-4' />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Products