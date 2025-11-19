const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const { authenticate } = require("../utils/middleware");

/* Fetching all blogs in list */
blogsRouter.get("/", (request, response, next) => {
  Blog.find({})
    .then((blogs) => {
      response.json(blogs);
    })
    .catch(next);
});

/* Fetching a single blog */
blogsRouter.get("/:id", (request, response, next) => {
  const id = request.params.id;

  Blog.findById(id)
    .then((blog) => {
      if (blog) {
        response.json(blog);
      } else {
        response.status(404).json({ error: "Blog not found" });
      }
    })
    .catch((error) => next(error));
});

/* Adding a new blog */
blogsRouter.post("/", (request, response, next) => {
  const {
    title,
    subtitle,
    text,
    likes,
    comments,
    commentObject,
    data,
    author,
    image,
  } = request.body;

  const newBlog = new Blog({
    title,
    subtitle,
    text,
    likes,
    comments,
    commentObject,
    data,
    author,
    image,
  });

  newBlog
    .save()
    .then((savedBlog) => {
      response.status(201).json(savedBlog);
    })
    .catch((error) => next(error));
});

/* Updating an existing blog */
blogsRouter.put("/:id", (request, response, next) => {
  const id = request.params.id;
  const updatedData = request.body;

  Blog.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true })
    .then((updatedBlog) => {
      if (updatedBlog) {
        response.json(updatedBlog);
      } else {
        response.status(404).json({ error: "Blog not found" });
      }
    })
    .catch((error) => next(error));
});

/* Deleting a single blog */
blogsRouter.delete("/:id", (request, response) => {
  const id = request.params.id;
  Blog.findByIdAndDelete(id)
    .then((deletedBlog) => {
      if (deletedBlog) {
        response.status(204).end();
      } else {
        response.status(404).json({ error: "Blog not found" });
      }
    })
    .catch((error) => next(error));
});

/* Adding a new comment to a specific blog */
blogsRouter.post("/:id/comments", (request, response, next) => {
  const blogId = request.params.id;
  const newComment = request.body;

  Blog.findById(blogId)
    .then((blog) => {
      if (!blog) {
        return response.status(404).json({ error: "Blog not found" });
      }

      blog.commentObject.push(newComment);
      blog.comments = blog.commentObject.length;

      return blog.save();
    })
    .then((savedBlog) => {
      const addedComment =
        savedBlog.commentObject[savedBlog.commentObject.length - 1];
      response.status(201).json(addedComment);
    })
    .catch(next);
});

/* Adding likes to a specific blog */
blogsRouter.put("/:id/like", (request, response, next) => {
  const blogId = request.params.id;
  const userId = request.body.userId;

  Blog.findById(blogId)
    .then((blog) => {
      if (!blog) {
        return response.status(404).json({ error: "Blog not found" });
      }

      const index = blog.likes.indexOf(userId);

      if (index === -1) {
        blog.likes.push(userId);
      } else {
        blog.likes.splice(index, 1);
      }

      return blog.save();
    })
    .then((updatedBlog) => {
      response.status(200).json({ likes: updatedBlog.likes });
    })
    .catch((error) => next(error));
});

module.exports = blogsRouter;
