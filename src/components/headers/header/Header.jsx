import React from "react";
import './header.css'

const Header = ( {setMenuOpen, menuOpen })  => {

  return (
    <div className="layout__header">
      <div className="header__logo">
        <a href="/">River pulse</a>
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li>
            <a href="/tours">routes & prices</a>
          </li>
          <li>
            <a href="/blogs">our blog</a>
          </li>
        </ul>
      </nav>
      <div className="header_info">
        <div className="header__info-phonenumber">
          <a href="tel:+16548964712">+1 (654) 896-4712</a>
        </div>
        <div
          className="header__info-burgermenu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="/hamburger_menu.png" alt="Menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
