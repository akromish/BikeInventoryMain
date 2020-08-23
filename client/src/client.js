var axios = require('axios');

const PORT = process.env.PORT || 4000;
var axiosInstance = axios.create({

    baseURL: 'http://localhost:' + PORT,
});

module.exports = axiosInstance;