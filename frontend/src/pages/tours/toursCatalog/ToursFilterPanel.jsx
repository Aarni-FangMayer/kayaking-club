import React, { useState, useEffect } from "react";
import DropdownList from "../../../components/lists/dropdownList/DropdownList";
import "./toursFilterPanel.css";
import ArrowBack from "../../../assets/icons/arrow_back.png";
import CloseIcon from "../../../assets/icons/close_filter_icon.png"

const ToursFilterPanel = ({
  selectedTour,
  handleChangeSelectedTour,
  tourList,
  sortFunctions,
  setSortedTourList,
}) => {
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
      options: [
        "Difficulty: Hard",
        "Difficulty: Middle",
        "Difficulty: Easy",
        "Show All",
      ],
    },
  ];

  // usage of sorting and filters
  useEffect(() => {
    if (!Array.isArray(tourList)) return;

    let sorted = [...tourList];

    // by price
    if (priceSelected) {
      if (priceSelected === "Low to High") sorted = sortFunctions[0](sorted);
      else if (priceSelected === "High to Low")
        sorted = sortFunctions[1](sorted);
      else if (priceSelected === "Show All") sorted = sortFunctions[8](sorted); // shuffle
      setSortedTourList(sorted);
      return;
    }

    // by duration
    if (durationSelected) {
      if (durationSelected === "Single-Day Trips")
        sorted = sortFunctions[2](sorted);
      else if (durationSelected === "Multi-Day Trips")
        sorted = sortFunctions[3](sorted);
      else if (durationSelected === "Show All")
        sorted = sortFunctions[8](sorted); // shuffle
      setSortedTourList(sorted);
      return;
    }

    // by difficulty
    if (difficultySelected) {
      if (difficultySelected === "Difficulty: Hard")
        sorted = sortFunctions[4](sorted);
      else if (difficultySelected === "Difficulty: Middle")
        sorted = sortFunctions[5](sorted);
      else if (difficultySelected === "Difficulty: Easy")
        sorted = sortFunctions[6](sorted);
      else if (difficultySelected === "Beginners friendly")
        sorted = sortFunctions[7](sorted);
      else if (difficultySelected === "Show All")
        sorted = sortFunctions[8](sorted); // shuffle
      setSortedTourList(sorted);
      return;
    }

    // show original list
    setSortedTourList([...tourList]);
  }, [priceSelected, durationSelected, difficultySelected]);

  const handleSelect = (option, listName) => {
    console.log("option", option, "listName", listName);
    switch (listName) {
      case "Sort by price":
        setPriceSelected(option);
        setDurationSelected("");
        setDifficultySelected("");
        break;
      case "Sort by duration":
        setDurationSelected(option);
        setPriceSelected("");
        setDifficultySelected("");
        break;
      case "Sort by difficulty":
        setDifficultySelected(option);
        setDurationSelected("");
        setPriceSelected("");
        break;
      default:
        console.log("filter list not found");
    }
  };

  const cleanFilterSelector = () => {
    setDifficultySelected("");
    setDurationSelected("");
    setPriceSelected("");
  };

  return (
    <div className="tours-catalog__filters">
      {selectedTour ? (
        <button
          className="tours-catalog__button-back"
          onClick={handleChangeSelectedTour}
        >
          <img className="back-arrow" src={ArrowBack} alt="" /> Back To All
          Routes
        </button>
      ) : (
        <div className="tours-catalog__filter-groups">
          {dropdownItems.map((item) => (
            <DropdownList
              listName={item.listName}
              options={item.options}
              handleSelect={handleSelect}
            />
          ))}
        </div>
      )}
      <div className="selectedFilter__block">
        {(priceSelected || durationSelected || difficultySelected) && (
          <button className="selectedFilter" onClick={cleanFilterSelector}>
            {priceSelected || durationSelected || difficultySelected}
            {(priceSelected || durationSelected || difficultySelected) && (
              <img src={CloseIcon} className="selectedFilter-close" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ToursFilterPanel;
