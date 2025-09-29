import React from "react";
import "./sliderButtons.css";
import ArrowIcon from "../../../assets/icons/short_arrow.png";

const SliderButtons = ({ btnType }) => {
  if (btnType === "vertical") {
    return (
      <div className="slider-buttons">
        <button className="slider-buttons__btn slider-buttons__btn--prev">
          <img
            src={ArrowIcon}
            alt="Previous slide"
            className="slider-buttons__icon"
          />
        </button>
        <button className="slider-buttons__btn slider-buttons__btn--next">
          <img
            src={ArrowIcon}
            alt="Next slide"
            className="slider-buttons__icon"
          />
        </button>
      </div>
    );
  }

  return (
    <div className="slider-buttons-horizontal">
      <button className="slider-buttons__btn slider-buttons__btn--prev">
        <img
          src={ArrowIcon}
          alt="Previous slide"
          className="slider-buttons__icon"
        />
      </button>
      <button className="slider-buttons__btn slider-buttons__btn--next">
        <img
          src={ArrowIcon}
          alt="Next slide"
          className="slider-buttons__icon"
        />
      </button>
    </div>
  );
};

export default SliderButtons;
