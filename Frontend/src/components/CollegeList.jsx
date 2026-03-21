import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateCollege from "./UpdateCollege";

const CollageList = () => {
    const [collages, setCollages] = useState([]);
    const [editingCollage, setEditingCollage] = useState("");

    const fetchCollages = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/collage/all");
            setCollages(response.data);
        } catch (error) {
            console.error("Error fetching colleges", error);
        }
    };

    useEffect(() => {
        fetchCollages();
    }, []);

    return (
        <div className="list-container" style={{ padding: "20px" }}>
            <h2>College Directory</h2>

            {editingCollage && (
                <UpdateCollege 
                    college={editingCollage} 
                    onCancel={() => setEditingCollage(null)} 
                    onUpdateSuccess={() => {
                        setEditingCollage(null);
                        fetchCollages();
                    }} 
                />
            )}

            <table className="student-table" border="1" style={{ width: "100%", marginTop: "20px" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f4f4f4" }}>
                        <th>ID</th>
                        <th>College Name</th>
                        <th>City</th>
                        <th>Specification</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {collages.map((c) => (
                        <tr key={c.collageid}>
                            <td>{c.collageid}</td>
                            <td>{c.name}</td>
                            <td>{c.city}</td>
                            <td>{c.specification}</td>
                            <td>
                                <button 
                                    onClick={() => setEditingCollage(c)}
                                    style={{ marginRight: "10px", backgroundColor: "#4caf50", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CollageList;