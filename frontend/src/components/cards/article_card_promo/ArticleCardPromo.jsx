import React from "react";
import "./articleCardPromo.css";

const ArticleCardPromo = ({ subtitle, title, data, tourName, tourDate }) => {
  return (
    <div className="article-card-promo">
      <p className="article-card-promo-subtitle subtitle hide-block">{subtitle}</p>
      <h4 className="article-card-promo-title">{title}{tourName}</h4>
      <p className="article-card-promo-subtitle subtitle">{data}{tourDate}</p>
    </div>
  );
};

export default ArticleCardPromo;
