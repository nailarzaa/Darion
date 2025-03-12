import React, { useContext, useEffect, useRef, useState } from 'react'
import ApiContext from '../context/ApiContext'
import axios from 'axios';
import Swal from 'sweetalert2';

const HeroSectionDashboard = () => {
  const [endPoint] = useContext(ApiContext);
  const [threeCard, setThreeCard] = useState([]);
  const [alert, setAlert] = useState(null)
  const titleAzRef = useRef();
  const titleEnRef = useRef();
  const imageRef = useRef();
  const urlRef = useRef()


  useEffect(() => {
    fetchThreeImages()
  }, [])

  // GET DATA PART
  const fetchThreeImages = async () => {
    try {
      const response = await axios.get(`${endPoint}/threeImage`);
    } catch (error) {
      console.error("Error fetching three images data:", error)
    }
  }

  // POST DATA PART
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      title: { az: titleAzRef.current.value, en: titleEnRef.current.value },
      image: imageRef.current.value,
      url: urlRef.current.value
    }
    try {
      const response = await axios.post(`${endPoint}/threeImage`, requestData, {
        headers: { "Content-Type": "application/json" }
      });
      console.log("API Response:", response.data);
      setAlert("Data succesfully sent!");
      fetchThreeImages();

    } catch (error) {
      console.error("Error:", error);
      setAlert("Something went wrong!");
    }

  }

  // DELETE DATA PART
  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel"
    })
  }

  return (
    <div></div>
  )
}

export default HeroSectionDashboard