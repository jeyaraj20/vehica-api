const mongoose = require('mongoose')

const BikeSchema = new mongoose.Schema({
    vehicleNumber:String,
    brand:String,
    model: String,
    makingYear:String,
    price:String,
    kilometer:String,
    insurance:Date,
    fuelType:String,
    img1: String,
    img2:String,
    img3: String,
    img4: String,
    img5: String,
    img6:String,
    img7: String,
    img8: String,
    img9: String,
    img10:String,
    img11: String,
    img12: String
});

module.exports = mongoose.model('bike', BikeSchema);