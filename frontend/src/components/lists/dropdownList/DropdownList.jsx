import React, { useState } from 'react'
import './dropdownList.css'
import ArrowDown from '../../../assets/icons/polygon_arrow_down.png'
import ArrowUp from '../../../assets/icons/polygon_arrow_up.png'

const DropdownList = ({listName, options, handleSelect}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
            <button className="dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
              {listName} {isOpen ? <img className="dropdown__toggle-image" src={ArrowUp} /> : <img className="dropdown__toggle-image" src={ArrowDown} />}
            </button>
            {isOpen && (
              <ul className="dropdown__menu">
                {options.map((option) => (
                  <li
                    key={option}
                    className="dropdown__item"
                    onClick={() => {handleSelect(option, listName); setIsOpen(false)}}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
  )
}

export default DropdownList
