import React, { useState } from "react";
import DropdownList from "../../../components/lists/dropdownList/DropdownList";
import "./toursFilterPanel.css";
import ArrowBack from "../../../assets/icons/arrow_back.png";

const ToursFilterPanel = ({ selectedTour, handleChangeSelectedTour }) => {
  const [priceSelected, setPriceSelected] = useState("");
  const [durationSelected, setDurationSelected] = useState("");
  const [difficultySelected, setDifficultySelected] = useState("");

  const dropdownItems = [
    {
      listName: "Sort by price",
      options: ["High to Low", "Low to High"],
    },
    {
      listName: "Sort by duration",
      options: ["Single-Day Trips", "Multi-Day Trips", "Show All"],
    },
    {
      listName: "Sort by difficulty",
      options: ["Level: Hard to Easy", "Level: Easy to Hard", "Beginners friendly", "Show All"],
    },
  ];

const handleSelect = (option, listName) => {
  console.log('option', option, 'listName', listName)
  switch (listName){
    case "Sort by price":
      setPriceSelected(option);
      break;
    case "Sort by duration":
      setDurationSelected(option);
      break;
    case "Sort by difficulty":
      setDifficultySelected(option);
      break;
    default:
      console.log("filter list not found")
  }
}
  return (
    <div className="tours-catalog__filters">
      {selectedTour ? (
        <button
          className="tours-catalog__button-back"
          onClick={handleChangeSelectedTour}
        >
          <img className="back-arrow" src={ArrowBack} alt="" /> Show All Routes
        </button>
      ) : (
        <div className="tours-catalog__filter-groups">
          {dropdownItems.map((item) => (
            <DropdownList listName={item.listName} options={item.options} handleSelect={handleSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ToursFilterPanel;