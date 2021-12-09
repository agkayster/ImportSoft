import axios from 'axios';
const endpoint = '/api';

export const axiosInstance = axios.create({
	baseURL: endpoint,
});
