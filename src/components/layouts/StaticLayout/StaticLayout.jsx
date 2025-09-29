import React, { useState } from "react";

import Header from "../../navigation/header/Header";
import MobileHeader from "../../navigation/mobileHeader/MobileHeader";
import BurgerMenu from "../../navigation/burgerMenu/BurgerMenu";
import Sidebar from "../../navigation/sidebar/Sidebar";
import "./staticLayout.css";

const StaticLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <>
      <div className="layout">
        <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <MobileHeader setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <BurgerMenu
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
          language={language}
          setLanguage={setLanguage}
        />
        <div className="layout__main">
          <Sidebar />
          <div className="layout__content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default StaticLayout;
