import React from "react";
import "./selectedTour.css";
import ArrowBack from '../../../assets/icons/arrow_back.png'

const SelectedTour = ({ currentTour, handleChangeSelectedTour }) => {
  if (!currentTour) return null;

  const details = [
    { label: "Difficulty", value: currentTour.difficulty },
    { label: "Date of trip", value: currentTour.dateOfTrip },
    { label: "Included", value: currentTour.included },
    { label: "Beginners friendly", value: currentTour.level },
    { label: "Duration", value: currentTour.duration },
  ];

  return (
    <>
      <button className="selected-tour__back-button" onClick={handleChangeSelectedTour}><img src={ArrowBack} alt="" /> Show All Routes</button>
      <div className="selected-tour">
        <h2 className="selected-tour__title">{currentTour.tourName}</h2>
        <h3 className="selected-tour__subtitle">{currentTour.subtitle}</h3>
        <div className="selected-tour__image-block">
          <img
            src={currentTour.images}
            alt="Tour image"
            className="selected-tour__image"
          />
        </div>
        <div className="selected-tour__details">
          {details.map((item) => (
            <div key={item.label} className="subtitle selected-tour__detail">
              {item.label}: {item.value}
            </div>
          ))}
          <div className="selected-tour__price">
            Price: {currentTour.price} €
          </div>
        </div>
        <p className="selected-tour__description">
          {currentTour.description}
        </p>
        <div className="selected-tour__actions">
          <button className="selected-tour__button selected-tour__button--white">
            Book this route
          </button>
          <button className="selected-tour__button">Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default SelectedTour;
