import axios from 'axios';
import { api } from '../urlConfig';
 

//creating a instance 
const axiosInstance = axios.create({
    baseURL: api 
});


export default axiosInstance;

