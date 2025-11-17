import React from "react";
import LoginForm from "../../forms/LoginForm";
import "./successRegistrationModal.css";

const SuccessRegistrationModal = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <div className="login_new-user">
      <LoginForm
        title={"Login to account"}
        subbutton={"Join us"}
        handleLogin={handleLogin}
        subtitle={
          "You have successfully registered, now you can log in to your account."
        }
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
};

export default SuccessRegistrationModal;
