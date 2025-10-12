import React from "react";
import ImageWithTitleBlock from "../../../components/shared/ImageWithTitleBlock";
import ImageBlock from "../../../components/shared/ImageBlock";
import ArticleCard from "../../../components/cards/article_card/ArticleCard";
import "./popularArticlesSectionBlog.css";
import Image4 from "../../../assets/images/blog_page_img4.jpg";
import Image5 from "../../../assets/images/blog_page_img5.jpg";
import Image6 from "../../../assets/images/blog_page_img6.jpg";

const PopularArticlesSectionBlog = () => {
  return (
    <section className="popular-blogs">
      <div class="grid__item--row1-col1">
        <ArticleCard
          subtitle={"Tips for First Kayaking Trip"}
          description={
            "Your first kayaking trip can feel daunting, but with a little prep it quickly becomes a fun, rewarding adventure."
          }
          btnText={"Read article"}
        />
      </div>
      <h2 className="grid__item--mobile-title">Popular Articles</h2>
      <div class="grid__item--row1-col2">
        <ImageWithTitleBlock image={Image4} title={"Popular Articles"} />
      </div>
      <div class="grid__item--row1-col3">
        <ArticleCard
          subtitle={"Three Days in the Wild"}
          description={
            "Multi-day kayaking offers unforgettable moments — from misty mornings on the water to nights by the fire under the stars. Our three-day route in British Columbia captures that magic and more."
          }
          btnText={"Read article"}
        />
      </div>
      <div class="grid__item--row2-col1">
        <ImageBlock image={Image6} alt={"Kayaks, sports equipment"} />
      </div>
      <div class="grid__item--row2-col2">
        <ArticleCard
          subtitle={"How to Choose the Kayak"}
          description={
            "Choosing the right kayak can be tricky — this guide explains the main types and helps match one to your paddling goals."
          }
          btnText={"Read article"}
        />
      </div>
      <div class="grid__item--row2-col3">
        <ImageBlock image={Image5} alt={"Kayaker in wild river"} />
      </div>
    </section>
  );
};

export default PopularArticlesSectionBlog;
