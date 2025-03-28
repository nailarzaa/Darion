import React, { useState } from "react";
import { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } from "../tools/services/productApi";
import { Button, Table, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const ProductDashboard = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const [addProduct, { isLoading: isAdding }] = useAddProductMutation();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const [newProduct, setNewProduct] = useState({
    sku: "", 
    images: [],
    coverImage: "",
    title: { en: "", az: "" },
    customerReview: "",
    price: 0,
    discount: 0,
    discountPrice: false,
    description: { en: "", az: "" },
    slug: "",
    category: "",
    subCategories: "",
    tags: [],
    bestSeller: false,
  });

  const isValidUrl = (url) => {
    const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return pattern.test(url);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (
      !newProduct.sku || 
      !newProduct.title.en ||
      !newProduct.title.az ||
      !newProduct.coverImage ||
      !newProduct.customerReview ||
      !newProduct.price ||
      !newProduct.slug ||
      !newProduct.category ||
      !newProduct.subCategories ||
      newProduct.tags.length === 0 ||
      newProduct.images.length === 0 ||
      !newProduct.description.en ||
      !newProduct.description.az
    ) {
      Swal.fire("Error", "Please fill all required fields!", "error");
      return;
    }

    if (!isValidUrl(newProduct.coverImage)) {
      Swal.fire("Error", "Please enter a valid cover image URL!", "error");
      return;
    }

    if (newProduct.images.some((image) => !isValidUrl(image))) {
      Swal.fire("Error", "Please enter valid image URLs!", "error");
      return;
    }

    try {
      await addProduct(newProduct).unwrap();
      Swal.fire("Success", "Product added successfully!", "success");
      setNewProduct({
        sku: "", 
        images: [],
        coverImage: "",
        title: { en: "", az: "" },
        customerReview: "",
        price: 0,
        discount: 0,
        discountPrice: false,
        description: { en: "", az: "" },
        slug: "",
        category: "",
        subCategories: "",
        tags: [],
        bestSeller: false,
      });
    } catch (error) {
      Swal.fire("Error", error.data?.message || "Failed to add product!", "error");
    }
  };

  const handleDeleteProduct = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (confirmDelete.isConfirmed) {
      try {
        await deleteProduct(id).unwrap();
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error", error.data?.message || "Failed to delete product!", "error");
      }
    }
  };



  

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Products</h2>
      <Form onSubmit={handleAddProduct}>
        <Form.Group>
          <Form.Label>SKU</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.sku}
            onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
            required
          />
        </Form.Group>
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
          <Form.Label>Cover Image URL</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.coverImage}
            onChange={(e) => setNewProduct({ ...newProduct, coverImage: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URLs (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.images.join(",")}
            onChange={(e) => setNewProduct({ ...newProduct, images: e.target.value.split(",") })}
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
          <Form.Label>Tags (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.tags.join(",")}
            onChange={(e) => setNewProduct({ ...newProduct, tags: e.target.value.split(",") })}
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
        <Form.Group>
          <Form.Label>English Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newProduct.description.en}
            onChange={(e) => setNewProduct({ ...newProduct, description: { ...newProduct.description, en: e.target.value } })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Azerbaijani Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newProduct.description.az}
            onChange={(e) => setNewProduct({ ...newProduct, description: { ...newProduct.description, az: e.target.value } })}
            required
          />
        </Form.Group>
        <Button variant="dark" className="mt-3" type="submit" disabled={isAdding}>
          {isAdding ? "Adding..." : "Add Product"}
        </Button>
      </Form>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Title Az</th>
            <th>Title En</th>
            <th>Desc En</th>
            <th>desc Az</th>



            <th>SubCategory</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>{product.title.en}</td>

              <td>{product.title.az}</td>
              <td>{product.description.en}</td>
              <td>{product.description.az}</td>

              <td>{product.category.name.az}</td>
              <td>{product.price}</td>
              <td><img width={60} src={product.coverImage} alt="" /></td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteProduct(product._id)} disabled={isDeleting}>
                  {isDeleting ? "Deleting..." : "Delete"}
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