import React from "react";
import TextWithImgSection from "../../../components/shared/TextWithImgSection";
import TextBlock from "../../../components/shared/TextBlock";
import "./aboutSectionHome.css";
import ManWhitDogImage from "../../../assets/images/manwithdog_img.jpg"

const AboutSectionHome = () => {
  return (
    <TextWithImgSection image={ManWhitDogImage} decor={true} >
      <TextBlock 
          title={"About Us"}
          subtitle={"Our Philosophy"}
          description={
            "We believe that adventure should be accessible to everyone. That’s why we focus on comfort, safety, and expert guidance, allowing you to fully immerse yourself in the moment."
          }
          btnText={"Learn more"}
        />
    </TextWithImgSection>
  );
};

export default AboutSectionHome;
