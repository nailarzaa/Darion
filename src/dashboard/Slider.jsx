import React, { useState, useRef } from "react";
import {
  useGetSlidersQuery,
  useAddSliderMutation,
  useDeleteSliderMutation,
  useUpdateSliderMutation,
} from "../tools/services/sliderApi";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  const { data: sliderData, isLoading, isError } = useGetSlidersQuery();
  const [addSlider] = useAddSliderMutation();
  const [deleteSlider] = useDeleteSliderMutation();
  const [updateSlider] = useUpdateSliderMutation();

  const titleAzRef = useRef();
  const titleEnRef = useRef();
  const descAzRef = useRef();
  const descEnRef = useRef();
  const imageRef = useRef();

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    title: { az: "", en: "" },
    description: { az: "", en: "" },
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSlider = {
      title: { az: titleAzRef.current.value, en: titleEnRef.current.value },
      description: { az: descAzRef.current.value, en: descEnRef.current.value },
      image: imageRef.current.value,
    };

    try {
      await addSlider(newSlider);
      Swal.fire("Success", "Slider added successfully!", "success");
    } catch (error) {
      Swal.fire("Error", "Failed to add slider!", "error");
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
      try {
        await deleteSlider(id);
        Swal.fire("Deleted!", "Slider has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error", "Failed to delete slider!", "error");
      }
    }
  };

  const handleEditSubmit = async () => {
    if (!editId) return;

    try {
      await updateSlider({ id: editId, updatedSlider: editData });
      setEditId(null);
      Swal.fire("Success", "Slider updated successfully!", "success");
    } catch (error) {
      Swal.fire("Error", "Failed to update slider!", "error");
    }
  };

  const handleEditClick = (item) => {
    setEditId(item._id);
    setEditData({
      title: { az: item.title.az, en: item.title.en },
      description: { az: item.description.az, en: item.description.en },
      image: item.image,
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Slider</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-3">
          <div className="col-md-6">
            <input ref={titleEnRef} type="text" placeholder="Title En" className="form-control" />
          </div>
          <div className="col-md-6">
            <input ref={titleAzRef} type="text" placeholder="Title Az" className="form-control" />
          </div>
          <div className="col-md-6">
            <input ref={descEnRef} type="text" placeholder="Description En" className="form-control" />
          </div>
          <div className="col-md-6">
            <input ref={descAzRef} type="text" placeholder="Description Az" className="form-control" />
          </div>
          <div className="col-md-12">
            <input ref={imageRef} type="text" placeholder="Image URL" className="form-control" />
          </div>
        </div>
        <button type="submit" className="btn btn-dark mt-3">add item</button>
      </form>

      <h2>Slider List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p className="text-danger">Error loading data</p>
      ) : (
        <table className="table table-bordered table-hover mt-3">
          <thead className="table-dark">
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
            {sliderData?.map((item) => (
              <tr key={item._id}>
                <td>
                  {editId === item._id ? (
                    <input
                      value={editData.title.en}
                      onChange={(e) => setEditData({ ...editData, title: { ...editData.title, en: e.target.value } })}
                      className="form-control"
                    />
                  ) : (
                    item.title.en
                  )}
                </td>
                <td>
                  {editId === item._id ? (
                    <input
                      value={editData.title.az}
                      onChange={(e) => setEditData({ ...editData, title: { ...editData.title, az: e.target.value } })}
                      className="form-control"
                    />
                  ) : (
                    item.title.az
                  )}
                </td>
                <td>
                  {editId === item._id ? (
                    <input
                      value={editData.description.en}
                      onChange={(e) => setEditData({ ...editData, description: { ...editData.description, en: e.target.value } })}
                      className="form-control"
                    />
                  ) : (
                    item.description.en
                  )}
                </td>
                <td>
                  {editId === item._id ? (
                    <input
                      value={editData.description.az}
                      onChange={(e) => setEditData({ ...editData, description: { ...editData.description, az: e.target.value } })}
                      className="form-control"
                    />
                  ) : (
                    item.description.az
                  )}
                </td>
                <td>
                  <img src={item.image} width="100" alt="Slider" className="img-thumbnail" />
                </td>
                <td className="d-flex">
                  {editId === item._id ? (
                    <button className="btn btn-success btn-sm me-2" onClick={handleEditSubmit}>
                      <i className="fa-solid fa-floppy-disk"></i>
                    </button>
                  ) : (
                    <button className="btn btn-warning btn-sm ms-2 " onClick={() => handleEditClick(item)}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  )}
                  <button className="btn btn-danger btn-sm mx-2" onClick={() => handleDelete(item._id)}>
                  <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Slider;
