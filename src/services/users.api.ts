import { SignSuccessfulProps } from '@types';

import { UserProps } from 'context/auth';

import api from './api';

export type { UserProps };

export interface PostNewUserParams {
	first_name: UserProps['first_name'];
	last_name: UserProps['last_name'];
	email: UserProps['email'];
	password: string;
}

export const postNewUser = async (data: PostNewUserParams) => {
	const response = await api.post<SignSuccessfulProps>('/users/new', data);

	return response.data;
};
