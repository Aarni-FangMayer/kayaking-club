import React, { useState, useEffect } from "react";
import CardList from "../../components/lists/CardList";
import StaticLayoutSingle from "../../components/layouts/staticLayoutSingle/StaticLayoutSingle";
import TextBlockWithHighlights from "../../components/shared/TextBlockWithHighlights";
import ProfileEditor from "../../components/shared/ProfileEditor";
import RoutesModal from "../../components/modals/routesModal/RoutesModal";
import SelectedTour from "../../pages/tours/toursCatalog/SelectedTour"
import toursService from "../../services/tours";
import { useAuth } from "../../contexts/AuthContext";
import "./account.css";
import AvatarImage from "../../assets/images/avatar.png";

const Account = () => {
  const { isAuth, userInfo } = useAuth();

  const [allTours, setAllTours] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTour("");
  };

  useEffect(() => {
    toursService.getAll().then((response) => {
      setAllTours(response.data);
    });
  }, []);

  if (!isAuth) {
    return <div>Please log in</div>;
  }

  const bookedToursList = allTours.filter((tour) =>
    tour.accountId.includes(userInfo.id)
  );

  console.log("All tours list: ", allTours);
  console.log("Only booked tours list: ", bookedToursList);
  console.log("Selected tour: ", selectedTour)

  return (
    <StaticLayoutSingle>
      <div className="account">
        <div className="account__user">
          <TextBlockWithHighlights
            title={`Hello, ${userInfo.username}`}
            subtitle={"Welcome to your personal account"}
            describtion={
              "Here you can change your personal information and see your upcoming reservations. As a registered River Pulse member, you can comment on blog posts and interact with other users in the comments."
            }
            highlight={"Visit the Routes page to book your next trip!"}
            addRouteBtnText={""}
            addPostBtnText={""}
          />
          <ProfileEditor avatarImg={AvatarImage} userInfo={userInfo} />
        </div>
        <div className="account__bookings">
          <CardList
            header={"Your Booked Expeditions"}
            arr={bookedToursList}
            subtitle={"expedition"}
            callback={(card) => {
              setSelectedTour(card);
              setModalOpen(true);
            }}
          />
        </div>
      </div>
      <RoutesModal isModalOpen={modalOpen} closeModal={closeModal}>
        <SelectedTour currentTour={selectedTour} />
      </RoutesModal>
    </StaticLayoutSingle>
  );
};

export default Account;
