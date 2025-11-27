import React, { useState } from "react";
import { sendContactEmail } from "../../services/emailService";
import { toast } from "react-toastify";
import ArrowBlueButton from "../buttons/arrow_blue/ArrowBlueButton";
import "./contactForm.css";

const ContactForm = ({ title, className }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { name: "", email: "", message: "" };
    let valid = true;

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

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
        {errors.name && <div className="form-error">{errors.name}</div>}
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="email"
          placeholder="email"
          className="contacts__form-field"
        />
        {errors.email && <div className="form-error">{errors.email}</div>}
        <input
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          type="text"
          placeholder="message"
          className="contacts__form-field"
        />
        {errors.message && <div className="form-error">{errors.message}</div>}
        <ArrowBlueButton text={"Send"} />
      </form>
    </div>
  );
};

export default ContactForm;
