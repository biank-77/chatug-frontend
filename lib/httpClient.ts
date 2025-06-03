import axios from 'axios';

const httpClient = axios.create({
    // baseURL: 'https://8718-34-60-254-142.ngrok-free.app',
    // baseURL:"http://34.60.254.142:3200",
    baseURL:"http://192.168.100.3:3200",
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});

httpClient.interceptors.request.use((config) => {
    // const token = AsyncStorage.getItem('token');
    // if (token) {
    //     // config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

export default httpClient;