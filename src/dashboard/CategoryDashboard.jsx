import React, { useContext, useState } from 'react'
import ApiContext from '../context/ApiContext';
import axios from 'axios';

const CategoryDashboard = () => {
  const [endPoint] = useContext(ApiContext);
  const [categoryData, setCategoryData]= useState([]);

  const FetchCategoryData = async () => {
    try {
      const response = await axios.get(`${endPoint}/category`)
    }catch{
      
    }
  }
  return (
    <div>CategoryDashboard</div>
  )
}

export default CategoryDashboard