import React from 'react'
import './decorationIcon.css'

const DecorationIcon = ( {icon, text} ) => {
  return (
    <div className='decoration-icon'>
      <div className="decoration-icon__icon"><img className='decor-icon' src={icon} alt="" /></div>
      <div className="decoration-icon__text subtitle">{text}</div>
    </div>
  )
}

export default DecorationIcon
