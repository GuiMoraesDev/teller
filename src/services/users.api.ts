import { UserProps } from '@types';

import api from './api';

interface SignUpSuccessfulProps {
	user: UserProps;
	token: string;
};

export interface PostNewUserParams {
	first_name: UserProps['first_name'];
	last_name: UserProps['last_name'];
	email: UserProps['email'];
	password: string;
}

export const postNewUser = async (data: PostNewUserParams) => {
	const response = await api.post<SignUpSuccessfulProps>('/users/new', data);

	return response.data;
};
