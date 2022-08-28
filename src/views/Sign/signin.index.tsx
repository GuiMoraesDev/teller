import { useCallback, useState } from 'react';

import { EnvelopeSimple, Lock } from 'phosphor-react';

import Input from 'components/Input';

import logYupErrors from 'helpers/logYupErrors';

import {
	postNewSession,
	PostNewSessionsParams,
	postNewGoogleSession,
} from 'services/sessions.api';

import useSignCallback from './hooks/useSignCallback';
import useSignValidation from './hooks/useSignValidation';
import SignTemplate from './template';

const SignIn = (): JSX.Element => {
	const { signSuccessful, signFailed } = useSignCallback();
	const { signInMethods } = useSignValidation();

	const [isLoading, setIsLoading] = useState(false);

	const onSignIn = useCallback(
		async (values: PostNewSessionsParams) => {
			setIsLoading(true);
			try {
				const session = await postNewSession(values);

				signSuccessful(session);
			} catch (error) {
				signFailed(signInMethods, error);
			}

			setIsLoading(false);
		},
		[signFailed, signInMethods, signSuccessful]
	);

	const onGoogleSignIn = useCallback(
		async (response: google.accounts.id.CredentialResponse) => {
			setIsLoading(true);

			const { credential } = response;

			try {
				const session = await postNewGoogleSession(credential);

				signSuccessful(session);
			} catch (error) {
				signFailed(signInMethods, error);
			}

			setIsLoading(false);
		},
		[signFailed, signInMethods, signSuccessful]
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
