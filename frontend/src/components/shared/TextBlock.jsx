import React from "react";
import ArrowBlueButton from "../buttons/arrow_blue/ArrowBlueButton";
import "./textBlock.css";

const TextBlock = ({ title, subtitle, description, btnText, onClickFunction }) => {
  return (
    <div className="about__text">
      <h2 className="about__title">{title}</h2>
      <h3 className="about__subtitle">{subtitle}</h3>
      <p className="about__description">{description}</p>
      {btnText && (
        <ArrowBlueButton text={btnText} clickEvent={onClickFunction} />
      )}
    </div>
  );
};

export default TextBlock;
