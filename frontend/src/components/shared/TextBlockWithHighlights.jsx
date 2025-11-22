import React, { useState, useEffect } from "react";
import toursService from "../../services/tours";
import blogsService from "../../services/blogs";
import { useAuth } from "../../contexts/AuthContext";
import "./textBlockWithHighlights.css";

const TextBlockWithHighlights = ({
  title,
  subtitle,
  describtion,
  highlight,
  addRouteBtnText,
  addPostBtnText,
}) => {
  const { userInfo } = useAuth();

  const [tours, setTours] = useState([]);
  const [blogs, setBlogs] = useState([]);

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

  const [newBlog, setNewBlog] = useState({
    title: "",
    subtitle: "",
    text: "",
    description: "",
    image: "",
    data: new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    author: "Admin F.",
  });

  useEffect(() => {
    toursService
      .getAll()
      .then((response) => setTours(response.data))
      .catch((error) => console.error("Error loading tours:", error));
  }, []);

  useEffect(() => {
    blogsService
      .getAll()
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error loading blogs:", error));
  }, []);

  const handleTourChange = (event) => {
    const { name, value } = event.target;
    setNewTour((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlogChange = (event) => {
    const { name, value } = event.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  const addTour = (event) => {
    event.preventDefault();
    console.log("newTour", newTour);

    const tourObject = {
      id: `tour-${Date.now().toString(36)}`,
      ...newTour,
      userRole: userInfo.role
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

  const addBlog = (event) => {
    event.preventDefault();

    const blogObject = {
      id: `blog-${Date.now().toString(36)}`,
      data: new Date().toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      author: "Admin F.",
      ...newBlog,
    };

    blogsService.create(blogObject).then((response) => {
      setBlogs((prev) => prev.concat(response.data));
      setNewBlog({
        title: "",
        subtitle: "",
        text: "",
        description: "",
        data: new Date().toLocaleDateString("en-CA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        author: "Admin F.",
        image: "",
      });
    });
  };

  useEffect(() => {
    console.log("Tours updated:", tours);
  }, [tours]);

  useEffect(() => {
    console.log("Blogs updated:", blogs);
  }, [blogs]);

  return (
    <div className="account__intro">
      <h2 className="account__greeting">{title}</h2>
      <div className="account__intro-text">
        <h3 className="account__subtitle">{subtitle}</h3>
        <p className="account__description">{describtion}</p>
        <p className="account__highlight">{highlight}</p>
      </div>
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
      <div className="account__buttons">
        {addRouteBtnText && (
          <button className="admin-btn add-routes-btn">
            {addRouteBtnText}
          </button>
        )}
        {addPostBtnText && (
          <button className="admin-btn add-post-btn">{addPostBtnText}</button>
        )}
      </div>
      <form onSubmit={addBlog}>
        <input
          onChange={handleBlogChange}
          type="text"
          name="title"
          value={newBlog.title}
          placeholder="add title"
        />
        <input
          onChange={handleBlogChange}
          type="text"
          name="subtitle"
          value={newBlog.subtitle}
          placeholder="add subtitle"
        />
        <input
          onChange={handleBlogChange}
          type="text"
          name="description"
          value={newBlog.description}
          placeholder="add short description"
        />
        <input
          onChange={handleBlogChange}
          type="text"
          name="image"
          value={newBlog.image}
          placeholder="add image"
        />
        <textarea
          onChange={handleBlogChange}
          name="text"
          value={newBlog.text}
          placeholder="add text"
        ></textarea>
        <button type="submit">add blog</button>
      </form>
    </div>
  );
};

export default TextBlockWithHighlights;
