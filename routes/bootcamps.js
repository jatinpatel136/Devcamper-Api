const express = require('express');

const router = express.Router();

const { createBootcamp, deleteBootcamp, getBootcamp, getBootcamps, updateBootcamp, getBootcampInRadius, bootcampPhotoUpload } = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults')
const { protect, authorize } = require('../middleware/auth');

// Include other resource routers
const courseRouters = require('./courses');

//Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouters)

router.route('/radius/:zipcode/:distance').get(getBootcampInRadius)

router.route('/:id/photo').put(protect, authorize('publisher', 'admin'), bootcampPhotoUpload)

router.route('/').get(advancedResults(Bootcamp, 'courses'), getBootcamps).post(protect, authorize('publisher', 'admin'), createBootcamp);

router.route('/:id').get(getBootcamp).put(protect, authorize('publisher', 'admin'), updateBootcamp).delete(protect, authorize('publisher', 'admin'), deleteBootcamp);

module.exports = router;