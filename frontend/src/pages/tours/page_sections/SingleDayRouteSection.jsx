import React, { useState, useEffect } from "react";
import SliderBig from "../../../components/sliders/slider_big/SliderBig";
import SliderBigMobile from "../../../components/sliders/slider_bid_mobile/SliderBigMobile";
import RoutesModal from "../../../components/modals/routesModal/RoutesModal";
import ToursCatalog from "../toursCatalog/ToursCatalog";
import SelectedTour from "../toursCatalog/SelectedTour";
import toursService from "../../../services/tours";
import { filterSingleDayTrips } from "../../../utils/sortingTours";

import "./singleDayRouteSection.css";

const SingleDayRouteSection = ({ setModalOpen }) => {
  const [routesModalOpen, setRoutesModalOpen] = useState(false);
  const [initialCards, setInitialCards] = useState([]);
  const [modalView, setModalView] = useState("catalog");
  const [selectedTour, setSelectedTour] = useState(null);

  const currentTour = initialCards.find((tour) => tour.id === selectedTour);
  const closeRoutesModal = () => {
    setRoutesModalOpen(false);
    setModalOpen(false);
  };

  useEffect(() => {
    toursService.getAll().then((response) => {
      const tours = response.data;
      const filteredTours = filterSingleDayTrips(tours);
      setInitialCards(filteredTours);
    });
  }, []);

  if (!initialCards.length) return null;

  return (
    <section id="sectionTwo">
      <SliderBig
        initialCards={initialCards.slice(0, 4)}
        title={"Single-Day Trips"}
        setRoutesModalOpen={setRoutesModalOpen}
        setModalOpen={setModalOpen}
        setSelectedTour={setSelectedTour}
        setModalView={setModalView}
      />
      <SliderBigMobile
        cards={initialCards.slice(0, 4)}
        blockTitle={"Single-Day Trips"}
        setRoutesModalOpen={setRoutesModalOpen}
        setModalOpen={setModalOpen}
      />
      <RoutesModal isModalOpen={routesModalOpen} closeModal={closeRoutesModal}>
        {modalView === "selected" && currentTour ? (
          <SelectedTour currentTour={currentTour} showBackButton={false} />
        ) : (
          <ToursCatalog singleDayTitle={""} multiDayTitle={""} />
        )}
      </RoutesModal>
    </section>
  );
};

export default SingleDayRouteSection;
