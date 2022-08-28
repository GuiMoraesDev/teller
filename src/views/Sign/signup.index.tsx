import { useCallback, useState } from 'react';

import { useRouter } from 'next/router';

import { User, EnvelopeSimple, Lock } from 'phosphor-react';

import Input from 'components/Input';

import logYupErrors from 'helpers/logYupErrors';

import { postNewUser, PostNewUserParams } from 'services/users.api';

import useSignSuccessful from './hooks/useSignSuccessful';
import useSignValidation from './hooks/useSignValidation';
import SignTemplate from './template';

const SignIn = (): JSX.Element => {
	const { onSign } = useSignSuccessful();

	const { signUpMethods } = useSignValidation();

	const [isLoading, setIsLoading] = useState(false);

	const onSignUp = useCallback(
		async (values: PostNewUserParams) => {
			setIsLoading(true);

			try {
				const session = await postNewUser(values);

				onSign(session);
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error(error);
			}

			setIsLoading(false);
		},
		[onSign]
	);

	return (
		<SignTemplate
			pageType="sign up"
			buttonLabel="Go to sign in page"
			buttonHref="/signin"
			onSubmit={signUpMethods.handleSubmit(onSignUp, logYupErrors)}
			isLoading={isLoading}
		>
			<Input
				id="sign-first-name"
				label="First Name"
				placeholder="John"
				PlaceholderIconLeft={<User />}
				{...signUpMethods.register('first_name')}
				error={signUpMethods.formState.errors.first_name?.message}
			/>

			<Input
				id="sign-last-name"
				label="Last Name"
				placeholder="Doe"
				PlaceholderIconLeft={<User />}
				{...signUpMethods.register('last_name')}
				error={signUpMethods.formState.errors.last_name?.message}
			/>

			<Input
				id="sign-email"
				PlaceholderIconLeft={<EnvelopeSimple />}
				label="Email"
				placeholder="email@example.com"
				{...signUpMethods.register('email')}
				error={signUpMethods.formState.errors.email?.message}
			/>

			<Input
				id="sign-password"
				PlaceholderIconLeft={<Lock />}
				label="Password"
				type="password"
				placeholder="password"
				{...signUpMethods.register('password')}
				error={signUpMethods.formState.errors.password?.message}
			/>
		</SignTemplate>
	);
};

export default SignIn;
