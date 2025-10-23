import React, { useState } from "react";
import "./XModal.css";

const XModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal if clicked outside form
  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setIsModalOpen(false);
      resetForm();
    }
  };

  // Handle input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Reset form data
  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
  };

  // Handle submit and validations
  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;

    // if (!username.trim()) {
    //   alert("Please fill out the Username field.");
    //   return;
    // }

    if (!email.trim()) {
      alert("Please fill out the Email field.");
      return;
    }
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

   
    if (!phone.trim()) {
      alert("Please fill out the Phone Number field."); 
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number."); 
      return;
    }

    if (!dob.trim()) {
      alert("Please fill out the Date of Birth field."); 
      return;
    }
    const selectedDate = new Date(dob);
    const today = new Date();
    if (selectedDate > today) {
      alert("Invalid Date of Birth. Date of birth cannot be in the future."); 
      return;
    }
    
    if (!username.trim()) {
      alert("Please fill out the Username field.");
      return;
    }

    alert("Form submitted successfully!");
    setIsModalOpen(false);
    resetForm();
  };

  return (
    <div className="app-container">
      <h1 className="title">User Details Modal</h1>
      {!isModalOpen && (
        <button className="open-btn" onClick={openModal}>
          Open Form
        </button>
      )}

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <label style={{textAlign:"center"}}>Username:</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
              />

              <label style={{textAlign:"center"}}>Email Address:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

              <label style={{textAlign:"center"}}>Phone Number:</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />

              <label style={{textAlign:"center"}}>Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
              />

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;


































