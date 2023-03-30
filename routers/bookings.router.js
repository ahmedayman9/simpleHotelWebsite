const router = require("express").Router();

router.use("/", (req, res, next) => {
  res.render("Bookings");
});

module.exports = router;
