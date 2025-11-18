import React, { useState } from "react";
import ArticleCardPromo from "../cards/article_card_promo/ArticleCardPromo";
import PaginationControl from "../buttons/pagination_control/PaginationControl";

import "./cardList.css";

const CardList = ({ header, arr, subtitle, callback }) => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(arr.length / itemsPerPage);

  const displayedCards = arr.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="cars-list">
      <div className="cars-list__content">
        <h3 className="cars-list-header">{header}</h3>
        {displayedCards.map((card) => {
          return (
            <li key={card.id} onClick={() => callback(card)}>
              <ArticleCardPromo
                tourName={card.name}
                tourDate={card.dateOfTrip}
                subtitle={subtitle}
              />
            </li>
          );
        })}
      </div>
      <div className="cars-list__controls">
        <PaginationControl
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CardList;
