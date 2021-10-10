const category = require('./../services/category');
const bike = require('./../services/bike');
const car = require('./../services/car');
const admin = require('./../services/admin');
const userDeailRouter = require('./../services/userDetails');

exports.route = function (app) {

    app.post('/adminLogin', admin.adminLogin);
    app.post('/createAdmin', admin.createAdmin);

    app.post('/createCategory', category.createCategory);
    app.post('/deleteCategory', category.deleteCategory);
    app.post('/getCategory', category.getCategory);
    app.post('/updateCategory', category.updateCategory);


    app.post('/createBike', bike.createBike);
    app.post('/deleteBike', bike.deleteBike);
    app.post('/getBike', bike.getBike);
    app.post('/updateBike', bike.updateBike);
    app.post('/getBikeList', bike.getBikeList);

    app.post('/createCar', car.createCar);
    app.post('/deleteCar', car.deleteCar);
    app.post('/getCar', car.getCar);
    app.post('/updateCar', car.updateCar);
    app.post('/getCarList', car.getCarList);

app.use('/user',userDeailRouter)
    

};