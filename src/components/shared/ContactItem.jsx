import React from "react";
import "./contactItem.css";

const ContactItem = ({image, alt, text}) => {
  return (
    <div className="contacts__item">
      <div className="contacts__icon">
        <img src={image} alt={alt} />
      </div>
      <div className="contacts__text">{text}</div>
    </div>
  );
};

export default ContactItem;
