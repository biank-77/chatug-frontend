import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const httpClient = axios.create({
    // baseURL: 'http://34.60.254.142:3200',
    baseURL: 'http://192.168.100.3:3200',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    },
});

httpClient.interceptors.request.use((config) => {
    const token = AsyncStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default httpClient;