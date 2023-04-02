const roomReservationModel = require("../models/roomReservation.model")
const checkoutModel = require("../models/checkout.model")

exports.addRoomReservation = async(req,res)=>{
    let x = await roomReservationModel.findRoomReservation(req.query)
    if (x == true) {
        // res.send("booked")   
        res.redirect("/Bookings")
    }else{
        // res.send("available")
        checkoutModel.data={
            roomType: req.roomType, noOfAdults: +req.noOfAdults, checkIn: req.checkIn, checkOut: req.checkOut 
        }
        checkoutModel.data.roomType = req.roomType
        console.log(req.query)
        res.redirect("/checkout")
    }
    
}

exports.getAllReservations = async(req,res)=>{
    res.send(await roomReservationModel.getAllReservations())
}