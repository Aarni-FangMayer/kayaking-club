import React, { useState } from "react";
import ArrowBlueButton from "../buttons/arrow_blue/ArrowBlueButton";
import "./loginForm.css";

const LoginForm = ({
  title,
  subbutton,
  handleLogin,
  username,
  setUsername,
  password,
  setPassword,
  subtitle,
  className,
}) => {
  const [errors, setErrors] = useState({ username: "", password: "" });

  const onSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (!username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      handleLogin(event);
    }
  };

  return (
    <div className={`registration__form-block ${className || ""}`}>
      <h3 className="registration__form-title">{title}</h3>
      <div className="new-registered-user__subtitle">{subtitle}</div>
      <form onSubmit={onSubmit} action="" className="registration__form">
        <input
          type="text"
          placeholder="name"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          className="registration__form-field"
        />
        {errors.username && <div className="form-error">{errors.username}</div>}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
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

export default LoginForm;
