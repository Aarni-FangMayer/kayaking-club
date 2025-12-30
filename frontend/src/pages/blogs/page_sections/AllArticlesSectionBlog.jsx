import React, { useState, useEffect } from "react";
import axios from "axios";
import blogsService from "../../../services/blogs";
import ArticleCard from "../../../components/cards/article_card/ArticleCard";
import ImageBlock from "../../../components/shared/ImageBlock";
import CardList from "../../../components/lists/CardList";
import BlogsModal from "../../../components/modals/blogsModal/BlogsModal";
import ArticleWithComments from "../ArticleWithComments/ArticleWithComments";
import "./allArticlesSectionBlog.css";
import Image7 from "../../../assets/images/blog_page_img7.jpg";
import Image8 from "../../../assets/images/blog_page_img8.jpg";

const AllArticlesSectionBlog = ({ setModalOpen }) => {
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

  const topLikedBlogs = blogList
    .slice()
    .sort((a, b) => (b.likes?.length || 0) - (a.likes?.length || 0))
    .slice(0, 5);

  const blogsByLikesAsc = blogList
    .slice()
    .sort((a, b) => (a.likes?.length || 0) - (b.likes?.length || 0));

  return (
    <section id="sectionThree" className="all-articles">
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
      <div className="all-blogs-grid__item--row1-col1">
        {topLikedBlogs.length > 1 && (
          <ImageBlock
            image={topLikedBlogs[3].image}
            alt={"Kayaking instructor"}
          />
        )}
      </div>
      <div className="all-blogs-grid__item--row1-col2">
        {topLikedBlogs.length > 0 && (
          <ArticleCard
            subtitle={topLikedBlogs[3].subtitle}
            description={topLikedBlogs[3].description}
            btnText={"Read article"}
            image={topLikedBlogs[3].image}
            textContent={topLikedBlogs[3].text}
            article={topLikedBlogs[3]}
            callback={openCurrentArticle}
            setModalOpen={setModalOpen}
          />
        )}
      </div>
      <div className="all-blogs-grid__item--col3">
        <CardList
          arr={blogsByLikesAsc}
          subtitle={"article"}
          header={"All Articles And News"}
          callback={openCurrentArticle}
        />
      </div>
      <div className="all-blogs-grid__item--row2-col1">
        {topLikedBlogs.length > 0 && (
          <ArticleCard
            subtitle={topLikedBlogs[4].subtitle}
            description={topLikedBlogs[4].description}
            btnText={"Read article"}
            image={topLikedBlogs[4].image}
            textContent={topLikedBlogs[4].text}
            article={topLikedBlogs[4]}
            callback={openCurrentArticle}
            setModalOpen={setModalOpen}
          />
        )}
      </div>
      <div className="all-blogs-grid__item--row2-col2">
        {topLikedBlogs.length > 1 && (
          <ImageBlock
            image={topLikedBlogs[4].image}
            alt={"Kayaking instructor"}
          />
        )}
      </div>
    </section>
  );
};

export default AllArticlesSectionBlog;
