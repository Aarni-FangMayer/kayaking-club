import React from "react";
import "./sidebar.css";

const Sidebar = ({ activeSection, setActiveSection, buttonScrollRef }) => {
  const sections = [
    { id: "sectionOne", number: 1 },
    { id: "sectionTwo", number: 2 },
    { id: "sectionThree", number: 3 },
    { id: "sectionFour", number: 4 },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      buttonScrollRef.current = true;
      setActiveSection(id);
      setTimeout(() => {
        buttonScrollRef.current = false;
      }, 800);
    } else {
      console.warn(`Element with id ${id} not found.`);
    }
  };

  return (
    <div className="layout__sidebar">
      <div className="layout__sidebar-nav">
        <div className="layout__sidebar-nav__line">
          {sections.map((s) => (
            <div
              key={s.id}
              className={`layout__sidebar-nav__dot ${
                activeSection === s.id ? "layout__sidebar-nav__dot--active" : ""
              }`}
            />
          ))}
        </div>
        <div className="layout__sidebar-nav__slide-numbers">
          {sections.map((s) => (
            <div
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`layout__sidebar-nav__number ${
                activeSection === s.id
                  ? "layout__sidebar-nav__number--active"
                  : ""
              }`}
            >
              {s.number}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          if (activeSection === "sectionFour") {
            document
              .getElementById("sectionOne")
              .scrollIntoView({ behavior: "smooth", block: "start" });
            scrollToSection(sections[0].id);
            
          } else {
            document
              .getElementById("sectionFour")
              .scrollIntoView({ behavior: "smooth", block: "start" });
              scrollToSection(sections[3].id);
          }
        }}
        className={`layout__sidebar-to-top ${
          activeSection === "sectionFour"
            ? "layout__sidebar-to-top--active"
            : ""
        }`}
      >
        <img src="/arrow_btn.png" alt="" />
        {activeSection === "sectionFour" ? "back to top" : "contacts"}
      </button>
    </div>
  );
};

export default Sidebar;
