import React from "react";
import './mobileHeader.css'

const MobileHeader = ( {setMenuOpen, menuOpen} ) => {
  return (
    <div className="layout__mobileHeader">
      <div className="header__logo">
        <a href="/">River pulse</a>
      </div>
      <div
        className="header__info-burgermenu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src="/hamburger_menu.png" alt="Menu" />
      </div>
    </div>
  );
};

export default MobileHeader;
