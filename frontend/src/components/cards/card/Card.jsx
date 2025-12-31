import React from "react";
import ArrowBlueButton from "../../buttons/arrow_blue/ArrowBlueButton";
import "./card.css";

const Card = ({ id, subtitle, title, description, price, image, isActive, setRoutesModalOpen, setModalOpen, setSelectedTour, setModalView }) => {
  const truncateText = (text, maxLength = 280) => {
  if (!text) return "";
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + "…"
    : text;
};

  return (
    <>
      {isActive ? (
        <div className="card card--active">
          <div className="card__content--active">
            <div className="card__info">
              <div className="subtitle">{subtitle}</div>
              <h3 className="card__title">{title}</h3>
              <p className="card__description">{truncateText(description, 280)}</p>
            </div>
            <div className="card__footer">
              <div className="card__price">{price} €</div>
              <ArrowBlueButton clickEvent={() => {setRoutesModalOpen(true); setModalOpen(true); setModalView("selected"); setSelectedTour(id)}} text={"Learn more"} />
            </div>
          </div>
          <div className="card__image--active">
            <img src={image} alt="Route" />
          </div>
        </div>
      ) : (
        <div className="card card--inactive">
          <img className="card__image" src={image} alt="Route" />
          <div className="card__content--inactive">
            <span className="subtitle">{subtitle}</span>
            <h4 className="card__title card__title--small">{title}</h4>
            <div className="card__price" style={{color: "#3B586D"}}>{price} €</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
