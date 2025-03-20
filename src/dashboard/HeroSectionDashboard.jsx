import React, { useRef, useState } from "react";
import { useGetThreeImagesQuery, useAddThreeImageMutation, useUpdateThreeImageMutation, useDeleteThreeImageMutation } from "../tools/services/threeImageApi";
import Swal from "sweetalert2";

const HeroSectionDashboard = () => {
  const { data: threeCard = [], isLoading, isError } = useGetThreeImagesQuery();
  const [addThreeImage] = useAddThreeImageMutation();
  const [updateThreeImage] = useUpdateThreeImageMutation();
  const [deleteThreeImage] = useDeleteThreeImageMutation();

  const titleAzRef = useRef();
  const titleEnRef = useRef();
  const imageRef = useRef();
  const urlRef = useRef();

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState(null);

  // ✅ Add New Image
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newImage = {
      title: { az: titleAzRef.current.value, en: titleEnRef.current.value },
      image: imageRef.current.value,
      url: urlRef.current.value,
    };

    try {
      await addThreeImage(newImage).unwrap();
      Swal.fire("Success", "Data successfully added!", "success");

      titleAzRef.current.value = "";
      titleEnRef.current.value = "";
      imageRef.current.value = "";
      urlRef.current.value = "";
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (confirmDelete.isConfirmed) {
      await deleteThreeImage(id);
      Swal.fire("Deleted!", "Item has been deleted.", "success");
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
      title: {
        ...prev.title,
        [name.includes("title.az") ? "az" : "en"]: value,
      },
      [name]: value,
    }));
  };

  const handleEditSubmit = async () => {
    if (!editId) return;

    try {
      await updateThreeImage({ id: editId, updatedData: editData }).unwrap();
      setEditId(null);
      setEditData(null);
      Swal.fire("Success", "Data successfully updated!", "success");
    } catch (error) {
      Swal.fire("Error", "Update failed!", "error");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Three Cards Item</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Title En</label>
          <input ref={titleEnRef} type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Title Az</label>
          <input ref={titleAzRef} type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Url</label>
          <input ref={urlRef} type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Image URL</label>
          <input ref={imageRef} type="text" className="form-control" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-dark">add item</button>
        </div>
      </form>

      <h2 className="mt-5">Slider List</h2>
      {isLoading ? <p>Loading...</p> : isError ? <p>Error loading data</p> : (
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Title En</th>
              <th>Title Az</th>
              <th>Url</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {threeCard.map((item) => (
              <tr key={item._id}>
                <td>{editId === item._id ? <input name="title.en" className="form-control" value={editData?.title.en || ""} onChange={handleEditChange} /> : item.title.en}</td>
                <td>{editId === item._id ? <input name="title.az" className="form-control" value={editData?.title.az || ""} onChange={handleEditChange} /> : item.title.az}</td>
                <td>{editId === item._id ? <input name="url" className="form-control" value={editData?.url || ""} onChange={handleEditChange} /> : item.url}</td>
                <td><img style={{width:'120px', height:'70px', objectFit:"cover"}} src={item.image} alt={item.title.en} className="img-fluid" width="100" /></td>
                <td>
                  {editId === item._id ? (
                    <button className="btn btn-success" onClick={handleEditSubmit}>Save</button>
                  ) : (
                    <button className="btn btn-warning me-2" onClick={() => handleEditClick(item)}>Edit</button>
                  )}
                  <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HeroSectionDashboard;
