import React from "react";
import ArticleCardPromo from "../cards/article_card_promo/ArticleCardPromo";
import PaginationControl from "../buttons/pagination_control/PaginationControl";
import "./cardList.css";

const CardList = ({ header, arr, subtitle }) => {
  return (
    <div className="cars-list">
      <div className="cars-list__content">
        <h3 className="cars-list-header">{header}</h3>
        {arr.map((card) => {
          return (
            <li key={arr.id}>
              <ArticleCardPromo
                title={card.title}
                data={card.data}
                subtitle={subtitle}
              />
            </li>
          );
        })}
      </div>
      <div className="cars-list__controls">
        <PaginationControl />
      </div>
    </div>
  );
};

export default CardList;
