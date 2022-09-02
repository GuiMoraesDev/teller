import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

import { useRouter } from 'next/router';

import nookies from 'nookies';
import { User, EnvelopeSimple, Lock } from 'phosphor-react';

import Input from 'components/Input';

import logYupErrors from 'helpers/logYupErrors';

import { postNewSession } from 'services/sessions.api';
import { postNewUser, PostNewUserParams } from 'services/users.api';

import useSignValidation from './hooks/useSignValidation';
import SignTemplate from './template';

const SignIn = (): JSX.Element => {
	const router = useRouter();

	const { signUpMethods } = useSignValidation();

	const [isLoading, setIsLoading] = useState(false);

	const onSignUp = useCallback(
		async (values: PostNewUserParams) => {
			setIsLoading(true);

			try {
				await postNewUser(values);

				const { user, token } = await postNewSession({
					email: values.email,
					password: values.password,
				});

				nookies.set(null, 'user', JSON.stringify(user));
				nookies.set(null, 'token', JSON.stringify(token));

				toast.success('Logged successfully');

				router.push('/home');
			} catch (error) {
				if (process.env.NODE_ENV === 'development') {
					// eslint-disable-next-line no-console
					console.error(error);
				}

				signUpMethods.reset();

				toast.error('Something went wrong');
			}

			setIsLoading(false);
		},
		[router, signUpMethods]
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
