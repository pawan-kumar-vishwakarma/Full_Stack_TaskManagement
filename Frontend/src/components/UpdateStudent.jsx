import React, { useState } from 'react';
import axios from 'axios';

const UpdateStudent = ({ student, onUpdateSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        id: student.id,
        name: student.name,
        email: student.email,
        contactNumber: student.contactNumber
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/students/update`, formData);
            alert("Student updated successfully!");
            onUpdateSuccess(response.data);
        } catch (error) {
            alert("Update failed. Make sure the email is not a duplicate.");
        }
    };

    return (
        <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
            <h3>Update Student</h3>
            <form onSubmit={handleSubmit}>
                <input name="name" value={formData.name} onChange={handleChange} required /><br/>
                <input name="email" value={formData.email} onChange={handleChange} required /><br/>
                <input name="contactNumber" value={formData.contactNumber} onChange={handleChange} /><br/>
                <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>Update</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateStudent;