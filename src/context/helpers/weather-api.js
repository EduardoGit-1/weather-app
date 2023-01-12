
import axios from 'axios';
import { BASE_URL } from '../contants/endpoints';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
})


export default axiosInstance