import React, { useState } from 'react';
import { Button, Table, Form, Modal } from 'react-bootstrap';
import {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from '../tools/services/categoryApi';

const CategoryDashboard = () => {
  const { data, isLoading, refetch } = useGetCategoriesQuery();
  const categories = data?.categories || [];

  const [addCategory] = useAddCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({
    name: '',
    image: '',
    slug: '',
  });

  const handleAddOrUpdateCategory = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await updateCategory({ id: currentCategory._id, ...currentCategory }).unwrap();
      } else {
        await addCategory(currentCategory).unwrap();
      }
      setShowModal(false);
      setCurrentCategory({ name: '', image: '', slug: '' });
      refetch();
    } catch (error) {
      console.error('Failed to save category:', error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(id).unwrap();
      refetch();
    } catch (error) {
      console.error('Failed to delete category:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  console.log(data)

  return (
    <div>
      <h2>Categories</h2>
      <Button onClick={() => setShowModal(true)}>Add Category</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Slug</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td><img width={60} src={category.image} alt="" /></td>
              <td>{category.slug}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => {
                    setCurrentCategory(category);
                    setEditMode(true);
                    setShowModal(true);
                  }}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDeleteCategory(category._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit Category' : 'Add Category'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddOrUpdateCategory}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentCategory.name}
                onChange={(e) =>
                  setCurrentCategory({
                    ...currentCategory,
                    name: e.target.value,
                  })
                }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={currentCategory.image}
                onChange={(e) => setCurrentCategory({ ...currentCategory, image: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Slug</Form.Label>
              <Form.Control
                type="text"
                value={currentCategory.slug}
                onChange={(e) => setCurrentCategory({ ...currentCategory, slug: e.target.value })}
                required
              />
            </Form.Group>
            <Button type="submit">{editMode ? 'Update' : 'Add'}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CategoryDashboard;