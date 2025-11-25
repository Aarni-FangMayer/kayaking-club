import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userService from "../../../services/userService";
import TextWithImgSection from "../../../components/shared/TextWithImgSection";
import TextBlock from "../../../components/shared/TextBlock";
import RegistrationForm from "../../../components/forms/RegistrationForm";
import "./promoSectionBlog.css";
import PromoImage from "../../../assets/images/promo_img.jpg";

const PromoSectionBlog = () => {
  const [newUserRegistered, setNewUserregistered] = useState(false);

  const navigate = useNavigate();

  const handleGoToBlogs = () => {
    navigate("/tours");
  };

   const registerUser = async (newUserData) => {
      try {
        await userService.register(newUserData);
  
        toast.success("Registration successful!");

        setNewUserregistered(true);
        console.log("newUserRegistered", newUserRegistered);
      } catch (error) {
        console.log("Registration error", error);
        toast.error("Registration failed. Please try again.");
      }
    };

  return (
    <TextWithImgSection image={PromoImage}>
      <TextBlock
        title={"Get involved"}
        subtitle={"You can join our club"}
        description={
          "Becoming a member means more than just kayaking. You’ll connect with people who share your passion for nature and adventure, while enjoying exclusive routes, events, and benefits. Our community welcomes everyone who wants to paddle, explore, and create lasting memories on the water."
        }
        btnText={"Choose a route"}
        onClickFunction={handleGoToBlogs}
      />
      <RegistrationForm title={"Quick registration"} registerUser={registerUser} />
    </TextWithImgSection>
  );
};

export default PromoSectionBlog;
