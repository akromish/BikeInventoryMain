const express = require('express');
const router = express.Router();
let Bikes = require('./models/bike.model');

//get all bikes
router.get('/',function(req, res) {
    Bikes.find(function(err, bikes) {
        if (err) {
            console.log(err);
        } else {
            res.json(bikes);
        }
    });
});

//get bike by id
router.get('/:id',function(req, res) {
    const id = req.params.id;
    Bikes.findById(id, function(err, bike) {
        if (err) {
            console.log(err);
        } else {
            res.json(bike);
        }
    });
});

//standard bike add
router.post('/add',function(req, res) {
    const bike = new Bikes(req.body);
    bike.save()
        .then(bike => {
            res.status(200).json({'bike': 'added'});
        })
        .catch(err => {
            res.status(400).send("couldn't add bike");
        });
});

//update bike
// router.post('/update/:id',function(req, res) {
//     Bikes.findById(req.params.id, function(err, bike) {
//         if (!bike)
//             res.status(404).send("bike not found");
//         else
//             bike.bike_name = req.body.bike_name;
//             bike.bike_type = req.body.bike_type;
//             bike.bike_f_wheel_size = req.body.bike_f_wheel_size;
//             bike.bike_r_wheel_size = req.body.bike_r_wheel_size;
//             bike.bike_size = req.body.bike_size;
//             bike.bike_pedal = req.body.bike_pedal;
//             bike.bike_saddle = req.body.bike_saddle;
//             bike.bike_groupset = req.body.bike_groupset;
//             bike.bike_fork = req.body.bike_fork;
//             bike.bike_brakes = req.body.bike_brakes;
//             bike.bike_stem_length = req.body.bike_stem_length;
//         bike.save().then(Bikes => {
//             res.json('Bike updated!');
//         })
//             .catch(err => {
//                 res.status(400).send("Update Failed");
//             });
//     });
// });


module.exports = router;





