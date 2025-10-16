import React from "react";
import "./textBlockWithHighlights.css";

const TextBlockWithHighlights = ({
  title,
  subtitle,
  describtion,
  highlight,
  addRouteBtnText,
  addPostBtnText,
}) => {
  return (
    <div className="account__intro">
      <h2 className="account__greeting">{title}</h2>
      <div className="account__intro-text">
        <h3 className="account__subtitle">{subtitle}</h3>
        <p className="account__description">{describtion}</p>
        <p className="account__highlight">{highlight}</p>
      </div>
      <div className="account__buttons">
        {addRouteBtnText && (
          <button className="add-routes-btn">{addRouteBtnText}</button>
        )}
        {addPostBtnText && (
          <button className="add-post-btn">{addPostBtnText}</button>
        )}
      </div>
    </div>
  );
};

export default TextBlockWithHighlights;
