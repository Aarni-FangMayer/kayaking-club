import React, { useState, useEffect } from "react";
import toursService from "../../services/tours";
import "./addNewTourForm.css";

const AddNewTourForm = ({ userInfo }) => {
  const [tours, setTours] = useState([]);

  const [newTour, setNewTour] = useState({
    name: "",
    subtitle: "",
    description: "",
    included: "",
    dateOfTrip: "",
    difficulty: "easy",
    forBeginners: "",
    duration: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    toursService
      .getAll()
      .then((response) => setTours(response.data))
      .catch((error) => console.error("Error loading tours:", error));
  }, []);

  const handleTourChange = (event) => {
    const { name, value } = event.target;
    setNewTour((prev) => ({ ...prev, [name]: value }));
  };

  const addTour = (event) => {
    event.preventDefault();
    console.log("newTour", newTour);

    const tourObject = {
      id: `tour-${Date.now().toString(36)}`,
      ...newTour,
      userRole: userInfo.role,
    };
    const header = {
      headers: {
        Authorization: `bearer ${userInfo.token}`,
      },
    };
    toursService.create(tourObject, header).then((response) => {
      setTours((prev) => prev.concat(response.data));
      setNewTour({
        name: "",
        subtitle: "",
        description: "",
        included: "",
        dateOfTrip: "",
        difficulty: "easy",
        forBeginners: "",
        duration: "",
        price: "",
        image: "",
      });
    });
  };

  useEffect(() => {
    console.log("Tours updated:", tours);
  }, [tours]);

  return (
    <form onSubmit={addTour}>
      <input
        name="name"
        type="text"
        value={newTour.name}
        onChange={handleTourChange}
        placeholder="tour name"
      />
      <input
        type="text"
        name="subtitle"
        value={newTour.subtitle}
        onChange={handleTourChange}
        placeholder="tour subtitle"
      />
      <input
        type="text"
        name="description"
        value={newTour.description}
        onChange={handleTourChange}
        placeholder="tour description"
      />
      <input
        type="text"
        name="included"
        value={newTour.included}
        onChange={handleTourChange}
        placeholder="what included"
      />
      <input
        type="text"
        name="dateOfTrip"
        value={newTour.dateOfTrip}
        onChange={handleTourChange}
        placeholder="tour date"
      />
      <select
        name="difficulty"
        value={newTour.difficulty}
        onChange={handleTourChange}
      >
        <option value="hard">hard</option>
        <option value="middle">middle</option>
        <option value="easy">easy</option>
      </select>
      <span>Is it beginners friendely?</span>
      <label htmlFor="">
        <input
          type="radio"
          name="forBeginners"
          value="yes"
          checked={newTour.forBeginners === "yes"}
          onChange={handleTourChange}
        />
        yes
      </label>{" "}
      <label htmlFor="">
        <input
          type="radio"
          name="forBeginners"
          value="no"
          checked={newTour.forBeginners === "no"}
          onChange={handleTourChange}
        />
        no
      </label>
      <input
        type="text"
        name="duration"
        value={newTour.duration}
        onChange={handleTourChange}
        placeholder="duration"
      />
      <input
        type="number"
        name="price"
        value={newTour.price}
        onChange={handleTourChange}
        placeholder="price"
      />
      <input
        type="text"
        name="image"
        value={newTour.image}
        onChange={handleTourChange}
        placeholder="image"
      />
      <button type="submit">create new route</button>
    </form>
  );
};

export default AddNewTourForm;
