import React, { useState, useEffect } from 'react';
import { useGetSubCategoriesQuery, useAddSubCategoryMutation, useDeleteSubCategoryMutation } from '../tools/services/subcategoryApi';
import { useGetCategoriesQuery } from '../tools/services/categoryApi';
import { Button, Table, Form, Modal } from 'react-bootstrap';

const SubCategoryDashboard = () => {
  const { data: subCategoriesData, isLoading, refetch: refetchSubCategories } = useGetSubCategoriesQuery();
  const { data: categoryData, isLoading: isCategoriesLoading } = useGetCategoriesQuery();
  const [addSubCategory] = useAddSubCategoryMutation();
  const [deleteSubCategory] = useDeleteSubCategoryMutation();

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentSubCategory, setCurrentSubCategory] = useState({
    name: { en: '', az: '' },
    slug: '',
    count: '',
    category: '',
  });

  const handleAddOrUpdateSubCategory = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await updateSubCategory({ id: currentSubCategory._id, ...currentSubCategory }).unwrap();
      } else {
        await addSubCategory(currentSubCategory).unwrap();
      }
      setShowModal(false);
      setCurrentSubCategory({ name: { en: '', az: '' }, slug: '', count: '', category: '' });
      refetchSubCategories(); // Refresh the list
    } catch (error) {
      console.error('Failed to save subcategory:', error);
    }
  };

  const handleDeleteSubCategory = async (id) => {
    try {
      await deleteSubCategory(id).unwrap();
      refetchSubCategories(); // Refresh the list
    } catch (error) {
      console.error('Failed to delete subcategory:', error);
    }
  };

  if (isLoading || isCategoriesLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Subcategories</h2>
      <button className='btn btn-dark mb-4' onClick={() => setShowModal(true)}>Add Subcategory</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name (English)</th>
            <th>Name (Azerbaijani)</th>
            <th>Slug</th>
            <th>Count</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subCategoriesData?.subCategories?.map((subCategory) => {
            const category = categoryData?.categories?.find((cat) => cat._id === subCategory.category);
            return (
              <tr key={subCategory._id}>
                <td>{subCategory.name.en}</td>
                <td>{subCategory.name.az}</td>
                <td>{subCategory.slug}</td>
                <td>{subCategory.count}</td>
                <td>{category?.name.en}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => {
                      setCurrentSubCategory(subCategory);
                      setEditMode(true);
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button className='mx-2' variant="danger" onClick={() => handleDeleteSubCategory(subCategory._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit Subcategory' : 'Add Subcategory'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddOrUpdateSubCategory}>
            <Form.Group>
              <Form.Label>English Name</Form.Label>
              <Form.Control
                type="text"
                value={currentSubCategory.name.en}
                onChange={(e) =>
                  setCurrentSubCategory({
                    ...currentSubCategory,
                    name: { ...currentSubCategory.name, en: e.target.value },
                  })
                }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Azerbaijani Name</Form.Label>
              <Form.Control
                type="text"
                value={currentSubCategory.name.az}
                onChange={(e) =>
                  setCurrentSubCategory({
                    ...currentSubCategory,
                    name: { ...currentSubCategory.name, az: e.target.value },
                  })
                }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Slug</Form.Label>
              <Form.Control
                type="text"
                value={currentSubCategory.slug}
                onChange={(e) => setCurrentSubCategory({ ...currentSubCategory, slug: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Count</Form.Label>
              <Form.Control
                type="text"
                value={currentSubCategory.count}
                onChange={(e) => setCurrentSubCategory({ ...currentSubCategory, count: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={currentSubCategory.category}
                onChange={(e) => setCurrentSubCategory({ ...currentSubCategory, category: e.target.value })}
                required
              >
                <option value="">Select a category</option>
                {categoryData?.categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant='dark mt-2' type="submit">{editMode ? 'Update' : 'Add'}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SubCategoryDashboard;