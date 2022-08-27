import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { useMutation } from '@tanstack/react-query';
import { EnvelopeSimple, Lock } from 'phosphor-react';

import Input from 'components/Input';

import { useAuth } from 'context/auth';
import { useSign } from 'context/sign';

import logYupErrors from 'helpers/logYupErrors';

import {
	postNewSession,
	PostNewSessionResponse,
	postNewGoogleSession,
	PostNewSessionsParams,
} from 'services/sessions.api';

import { QUERY_KEYS } from 'constant';

import { formatGoogleCredentials } from './helpers/formatGoogleCredentials';
import useSignInValidation from './hooks/useSignInValidation';
import SignTemplate from './template';

const SignIn = (): JSX.Element => {
	const { setSaveUserData } = useSign();
	const { signInMethods } = useSignInValidation();

	const { setLoggedUser } = useAuth();
	const router = useRouter();

	const onSignInSuccess = useCallback(
		(data: PostNewSessionResponse) => {
			setLoggedUser(data);

			router.push('/home');
		},
		[router, setLoggedUser]
	);

	const onGoogleSignInError = useCallback(
		(_: unknown, variables: string) => {
			const credentials = formatGoogleCredentials(variables);
			setSaveUserData(credentials);

			router.push('/signup');
		},
		[router, setSaveUserData]
	);

	const mutation = useMutation([QUERY_KEYS.sessions], postNewSession, {
		onSuccess: onSignInSuccess,
	});

	const onSubmit = useCallback(
		(values: PostNewSessionsParams) => {
			mutation.mutate(values);
		},
		[mutation]
	);

	const googleMutation = useMutation(
		[QUERY_KEYS.sessions],
		postNewGoogleSession,
		{
			onSuccess: onSignInSuccess,
			onError: onGoogleSignInError,
		}
	);

	const onGoogleSignIn = useCallback(
		(values: string) => {
			googleMutation.mutate(values);
		},
		[googleMutation]
	);

	return (
		<SignTemplate
			pageType="signin"
			buttonLabel="Go to sign up page"
			buttonHref="/signup"
			onSubmit={signInMethods.handleSubmit(onSubmit, logYupErrors)}
			onGoogleSignIn={(response) => onGoogleSignIn(response.credential)}
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
