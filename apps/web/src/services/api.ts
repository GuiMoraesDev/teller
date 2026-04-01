import axios from 'axios';

import { getCookie } from 'helpers/cookies';

const apiUrl = import.meta.env.PUBLIC_API_URL;

if (!apiUrl) {
	throw new Error('PUBLIC_API_URL is missing');
}

const api = axios.create({
	baseURL: apiUrl,
});

api.interceptors.request.use((config) => {
	const cookiesToken = getCookie('token');

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
