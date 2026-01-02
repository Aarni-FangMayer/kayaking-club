import React, { useState, useEffect } from "react";
import SliderBig from "../../../components/sliders/slider_big/SliderBig";
import SliderBigMobile from "../../../components/sliders/slider_bid_mobile/SliderBigMobile";
import RoutesModal from "../../../components/modals/routesModal/RoutesModal";
import ToursCatalog from "../toursCatalog/ToursCatalog";
import SelectedTour from "../toursCatalog/SelectedTour";
import toursService from "../../../services/tours";
import { filterMultiDayTrips } from "../../../utils/sortingTours";

import "./multiDayRouteSection.css";
import NatureImage5 from "../../../assets/images/nature_img5.jpg";
import NatureImage6 from "../../../assets/images/nature_img6.jpg";
import NatureImage7 from "../../../assets/images/nature_img7.jpg";
import NatureImage8 from "../../../assets/images/nature_img8.jpg";

const MultiDayRouteSection = ({ setModalOpen }) => {
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
      const filteredTours = filterMultiDayTrips(tours);
      setInitialCards(filteredTours);
    });
  }, []);

  if (!initialCards.length) return null;

  return (
    <section id="sectionThree" className="multi-day-routes__wrapper">
      <SliderBig
        initialCards={initialCards.slice(0, 4)}
        title={"Multi-day expeditions"}
        setRoutesModalOpen={setRoutesModalOpen}
        setModalOpen={setModalOpen}
        setModalView={setModalView}
        setSelectedTour={setSelectedTour}
      />
      <SliderBigMobile
        cards={initialCards.slice(0, 4)}
        blockTitle={"Multi-day expeditions"}
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

export default MultiDayRouteSection;
