import React from 'react';
import { useTranslation } from 'react-i18next';
import SingleCard from '../Components/SingleCard';
import { useGetProductsQuery } from '../tools/services/productApi';

const RecommendProduct = () => {
  const { t } = useTranslation();
  const { data: products, isLoading } = useGetProductsQuery();

  const recommendedProducts = products?.slice(0, 4) || [];

  return (
    <>
      <div className="about-photo">
        <img
          style={{ width: '100%', objectFit: 'cover' }}
          src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/bg-breadcrumb.jpg"
          alt=""
        />
        <div style={{ width: '85%' }} className="about-text">
          <h3 style={{ textAlign: 'center' }}>
            Thank you for your purchase! <br /> Your order has been successfully processed.
          </h3>
        </div>
      </div>

      <div className="recommendations" style={{ width: '85%', margin: 'auto', padding: '20px 0' }}>
        <h2 style={{ textAlign: 'center', margin: '40px' }}>{t('Recommended for you')}</h2>

        {isLoading ? (
          <p style={{ textAlign: 'center' }}>{t('Loading products...')}</p>
        ) : (
            <div className="products">
                
          <div className="row">
            {recommendedProducts.map((item) => (
              <SingleCard userdata={item} key={item._id} />
            ))}
          </div>
            </div>
        )}
      </div>
    </>
  );
};

export default RecommendProduct;
