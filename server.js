const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bikeRoutes = require('./bike.js');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

//allow db to receive input data
app.use(cors());
app.use(bodyParser.json());

//connecting to atlas:
const uri = process.env.MONGODB_URI || 'mongodb+srv://admin:pass@cluster0.hhfak.mongodb.net/bikes?retryWrites=true&w=majority';
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', function() {
    console.log("Mongo Atlas Connected");
})

//connecting to route file
app.use('/bikes', bikeRoutes);

//output port num
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});