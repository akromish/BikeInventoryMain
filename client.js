const axios = require('axios');

// const PORT = process.env.PORT || 4000;
const axiosInstance = axios.create({
    baseURL: 'http://localhost:' + PORT,
});
console.log('howdy')
module.exports = axiosInstance;