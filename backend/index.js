require("dotenv").config();
const express = require("express");
const path = require("path");
const Tour = require("./models/tour");

const app = express();

/* middleware to serve static frontend assets from the "dist" folder */
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

/* middleware json parser */
app.use(express.json());

/* middleware requestLogger */
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};
app.use(requestLogger);

/* Fetching all tours in list */
app.get("/api/tours", (request, response, next) => {
  Tour.find({})
    .then((tours) => {
      response.json(tours);
    })
    .catch(next);
});

/* Fetching a single tour */
app.get("/api/tours/:id", (request, response, next) => {
  const id = request.params.id;

  Tour.findById(id)
    .then((tour) => {
      if (tour) {
        response.json(tour);
      } else {
        response.status(404).json({ error: "Tour not found" });
      }
    })
    .catch((error) => next(error));
});

/* Adding a new tour */
app.post("/api/tours", (request, response, next) => {
  const {
    name,
    subtitle,
    description,
    difficulty,
    dateOfTrip,
    included,
    forBeginners,
    duration,
    price,
    image,
    accountId,
  } = request.body;

  const newTour = new Tour({
    name,
    subtitle,
    description,
    difficulty,
    dateOfTrip,
    included,
    forBeginners,
    duration,
    price,
    image,
    accountId: accountId || [],
  });

  newTour
    .save()
    .then((savedTour) => {
      response.status(201).json(savedTour);
    })
    .catch((error) => next(error));
});

/* Updating an existing tour */
app.put("/api/tours/:id", (request, response, next) => {
  const id = request.params.id;
  const updatedData = request.body;

  Tour.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true })
    .then((updatedTour) => {
      if (updatedTour) {
        response.json(updatedTour);
      } else {
        response.status(404).json({ error: "Tour not found" });
      }
    })
    .catch((error) => next(error));
});

/* Deleting a single tour */
app.delete("/api/tours/:id", (request, response) => {
  const id = request.params.id;
  Tour.findByIdAndDelete(id)
    .then((deletedTour) => {
      if (deletedTour) {
        response.status(204).end();
      } else {
        response.status(404).json({ error: "Tour not found" });
      }
    })
    .catch((error) => next(error));
});

app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ error: "unknown endpoint" });
  }

  res.sendFile(path.resolve(distPath, "index.html"));
});

/* middleware unknownEndpoint */
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

/* middleware  error handler */
const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
