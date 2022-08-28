import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { useMutation } from '@tanstack/react-query';
import { EnvelopeSimple, Lock } from 'phosphor-react';

import Input from 'components/Input';

import { useAuth } from 'context/auth';

import logYupErrors from 'helpers/logYupErrors';

import {
	postNewSession,
	PostNewSessionResponse,
	postNewGoogleSession,
	PostNewSessionsParams,
} from 'services/sessions.api';

import { QUERY_KEYS } from 'constant';

import useSignValidation from './hooks/useSignValidation';
import SignTemplate from './template';

const SignIn = (): JSX.Element => {
	const { signInMethods } = useSignValidation();
	const { setLoggedUser } = useAuth();

	const router = useRouter();

	const onSignInSuccess = useCallback(
		(data: PostNewSessionResponse) => {
			setLoggedUser(data);

			router.push('/home');
		},
		[router, setLoggedUser]
	);

	const mutation = useMutation([QUERY_KEYS.sessions], postNewSession, {
		onSuccess: onSignInSuccess,
	});

	const googleMutation = useMutation(
		[QUERY_KEYS.sessions],
		postNewGoogleSession,
		{
			onSuccess: onSignInSuccess,
		}
	);

	const onSubmit = useCallback(
		(values: PostNewSessionsParams) => {
			mutation.mutate(values);
		},
		[mutation]
	);

	const onGoogleSignIn = useCallback(
		(response: google.accounts.id.CredentialResponse) => {
			const { credential } = response;

			googleMutation.mutate(credential);
		},
		[googleMutation]
	);

	return (
		<SignTemplate
			pageType="signin"
			buttonLabel="Go to sign up page"
			buttonHref="/signup"
			onSubmit={signInMethods.handleSubmit(onSubmit, logYupErrors)}
			onGoogleSignIn={onGoogleSignIn}
			buttonIsLoading={mutation.isLoading || googleMutation.isLoading}
		>
			<Input
				id="sign-email"
				PlaceholderIconLeft={<EnvelopeSimple />}
				label="Email"
				placeholder="email@example.com"
				{...signInMethods.register('email')}
				error={signInMethods.formState.errors.email?.message}
			/>

			<Input
				id="sign-password"
				PlaceholderIconLeft={<Lock />}
				label="Password"
				type="password"
				placeholder="email@example.com"
				{...signInMethods.register('password')}
				error={signInMethods.formState.errors.password?.message}
			/>
		</SignTemplate>
	);
};

export default SignIn;
