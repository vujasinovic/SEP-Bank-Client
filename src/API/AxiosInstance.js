import axios from 'axios';

const hosts = {
    development: 'http://localhost:9090/',
    production: '/'
};

const axiosInstance = axios.create({
    baseURL: hosts[process.env.NODE_ENV]
});

export default axiosInstance;
