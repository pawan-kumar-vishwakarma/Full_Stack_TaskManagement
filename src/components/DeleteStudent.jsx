import React from "react";
import axios from "axios";

const DeleteStudent = ({ studentId, onDeleteSuccess }) => {
    
    const handleDelete = async () => {
        if (window.confirm(`Are you sure you want to delete Student ID: ${studentId}?`)) {
            try {
                const response = await axios.delete(`http://localhost:8080/api/students/delete/${studentId}`);
                
                if (response.status === 200) {
                    alert("Student deleted successfully!");
                    onDeleteSuccess(studentId);
                }
                
            } catch (error) {
                console.error("Delete failed:", error);
                const errorMsg = error.response?.data?.message || "Network Error: Check if Backend is running";
                alert("Failed to delete: " + errorMsg);
            }
        }
    };

    return (
        <button 
            onClick={handleDelete} 
            className="delete-btn"
            style={{
                backgroundColor: "#de9393",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer"
            }}
        >
            Delete
        </button>
    );
};

export default DeleteStudent;