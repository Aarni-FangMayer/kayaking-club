import React, { useState, useEffect } from "react";
import StaticLayoutSingle from "../../components/layouts/staticLayoutSingle/StaticLayoutSingle";
import CardList from "../../components/lists/CardList";
import TextBlockWithHighlights from "../../components/shared/TextBlockWithHighlights";
import ProfileEditor from "../../components/shared/ProfileEditor";
import RoutesModal from "../../components/modals/routesModal/RoutesModal";
import SelectedTour from "../../pages/tours/toursCatalog/SelectedTour";
import toursService from "../../services/tours";
import blogsService from "../../services/blogs";
import { useAuth } from "../../contexts/AuthContext";
import "./admin.css";
import AvatarImage from "../../assets/images/avatar.png";

const Admin = () => {
  const { userInfo } = useAuth();

  const [allTours, setAllTours] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");

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
          <h3>Add new tour</h3>
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
          <h3>Add new blog</h3>
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
          <ProfileEditor userInfo={userInfo}/>
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
