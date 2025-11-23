import React, { useState } from "react";
import "./accordion.css";
import editImage from "../../assets/icons/edit_image.png";

const Accordion = ({title, children}) => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className="accordion">
      <button
        className="accordion-title"
        onClick={() => setAccordion(!accordion)}
      >
        <h3>{title}</h3>
        <img src={editImage} alt="edit icon pencil" />
      </button>
      {accordion && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
