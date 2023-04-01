const roomReservationModel = require("../models/roomReservation.model")

exports.addRoomReservation = async(req,res)=>{
    let x = await roomReservationModel.findRoomReservation(req.query)
    if (x == true) {
        // res.send("booked")        
        res.redirect("/Bookings")
    }else{
        // res.send("available")
        res.redirect("/Purchase")
    }
    
}

exports.getAllReservations = async(req,res)=>{
    res.send(await roomReservationModel.getAllReservations())
}