import { useCallback } from 'react';

import { User, EnvelopeSimple, Lock } from 'phosphor-react';

import Input from 'components/Input';

import logYupErrors from 'helpers/logYupErrors';

import useSignValidation from './hooks/useSignValidation';
import SignTemplate from './template';

const SignIn = (): JSX.Element => {
	const { signUpMethods } = useSignValidation();

	const onSubmit = useCallback(() => {
		console.count('onSubmit');
	}, []);

	return (
		<SignTemplate
			pageType="signup"
			buttonLabel="Go to sign in page"
			buttonHref="/signin"
			onSubmit={signUpMethods.handleSubmit(onSubmit, logYupErrors)}
			buttonIsLoading={false}
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
				placeholder="email@example.com"
				{...signUpMethods.register('password')}
				error={signUpMethods.formState.errors.password?.message}
			/>
		</SignTemplate>
	);
};

export default SignIn;
