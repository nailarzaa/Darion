import React, { useState } from 'react';
import { useGetSubCategoriesQuery, useAddSubCategoryMutation, useDeleteSubCategoryMutation } from '../tools/services/subcategoryApi';
import { useGetCategoriesQuery } from '../tools/services/categoryApi'; // Add this hook
import { Button, Table, Form } from 'react-bootstrap';

const SubCategoryDashboard = () => {
  const { data: subCategories, isLoading } = useGetSubCategoriesQuery();
  const { data: categories, isLoading: isCategoriesLoading } = useGetCategoriesQuery();
  const [addSubCategory] = useAddSubCategoryMutation();
  const [deleteSubCategory] = useDeleteSubCategoryMutation();

  const [newSubCategory, setNewSubCategory] = useState({
    name: { en: '', az: '' },
    slug: '',
    count: '', 
    category: '', 
  });

  const handleAddSubCategory = async (e) => {
    e.preventDefault();
    try {
      await addSubCategory(newSubCategory).unwrap();
      setNewSubCategory({ name: { en: '', az: '' }, slug: '', count: '0', category: '' });
    } catch (error) {
      console.error('Failed to add subcategory:', error);
    }
  };

  const handleDeleteSubCategory = async (id) => {
    try {
      await deleteSubCategory(id).unwrap();
    } catch (error) {
      console.error('Failed to delete subcategory:', error);
    }
  };

  if (isLoading || isCategoriesLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Subcategories</h2>
      <Form onSubmit={handleAddSubCategory}>
        <Form.Group>
          <Form.Label>English Name</Form.Label>
          <Form.Control
            type="text"
            value={newSubCategory.name.en}
            onChange={(e) => setNewSubCategory({ ...newSubCategory, name: { ...newSubCategory.name, en: e.target.value } })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Azerbaijani Name</Form.Label>
          <Form.Control
            type="text"
            value={newSubCategory.name.az}
            onChange={(e) => setNewSubCategory({ ...newSubCategory, name: { ...newSubCategory.name, az: e.target.value } })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Slug</Form.Label>
          <Form.Control
            type="text"
            value={newSubCategory.slug}
            onChange={(e) => setNewSubCategory({ ...newSubCategory, slug: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Count</Form.Label>
          <Form.Control
            type="text"
            value={newSubCategory.count}
            onChange={(e) => setNewSubCategory({ ...newSubCategory, count: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={newSubCategory.category}
            onChange={(e) => setNewSubCategory({ ...newSubCategory, category: e.target.value })}
            required
          >
            <option value="">Select a category</option>
            {/* {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name.en}
              </option>
            ))} */}
          </Form.Control>
        </Form.Group>
        <Button type="submit">Add Subcategory</Button>
      </Form>

      {/* <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name (English)</th>
            <th>Name (Azerbaijani)</th>
            <th>Slug</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subCategories?.map((subCategory) => (
            <tr key={subCategory._id}>
              <td>{subCategory.name.en}</td>
              <td>{subCategory.name.az}</td>
              <td>{subCategory.slug}</td>
              <td>{subCategory.count}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteSubCategory(subCategory._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </div>
  );
};

export default SubCategoryDashboard;