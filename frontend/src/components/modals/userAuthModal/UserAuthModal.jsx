import React from "react";
import ReactDOM from "react-dom";
import RegistrationForm from "../../forms/RegistrationForm";
import LoginForm from "../../forms/LoginForm";
import "./userAuthModal.css";
import ModalImage from "../../../assets/images/modal-image.jpg"
import CloseButton from "../../../assets/icons/close_button.png";

const UserAuthModal = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword,
  registerUser,
}) => {
  return (
    <div className="auth-modal">
      <div className="auth-modal__forms">
        <div className="auth-modal__login">
          <h2 className="auth-modal__login-title">Already in our club?</h2>
          <LoginForm
            title={"Login to account"}
            subbutton={"Join us"}
            handleLogin={handleLogin}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </div>
          {/* <h4>or complete a quick registration</h4> */}
        <div className="auth-modal__registration">
          <h2 className="auth-modal__login-title">Quick registration</h2>
          <RegistrationForm
            title={"Registration"}
            subbutton={"Join us"}
            registerUser={registerUser}
          />
        </div>
      </div>
      <div className="auth-modal__image-block">
        <img className="auth-modal__image" src={ModalImage} alt="" />
      </div>
    </div>
  );
};

export default UserAuthModal;
