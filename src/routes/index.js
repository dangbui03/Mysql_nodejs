const express = require('express');
const router = express.Router();

const movie = require('./movie.route');
const movieScreening = require('./movieScreening.route')
const room = require('./room.route')
const customer = require('./customer.route')
const gift = require('./present.route')

router.use('/', [movie, movieScreening, room, customer, gift]);


module.exports = router;