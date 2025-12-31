import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Card from "../../cards/card/Card";
import SliderButtons from "../../buttons/slider_buttons/SliderButtons";

import "./sliderBig.css";

const SliderBig = ({
  initialCards,
  title,
  setRoutesModalOpen,
  setModalOpen,
  setSelectedTour,
  setModalView,
}) => {
  const [cards, setCards] = useState(initialCards);

  const handleNext = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift();
      newCards.push(first);
      return newCards;
    });
  };

  const handlePrev = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const last = newCards.pop();
      newCards.unshift(last);
      return newCards;
    });
  };

  return (
    <div className="slider-big">
      <h2 className="slider-big__title">{title}</h2>
      <div className="slider-big__carousel">
        {cards.map((card, index) => {
          return (
            <Card
              id={card.id}
              key={card.id + "-" + index}
              title={card.name}
              description={card.description}
              price={card.price}
              image={card.image}
              isActive={index === 0}
              setRoutesModalOpen={setRoutesModalOpen}
              setModalOpen={setModalOpen}
              setSelectedTour={setSelectedTour}
              setModalView={setModalView}
            />
          );
        })}
        <div className="slider-big__controls">
          <SliderButtons nextSlide={handleNext} prevSlide={handlePrev} />
          <button
            className="slider-big__button"
            onClick={() => {
              setSelectedTour(null);
              setModalView("catalog");
              setRoutesModalOpen(true);
              setModalOpen(true);
            }}
          >
            Show all directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderBig;
