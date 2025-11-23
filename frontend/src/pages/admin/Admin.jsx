import React, { useState, useEffect } from "react";
import StaticLayoutSingle from "../../components/layouts/staticLayoutSingle/StaticLayoutSingle";
import CardList from "../../components/lists/CardList";
import TextBlockWithHighlights from "../../components/shared/TextBlockWithHighlights";
import Accordion from "../../components/shared/Accordion";
import ProfileAvatar from "../../components/shared//ProfileAvatar";
import ProfileForm from "../../components/forms/ProfileForm";
import AddNewTourForm from "../../components/forms/AddNewTourForm";
import AddNewBlogForm from "../../components/forms/AddNewBlogForm";
import RoutesModal from "../../components/modals/routesModal/RoutesModal";
import SelectedTour from "../../pages/tours/toursCatalog/SelectedTour";
import toursService from "../../services/tours";
import { useAuth } from "../../contexts/AuthContext";
import "./admin.css";
import AvatarImage from "../../assets/images/avatar.png";

const Admin = () => {
  const { userInfo } = useAuth();

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

  const allBookedToursList = allTours.filter(
    (tour) => tour.accountId.length > 0
  );

  return (
    <StaticLayoutSingle>
      <div className="account">
        <div className="account__user">
          <TextBlockWithHighlights
            title={`Hello, ${userInfo.username}`}
            subtitle={"Welcome to admin page"}
            describtion={
              "Here you can change your personal information, see all upcoming expeditions, write new posts to blog and add extra routes to booking. As a registered River Pulse member, you can also comment on blog posts and interact with other users in the comments."
            }
            highlight={""}
          />
          <Accordion title={"Add New Tour"}><AddNewTourForm userInfo={userInfo}/></Accordion>
          <Accordion title={"Add New Blog"}><AddNewBlogForm/></Accordion>
          <Accordion title={"Edit profile"}>
            <ProfileAvatar avatarImg={AvatarImage} btnText={"change avatar"} />
            <ProfileForm
              placeholderName={`Current name: ${userInfo.username}`}
              placeholderEmail={`Current email: ${userInfo.email}`}
              placeholderPhone={`Current phone: ${userInfo.phone}`}
              btnText={"Save"}
            />
          </Accordion>
        </div>
        <div className="account__bookings">
          <CardList
            header={"All Upcoming Expeditions"}
            arr={allBookedToursList}
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

export default Admin;
