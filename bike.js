const express = require('express');
const router = express.Router();
let Bike = require('./models/bike.model');

//get all bikes
router.get('/',function(req, res) {
    Bike.find(function(err, bikes) {
        if (err) {
            console.log(err + "hi");
        } else {
            res.json(bikes);
        }
    });
});

//standard bike add
router.post('/add',function(req, res) {
    let bike = new Bike(req.body);
    bike.save()
        .then(bike => {
            res.status(200).json({'bike': 'added'});
        })
        .catch(err => {
            res.status(400).send("couldn't add bike");
        });
});


module.exports = router;





