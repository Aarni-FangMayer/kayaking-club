import React from "react";
import ReactionButton from "../../../components/buttons/reaction_button/ReactionButton";
import "./article.css";

const Article = ({ title, text, image, handleShare, dateOfPublication, article }) => {
  return (
    <div className="article">
      <h2 className="article__title">{title}</h2>
      <div
        className="article__text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <img className="article__image" src={image} />
      <div className="article__actions">
        <ReactionButton reactionsAmount={article.likesAmount} icon={"❤️"} />
        <ReactionButton reactionsAmount={article.commentsAmount} icon={"💬"} />
        <button className="article__share-btn" onClick={handleShare}>
          🔗 Share
        </button>
      </div>
      <p className="article__date">date of publication 20-10-2025 {dateOfPublication}</p>
      <p className="article__date">author Admin F.</p>
    </div>
  );
};

export default Article;
