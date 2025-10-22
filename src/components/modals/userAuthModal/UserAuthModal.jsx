import React from "react";
import ReactDOM from "react-dom";
import RegistrationForm from "../../forms/RegistrationForm";
import LoginForm from "../../forms/LoginForm";
import "./userAuthModal.css";
import CloseButton from "../../../assets/icons/close_button.png";

const UserAuthModal = ({
  loginAccount,
  registrationModalOpen,
  setRegistrationModalOpen,
  registerUser
}) => {
  return (
    <div>
      {registrationModalOpen ? (
        <div className="registration-block">
          <RegistrationForm title={"Registration"} subbutton={"Join us"} registerUser={registerUser} />
        </div>
      ) : (
        <div className="login-block">
          <LoginForm
            title={"Login to account"}
            subbutton={"Join us"}
            loginAccount={loginAccount}
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
