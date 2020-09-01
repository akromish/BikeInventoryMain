const axios = require('axios');

const PORT = process.env.PORT || 4000; //incorrect, import from server.js

const axiosInstance = axios.create({
    baseURL: 'http://localhost:' + PORT,
});
module.exports = axiosInstance;