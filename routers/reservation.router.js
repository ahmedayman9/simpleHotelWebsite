const router = require("express").Router();

router.use("/", (req, res, next) => {
  res.render("RestaurantReservation");
});

module.exports = router;
