import React from 'react'
import './sidebarSinglePage.css'
const SidebarSinglePage = () => {
  return (
    <div className="layout__sidebar">
      <div className="layout__sidebar-nav">
        <div className="layout__sidebar-nav__line">
          <div className="layout__sidebar-nav__dot layout__sidebar-nav__dot--active" />
          <div className="layout__sidebar-nav__dot" />
          <div className="layout__sidebar-nav__dot" />
          <div className="layout__sidebar-nav__dot" />
        </div>
        <div className="layout__sidebar-nav__slide-numbers">
          <div
            onClick={() =>
              document
                .getElementById("main")
                .scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="layout__sidebar-nav__number layout__sidebar-nav__number--active"
          >
            1
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          document.getElementById("contacts").scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
        className="layout__sidebar-to-top"
      >
        <img src="/arrow_btn.png" alt="" />
        contacts
      </button>
    </div>
  )
}

export default SidebarSinglePage
