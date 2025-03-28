import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Products.scss';
import { Slider, Rate, Pagination } from 'antd';
import SingleCard from '../Components/SingleCard';
import { useTranslation } from 'react-i18next';
import { useGetProductsQuery } from '../tools/services/productApi';
import { useGetCategoriesQuery } from '../tools/services/categoryApi';

const Products = () => {
  const { t } = useTranslation();
  const { data: products, isLoading } = useGetProductsQuery();
  const { data } = useGetCategoriesQuery();
  const categories = data?.categories || [];

  const [filtered, setFiltered] = useState([]);
  const [priceRange, setPriceRange] = useState([25, 250]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const productsPerPage = 3;


  // const handleCategoryChange = (categoryId) => {
  //   setSelectedCategories((prev) =>
  //     prev.includes(categoryId)
  //       ? prev.filter((id) => id !== categoryId)
  //       : [...prev, categoryId]
  //   );
  // };

  // Filter and paginate products
  useEffect(() => {
    if (products) {
      let filteredProducts = products;

      // Filter by price range
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      );

      // Filter by  categories guya ama islemir
      if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          product.categoryId && selectedCategories.includes(product.categoryId.toString())
        );
      }

      // Filter by search 
      if (searchTerm) {
        filteredProducts = filteredProducts.filter((product) =>
          product.title?.en?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.title?.az?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Pagination Logic
      if (!showAll) {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        filteredProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
      }

      setFiltered(filteredProducts);
    }
  }, [priceRange, selectedCategories, searchTerm, products, currentPage, showAll]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="about-photo">
        <img style={{ width: "100%", objectFit: 'cover', height: "40vh" }} src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/bg-breadcrumb.jpg" alt="" />
        <div style={{ width: "90%" }} className="about-text">
          <p className='text-center'><Link to='/' style={{ color: 'black', textDecoration: 'none' }}>{t('home')}</Link>/ <span>Products</span></p>
          <h1 className='text-center'>Products</h1>
        </div>
      </div>

      <div className="products-categories pt-4">
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-3">
              <div className="category-filter px-4">
                <div className="category-items">
                  <h4 className="mb-3">{t('ctg')}</h4>
                  {categories?.map((item) => (
                    <div className="item d-flex m-0 p-0" key={item._id}>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(item._id.toString())}
                        onChange={() => handleCategoryChange(item._id.toString())}
                      />
                      <p className="p-0 m-0 mx-2">{item.name}</p>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="price-filter">
                  <h4>{t('price')}</h4>
                  <Slider
                    range
                    min={25}
                    max={250}
                    defaultValue={[25, 250]}
                    value={priceRange}
                    onChange={(value) => setPriceRange(value)}
                  />
                  <p>
                    {t('range')}: <span>${priceRange[0]} - ${priceRange[1]}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-9 p-0">
              <div className="product-cards m-5">
                {/* Search Input */}
                <div style={{
                  width: "250px",
                  border: "1px solid #e3e3e3",
                  padding: "6px 5px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px"
                }}>
                  <input
                    style={{ width: "90%", border: 'none', outline: 'none' }}
                    type="text"
                    placeholder={t('search')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                {/* Product Cards */}
                <div className="row">
                  {filtered.length > 0 ? (
                    filtered.map((item) => (
                      <SingleCard userdata={item} key={item._id} />
                    ))
                  ) : (
                    <p>{t('no_products_found')}</p>
                  )}
                </div>

                {/* Pagination & Show All Button */}
                <div className="d-flex justify-content-center mt-4">
                  {!showAll ? (
                    <Pagination
                      current={currentPage}
                      total={products?.length || 0}
                      pageSize={productsPerPage}
                      onChange={(page) => setCurrentPage(page)}
                    />
                  ) : null}
                </div>

                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-dark"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? t('show paginated') : t('show all')}
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
