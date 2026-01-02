import React, { useState } from "react";
import TextWithImgSection from "../../../components/shared/TextWithImgSection";
import TextBlock from "../../../components/shared/TextBlock";
import RoutesModal from "../../../components/modals/routesModal/RoutesModal";
import ToursCatalog from "../toursCatalog/ToursCatalog";

import "./chooseRouteSection.css";
import RoutesImg from "../../../assets/images/routes_page_img1.jpg";

const ChooseRouteSection = ({ setModalOpen }) => {
  const [routesModalOpen, setRoutesModalOpen] = useState(false);

  const closeRoutesModal = () => {
    setRoutesModalOpen(false);
    setModalOpen(false);
  };
  return (
    <>
      <section id="sectionOne" className="choose-route-section__wrapper">
        <TextWithImgSection image={RoutesImg}>
          <TextBlock
            title={"Select Route"}
            subtitle={"How To Choose A Tour"}
            description={
              "Choosing the right tour means matching your pace and interests. Our tours vary in difficulty and duration, from short day trips to multi-day journeys, so you’ll find the perfect fit. Every option is designed with comfort, safety, and expert guidance for a memorable, worry-free adventure."
            }
            btnText={"Learn more"}
            onClickFunction={() => {
              setRoutesModalOpen(true);
              setModalOpen(true);
            }}
          />
        </TextWithImgSection>
      </section>

      <RoutesModal isModalOpen={routesModalOpen} closeModal={closeRoutesModal}>
        <ToursCatalog />
      </RoutesModal>
    </>
  );
};

export default ChooseRouteSection;
