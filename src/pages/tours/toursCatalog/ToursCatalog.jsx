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
        <ToursList selectedTour={selectedTour} handleChangeSelectedTour={handleChangeSelectedTour} />
    </div>
  );
};

export default ToursCatalog;
