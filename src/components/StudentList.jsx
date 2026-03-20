import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentList.css";
import DeleteStudent from "./DeleteStudent";

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [searchId, setSearchId] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);
    
    const removeStudentFromUI = (id) => {
    setFilteredStudents(prev => prev.filter(student => student.id !== id));
};

    const fetchStudents = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/students/all");
            setStudents(response.data);
            setFilteredStudents(response.data);
        } catch (error) {
            console.error("Error fetching students", error);
        }
    };

    const handleSearch = () => {
        if (!searchId) {
            setFilteredStudents(students);
            return;
        }
        const result = students.filter(s => s.collage?.collageid === parseInt(searchId));
        setFilteredStudents(result);
    };

    return (
        <div className="list-container">
            <h2>Student Directory</h2>
            
            <div className="search-bar">
                <input 
                    type="number" 
                    placeholder="Enter College ID to filter" 
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <button onClick={handleSearch}>Filter by College</button>
                <button onClick={() => {setSearchId(""); setFilteredStudents(students);}}>Reset</button>
            </div>

            <table className="student-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>College ID</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.contactNumber}</td>
                            <td>{student.collageId !== null && student.collageId !== undefined 
                                    ? student.collageId : "No College"}</td>
                            <td><DeleteStudent studentId={student.id} onDeleteSuccess={removeStudentFromUI} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;