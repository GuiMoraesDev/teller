import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { useMutation } from '@tanstack/react-query';

import { useAuth } from 'context/auth';

import { getUser } from 'services/github/users.api';

import { LoginSchemaProps } from './@types';
import LoginTemplate from './template';

const Login = (): JSX.Element => {
	const router = useRouter();

	const { setLoggedUser } = useAuth();

	const mutation = useMutation(getUser, {
		retry: 1,
		onSuccess: (response) => {
			setLoggedUser({
				id: response.data.id,
				name: response.data.name,
				avatar_url: response.data.avatar_url,
			});

			router.push('/home');
		},
	});

	const onSubmit = useCallback(
		(values: LoginSchemaProps) => {
			const { username } = values;

			mutation.mutate({ username });
		},
		[mutation]
	);

	return <LoginTemplate onSubmit={onSubmit} isLoading={mutation.isLoading} />;
};

export default Login;
