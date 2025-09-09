import React, { useState } from "react";
import "./staticLayout.css";
import BurgerMenuIcon from "../../../assets/icons/hamburger_menu.svg";

const StaticLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <div className="layout">
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
      <div className={`burgerMenu ${menuOpen ? "burgerMenu--open" : ""}`}>
        <button
          className="burgerMenu__close"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="burgerMenu__list">
          <li>
            <a href="/account">Account</a>
          </li>
          <li>
            <a href="/tours">Routes & Prices</a>
          </li>
          <li>
            <a href="/blogs">Our Blog</a>
          </li>
          <li>
              <select
                id="language"
                className="burgerMenu__lang-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
          </li>
        </ul>
      </div>
      <div className="layout__sidebar">tis is sidebar</div>
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default StaticLayout;
