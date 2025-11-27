import React from "react";
import "./contactItem.css";

const ContactItem = ({image, alt, text, type }) => {
  const renderText = () => {
    if (type === "phone") {
      return <a href={`tel:${text}`} className="contacts__link">{text}</a>;
    } else if (type === "email") {
      return <a href={`mailto:${text}`} className="contacts__link">{text}</a>;
    }
    return <span>{text}</span>;
  };
  return (
    <div className="contacts__item">
      <div className="contacts__icon">
        <img src={image} alt={alt} />
      </div>
      <div className="contacts__text">{renderText()}</div>
    </div>
  );
};

export default ContactItem;
