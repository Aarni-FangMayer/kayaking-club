import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Card from "../../cards/card/Card";
import SliderButtons from "../../buttons/slider_buttons/SliderButtons";

import "./sliderBig.css";

const SliderBig = ({ initialCards, title, setRoutesModalOpen, setModalOpen}) => {
  // const navigate = useNavigate();
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
              key={card.id + "-" + index}
              subtitle={card.subtitle}
              title={card.title}
              description={card.description}
              price={card.price}
              image={card.image}
              isActive={index === 0}
            />
          );
        })}
        <div className="slider-big__controls">
          <SliderButtons nextSlide={handleNext} prevSlide={handlePrev} />
          <button className="slider-big__button" onClick={() => {setRoutesModalOpen(true); setModalOpen(true)}} >Show all directions</button>
        </div>
      </div>
    </div>
  );
};

export default SliderBig;
