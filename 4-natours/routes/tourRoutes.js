const express = require("express");
const tourController = require("./../controllers/tourControllers");

const router = express.Router();

router
    .route("/")
    .get(tourController.getAllTours)
    .post(tourController.createTour);
router
    .route("/:id")
    .get(tourController.getTour)
    .patch(tourController.UpdateTour)
    .delete(tourController.deleteTour);

module.exports = router;