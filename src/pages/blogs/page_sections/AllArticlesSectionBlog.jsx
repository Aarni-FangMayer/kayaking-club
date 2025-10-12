import React from "react";
import ArticleCard from "../../../components/cards/article_card/ArticleCard";
import ImageBlock from "../../../components/shared/ImageBlock";
import CardList from "../../../components/lists/CardList"
import "./allArticlesSectionBlog.css";
import Image7 from "../../../assets/images/blog_page_img7.jpg";
import Image8 from "../../../assets/images/blog_page_img8.jpg";

const AllArticlesSectionBlog = () => {
  const articles = [
    {
      id: 1,
      title: "Meet Our New Instructors 1",
      data: "August 27, 2025",
    },
    {
      id: 2,
      title: "Meet Our New Instructors 2",
      data: "August 27, 2025",
    },
    {
      id: 3,
      title: "Meet Our New Instructors 3",
      data: "August 27, 2025",
    },
  ]
  return (
    <section className="all-articles">
      <div class="all-blogs-grid__item--row1-col1">
        <ImageBlock image={Image7} alt={"Kayaking instructor"} />
      </div>
      <div class="all-blogs-grid__item--row1-col2">
        <ArticleCard
          subtitle={"Meet Our New Instructors"}
          description={
            "We’re excited to welcome new faces to the River Pulse team. With international kayaking experience, wilderness first aid training, and a deep love for the wild, our new instructors bring both skill and soul."
          }
          btnText={"Read article"}
        />
      </div>
      <div class="all-blogs-grid__item--col3">
        <CardList arr={articles} subtitle={"article"} header={"All Articles And News"} />
      </div>
      <div class="all-blogs-grid__item--row2-col1">
        <ArticleCard
          subtitle={"New Routes Coming"}
          description={
            "We’re expanding our adventure map! This fall, explore three new routes across BC and Alberta — designed for a closer connection with nature and our signature comfort."
          }
          btnText={"Read article"}
        />
      </div>
      <div class="all-blogs-grid__item--row2-col2">
        <ImageBlock image={Image8} alt={"Kayaking instructor"} />
      </div>
    </section>
  );
};

export default AllArticlesSectionBlog;
