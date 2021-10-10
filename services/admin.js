const admin = require('../model/admin');

module.exports = {
    createAdmin: async (req, res) => {

        try {

            if (!req.body.email) {

                return res.send({
                    message: "Please enter all the mandatory fields",
                    status: 0
                });
            }

            let findAdmin = await admin.findOne({
                email: req.body.email
            });

            if (findAdmin) {

                return res.send({
                    message: "Please enter the new Email ID",
                    status: 0
                });

            }

            req.body.createDate = new Date();

            let newAdmin = new admin(req.body);

            findAdmin = await newAdmin.save();

            return res.send({
                message: "Admin created successfully",
                status: 1,
                data: {
                    _id: findAdmin._id
                }
            });

        } catch (err) {

            return res.send({
                message: "Please enter all the mandatory fields" + err,
                status: 0
            });
        }
    },
    adminLogin: async (req, res) => {

        try {

            if (!req.body.email) {

                return res.send({
                    message: "Please enter all the mandatory fields",
                    status: 0
                });
            }

            let findAdmin = await admin.findOne({
                email: req.body.email
            });

            if (!findAdmin) {

                return res.send({
                    message: "Please enter a valid User",
                    status: 0
                });
            }

            findAdmin = await admin.findOne({
                email: req.body.email,
                password: req.body.password
            });

            if (!findAdmin) {

                return res.send({
                    message: "Please enter your password correctly",
                    status: 0
                });
            }

            return res.send({
                message: "Login successfully",
                status: 1,
                data: findAdmin
            });

        } catch (err) {

            return res.send({
                message: "Please enter all the mandatory fields",
                status: 0
            });
        }
    }
}