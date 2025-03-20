import React, { useState } from 'react';
import { Button, Table, Form, Modal } from 'react-bootstrap';
import {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from '../tools/services/categoryApi';

const CategoryDashboard = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const [addCategory] = useAddCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({
    name: { en: '', az: '' },
    image: '',
    slug: '',
  });

  const handleAddOrUpdateCategory = async (e) => {
    e.preventDefault();
    if (editMode) {
      await updateCategory({ id: currentCategory._id, ...currentCategory }).unwrap();
    } else {
      await addCategory(currentCategory).unwrap();
    }
    setShowModal(false);
    setCurrentCategory({ name: { en: '', az: '' }, image: '', slug: '' });
  };

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id).unwrap();
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Categories</h2>
      <Button onClick={() => setShowModal(true)}>Add Category</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name (English)</th>
            <th>Name (Azerbaijani)</th>
            <th>Image</th>
            <th>Slug</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category) => (
            <tr key={category._id}>
              <td>{category.name.en}</td>
              <td>{category.name.az}</td>
              <td>{category.image}</td>
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
              <Form.Label>English Name</Form.Label>
              <Form.Control
                type="text"
                value={currentCategory.name.en}
                onChange={(e) =>
                  setCurrentCategory({
                    ...currentCategory,
                    name: { ...currentCategory.name, en: e.target.value },
                  })
                }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Azerbaijani Name</Form.Label>
              <Form.Control
                type="text"
                value={currentCategory.name.az}
                onChange={(e) =>
                  setCurrentCategory({
                    ...currentCategory,
                    name: { ...currentCategory.name, az: e.target.value },
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