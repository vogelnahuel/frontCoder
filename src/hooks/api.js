import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "country-code":"ar",
        "Access-Control-Allow-Origin": "true",
        "Administrador":"true"
    },
});

export default api;