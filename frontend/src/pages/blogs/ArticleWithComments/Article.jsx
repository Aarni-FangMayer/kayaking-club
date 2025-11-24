import React, { useState } from "react";
import ReactionButton from "../../../components/buttons/reaction_button/ReactionButton";
import likesService from "../../../services/likes";
import { useAuth } from "../../../contexts/AuthContext";
import "./article.css";

const Article = ({
  title,
  text,
  image,
  comments,
  author,
  handleShare,
  dateOfPublication,
  article,
}) => {
  const { isAuth, userInfo } = useAuth();

  const [likes, setLikes] = useState(article.likes || []);

  const handleLike = (blogId) => {
    if (isAuth) {
      likesService
        .toggleLike(blogId, userInfo.id, userInfo.token)
        .then((response) => {
          setLikes(response.data.likes);
        })
        .catch((error) => console.error(error));
    } else {
      alert("Log in to like this post.");
    }
  };

  return (
    <div className="article">
      <h2 className="article__title">{title}</h2>
      <div
        className="article__text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <img className="article__image" src={image} />
      <div className="article__actions">
        <ReactionButton
          onClick={() => handleLike(article?.id)}
          icon={"❤️"}
          reactionsAmount={likes.length}
        />
        <ReactionButton icon={"💬"} reactionsAmount={comments} />
        <button className="article__share-btn" onClick={handleShare}>
          🔗 Share
        </button>
      </div>
      <div>
        <p className="article__date">
          date of publication {dateOfPublication}{" "}
        </p>
        <p className="article__date">author: {author}</p>
      </div>
    </div>
  );
};

export default Article;
