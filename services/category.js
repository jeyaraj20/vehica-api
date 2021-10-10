const category = require('../model/category');

module.exports = {

    createCategory: async (req, res) => {

        try {

            if (!req.body.name) {
                return res.send({
                    message: "Please enter all the mandatory fields",
                    status: 0
                });
            }
            let categorydata = new category(req.body);

            let findCategory = await categorydata.save();

            return res.send({
                message: "category record created successfully",
                status: 1,
                data: {
                    _id: findCategory._id
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
    updateCategory: async (req, res) => {

        try {

            if (!req.body.categoryId) {
                return res.send({
                    message: "Please enter a valid category details",
                    status: 0
                });
            }

            let update = req.body;
            delete update.categoryId;

            let findCategory = await category.findOneAndUpdate({
                categoryId: req.body.categoryId
            }, {
                $set: {
                    update
                }
            }, {
                new: true
            });

            if (!findCategory) {

                return res.send({
                    message: "No Category record found",
                    status: 0
                });
            }

            return res.send({
                message: "Category record updated successfully",
                status: 1,
                data: findCategory
            });

        } catch (err) {

            return res.send({
                message: "Please enter a valid Category details",
                status: 0
            });
        }
    },

    deleteCategory: async (req, res) => {

        try {

            if (!req.body.categoryId) {
                return res.send({
                    message: "Please enter a valid Category details",
                    status: 0
                });
            }

            let removeCategory = await category.remove({
                _id: req.body.categoryId
            });

            if (!removeCategory) {

                return res.send({
                    message: "No Category record found",
                    status: 0
                });
            }

            return res.send({
                message: "Category record deleted successfully",
                status: 1
            });

        } catch (err) {

            return res.send({
                message: "Please enter a valid Category details",
                status: 0
            });
        }
    },


    getCategory: async (req, res) => {

        try {

            if (!req.body.categoryId) {
                return res.send({
                    message: "Please enter a valid Category details",
                    status: 0
                });
            }

            let findCategory = await category.findOne({
                 _id: req.body.categoryId
            });

            if (!findCategory) {

                return res.send({
                    message: "No Category record found",
                    status: 0
                });
            }

            return res.send({
                message: "category details",
                status: 1,
                data: findCategory
            });

        } catch (err) {

            return res.send({
                message: "Please enter a valid Category details",
                status: 0
            });
        }
    },


}