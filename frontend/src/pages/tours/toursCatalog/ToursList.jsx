import React, { useState, useEffect } from "react";
import toursService from "../../../services/tours";
import SelectedTour from "./SelectedTour";
import ToursFilterPanel from "./ToursFilterPanel";
import CatalogTourCard from "../../../components/cards/catalog_tour_card/CatalogTourCard";
import { sortByPriceAsc, sortByPriceDesc, filterSingleDayTrips, filterMultiDayTrips, sortDifficultyHard, sortDifficultyMiddle, sortDifficultyEasy, shuffleTours } from "../../../utils/sortingTours";
import "./toursList.css";

const ToursList = ({
  selectedTour,
  handleChangeSelectedTour,
  singleDayTitle,
  multiDayTitle,
}) => {
  const [tourList, setTourList] = useState([]);
  const [currentTour, setCurrentTour] = useState({});
  const [sortedTourList, setSortedTourList] = useState(tourList)

  useEffect(() => {
    toursService.getAll().then((response) => {
      setTourList(response.data);
      setSortedTourList(response.data)
    });
  }, []);

  const openCurrentTour = (tour) => {
    setCurrentTour(tour);
    handleChangeSelectedTour();
  };

  const sortFunctions = [sortByPriceAsc, sortByPriceDesc, filterSingleDayTrips, filterMultiDayTrips, sortDifficultyHard, sortDifficultyMiddle, sortDifficultyEasy, shuffleTours]

  return (
    <div className="tours-catalog__tours-list">
      {selectedTour ? (
        <>
          <SelectedTour
            currentTour={currentTour}
            handleChangeSelectedTour={handleChangeSelectedTour}
          />
        </>
      ) : (
        <>
          <h2 className="tours-catalog__tours-heading">
            Select Route {singleDayTitle}
            {multiDayTitle}
          </h2>
          <ToursFilterPanel
            selectedTour={selectedTour}
            handleChangeSelectedTour={handleChangeSelectedTour}
            tourList={tourList}
            sortFunctions={sortFunctions}
            setSortedTourList={setSortedTourList}
          />
          <div className="tours-catalog__tours">
            {sortedTourList.map((tour) => {
              return (
                <CatalogTourCard
                  clickEvent={() => openCurrentTour(tour)}
                  arr={tour}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ToursList;
