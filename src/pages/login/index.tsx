import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/router';

import { useMutation } from '@tanstack/react-query';
import { GithubLogo, SignIn } from 'phosphor-react';

import Button from 'components/Button';
import Input from 'components/Input';
import Logo from 'components/Logo';
import Text from 'components/Text';

import { useAuth } from 'context/auth';

import { getUser } from 'services/github/users.api';

import * as Styles from './styles';
import { LoginSchemaProps, loginResolver } from './validations';


const Login = (): JSX.Element => {
	const { setUser } = useAuth();
	const router = useRouter();

	const mutation = useMutation(getUser, {
		retry: 1,
		onSuccess: (response) => {
			setUser({
				id: response.data.id,
				name: response.data.name,
				avatar_url: response.data.avatar_url,
			});

			router.push('/home');
		},
	});

	const loginMethods = useForm<LoginSchemaProps>({
		resolver: loginResolver,
	});

	const onSubmit = useCallback(
		(values: LoginSchemaProps) => {
			const { username } = values;

			mutation.mutate({ username });
		},
		[mutation]
	);

	return (
		<Styles.Container>
			<Styles.Header>
				<Logo type="logo" />
			</Styles.Header>

			<Styles.ContentWrapper>
				<Text label="Welcome to Teller" dimension="display1" />

				<form id="github-login" onSubmit={loginMethods.handleSubmit(onSubmit)}>
					<Input
						id="github-user"
						label="Type below your github user to login"
						placeholder="@my-github-username"
						PlaceholderIconLeft={<GithubLogo />}
						error={loginMethods.formState.errors.username?.message}
						{...loginMethods.register('username')}
					/>
				</form>

				<Button
					label="Login"
					type="submit"
					form="github-login"
					IconRight={<SignIn />}
				/>
			</Styles.ContentWrapper>

			<Styles.Footer>
				<Text label="Teller @2022" dimension="body1" />
			</Styles.Footer>
		</Styles.Container>
	);
};

export default Login;
