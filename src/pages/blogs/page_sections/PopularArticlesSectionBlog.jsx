import React from "react";
import ImageWithTitleBlock from "../../../components/shared/ImageWithTitleBlock";
import ImageBlock from "../../../components/shared/ImageBlock";
import ArticleCard from "../../../components/cards/article_card/ArticleCard";
import "./popularArticlesSectionBlog.css";
import Image4 from "../../../assets/images/blog_page_img4.jpg";
import Image5 from "../../../assets/images/blog_page_img5.jpg";
import Image6 from "../../../assets/images/blog_page_img6.jpg";

const PopularArticlesSectionBlog = () => {
  const popularArticleCardContent = [
    {
      id: 1,
      subtitle: "Tips for First Kayaking Trip",
      description: "Your first kayaking trip can feel daunting, but with a little prep it quickly becomes a fun, rewarding adventure.",
      textContent: "The four thieves arrived on the south side of the Louvre on Sunday morning at 9:30 and pulled a truck up on the sidewalk, right next to the museum walls. They posed as workers, wearing yellow vests and setting out traffic cones. To anyone strolling along the banks of the Seine, just across the road, it might not have been immediately apparent that the setup was a ruse and that a daring robbery was underway. Workers are a common sight around the Louvre, an ancient, sprawling former palace, whose basic upkeep and renovations make it a constantly transforming construction site. <br><br> The four thieves arrived on the south side of the Louvre on Sunday morning at 9:30 and pulled a truck up on the sidewalk, right next to the museum walls. They posed as workers, wearing yellow vests and setting out traffic cones. To anyone strolling along the banks of the Seine, just across the road, it might not have been immediately apparent that the setup was a ruse and that a daring robbery was underway. Workers are a common sight around the Louvre, an ancient, sprawling former palace, whose basic upkeep and renovations make it a constantly transforming construction site.",
      image: Image4,
    },
    {
      id: 2,
      subtitle: "Three Days in the Wild",
      description: "Multi-day kayaking offers unforgettable moments — from misty mornings on the water to nights by the fire under the stars. Our three-day route in British Columbia captures that magic and more.",
      textContent: "The four thieves arrived on the south side of the Louvre on Sunday morning at 9:30 and pulled a truck up on the sidewalk, right next to the museum walls. They posed as workers, wearing yellow vests and setting out traffic cones. To anyone strolling along the banks of the Seine, just across the road, it might not have been immediately apparent that the setup was a ruse and that a daring robbery was underway. Workers are a common sight around the Louvre, an ancient, sprawling former palace, whose basic upkeep and renovations make it a constantly transforming construction site.",
      image: Image5,
    },
    {
      id: 3,
      subtitle: "How to Choose the Kayak",
      description: "Choosing the right kayak can be tricky — this guide explains the main types and helps match one to your paddling goals.",
      textContent: "The four thieves arrived on the south side of the Louvre on Sunday morning at 9:30 and pulled a truck up on the sidewalk, right next to the museum walls. They posed as workers, wearing yellow vests and setting out traffic cones. To anyone strolling along the banks of the Seine, just across the road, it might not have been immediately apparent that the setup was a ruse and that a daring robbery was underway. Workers are a common sight around the Louvre, an ancient, sprawling former palace, whose basic upkeep and renovations make it a constantly transforming construction site.",
      image: Image6,
    },
  ];
  
  return (
    <section className="popular-blogs">
      
      <div class="grid__item--row1-col1">
        <ArticleCard
          subtitle={popularArticleCardContent[0].subtitle}
          description={popularArticleCardContent[0].description}
          btnText={"Read article"}
          image={popularArticleCardContent[0].image}
          textContent={popularArticleCardContent[0].textContent}
          
        />
      </div>
      <h2 className="grid__item--mobile-title">Popular Articles</h2>
      <div class="grid__item--row1-col2">
        <ImageWithTitleBlock image={Image4} title={"Popular Articles"} />
      </div>
      <div class="grid__item--row1-col3">
        <ArticleCard
          subtitle={popularArticleCardContent[1].subtitle}
          description={popularArticleCardContent[1].description}
          btnText={"Read article"}
          image={popularArticleCardContent[1].image}
          textContent={popularArticleCardContent[1].textContent}
        />
      </div>
      <div class="grid__item--row2-col1">
        <ImageBlock image={Image6} alt={"Kayaks, sports equipment"} />
      </div>
      <div class="grid__item--row2-col2">
        <ArticleCard
          subtitle={popularArticleCardContent[2].subtitle}
          description={popularArticleCardContent[2].description}
          btnText={"Read article"}
          image={popularArticleCardContent[2].image}
          textContent={popularArticleCardContent[2].textContent}
        />
      </div>
      <div class="grid__item--row2-col3">
        <ImageBlock image={Image5} alt={"Kayaker in wild river"} />
      </div>
    </section>
  );
};

export default PopularArticlesSectionBlog;
