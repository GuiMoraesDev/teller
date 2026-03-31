import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

import { useRouter } from 'next/router';

import nookies from 'nookies';
import { EnvelopeSimple, Lock } from 'phosphor-react';

import Input from 'components/Input';

import logYupErrors from 'helpers/logYupErrors';

import {
	postNewSession,
	PostNewSessionsParams,
	postNewGoogleSession,
} from 'services/sessions.api';

import useSignValidation from './hooks/useSignValidation';
import SignTemplate from './template';


const SignIn = (): JSX.Element => {
	const router = useRouter();

	const { signInMethods } = useSignValidation();

	const [isLoading, setIsLoading] = useState(false);

	const onSignIn = useCallback(
		async (values: PostNewSessionsParams) => {
			setIsLoading(true);
			try {
				const { user, token } = await postNewSession(values);

				nookies.set(null, 'user', JSON.stringify(user));
				nookies.set(null, 'token', JSON.stringify(token));

				toast.success('Logged successfully');

				router.push('/home');
			} catch (error) {
				if (process.env.NODE_ENV === 'development') {
					// eslint-disable-next-line no-console
					console.error(error);
				}

				signInMethods.reset();

				toast.error('Something went wrong');
			}

			setIsLoading(false);
		},
		[router, signInMethods]
	);

	const onGoogleSignIn = useCallback(
		async (response: google.accounts.id.CredentialResponse) => {
			setIsLoading(true);

			const { credential } = response;

			try {
				const { user, token } = await postNewGoogleSession(credential);

				nookies.set(null, 'user', JSON.stringify(user));
				nookies.set(null, 'token', JSON.stringify(token));

				toast.success('Logged successfully');

				router.push('/home');
			} catch (error) {
				if (process.env.NODE_ENV === 'development') {
					// eslint-disable-next-line no-console
					console.error(error);
				}

				signInMethods.reset();

				toast.error('Something went wrong');
			}

			setIsLoading(false);
		},
		[router, signInMethods]
	);

	return (
		<SignTemplate
			pageType="sign in"
			buttonLabel="Go to sign up page"
			buttonHref="/signup"
			onSubmit={signInMethods.handleSubmit(onSignIn, logYupErrors)}
			onGoogleSignIn={onGoogleSignIn}
			isLoading={isLoading}
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
