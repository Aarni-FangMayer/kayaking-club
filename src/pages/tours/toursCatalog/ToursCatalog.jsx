import React, { useState } from "react";
import ToursFilterPanel from "./ToursFilterPanel";
import ToursList from "./ToursList";
import "./toursCatalog.css";

const ToursCatalog = () => {
  const [selectedTour, setSelectedTour] = useState(false);

  const handleChangeSelectedTour = () => {
    setSelectedTour(!selectedTour);
  }

  return (
    <div className="tours-catalog">
        <ToursFilterPanel selectedTour={selectedTour} handleChangeSelectedTour={handleChangeSelectedTour} />
      <div className="tours-catalog__tours">
        {/* <h2 className="tours-catalog__tours-heading">Select Route</h2> */}
        <ToursList selectedTour={selectedTour} handleChangeSelectedTour={handleChangeSelectedTour} />
      </div>
    </div>
  );
};

export default ToursCatalog;
