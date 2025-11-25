import React from "react";
import TextWithImgSection from "../../../components/shared/TextWithImgSection";
import TextBlock from "../../../components/shared/TextBlock";
import RegistrationForm from "../../../components/forms/RegistrationForm";
import "./promoSectionBlog.css";
import PromoImage from "../../../assets/images/promo_img.jpg";

const PromoSectionBlog = () => {
  return (
    <TextWithImgSection image={PromoImage}>
      <TextBlock
        title={"Get involved"}
        subtitle={"You can join our club"}
        description={
          "Becoming a member means more than just kayaking. You’ll connect with people who share your passion for nature and adventure, while enjoying exclusive routes, events, and benefits. Our community welcomes everyone who wants to paddle, explore, and create lasting memories on the water."
        }
        btnText={"Choose a route"}
      />
      <RegistrationForm title={"Quick registration"} />
    </TextWithImgSection>
  );
};

export default PromoSectionBlog;
