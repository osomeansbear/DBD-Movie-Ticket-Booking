const express = require("express");
const router = express.Router();

const User = require("../Models/UserSchema");
const Movie = require("../Models/MovieSchema");
const Booking = require("../Models/BookingSchema");
const Screen = require("../Models/ScreenSchema");

router.get("/test", async (req, res) => {
  res.json({
    message: "Movie API is working",
  });
});

router.use(errorHandler);
module.exports = router;
