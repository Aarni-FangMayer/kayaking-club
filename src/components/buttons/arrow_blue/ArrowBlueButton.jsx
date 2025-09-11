import React from "react";
import "./arrowBlueButton.css";
import ArrowBlue from "../../../assets/icons/arrow_blue.png";

const ArrowBlueButton = ( {text} ) => {
  return (
    <button className="arrow-blue-button">
      {text}
      <img src={ArrowBlue} alt="" />
    </button>
  );
};

export default ArrowBlueButton;
