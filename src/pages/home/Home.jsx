import React from "react";
import StaticLayout from "../../components/layouts/staticLayout/StaticLayout";
import ScrollLayout from "../../components/layouts/scrollLayout/ScrollLayout";
import MainSectionHome from "./page_sections/MainSectionHome";
import AboutSectionHome from "./page_sections/AboutSectionHome";
import RoutesSectionHome from "./page_sections/RoutesSectionHome";
import ContactsSectionHome from "./page_sections/ContactsSectionHome";
import "./home.css";

const Home = () => {
  

  return (
    <StaticLayout>
        <ScrollLayout sectionOne={<MainSectionHome />} sectionTwo={<AboutSectionHome />} sectionThree={<RoutesSectionHome />} sectionFour={<ContactsSectionHome />} />
    </StaticLayout>
  );
};

export default Home;
