import React from "react";
import "./arrowWhiteButton.css";
import ArrowWhite from '../../../assets/icons/arrow_right.png'

const ArrowWhiteButton = ({ text }) => {
  return (
    <button className="arrow-white-button">
      {text}
      <img src={ArrowWhite} alt="" />
    </button>
  );
};

export default ArrowWhiteButton;
