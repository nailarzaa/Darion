import React, { useContext, useRef, useState, useEffect } from 'react';
import  ApiContext  from '../context/ApiContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const SliderPage = () => {
    const [endPoint] = useContext(ApiContext);
    const [sliderData, setSliderData] = useState([]);
    const titleAzRef = useRef();
    const titleEnRef = useRef();
    const descAzRef = useRef();
    const descEnRef = useRef();
    const imageRef = useRef();
    const [alert, setAlert] = useState(null);
    const [editId, setEditId] = useState(null); 
    const [editData, setEditData] = useState({ title: { az: "", en: "" }, description: { az: "", en: "" }, image: "" });

    useEffect(() => {
        fetchSliderData();
    }, []);

    const fetchSliderData = async () => {
        try {
            const response = await axios.get(`${endPoint}/slider`);
            setSliderData(response.data);
        } catch (error) {
            console.error("Error fetching slider data:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const requestData = {
            title: { az: titleAzRef.current.value, en: titleEnRef.current.value },
            description: { az: descAzRef.current.value, en: descEnRef.current.value },
            image: imageRef.current.value
        };
    
        try {
            const response = await axios.post(`${endPoint}/slider`, requestData, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("API Response:", response.data);
            setAlert("Data successfully sent!");
            fetchSliderData();
        } catch (error) {
            console.error("Error:", error);
            setAlert("Something went wrong!");
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = await Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel"
        });

        if (confirmDelete.isConfirmed) {
            try {
                await axios.delete(`${endPoint}/slider/${id}`);
                setSliderData(sliderData.filter(item => item._id !== id));
                Swal.fire("Deleted!", "Your slider item has been deleted.", "success");
            } catch (error) {
                console.error("Error deleting item:", error);
                Swal.fire("Error", "Could not delete the item!", "error");
            }
        }
    };

    const handleEditClick = (item) => {
        setEditId(item._id);
        setEditData({ ...item });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData((prev) => ({
            ...prev,
            [name.includes("title") ? "title" : name.includes("description") ? "description" : "image"]: {
                ...prev[name.includes("title") ? "title" : name.includes("description") ? "description" : "image"],
                [name.includes("az") ? "az" : "en"]: value
            }
        }));
    };

    const handleEditSubmit = async () => {
        try {
            const payload = {
                title: { az: editData.title.az, en: editData.title.en },
                description: { az: editData.description.az, en: editData.description.en },
                image: editData.image,
            };
    
            console.log("Sending PUT request:", payload);
    
            await axios.put(`${endPoint}/slider/${editId}`, payload, {
                headers: { "Content-Type": "application/json" }
            });
    
            setEditId(null);
            fetchSliderData(); // Refresh data
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container p-5">
                    <div className="mb-3">
                        <label className="form-label">Title En</label>
                        <input ref={titleEnRef} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title Az</label>
                        <input ref={titleAzRef} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description En</label>
                        <input ref={descEnRef} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description Az</label>
                        <input ref={descAzRef} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input ref={imageRef} type="text" className="form-control" placeholder="Paste image link here" />
                    </div>
                    {alert && <div className="alert alert-info">{alert}</div>}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

            <div className="container mt-5">
                <h2>Slider List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title En</th>
                            <th>Title Az</th>
                            <th>Description En</th>
                            <th>Description Az</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sliderData.length > 0 ? (
                            sliderData.map((item) => (
                                <tr key={item._id}>
                                    <td>
                                        {editId === item._id ? (
                                            <input
                                                type="text"
                                                name="title.en"
                                                value={editData.title.en}
                                                onChange={handleEditChange}
                                            />
                                        ) : (
                                            item.title.en
                                        )}
                                    </td>
                                    <td>
                                        {editId === item._id ? (
                                            <input
                                                type="text"
                                                name="title.az"
                                                value={editData.title.az}
                                                onChange={handleEditChange}
                                            />
                                        ) : (
                                            item.title.az
                                        )}
                                    </td>
                                    <td>
                                        {editId === item._id ? (
                                            <input
                                                type="text"
                                                name="description.en"
                                                value={editData.description.en}
                                                onChange={handleEditChange}
                                            />
                                        ) : (
                                            item.description.en
                                        )}
                                    </td>
                                    <td>
                                        {editId === item._id ? (
                                            <input
                                                type="text"
                                                name="description.az"
                                                value={editData.description.az}
                                                onChange={handleEditChange}
                                            />
                                        ) : (
                                            item.description.az
                                        )}
                                    </td>
                                    <td>
                                        {editId === item._id ? (
                                            <input
                                                type="text"
                                                name="image"
                                                value={editData.image}
                                                onChange={handleEditChange}
                                            />
                                        ) : (
                                            <img src={item.image} alt={item.title.en} width="100" height="60"style={{objectFit:"cover"}} />
                                        )}
                                    </td>
                                    <td >
                                        {editId === item._id ? (
                                            <button className="btn btn-success" onClick={handleEditSubmit}>Save</button>
                                        ) : (
                                            <>
                                               <div className='d-flex  '>
                                               <button className="btn btn-warning mx-2 " onClick={() => handleEditClick(item)}><i className="fa-solid fa-pen-to-square"></i></button>
                                               <button className="btn btn-danger mx-2 " onClick={() => handleDelete(item._id)}><i className="fa-solid fa-trash"></i></button>
                                               </div>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No slider items found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SliderPage;