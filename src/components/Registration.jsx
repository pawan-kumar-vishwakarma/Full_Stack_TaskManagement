import React, { useState } from "react";
import axios from "axios";
import './Registration.css';

const Registration = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContactNumber] = useState("");
    const [collageId, setCollageId] = useState("");
    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState("");

    const signIn = async (e) => {
        e.preventDefault();

        if (!name || !email || !contact || !collageId) {
            alert("Please fill the data in form");
            return;
        }

        const studentLoad = {
            name : name,
            email : email,
            contactNumber : contact
        };
        
        try {
            const response = await axios.post(
                `http://localhost:8080/api/students/add/${collageId}`, 
                studentLoad
            );
            if (response.status === 201)  {
                setMessage("Student Registered Successfully");

                setUserData({
                    finalName: name,
                    finalCollageId: collageId,
                    finalEmail: email,
                    finalContact: contact
                })

                setName("");
                setEmail("");
                setContactNumber("");
                setCollageId("");
            }

         } catch (error) {
            console.log("something went wrong ", error);
            const errorMsg = error.response?.data?.message || "Error connecting to server";
            setMessage("Failed: " + errorMsg);
        }

    }

    return (
        <div className="main-container">
            <div className="container">
      <h1>Registration form</h1>
      {message && <div className="status-banner">{message}</div>}
      <form action="" onSubmit={signIn}>
        <div className="input-field">
            <label>Full Name:</label>
          <input type="text"
          name='userName'
          placeholder='Enter full name'
          value={name}
          onChange={(e) => setName(e.target.value)}
           />
        </div>

        <div className="input-field">
            <label>Collage Id:</label>
          <input type="number"
          name='Collage Id'
          placeholder='Enter College Id'
          value={collageId}
          onChange={(e) => setCollageId(e.target.value)}
           />
        </div>

        <div className="input-field">
            <label>Email:</label>
          <input type="text"
          name='email'
          placeholder='Enter gmail' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field">
            <label>Contact Number:</label>
            <input type="text"
            name="contact"
            placeholder="Enter contact number"
            value={contact}
            onChange={(e) => setContactNumber(e.target.value)}
            />
        </div>

        <button type='submit' className="submit-btn">Submit</button>
      </form>
<br />
      {userData && (
        <div className="final-data">
            <p><b>Name:</b> {userData.finalName}</p>
            <p><b>College Id:</b> {userData.finalCollageId}</p>
            <p><b>Email:</b> {userData.finalEmail}</p>
            <p><b>Contact:</b> {userData.finalContact}</p>
        </div>
      )}

    </div>
    </div>
    );
}

export default Registration;