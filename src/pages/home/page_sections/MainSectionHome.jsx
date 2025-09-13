import React from "react";
import ArrowBlueButton from "../../../components/buttons/arrow_blue/ArrowBlueButton";
import SliderSmall from "../../../components/sliders/slider_small/SliderSmall";
import './mainSectionHome.css'

const MainSectionHome = () => {
  return (
    <section className="home-main">
      <div className="home-content">
        <div className="home-content__image">
          <SliderSmall />
        </div>
        <div className="home-content__text">
          <h1 className="home-content__title">
            <span>kayaking </span>club
          </h1>
          <p className="home-content__description">
            Our tours are designed to fit your pace, your passion, <br />
            and adventure.
          </p>
          <ArrowBlueButton text={"Join us here"} />
        </div>
      </div>
    </section>
  );
};

export default MainSectionHome;
