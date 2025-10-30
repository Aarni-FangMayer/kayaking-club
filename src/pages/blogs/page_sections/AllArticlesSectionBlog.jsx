import React, { useState } from "react";
import ArticleCard from "../../../components/cards/article_card/ArticleCard";
import ImageBlock from "../../../components/shared/ImageBlock";
import CardList from "../../../components/lists/CardList";
import BlogsModal from "../../../components/modals/blogsModal/BlogsModal";
import ArticleWithComments from "../ArticleWithComments/ArticleWithComments";
import "./allArticlesSectionBlog.css";
import Image7 from "../../../assets/images/blog_page_img7.jpg";
import Image8 from "../../../assets/images/blog_page_img8.jpg";

const AllArticlesSectionBlog = ({ setModalOpen }) => {
  const AllArticleCardContent = [
    {
      id: 1,
      title: "Meet Our New Instructors 1",
      data: "August 27, 2025",
      description:
        "Your first kayaking trip can feel daunting, but with a little prep it quickly becomes a fun, rewarding adventure.",
      textContent:
        "The four thieves arrived on the south side of the Louvre on Sunday morning at 9:30 and pulled a truck up on the sidewalk, right next to the museum walls. They posed as workers, wearing yellow vests and setting out traffic cones. To anyone strolling along the banks of the Seine, just across the road, it might not have been immediately apparent that the setup was a ruse and that a daring robbery was underway. Workers are a common sight around the Louvre, an ancient, sprawling former palace, whose basic upkeep and renovations make it a constantly transforming construction site. <br><br> The four thieves arrived on the south side of the Louvre on Sunday morning at 9:30 and pulled a truck up on the sidewalk, right next to the museum walls. They posed as workers, wearing yellow vests and setting out traffic cones. To anyone strolling along the banks of the Seine, just across the road, it might not have been immediately apparent that the setup was a ruse and that a daring robbery was underway. Workers are a common sight around the Louvre, an ancient",
      image: Image7,
      likesAmount: 1,
      commentsAmount: 3,
    },
    {
      id: 2,
      title: "Meet Our New Instructors 2",
      data: "August 27, 2025",
      description:
        "Your first kayaking trip can feel daunting, but with a little prep it quickly becomes a fun, rewarding adventure.",
      textContent:
        "The four thieves arrived on the south side of the Louvre on Sunday morning at 9:30 and pulled a truck up on the sidewalk, right next to the museum walls. They posed as workers, wearing yellow vests and setting out traffic cones. To anyone strolling along the banks of the Seine, just across the road, it might not have been immediately apparent that the setup was a ruse and that a daring robbery was underway. Workers are a common sight around the Louvre, an ancient, sprawling former palace, whose basic upkeep and renovations make it a constantly transforming construction site. <br><br> The four thieves arrived on the south side of the Louvre on Sunday morning at 9:30 and pulled a truck up on the sidewalk, right next to the museum walls. They posed as workers, wearing yellow vests and setting out traffic cones. To anyone strolling along the banks of the Seine, just across the road, it might not have been immediately apparent that the setup was a ruse and that a daring robbery was underway. Workers are a common sight around the Louvre, an ancient",
      image: Image8,
      likesAmount: 1,
      commentsAmount: 3,
    },
    {
      id: 3,
      title: "Meet Our New Instructors 3",
      data: "August 27, 2025",
      description:
        "Your first kayaking trip can feel daunting, but with a little prep it quickly becomes a fun, rewarding adventure.",
      textContent:
        "The four thieves arrived on the south side of the Louvre on Sunday morning at 9:30 and pulled a truck up on the sidewalk, right next to the museum walls. They posed as workers, wearing yellow vests and setting out traffic cones. To anyone strolling along the banks of the Seine, just across the road, it might not have been immediately apparent that the setup was a ruse and that a daring robbery was underway. Workers are a common sight around the Louvre, an ancient, sprawling former palace, whose basic upkeep and renovations make it a constantly transforming construction site. <br><br> The four thieves arrived on the south side of the Louvre on Sunday morning at 9:30 and pulled a truck up on the sidewalk, right next to the museum walls. They posed as workers, wearing yellow vests and setting out traffic cones. To anyone strolling along the banks of the Seine, just across the road, it might not have been immediately apparent that the setup was a ruse and that a daring robbery was underway. Workers are a common sight around the Louvre, an ancient",
      image: Image7,
      likesAmount: 1,
      commentsAmount: 3,
    },
  ];

  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({});

  const closeBlogModal = () => {
    setBlogModalOpen(false);
    setModalOpen(false);
  };

  const openCurrentArticle = (currentArticle) => {
    setCurrentArticle(currentArticle);
    setBlogModalOpen(true);
    setModalOpen(true);
  };

  return (
    <section id="sectionThree" className="all-articles">
      <BlogsModal isModalOpen={blogModalOpen} closeModal={closeBlogModal}>
        <ArticleWithComments
          title={currentArticle.title}
          text={currentArticle.textContent}
          image={currentArticle.image}
          article={currentArticle}
        />
      </BlogsModal>
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
          image={AllArticleCardContent[0].image}
          textContent={AllArticleCardContent[0].textContent}
          article={AllArticleCardContent[0]}
          setModalOpen={setModalOpen}
        />
      </div>
      <div class="all-blogs-grid__item--col3">
        <CardList
          arr={AllArticleCardContent}
          subtitle={"article"}
          header={"All Articles And News"}
          callback={openCurrentArticle}
        />
      </div>
      <div class="all-blogs-grid__item--row2-col1">
        <ArticleCard
          subtitle={"New Routes Coming"}
          description={
            "We’re expanding our adventure map! This fall, explore three new routes across BC and Alberta — designed for a closer connection with nature and our signature comfort."
          }
          btnText={"Read article"}
          image={AllArticleCardContent[1].image}
          textContent={AllArticleCardContent[1].textContent}
          article={AllArticleCardContent[1]}
          setModalOpen={setModalOpen}
        />
      </div>
      <div class="all-blogs-grid__item--row2-col2">
        <ImageBlock image={Image8} alt={"Kayaking instructor"} />
      </div>
    </section>
  );
};

export default AllArticlesSectionBlog;
