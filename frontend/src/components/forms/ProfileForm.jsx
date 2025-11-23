import React from "react";
import ArrowBlueButton from "../buttons/arrow_blue/ArrowBlueButton";
import "./profileForm.css";

const ProfileForm = ({ placeholderName, placeholderEmail, placeholderPhone, avatarImg, btnText }) => {
  return (
    <div className="account__form">
      <div className="account__avatar">
        <img src={avatarImg} alt="" />
        <button className="account__avatar-btn">change avatar</button>
      </div>
      <form className="account__form-fields">
        <input type="text" placeholder={placeholderName} className="account__input" />
        <input
          type="email"
          placeholder={placeholderEmail}
          className="account__input"
        />
        <input
          type="phone"
          placeholder={placeholderPhone}
          className="account__input"
        />
      </form>
      <div className="account__submit-button">
        <ArrowBlueButton text={btnText} />
      </div>
    </div>
  );
};

export default ProfileForm;
