import React, { useState } from "react";
import axios from "axios";

const UpdateCollage = ({ college, onUpdateSuccess, onCancel }) => {
    const [name, setName] = useState(college.name);
    const [city, setCity] = useState(college.city);
    const [spec, setSpec] = useState(college.specification);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedData = {
            collageid: college.collageid,
            name: name,
            city: city,
            specification: spec
        };

        try {
            await axios.put("http://localhost:8080/api/collage/update", updatedData);
            alert("College Updated Successfully!");
            onUpdateSuccess();
        } catch (error) {
            alert("Update failed: " + error.message);
        }
    };

    return (
        <div style={{ padding: "15px", backgroundColor: "#e8f5e9", border: "1px solid #2e7d32", marginBottom: "20px", borderRadius: "8px" }}>
            <h3>Update College Info (ID: {college.collageid})</h3>
            <form onSubmit={handleUpdate}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>City: </label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Specification: </label>
                    <input type="text" value={spec} onChange={(e) => setSpec(e.target.value)} />
                </div>
                <button type="submit" style={{ marginRight: "10px" }}>Save Changes</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateCollage;