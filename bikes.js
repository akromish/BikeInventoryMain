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

// router.get('/', (req, res) => {
//     Bikes.find({  })
//         .then((bikes) => {
//             res.json(bikes);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// });


//standard bike add
// router.post('/add',function(req, res) {
//     let bike = new Bikes(req.body);
//     bike.save()
//         .then(bike => {
//             res.status(200).json({'bike': 'added'});
//         })
//         .catch(err => {
//             res.status(400).send("couldn't add bike");
//         });
// });


module.exports = router;





