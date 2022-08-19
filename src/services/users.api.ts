import { UserProps } from 'context/auth';

import supabase from './api';

export type { UserProps };

export type GetUserParams = {
	email: UserProps['email'];
	avatar_url: UserProps['avatar_url'];
};

export const getUser = async ({ email, avatar_url }: GetUserParams) => {
	const { data, error } = await supabase
		.from<UserProps>('Users')
		.select(`id, email, first_name, last_name`)
		.eq('email', email)
		.single();

	if (error) {
		throw new Error(error.message);
	}

	return { ...data, avatar_url };
};

export type PostNewUserParams = Omit<UserProps, 'id'>;

export const postNewUser = async ({
	avatar_url,
	...props
}: PostNewUserParams) => {
	const { data, error } = await supabase
		.from<UserProps>('Users')
		.insert(props)
		.select(`id, email, first_name, last_name`)
		.single();

	if (error) {
		throw new Error(error.message);
	}

	return { ...data, avatar_url };
};
