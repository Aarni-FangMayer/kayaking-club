import React, { useState } from "react";
import { sendContactEmail } from "../../services/emailService";
import { toast } from "react-toastify";
import ArrowBlueButton from "../buttons/arrow_blue/ArrowBlueButton";
import "./contactForm.css";

const ContactForm = ({ title, className  }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    sendContactEmail(form)
      .then(() => {
        toast.success("Message sent!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message.");
      });
  };

  return (
      <div className={`contacts__form ${className || ""}`}>
        <h3 className="contacts__form-title">{title}</h3>
        <form onSubmit={handleSubmit} className="contacts__form">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            placeholder="name"
            className="contacts__form-field"
          />
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            placeholder="email"
            className="contacts__form-field"
          />
          <input
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            type="text"
            placeholder="message"
            className="contacts__form-field"
          />
          <ArrowBlueButton text={"Send"} />
        </form>
      </div>
  );
};

export default ContactForm;
