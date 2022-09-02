import axios from 'axios';
import nookies from 'nookies';

if (!process.env.NEXT_PUBLIC_API_URL) {
	throw new Error('NEXT_PUBLIC_API_URL is missing');
}

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
	const { token: cookiesToken } = nookies.get();

	if (!cookiesToken) {
		return config;
	}

	const token = JSON.parse(cookiesToken) as string;

	return {
		...config,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
});

export default api;
