import React from "react";
import "./articleCardPromo.css";

const ArticleCardPromo = ({ subtitle, title, data }) => {
  return (
    <div className="article-card-promo">
      <p class="article-card-promo-subtitle subtitle hide-block">{subtitle}</p>
      <h4 className="article-card-promo-title">{title}</h4>
      <p class="article-card-promo-subtitle subtitle">{data}</p>
    </div>
  );
};

export default ArticleCardPromo;
