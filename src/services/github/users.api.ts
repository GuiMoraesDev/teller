import { UserProps } from 'context/auth';

import api from './api';

interface GetUserParams {
	username: string;
}

export const getUser = async ({ username }: GetUserParams) => {
	const response = await api.get<UserProps>(`/users/${username}`);

	return response;
};
