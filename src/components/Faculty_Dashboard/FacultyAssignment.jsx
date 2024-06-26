import React, { useState, useEffect } from "react";
import axios from "axios";
import AssignmentCheck from "./AssignmentCheck";
import { useUser } from "../../context/UserContext";
import { API_URL } from "../../constants";
import { toast } from "react-toastify";

const API = `${API_URL}/api/assignments`;

const FacultyAssignment = () => {
  const { userData } = useUser(); // Note the parentheses to invoke useUser hook
  const [assignments, setAssignments] = useState([]);
  const [formData, setFormData] = useState({
    section: "",
    title: "",
    description: "",
    dueDate: "",
    userId: userData._id, // Add userId to formData
  });
  const [editingAssignmentId, setEditingAssignmentId] = useState(null);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = () => {
    axios
      .get(API, {
        params: {
          userId: userData._id,
        },
      })
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingAssignmentId) {
      // Update existing assignment
      axios
        .put(`${API}/${editingAssignmentId}`, {
          ...formData,
          userId: userData._id,
        })
        .then(() => {
          fetchAssignments();
          resetForm();
          toast.success("Assignment updated successfully");
        })
        .catch((error) => {
          console.error("Error updating assignment:", error);
          toast.error("Failed to update assignment. Please try again later.");
        });
    } else {
      // Add new assignment
      axios
        .post(API, { ...formData, userId: userData._id })
        .then(() => {
          fetchAssignments();
          resetForm();
          toast.success("Assignment added successfully");
        })
        .catch((error) => {
          console.error("Error adding assignment:", error);
          toast.error("Failed to update assignment. Please try again later.");
        });
    }
  };

  const handleEdit = (assignment) => {
    setFormData({
      section: assignment.section,
      title: assignment.title,
      description: assignment.description,
      dueDate: assignment.dueDate,
      userId: userData._id,
    });
    setEditingAssignmentId(assignment._id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/${id}`, {
        data: { userId: userData._id },
      })
      .then(() => {
        fetchAssignments();
        resetForm();
        toast.warn("Assignment deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting assignment:", error);
        toast.error("Failed to delete assignment. Please try again later.");
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      section: "",
      title: "",
      description: "",
      dueDate: "",
      userId: userData._id,
    });
    setEditingAssignmentId(null);
  };

  // Filter assignments based on userId
  const filteredAssignments = assignments.filter(
    (assignment) => assignment.userId === userData._id
  );

  return (
    <div className="container margin-top-bottom col-lg-8 ">
      <h2 className="m-5 display-6 text-center">Add/Edit Assignments</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <input
            type="text"
            className="form-control"
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn my-btn2 mt-2 text-center">
          {editingAssignmentId ? "Update" : "Submit"}
        </button>
        {editingAssignmentId && (
          <button
            type="button"
            className="btn my-btn2 m-2 mt-3"
            style={{ backgroundColor: "#677583" }}
            onClick={resetForm}
          >
            Cancel
          </button>
        )}
      </form>
      {/* Current Assignments */}
      <h2 className="m-5 display-6 text-center">Current Assignments</h2>
      {filteredAssignments.length === 0 ? (
        <p className="fs-5 m-5 text-center animated-text margin-top-bottom">
          Add your Assignments
        </p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered text-center">
            <thead>
              <tr>
                <th>Section</th>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssignments.map((assignment) => (
                <tr key={assignment._id}>
                  <td>{assignment.section}</td>
                  <td>{assignment.title}</td>
                  <td>{assignment.description}</td>
                  <td>{assignment.dueDate}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm px-4 m-2"
                      onClick={() => handleEdit(assignment)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm px-3 m-2"
                      onClick={() => handleDelete(assignment._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <AssignmentCheck assignments={assignments} />
    </div>
  );
};

export default FacultyAssignment;
