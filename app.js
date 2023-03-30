const express = require("express");
const path = require("path");
const homeRouter = require("./routers/home.router");
const roomsRouter = require("./routers/rooms.router");
const diningRouter = require("./routers/dinning.router");
const bookingRouter = require("./routers/bookings.router");
const reservationRouter = require("./routers/reservation.router");
const successRouter = require("./routers/Success.router");
const errorRouter = require("./routers/error.router")

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "assets")));

app.use("/Rooms", roomsRouter);
app.use("/Dining", diningRouter);
app.use("/Bookings", bookingRouter);
app.use("/RestaurantReservation", reservationRouter);
app.use("/Success", successRouter);
app.get("/", homeRouter);
// app.use("",err)


app.listen(3000, () => {
  console.log("App running on port 3000");
});
