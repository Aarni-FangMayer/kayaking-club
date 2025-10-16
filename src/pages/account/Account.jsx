import React from "react";
import CardList from "../../components/lists/CardList";
import StaticLayoutSingle from "../../components/layouts/staticLayoutSingle/StaticLayoutSingle";
import "./account.css";

const Account = () => {
  const bookedTours = [
    {
      id: 1,
      title: "Tour adventure #1",
      data: "12 jan",
    },
    {
      id: 2,
      title: "Tour adventure #2",
      data: "1 okt",
    },
    {
      id: 3,
      title: "Tour adventure #3",
      data: "24 sep",
    },
    {
      id: 4,
      title: "Tour adventure #4",
      data: "3 mar",
    },
  ];
  return (
    <StaticLayoutSingle>
      <div className="account">
        <div className="account__user">
          <div className="account__intro">
            <h2 className="account__greeting">Hello, Name Name</h2>
            <div className="account__intro-text">
              <h3 className="account__subtitle">
                Welcome to your personal account
              </h3>
              <p className="account__description">
                Here you can change your personal information and see your
                upcoming reservations. As a registered River Pulse member, you
                can comment on blog posts and interact with other users in the
                comments.{" "}
                <span className="account__highlight">
                  Visit the Routes page to book your next trip!
                </span>
              </p>
            </div>
          </div>
          <div className="account__edit">
            <h3 className="account__edit-title">Edit profile</h3>
            <div className="account__edit-content">
              <div className="account__avatar">
                <img
                  src=""
                  alt="User avatar"
                  className="account__avatar-image"
                />
                <button className="account__avatar-button">
                  change avatar
                </button>
              </div>
              <div className="account__form">
                <form className="account__form-fields">
                  <input
                    type="text"
                    placeholder="Name Name"
                    className="account__input"
                  />
                  <input
                    type="email"
                    placeholder="email@gmail.com"
                    className="account__input"
                  />
                  <input
                    type="number"
                    placeholder="40 856 6545"
                    className="account__input"
                  />
                </form>
                <button className="account__save-button">Save</button>
              </div>
            </div>
          </div>
        </div>
        <div className="account__bookings">
          <CardList
            header={"Your Booked Expeditions"}
            arr={bookedTours}
            subtitle={"expedition"}
          />
        </div>
      </div>
    </StaticLayoutSingle>
  );
};

export default Account;
