import React from "react";
import StaticLayout from "../../components/layouts/staticLayout/StaticLayout";
import MainSectionHome from "./page_sections/MainSectionHome";
import AboutSectionHome from "./page_sections/AboutSectionHome";
import "./home.css";

const Home = () => {
  return (
    <StaticLayout>
      <MainSectionHome />
      <AboutSectionHome />
    </StaticLayout>
  );
};

export default Home;
