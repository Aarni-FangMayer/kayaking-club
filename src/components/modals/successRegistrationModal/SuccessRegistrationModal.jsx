import React from "react";
import LoginForm from "../../forms/LoginForm";
import "./successRegistrationModal.css";

const SuccessRegistrationModal = ({ loginAccount }) => {
  return (
    <div className="login_new-user">
      <LoginForm
        title={"Login to account"}
        subbutton={"Join us"}
        loginAccount={loginAccount}
        subtitle={"You have successfully registered, now you can log in to your account."}
      />
    </div>
  );
};

export default SuccessRegistrationModal;
