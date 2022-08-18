import { UserProps } from 'context/auth';

import supabase from './api';

export type PostSignUpParams = Omit<UserProps, 'id'>;

export type PostSignUpResponse = UserProps;

export const postSignUp = async (props: PostSignUpParams) => {
	const { data } = await supabase
		.from<PostSignUpResponse>('Users')
		.insert(props);

	return data;
};
