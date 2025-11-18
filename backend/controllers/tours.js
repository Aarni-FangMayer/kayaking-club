const toursRouter = require("express").Router();
const Tour = require("../models/tour");
const User = require("../models/user");
const { authenticate, checkAdmin } = require("../utils/middleware"); // JWT
const logger = require("../utils/logger");

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
  Tour.findById(request.params.id)
    .then((tour) =>
      tour
        ? response.json(tour)
        : response.status(404).json({ error: "Tour not found" })
    )
    .catch((error) => next(error));
});

/* Adding a new tour (only for admin) */
toursRouter.post("/", checkAdmin, (request, response, next) => {
  const newTour = new Tour({
    ...request.body,
    accountId: request.body.accountId || [],
  });
  newTour
    .save()
    .then((savedTour) => response.status(201).json(savedTour))
    .catch((error) => next(error));
});

/* Updating an existing tour (only for admin) */
toursRouter.put("/:id", checkAdmin, (request, response, next) => {
  Tour.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedTour) =>
      updatedTour
        ? response.json(updatedTour)
        : response.status(404).json({ error: "Tour not found" })
    )
    .catch((error) => next(error));
});

/* Deleting a single tour (only for admin) */
toursRouter.delete("/:id", checkAdmin, (request, response) => {
  Tour.findByIdAndDelete(request.params.id)
    .then((deletedTour) =>
      deletedTour
        ? response.status(204).end()
        : response.status(404).json({ error: "Tour not found" })
    )
    .catch((error) => next(error));
});

/* Fetching a single tour for booking */
toursRouter.post("/:id/book", authenticate, (request, response, next) => {
  const tourId = request.params.id;
  const userId = request.body.user_id;

  console.log('UserId', userId, 'tourId', tourId)

  let tourData, userData;

  Tour.findById(tourId)
    .then((tour) => {
      if (!tour) return response.status(404).json({ error: "Tour not found" });
      tourData = tour;
      return User.findById(userId);
    })
    .then((user) => {
      if (!user) return response.status(404).json({ error: "User not found" });
      userData = user;

      if (!tourData.accountId.includes(userId)) tourData.accountId.push(userId);
      if (!userData.tours_id.includes(tourId)) userData.tours_id.push(tourId);

      return Promise.all([tourData.save(), userData.save()]);
    })
    .then(() =>
      response.status(200).json({ message: "Tour booked successfully" })
    )
    .catch((error) => next(error));
});

/* Cancel of booking a single tour */
toursRouter.delete("/:id/book", authenticate, (request, response, next) => {
  const tourId = request.params.id;
  const userId = request.body.user_id;

  console.log("Cancel booking → userId:", userId, "tourId:", tourId);
  logger.info("Cancel booking → userId:", userId, "tourId:", tourId)

  let tourData, userData;

  Tour.findById(tourId)
    .then((tour) => {
      if (!tour) return response.status(404).json({ error: "Tour not found" });
      tourData = tour;
      return User.findById(userId);
    })
    .then((user) => {
      if (!user) return response.status(404).json({ error: "User not found" });
      userData = user;

      const tourHasUser = tourData.accountId.includes(userId);
      const userHasTour = userData.tours_id.includes(tourId);

      if (!tourHasUser || !userHasTour) {
        return response
          .status(400)
          .json({ error: "User has not booked this tour" });
      }

      tourData.accountId = tourData.accountId.filter((id) => id.toString() !== userId);
      userData.tours_id = userData.tours_id.filter((id) => id.toString() !== tourId);

      return Promise.all([tourData.save(), userData.save()]);
    })
    .then(() => {
      return response
        .status(200)
        .json({ message: "Booking canceled successfully" });
    })
    .catch((error) => next(error));
});

/* Fetching userlist who have booked the tour (only for admin) */
toursRouter.get(
  "/:id/booked",
  authenticate,
  checkAdmin,
  (request, response, next) => {
    Tour.findById(request.params.id)
      .populate("accountId", "username email")
      .then((tour) =>
        tour
          ? response.json(tour.accountId)
          : response.status(404).json({ error: "Tour not found" })
      )
      .catch((error) => next(error));
  }
);

module.exports = toursRouter;
