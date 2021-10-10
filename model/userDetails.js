var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDetailsSchema = new Schema({
  
  customerName: {
    type: String
  },
  mobileNo: {
    type: String
  },
  currentLocation: {
    type: String
  },
  vehicleType: {
    type: String
  },
  vehicleName: {
    type: String
  },
  
  vehicleModel: {
    type: String
  },
  
  vehicleNo: {
    type: String
  },
  
  insurance: {
    type: String
  },
  
  fc: {
    type: String
  },
  
  kiloMeter: {
    type: String
  },
  
  fuelType: {
    type: String
  },
  
  price: {
    type: String
  },
  created_at: {
    type: Date,
    default:new Date()
  },
  updated_at: {
    type: Date,
    default:new Date()
  }
}, { collection: 'userDetails' });

module.exports = mongoose.model('userDetail', userDetailsSchema);
