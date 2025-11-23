import React, { useState, useEffect } from "react";
import blogsService from "../../services/blogs";
import "./addNewBlogForm.css";

const AddNewBlogForm = () => {
  const [blogs, setBlogs] = useState([]);

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
    blogsService
      .getAll()
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error loading blogs:", error));
  }, []);

  const handleBlogChange = (event) => {
    const { name, value } = event.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
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
    console.log("Blogs updated:", blogs);
  }, [blogs]);
  return (
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
  );
};

export default AddNewBlogForm;
