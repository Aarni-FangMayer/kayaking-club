import React from "react";
import CardList from "../../components/lists/CardList";
import StaticLayoutSingle from "../../components/layouts/staticLayoutSingle/StaticLayoutSingle";
import TextBlockWithHighlights from "../../components/shared/TextBlockWithHighlights";
import ProfileEditor from "../../components/shared/ProfileEditor";
import "./account.css";
import AvatarImage from '../../assets/images/avatar.png'

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
          <TextBlockWithHighlights
            title={"Hello, Name Name"}
            subtitle={"Welcome to your personal account"}
            describtion={
              "Here you can change your personal information and see your upcoming reservations. As a registered River Pulse member, you can comment on blog posts and interact with other users in the comments."
            }
            highlight={"Visit the Routes page to book your next trip!"}
            addRouteBtnText={""}
            addPostBtnText={""}
          />
          <ProfileEditor avatarImg={AvatarImage} />
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
