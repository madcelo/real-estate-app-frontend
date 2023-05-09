import React, { useState } from "react";

const ContactPage = () => {
  // Define the state for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // This function will be called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send an email using a backend API or a third-party service
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Our Address</h2>
        <p>123 Main Street</p>
        <p>City, State 12345</p>
        <p>Country</p>
      </div>
    </div>
  );
};

export default ContactPage;