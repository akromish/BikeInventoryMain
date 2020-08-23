var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: process.env.PORT || 'http://localhost:4000',
});

module.exports = axiosInstance;