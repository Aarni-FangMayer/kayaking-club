import React from "react";
import "./selectedTour.css";
import ArrowBack from "../../../assets/icons/arrow_back.png";
import { useAuth } from "../../../contexts/AuthContext";
import toursService from "../../../services/tours";

const SelectedTour = ({
  currentTour,
  handleChangeSelectedTour,
  showBackButton = true,
}) => {
  const { isAuth, userInfo } = useAuth();

  const details = [
    { label: "difficulty", value: currentTour.difficulty },
    { label: "date of trip", value: currentTour.dateOfTrip },
    { label: "included", value: currentTour.included },
    { label: "duration", value: currentTour.duration },
  ];

  const isBooked = currentTour.accountId?.includes(userInfo.id);

  const handleBookButton = () => {
    if (isAuth) {
      const body = {
        user_id: userInfo.id,
      };

      const header = {
        headers: {
          Authorization: `bearer ${userInfo.token}`,
        },
      };

      if (!isBooked) {
        toursService
          .book(currentTour.id, body, header)
          .then((response) => {
            console.log("Book response", response);
            if (response.status === 200) {
              alert("You have successfully booked the tour!");
              // setBooked(true);
            } else {
              alert("Oops... Something went wrong :(");
            }
          })
          .catch((error) => console.error(error));
      } else {
        toursService
          .bookCancel(currentTour.id, body, header)
          .then((response) => {
            console.log("Cancel response", response);
            if (response.status === 200) {
              alert("Your booking has been canceled.");
              // setBooked(false);
            } else {
              alert("Oops... Something went wrong while canceling :(");
            }
          })
          .catch((error) => console.error(error));
      }
    } else {
      alert("Please register to be able to book tours.");
    }
  };

  if (!currentTour) return null;

  return (
    <>
      {showBackButton ? (
        <button
          className="selected-tour__back-button"
          onClick={handleChangeSelectedTour}
        >
          <img src={ArrowBack} alt="" /> Back To All Routes
        </button>
      ) : (
        <div className="selected-tour__spacer"></div>
      )}
      <div className="selected-tour">
        <div className="selected-tour__content">
          <h2 className="selected-tour__title">{currentTour.name}</h2>
          <h3 className="selected-tour__subtitle">{currentTour.subtitle}</h3>
          <p className="selected-tour__description">
            {currentTour.description}
          </p>
          <div className="selected-tour__details">
            {details.map((item) => (
              <div key={item.label} className="subtitle selected-tour__detail">
                {item.label}: {item.value}
              </div>
            ))}
          </div>
          <button onClick={handleBookButton} className="selected-tour__button">
            {isBooked ? "Cancel booking" : "Book this route"}
          </button>
          <div className="selected-tour__price">
            Price: {currentTour.price} €
          </div>
        </div>

        <div className="selected-tour__image-block">
          <img
            src={currentTour.image}
            alt="Tour image"
            className="selected-tour__image"
          />
        </div>
      </div>
    </>
  );
};

export default SelectedTour;
