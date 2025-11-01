import React, { useState, useEffect, useRef } from "react";

import Header from "../../navigation/header/Header";
import MobileHeader from "../../navigation/mobileHeader/MobileHeader";
import BurgerMenu from "../../navigation/burgerMenu/BurgerMenu";
import Sidebar from "../../navigation/sidebar/Sidebar";
import "./staticLayout.css";

const StaticLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [activeSection, setActiveSection] = useState("sectionOne");
  const buttonScrollRef = useRef(false)

  useEffect(() => {
    const sections = ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !buttonScrollRef.current) {
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



  const enhancedChild = React.isValidElement(children)
    ? React.cloneElement(children, { activeSection, setActiveSection })
    : children;

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
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} buttonScrollRef={buttonScrollRef}/>
          <div className="layout__content">{enhancedChild}</div>
        </div>
      </div>
    </>
  );
};

export default StaticLayout;
