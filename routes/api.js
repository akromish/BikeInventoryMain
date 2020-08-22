const express = require('express');
const bikeRoutes = express.Router();
const Bike = require('../models/bike.model.js');

// bikeRoutes.get('/',function(req, res) {
//     Bike.find(function(err, bikes) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(bikes);
//         }
//     });
// });

bikeRoutes.get('/', (req, res) => {

    Bike.find({  })
        .then((bikes) => {
            console.log('Data: ', data);
            res.json(bikes);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


bikeRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Bike.findById(id, function(err, bike) {
        res.json(bike);
    });
});

bikeRoutes.route('/update/:id').post(function(req, res) {
    Bike.findById(req.params.id, function(err, bike) {
        if (!bike)
            res.status(404).send("data is not found");
        else
            bike.bike_name = req.body.bike_name;
        bike.bike_type = req.body.bike_type;
        bike.bike_wheel_size = req.body.bike_wheel_size;
        bike.bike_completed = req.body.bike_completed;
        bike.save().then(Bike => {
            res.json('Bike updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

bikeRoutes.route('/add').post(function(req, res) {
    let bike = new Bike(req.body);
    bike.save()
        .then(bike => {
            res.status(200).json({'bike': 'bike added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new bike failed');
        });
});

module.exports = bikeRoutes;