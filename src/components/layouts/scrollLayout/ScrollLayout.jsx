import React, { useEffect, useRef, useState } from "react";
import "./scrollLayout.css";

const ScrollLayout = ({ sectionOne, sectionTwo, sectionThree, sectionFour, modalOpen, activeSection, setActiveSection, }) => {
  const sections = ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"];

  const sectionsRef = useRef({});

  useEffect(() => {
    if (modalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = parseInt(document.body.style.top || "0") * -1;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    }
  }, [modalOpen]);

  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e) => {
      if (modalOpen) return;
      e.preventDefault();
      if (isScrolling) return;

      isScrolling = true;

      let currentIndex = sections.indexOf(activeSection);
      if (currentIndex === -1) currentIndex = 0;

      const nextIndex =
        e.deltaY > 0
          ? Math.min(currentIndex + 1, sections.length - 1)
          : Math.max(currentIndex - 1, 0);

      const nextSectionId = sections[nextIndex];

      const nextEl = sectionsRef.current[nextSectionId];
      if (nextEl) {
        nextEl.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(nextSectionId);
      }

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection, modalOpen, setActiveSection]);

  useEffect(() => {
    const el = sectionsRef.current[activeSection];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeSection]);


  return (
    <div className="home-scroll-container">
      <section ref={(el) => (sectionsRef.current["sectionOne"] = el)}>
        {sectionOne}
      </section>
      <section ref={(el) => (sectionsRef.current["sectionTwo"] = el)}>
        {sectionTwo}
      </section>
      <section ref={(el) => (sectionsRef.current["sectionThree"] = el)}>
        {sectionThree}
      </section>
      <section ref={(el) => (sectionsRef.current["sectionFour"] = el)}>
        {sectionFour}
      </section>
    </div>
  );
};

export default ScrollLayout;
