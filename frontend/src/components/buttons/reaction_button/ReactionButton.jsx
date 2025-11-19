import React from 'react'
import './reactionButton.css'

const ReactionButton = ({ reactionsAmount, icon, onClick }) => {
  return (
    <button onClick={onClick} className="reaction-button__btn">{icon} {reactionsAmount} </button>
  )
}

export default ReactionButton
