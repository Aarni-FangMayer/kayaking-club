import React from 'react'
import './reactionButton.css'

const ReactionButton = ({ reactionsAmount, icon }) => {
  return (
    <button className="reaction-button__btn">{icon} {reactionsAmount} </button>
  )
}

export default ReactionButton
