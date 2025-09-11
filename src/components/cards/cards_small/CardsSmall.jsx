import React from 'react'
import ArrowWhiteButton from '../../buttons/arrow_white/ArrowWhiteButton'
import './cardsSmall.css'

const CardsSmall = ({subtitle, title, btnText}) => {
  return (
    <div className="cards-small">
      <p className="cards-small__subtitle subtitle">{subtitle}</p>
      <h4 className="cards-small__title">{title}</h4>
      <ArrowWhiteButton text={btnText} />
    </div>
  )
}

export default CardsSmall
