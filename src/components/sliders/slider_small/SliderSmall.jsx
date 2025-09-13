import React from 'react'
import SliderButtons from '../../buttons/slider_buttons/SliderButtons'
import CardsSmall from '../../cards/cards_small/CardsSmall'
import './sliderSmall.css'

const SliderSmall = () => {
  
  return (
    <div className="slider-small">
      <div className="slider-small__controls">
        <SliderButtons />
      </div>
      <div className="slider-small__track">
        <CardsSmall subtitle={'difficulty: easy'} title={'Three-day expeditions for everyone'} btnText={'Book a tour'} />
        <CardsSmall subtitle={'difficulty: hard'} title={'Multi-day expeditions with camping '} btnText={'Book a tour'} />
        <CardsSmall subtitle={'difficulty: middle'} title={'Abroad routes beyond Canada’s borders '} btnText={'Book a tour'} />
      </div>
    </div>
  )
}

export default SliderSmall
