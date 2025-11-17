import React, { useState } from 'react'
import ArrowBlueButton from '../buttons/arrow_blue/ArrowBlueButton'
import './registrationForm.css'

const RegistrationForm = ({ title, subbutton, registerUser, className  }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    registerUser({
      username: name,
      email,
      phone,
      password,
      role: "user"
    });
  };

  return (
    <div className={`registration__form-block ${className || ""}`}>
        <h3 className="registration__form-title" onSubmit={registerUser}>{title}</h3>
        <form onSubmit={handleSubmit} className="registration__form">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="registration__form-field"
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="registration__form-field"
          />
          <input
            type="tel"
            placeholder="phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="registration__form-field"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="registration__form-field"
          />
          {subbutton ? <button type='submit' className="subbutton">{subbutton}</button> : <ArrowBlueButton text={"Join us"} />}
        </form>
      </div>
  )
}

export default RegistrationForm
