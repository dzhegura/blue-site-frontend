import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

// Используем API URL из переменной окружения
const API_URL = process.env.REACT_APP_API_URL;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      const response = await axios.post(`${API_URL}/api/send-email`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatusMessage("Error while sending, try again later.");
      }
    } catch (error) {
      setStatusMessage("Server connection error.");
      console.error("Ошибка отправки:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <p>
          If it would be interesting to collaborate, I'm{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=".............................."
            required
          />{" "}
          My e-mail{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="......................................."
            required
          />{" "}
          and my phone number is{" "}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder=".............................."
          />
          Here is my message{" "}
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="..................................................................................."
            size="80"
            required
          />
        </p>

        <button type="submit" className="send-button" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </button>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>

      <div className="contact-info">
        <h3><strong>Contact</strong></h3>
        <p>Kirill Kozlitin,</p>
        <p><a href="mailto:kirill.kozlitin@gmail.com">kirill.kozlitin@gmail.com</a></p>
        <p><a href="tel:+79112168889">+7(911)216-88-89</a></p>
        <p>Saint Petersburg, Russia</p>
      </div>
    </div>
  );
}

export default Contact;
