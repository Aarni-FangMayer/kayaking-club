import React from "react";
import TextWithImgSection from "../../../components/shared/TextWithImgSection";
import TextBlock from "../../../components/shared/TextBlock";
import ContactForm from "../../../components/forms/ContactForm";

import "./customRouteSection.css";
import CustomRoutesImg from "../../../assets/images/routes_page_img2.jpg";

const CustomRouteSection = () => {
  return (
    <section id="sectionFour" className="custom-route-section__wrapper">
      <TextWithImgSection image={CustomRoutesImg}>
        <TextBlock
          title={"Custom Routes"}
          subtitle={"Experiences for every occasion"}
          description={
            "Whether it’s a team-building day, a birthday celebration, or a special getaway, our personalized tours let you design every detail. Choose your pace, style, and activities to create an unforgettable experience that perfectly matches your group’s needs and interests."
          }
        />
        <ContactForm
          title={"Need a custom route?"}
          className="custom-route-form"
        />
      </TextWithImgSection>
    </section>
  );
};

export default CustomRouteSection;
