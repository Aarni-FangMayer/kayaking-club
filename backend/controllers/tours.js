const toursRouter = require("express").Router();
const Tour = require("../models/tour");

/* Fetching all tours in list */
toursRouter.get("/", (request, response, next) => {
  Tour.find({})
    .then((tours) => {
      response.json(tours);
    })
    .catch(next);
});

/* Fetching a single tour */
toursRouter.get("/:id", (request, response, next) => {
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
toursRouter.post("/", (request, response, next) => {
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
toursRouter.put("/:id", (request, response, next) => {
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
toursRouter.delete("/:id", (request, response) => {
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

module.exports = toursRouter;