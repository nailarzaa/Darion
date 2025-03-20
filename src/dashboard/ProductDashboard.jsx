import React, { useState } from 'react';
import { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } from '../tools/services/productApi';
import { Button, Table, Form } from 'react-bootstrap';

const ProductDashboard = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const [addProduct] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [newProduct, setNewProduct] = useState({
    images: [],
    coverImage: '',
    title: { en: '', az: '' },
    customerReview: '',
    price: 0,
    discount: 0,
    discountPrice: false,
    description: { en: '', az: '' },
    slug: '',
    category: '',  
    subCategories: '',
    tags: [],
    bestSeller: false,
  });

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await addProduct(newProduct);
    setNewProduct({
      images: [],
      coverImage: '',
      title: { en: '', az: '' },
      customerReview: '',
      price: 0,
      discount: 0,
      discountPrice: false,
      description: { en: '', az: '' },
      slug: '',
      category: '',
      subCategories: '',
      tags: [],
      bestSeller: false,
    });
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Products</h2>
      <Form onSubmit={handleAddProduct}>
        <Form.Group>
          <Form.Label>English Title</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.title.en}
            onChange={(e) => setNewProduct({ ...newProduct, title: { ...newProduct.title, en: e.target.value } })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Azerbaijani Title</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.title.az}
            onChange={(e) => setNewProduct({ ...newProduct, title: { ...newProduct.title, az: e.target.value } })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Customer Review</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.customerReview}
            onChange={(e) => setNewProduct({ ...newProduct, customerReview: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Discount</Form.Label>
          <Form.Control
            type="number"
            value={newProduct.discount}
            onChange={(e) => setNewProduct({ ...newProduct, discount: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Discount Price</Form.Label>
          <Form.Check
            type="checkbox"
            checked={newProduct.discountPrice}
            onChange={(e) => setNewProduct({ ...newProduct, discountPrice: e.target.checked })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Slug</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.slug}
            onChange={(e) => setNewProduct({ ...newProduct, slug: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Subcategories</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.subCategories}
            onChange={(e) => setNewProduct({ ...newProduct, subCategories: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.tags.join(',')}
            onChange={(e) => setNewProduct({ ...newProduct, tags: e.target.value.split(',') })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Best Seller</Form.Label>
          <Form.Check
            type="checkbox"
            checked={newProduct.bestSeller}
            onChange={(e) => setNewProduct({ ...newProduct, bestSeller: e.target.checked })}
          />
        </Form.Group>
        <Button type="submit">Add Product</Button>
      </Form>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>{product.title.en}</td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteProduct(product._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductDashboard;
