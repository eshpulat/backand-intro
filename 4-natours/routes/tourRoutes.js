const express = require('express');
const tourController = require('../controllers/tourControllers');

const router = express.Router();

// router.param("id", tourController.checkID);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTour, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthyPlan);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.UpdateTour)
  .delete(tourController.deleteTour);

module.exports = router;
