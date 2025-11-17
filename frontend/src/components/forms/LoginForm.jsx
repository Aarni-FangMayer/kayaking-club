import React from 'react'
import ArrowBlueButton from '../buttons/arrow_blue/ArrowBlueButton'
import './loginForm.css'

const LoginForm = ({ title, subbutton, handleLogin, username, setUsername, password, setPassword, subtitle, className  }) => {
  return (
    <div className={`registration__form-block ${className || ""}`}>
        <h3 className="registration__form-title">{title}</h3>
        <div className="new-registered-user__subtitle">
          {subtitle}
        </div>
        <form onSubmit={handleLogin} action="" className="registration__form">
          <input
            type="text"
            placeholder="name"
            value={username}
            onChange={({target}) => setUsername(target.value)}
            className="registration__form-field"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={({target}) => setPassword(target.value)}
            className="registration__form-field"
          />
          {subbutton ? <button type='submit' className="subbutton">{subbutton}</button> : <ArrowBlueButton text={"Join us"} />}
          
        </form>
      </div>
  )
}

export default LoginForm
