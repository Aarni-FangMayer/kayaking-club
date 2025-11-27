import React, { useState, useEffect } from "react";
import toursService from "../../services/tours";
import { uploadImage } from "../../utils/uploadImage";
import "./addNewTourForm.css";

const AddNewTourForm = ({ userInfo }) => {
  const [tours, setTours] = useState([]);

  const [imageFile, setImageFile] = useState(null);

  const [newTour, setNewTour] = useState({
    name: "",
    subtitle: "",
    description: "",
    shortDescription: "",
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleTourChange = (event) => {
    const { name, value } = event.target;
    setNewTour((prev) => ({ ...prev, [name]: value }));
  };

  const addTour = async (event) => {
    event.preventDefault();
    console.log("newTour", newTour);

    let imageUrl = newTour.image;
    
    if (imageFile) {
      imageUrl = await uploadImage(imageFile, "tours");
    }

    const tourObject = {
      id: `tour-${Date.now().toString(36)}`,
      ...newTour,
      image: imageUrl,
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
        shortDescription: "",
        included: "",
        dateOfTrip: "",
        difficulty: "easy",
        forBeginners: "",
        duration: "",
        price: "",
        image: "",
      });
      setImageFile(null);
    });
  };

  useEffect(() => {
    console.log("Tours updated:", tours);
  }, [tours]);

  return (
    <form className="tours__form-fields" onSubmit={addTour}>
      <input
        className="tours__input input-tourname"
        name="name"
        type="text"
        value={newTour.name}
        onChange={handleTourChange}
        placeholder="tour name"
      />
      <input
        className="tours__input input-subtitle"
        type="text"
        name="subtitle"
        value={newTour.subtitle}
        onChange={handleTourChange}
        placeholder="tour subtitle"
      />
      <input
        className="tours__input shortDescription"
        type="text"
        name="shortDescription"
        value={newTour.shortDescription}
        onChange={handleTourChange}
        placeholder="tour short description"
      />
      <input
        className="tours__input input-included"
        type="text"
        name="included"
        value={newTour.included}
        onChange={handleTourChange}
        placeholder="what included"
      />
      <input
        className="tours__input input-date"
        type="text"
        name="dateOfTrip"
        value={newTour.dateOfTrip}
        onChange={handleTourChange}
        placeholder="tour date"
      />
      <input
        className="tours__input input-duration"
        type="text"
        name="duration"
        value={newTour.duration}
        onChange={handleTourChange}
        placeholder="duration"
      />
      <input
        className="tours__input input-price"
        type="number"
        name="price"
        value={newTour.price}
        onChange={handleTourChange}
        placeholder="price"
      />
      <input
        className="tours__input input-image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      <textarea
        className="tours__input input-description"
        name="description"
        value={newTour.description}
        onChange={handleTourChange}
        placeholder="tour description"
      />

      <label className="tours__form-label">
        Select difficulty
        <select
          className="form-select"
          name="difficulty"
          value={newTour.difficulty}
          onChange={handleTourChange}
        >
          <option className="form-select__option" value="hard">
            hard
          </option>
          <option className="form-select__option" value="middle">
            middle
          </option>
          <option className="form-select__option" value="easy">
            easy
          </option>
        </select>
      </label>
      <button className="tours__submit" type="submit">
        create new route
      </button>
    </form>
  );
};

export default AddNewTourForm;
