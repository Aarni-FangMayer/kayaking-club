import React from "react";
import StaticLayout from "../../components/layouts/staticLayout/StaticLayout";
import MainSectionHome from "./page_sections/MainSectionHome";
import "./home.css";

const Home = () => {
  return (
    <StaticLayout>
      <MainSectionHome />
    </StaticLayout>
  );
};

export default Home;
