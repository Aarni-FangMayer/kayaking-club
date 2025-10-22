import React from 'react'
import ArrowBlueButton from '../buttons/arrow_blue/ArrowBlueButton'
import './loginForm.css'

const LoginForm = ({ title, subbutton, loginAccount, subtitle, className  }) => {
  return (
    <div className={`registration__form-block ${className || ""}`}>
        <h3 className="registration__form-title">{title}</h3>
        <div className="new-registered-user__subtitle">
          {subtitle}
        </div>
        <form action="" className="registration__form">
          <input
            type="text"
            placeholder="name"
            className="registration__form-field"
          />
          <input
            type="email"
            placeholder="email"
            className="registration__form-field"
          />
          <input
            type="password"
            placeholder="password"
            className="registration__form-field"
          />
          {subbutton ? <button onClick={loginAccount} className="subbutton">{subbutton}</button> : <ArrowBlueButton text={"Join us"} />}
          
        </form>
      </div>
  )
}

export default LoginForm
