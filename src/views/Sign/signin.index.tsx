import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { useMutation } from '@tanstack/react-query';
import jwt from 'jwt-decode';

import { GoogleUserResponse } from 'components/GoogleSign';

import { useAuth, UserProps } from 'context/auth';

import { getUser } from 'services/users.api';

import { QUERY_KEYS } from 'constant';

import SignTemplate from './template';

const SignIn = (): JSX.Element => {
	const { setLoggedUser } = useAuth();
	const router = useRouter();

	const buttonProps = {
		label: 'Go to sign up page',
		href: '/signup',
	};

	const onSignInSuccess = useCallback(
		(data: UserProps) => {
			setLoggedUser(data);

			router.push('/home');
		},
		[router, setLoggedUser]
	);

	const mutation = useMutation([QUERY_KEYS.users], getUser, {
		onSuccess: onSignInSuccess,
	});

	const handleLoginSuccess = useCallback(
		(response: google.accounts.id.CredentialResponse) => {
			const credential = jwt<GoogleUserResponse>(response.credential);

			mutation.mutate({
				email: credential.email,
				avatar_url: credential.picture,
			});
		},
		[mutation]
	);

	return (
		<SignTemplate
			type="signin"
			title="Welcome to Teller"
			description="Use one social link above to sign in"
			handleLoginSuccess={handleLoginSuccess}
			buttonProps={buttonProps}
		/>
	);
};

export default SignIn;
