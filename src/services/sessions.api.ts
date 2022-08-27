import { UserProps } from 'context/auth';

import api from './api';

export type { UserProps };

export interface PostNewSessionsParams {
	email: UserProps['email'];
	password: string;
}

export interface PostNewSessionResponse {
	user: UserProps;
	token: string;
}

export const postNewSession = async (data: PostNewSessionsParams) => {
	const response = await api.post<PostNewSessionResponse>('/sessions', data);

	return response.data;
};

export const postNewGoogleSession = async (credential: string) => {
	const response = await api.post<PostNewSessionResponse>('/sessions/google', {
		credential,
	});

	return response.data;
};
