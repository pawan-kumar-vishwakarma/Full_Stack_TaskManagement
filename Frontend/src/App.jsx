import React, { useState } from 'react';
import './App.css'
import Registration from './components/Registration';
import StudentList from './components/StudentList';
import CollegeList from './components/CollegeList'; 

function App() {
  const [view, setView] = useState("registration");

  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <button onClick={() => setView("registration")}>Add Student</button>
        <button onClick={() => setView("students")}>Student List</button>
        <button onClick={() => setView("colleges")}>College List</button>
      </nav>

      <hr />

      {view === "registration" && <Registration />}
      {view === "students" && <StudentList />}
      {view === "colleges" && <CollegeList />}
    </div>
  );
}

export default App;