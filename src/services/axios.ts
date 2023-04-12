import axios from 'axios'

//requisicao backend
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;