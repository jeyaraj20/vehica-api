const bike = require('../model/bike');

module.exports = {

    createBike: async (req, res) => {

        try {

            if (!req.body.vehicleNumber) {
                return res.send({
                    message: "Please enter all the mandatory fields",
                    status: 0
                });
            }
            let bikedata = new bike(req.body);

            let findBike = await bikedata.save();

            return res.send({
                message: "bike record created successfully",
                status: 1,
                data: {
                    _id: findBike._id
                }
            });
        }
        catch (erorr) {

            return res.send({
                message: "Please enter all the mandatory fields",
                status: 0
            });
        }
    },
    updateBike: async (req, res) => {

        try {

            if (!req.body._id) {
                return res.send({
                    message: "Please enter a valid bike detail",
                    status: 0
                });
            }

            // let update = req.body;
            // delete update._id;

            let findBike = await bike.findOneAndUpdate({
                _id: req.body._id
            }, {
                $set: {
                    
                    vehicleNumber: req.body.vehicleNumber,
                    brand:req.body.brand,
                    model: req.body.model,
                    makingYear:req.body.makingYear,
                    price:req.body.price,
                    kilometer:req.body.kilometer,
                    insurance:req.body.insurance,
                    fuelType:req.body.fuelType,
                    img1: req.body.img1,
                    img2:req.body.img2,
                    img3: req.body.img3,
                    img4: req.body.img4,
                    img5: req.body.img5,
                    img6:req.body.img6,
                    img7: req.body.img7,
                    img8: req.body.img8,
                    img9: req.body.img9,
                    img10:req.body.img10,
                    img11: req.body.img11,
                    img12: req.body.img12
                }
            }, {
                new: true
            });

            if (!findBike) {

                return res.send({
                    message: "No Bike record found",
                    status: 0
                });
            }

            return res.send({
                message: "Bike record updated successfully",
                status: 1,
                data: findBike
            });

        } catch (err) {

            return res.send({
                message: "Please enter a valid Bike details",
                status: 0
            });
        }
    },

    deleteBike: async (req, res) => {

        try {

            if (!req.body._id) {
                return res.send({
                    message: "Please enter a valid Bike details",
                    status: 0
                });
            }

            let removeBike = await bike.remove({
                _id: req.body._id
            });

            if (!removeBike) {

                return res.send({
                    message: "No Bike record found",
                    status: 0
                });
            }

            return res.send({
                message: "Bike record deleted successfully",
                status: 1
            });

        } catch (err) {

            return res.send({
                message: "Please enter a valid Bike details",
                status: 0
            });
        }
    },


    getBike: async (req, res) => {

        try {

            if (!req.body._id) {
                return res.send({
                    message: "Please enter a valid bike details",
                    status: 0
                });
            }

            let findBike = await bike.findOne({
                 _id: req.body. _id
            });

            if (!findBike) {

                return res.send({
                    message: "No Bike record found",
                    status: 0
                });
            }

            return res.send({
                message: "Bike details",
                status: 1,
                data: findBike
            });

        } catch (err) {

            return res.send({
                message: "Please enter a valid Bike details",
                status: 0
            });
        }
    },


    getBikeList: async (req, res) => {

        try {

            let findBikes = await bike.find({});

            if (!findBikes) {

                return res.send({
                    message: "No Bike record found",
                    status: 1,
                    data: {
                        bikeList: []
                    }
                });
            }

            return res.send({
                message: "Bike List",
                status: 1,
                data: {
                    bikeList: findBikes
                }
            });

        } catch (err) {

            return res.send({
                message: "Please enter a valid bike details",
                status: 0
            });
        }
    },


}