import React from "react";
import "./sidebar.css";

const Sidebar = ({ activeSection }) => {
  const sections = [
    { id: "sectionOne", number: 1 },
    { id: "sectionTwo", number: 2 },
    { id: "sectionThree", number: 3 },
    { id: "sectionFour", number: 4 },
  ];

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
              onClick={() =>
                document
                  .getElementById(s.id)
                  .scrollIntoView({ behavior: "smooth", block: "start" })
              }
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
          } else {
            document
              .getElementById("sectionFour")
              .scrollIntoView({ behavior: "smooth", block: "start" });
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
