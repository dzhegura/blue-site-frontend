import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправка данных:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Форма с пунктирными линиями */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="contact-text">
            If it would be interesting to collaborate, I'm{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="........................."
              required
            />{" "}
            My e-mail{" "}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="........................................"
              required
            />{" "}
            and my phone number is{" "}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="............................"
            />
            . Here is my message{" "}
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="........................................"
              required
            />
            .
          </p>

          <button type="submit" className="send-button">Send</button>
        </form>

        {/* Контактная информация */}
        <div className="contact-info">
          <p><strong>Kirill Kozlitin</strong></p>
          <p><a href="mailto:kirill.kozlitin@gmail.com">kirill.kozlitin@gmail.com</a></p>
          <p><a href="tel:+79112168889">+7(911)216-88-89</a></p>
          <p>Saint Petersburg, Russia</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
