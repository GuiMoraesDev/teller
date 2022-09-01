import axios from 'axios';

if (!process.env.NEXT_PUBLIC_API_URL) {
	throw new Error('NEXT_PUBLIC_API_URL is missing');
}

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	
});

export default api;
