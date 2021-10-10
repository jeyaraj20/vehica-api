const car = require('../model/car');

module.exports = {

    createCar: async (req, res) => {

        try {

            if (!req.body.vehicleNumber) {
                return res.send({
                    message: "Please enter all the mandatory fields",
                    status: 0
                });
            }
            let cardata = new car(req.body);

            let findCar = await cardata.save();

            return res.send({
                message: "car record created successfully",
                status: 1,
                data: {
                    _id: findCar._id
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
    updateCar: async (req, res) => {

        try {

            if (!req.body._id) {
                return res.send({
                    message: "Please enter a valid car detail",
                    status: 0
                });
            }

            // let update = req.body;
            // delete update._id;

            let findCar = await car.findOneAndUpdate({
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
                    carType:req.body.carType,
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

            if (!findCar) {

                return res.send({
                    message: "No Car record found",
                    status: 0
                });
            }

            return res.send({
                message: "Car record updated successfully",
                status: 1,
                data: findCar
            });

        } catch (err) {

            return res.send({
                message: "Please enter a valid Car details",
                status: 0
            });
        }
    },

    deleteCar: async (req, res) => {

        try {

            if (!req.body._id) {
                return res.send({
                    message: "Please enter a valid Car details",
                    status: 0
                });
            }

            let removeCar = await car.remove({
                _id: req.body._id
            });

            if (!removeCar) {

                return res.send({
                    message: "No Car record found",
                    status: 0
                });
            }

            return res.send({
                message: "Car record deleted successfully",
                status: 1
            });

        } catch (err) {

            return res.send({
                message: "Please enter a valid Car details",
                status: 0
            });
        }
    },


    getCar: async (req, res) => {

        try {

            if (!req.body._id) {
                return res.send({
                    message: "Please enter a valid car details",
                    status: 0
                });
            }

            let findCar = await car.findOne({
                 _id: req.body. _id
            });

            if (!findCar) {

                return res.send({
                    message: "No Car record found",
                    status: 0
                });
            }

            return res.send({
                message: "Car details",
                status: 1,
                data: findCar
            });

        } catch (err) {

            return res.send({
                message: "Please enter a valid Car details",
                status: 0
            });
        }
    },


    getCarList: async (req, res) => {

        try {

            let findCars = await car.find({});

            if (!findCars) {

                return res.send({
                    message: "No Car record found",
                    status: 1,
                    data: {
                        carList: []
                    }
                });
            }

            return res.send({
                message: "Car List",
                status: 1,
                data: {
                    carList: findCars
                }
            });

        } catch (err) {

            return res.send({
                message: "Please enter a valid car details",
                status: 0
            });
        }
    },


}