import React, { useState } from "react";
import TextWithImgSection from "../../../components/shared/TextWithImgSection";
import RoutesModal from "../../../components/modals/routesModal/RoutesModal";
import ToursCatalog from "../toursCatalog/ToursCatalog";

import "./chooseRouteSection.css";
import KayakerImage1 from "../../../assets/images/routes_page_img1.jpg";

const ChooseRouteSection = () => {
  const [routesModalOpen, setRoutesModalOpen] = useState(false);

  const closeRoutesModal = () => {
    setRoutesModalOpen(false);
  }
  return (
    <section className="choose-route-section">
      <TextWithImgSection
        title={"Select Route"}
        subtitle={"How To Choose A Tour"}
        description={
          "Choosing the right tour means matching your pace and interests. Our tours vary in difficulty and duration, from short day trips to multi-day journeys, so you’ll find the perfect fit. Every option is designed with comfort, safety, and expert guidance for a memorable, worry-free adventure."
        }
        btnText={"Learn more"}
        img={KayakerImage1}
        alt={"Man on kayak photo"}
        onClickFunction={()=> setRoutesModalOpen(true)}
      />
      <RoutesModal isModalOpen={routesModalOpen} closeModal={closeRoutesModal}>
          <ToursCatalog />
        </RoutesModal>
    </section>
  );
};

export default ChooseRouteSection;
