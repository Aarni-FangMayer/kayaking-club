import React, { useState, useEffect } from "react";

import Header from "../../navigation/header/Header";
import MobileHeader from "../../navigation/mobileHeader/MobileHeader";
import BurgerMenu from "../../navigation/burgerMenu/BurgerMenu";
import Sidebar from "../../navigation/sidebar/Sidebar";
import "./staticLayout.css";

const StaticLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [activeSection, setActiveSection] = useState("sectionOne");

  useEffect(() => {
    const sections = ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
          <Sidebar activeSection={activeSection} />
          <div className="layout__content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default StaticLayout;
