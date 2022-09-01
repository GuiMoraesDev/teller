import { UserProps } from '@types';

import api from './api';

interface SignInSuccessfulProps {
	user: UserProps;
	token: string;
}

export interface PostNewSessionsParams {
	email: UserProps['email'];
	password: string;
}

export const postNewSession = async (data: PostNewSessionsParams) => {
	const response = await api.post<SignInSuccessfulProps>('/sessions', data);

	return response.data;
};

export const postNewGoogleSession = async (credential: string) => {
	const response = await api.post<SignInSuccessfulProps>('/sessions/google', {
		credential,
	});

	return response.data;
};
