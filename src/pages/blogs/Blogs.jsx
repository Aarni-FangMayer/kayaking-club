import React, { useState } from "react";
import StaticLayout from "../../components/layouts/staticLayout/StaticLayout";
import ScrollLayout from "../../components/layouts/scrollLayout/ScrollLayout";
import InfoSectionBlog from "./page_sections/InfoSectionBlog";
import PopularArticlesSectionBlog from "./page_sections/PopularArticlesSectionBlog";
import AllArticlesSectionBlog from "./page_sections/AllArticlesSectionBlog";
import PromoSectionBlog from "./page_sections/PromoSectionBlog";
import "./blogs.css";

const Blogs = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <StaticLayout>
      <ScrollLayout
        sectionOne={<InfoSectionBlog />}
        sectionTwo={<PopularArticlesSectionBlog setModalOpen={setModalOpen} />}
        sectionThree={<AllArticlesSectionBlog setModalOpen={setModalOpen} />}
        sectionFour={<PromoSectionBlog />}
        modalOpen={modalOpen}
      />
    </StaticLayout>
  );
};

export default Blogs;
