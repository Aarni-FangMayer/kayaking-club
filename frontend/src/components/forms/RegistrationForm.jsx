import React, { useState } from "react";
import ArrowBlueButton from "../buttons/arrow_blue/ArrowBlueButton";
import "./registrationForm.css";

const RegistrationForm = ({ title, subbutton, registerUser, className }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = { name: "", email: "", phone: "", password: "" };
    let valid = true;

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (phone) {
      const digitsOnly = phone.replace(/\D/g, ""); // оставляем только цифры
      if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        newErrors.phone = "Phone must be 10-15 digits";
        valid = false;
      }
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      registerUser({
        username: name,
        email,
        phone,
        password,
        role: "user",
      });

      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className={`registration__form-block ${className || ""}`}>
      <h3 className="registration__form-title" onSubmit={registerUser}>
        {title}
      </h3>
      <form onSubmit={handleSubmit} className="registration__form">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="registration__form-field"
        />
        {errors.name && <div className="form-error">{errors.name}</div>}
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="registration__form-field"
        />
        {errors.email && <div className="form-error">{errors.email}</div>}
        <input
          type="tel"
          placeholder="phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="registration__form-field"
        />
        {errors.phone && <div className="form-error">{errors.phone}</div>}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="registration__form-field"
        />
        {errors.password && <div className="form-error">{errors.password}</div>}
        {subbutton ? (
          <button type="submit" className="subbutton">
            {subbutton}
          </button>
        ) : (
          <ArrowBlueButton text={"Join us"} />
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
