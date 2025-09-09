import React, { useState } from "react";

import Header from "../../headers/Header/Header";
import MobileHeader from "../../headers/mobileHeader/MobileHeader";
import BurgerMenu from "../../headers/burgerMenu/BurgerMenu";
import "./staticLayout.css";

const StaticLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <div className="layout">
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <MobileHeader setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <BurgerMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} language={language} setLanguage={setLanguage} />
      <div className="layout__sidebar">tis is sidebar</div>
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default StaticLayout;
