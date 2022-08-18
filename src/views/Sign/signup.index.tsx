import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { useMutation } from '@tanstack/react-query';
import jwt from 'jwt-decode';

import { GoogleUserResponse } from 'components/GoogleSign';

import { useAuth } from 'context/auth';

import {
	postSignUp,
	PostSignUpParams,
	PostSignUpResponse,
} from 'services/users.api';

import { QUERY_KEYS } from 'constant';

import SignTemplate from './template';

const SignIn = (): JSX.Element => {
	const { setLoggedUser } = useAuth();
	const router = useRouter();

	const onSignUpSuccess = useCallback(
		(data: PostSignUpResponse[] | null) => {
			if (data?.[0]) {
				setLoggedUser(data?.[0]);

				router.push('/home');
			}
		},
		[router, setLoggedUser]
	);

	const mutation = useMutation([QUERY_KEYS.users], postSignUp, {
		onSuccess: onSignUpSuccess,
	});

	const buttonProps = {
		label: 'Go to sign in page',
		href: '/signin',
		isLoading: mutation.isLoading,
	};

	const handleLoginSuccess = useCallback(
		(response: google.accounts.id.CredentialResponse) => {
			const credential = jwt<GoogleUserResponse>(response.credential);

			mutation.mutate({
				first_name: credential.given_name,
				last_name: credential.family_name,
				avatar_url: credential.picture,
			});
		},
		[mutation]
	);

	return (
		<SignTemplate
			type="signup"
			title="Welcome to Teller"
			description="Use one social link above to sign up"
			handleLoginSuccess={handleLoginSuccess}
			buttonProps={buttonProps}
		/>
	);
};

export default SignIn;
