import { UserProps } from 'context/auth';

import api from './api';

export type { UserProps };

export interface PostNewSessionsParams {
	email: UserProps['email'];
	password: string;
}

export const postNewSession = async (data: PostNewSessionsParams) => {
	const response = await api.post('/sessions', data);

	return response;
};
