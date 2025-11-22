import React, { useState, useEffect } from "react";
import axios from "axios";
import blogsService from "../../../services/blogs";
import ImageWithTitleBlock from "../../../components/shared/ImageWithTitleBlock";
import ImageBlock from "../../../components/shared/ImageBlock";
import ArticleCard from "../../../components/cards/article_card/ArticleCard";
import BlogsModal from "../../../components/modals/blogsModal/BlogsModal";
import ArticleWithComments from "../ArticleWithComments/ArticleWithComments";
import "./popularArticlesSectionBlog.css";
import Image4 from "../../../assets/images/blog_page_img4.jpg";
import Image5 from "../../../assets/images/blog_page_img5.jpg";
import Image6 from "../../../assets/images/blog_page_img6.jpg";

const PopularArticlesSectionBlog = ({ setModalOpen }) => {
  const [blogList, setBlogList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios.get("/api/users").then((res) => {
      setCurrentUser(res.data[0]);
    });
  }, []);

  useEffect(() => {
    blogsService.getAll().then((response) => {
      setBlogList(response.data);
    });
  }, []);

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
    <section id="sectionTwo" className="popular-blogs">
      <BlogsModal isModalOpen={blogModalOpen} closeModal={closeBlogModal}>
        <ArticleWithComments
          title={currentArticle.title}
          text={currentArticle.text}
          image={currentArticle.image}
          likes={currentArticle.likes}
          comments={currentArticle.comments}
          date={currentArticle.data}
          author={currentArticle.author}
          commentObject={currentArticle.commentObject}
          blogId={currentArticle.id}
          user={currentUser}
          article={currentArticle}
        />
      </BlogsModal>
      <div class="grid__item--row1-col1">
        {blogList.length > 0 && (
          <ArticleCard
            subtitle={blogList[0].subtitle}
            description={blogList[0].description}
            btnText={"Read article"}
            image={blogList[0].image}
            textContent={blogList[0].text}
            article={blogList[0]}
            callback={openCurrentArticle}
            setModalOpen={setModalOpen}
          />
        )}
      </div>
      <h2 className="grid__item--mobile-title">Popular Articles</h2>
      <div class="grid__item--row1-col2">
        <ImageWithTitleBlock image={Image4} title={"Popular Articles"} />
      </div>
      <div class="grid__item--row1-col3">
        {blogList.length > 0 && (
          <ArticleCard
            subtitle={blogList[1].subtitle}
            description={blogList[1].description}
            btnText={"Read article"}
            image={blogList[1].image}
            textContent={blogList[1].text}
            article={blogList[1]}
            callback={openCurrentArticle}
            setModalOpen={setModalOpen}
          />
        )}
      </div>
      <div class="grid__item--row2-col1">
        {blogList.length > 0 && (
          <ImageBlock image={blogList[2].image} alt={"Kayaks, sports equipment"} />
        )}
      </div>
      <div class="grid__item--row2-col2">
        {blogList.length > 0 && (
          <ArticleCard
            subtitle={blogList[2].subtitle}
            description={blogList[2].description}
            btnText={"Read article"}
            image={blogList[2].image}
            textContent={blogList[2].text}
            article={blogList[2]}
            callback={openCurrentArticle}
            setModalOpen={setModalOpen}
          />
        )}
      </div>
      <div class="grid__item--row2-col3">
        {blogList.length > 0 && (
          <ImageBlock image={blogList[1].image} alt={"Kayaks, sports equipment"} />
        )}
      </div>
    </section>
  );
};

export default PopularArticlesSectionBlog;
