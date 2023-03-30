const router = require("express").Router();

router.use("/", (req, res, next) => {
  res.render("Success");
});

module.exports = router;
