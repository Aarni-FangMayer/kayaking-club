import React from "react";
import ReactDOM from "react-dom";
import RegistrationForm from "../../forms/RegistrationForm";
import LoginForm from "../../forms/LoginForm";
import "./userAuthModal.css";
import CloseButton from "../../../assets/icons/close_button.png";

const UserAuthModal = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword,
  registrationModalOpen,
  setRegistrationModalOpen,
  registerUser,
}) => {
  return (
    <div>
      {registrationModalOpen ? (
        <div className="registration-block">
          <RegistrationForm
            title={"Registration"}
            subbutton={"Join us"}
            registerUser={registerUser}
          />
        </div>
      ) : (
        <div className="login-block">
          <LoginForm
            title={"Login to account"}
            subbutton={"Join us"}
            handleLogin={handleLogin}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
          <button onClick={setRegistrationModalOpen} className="reg-btn">
            Registration
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAuthModal;
