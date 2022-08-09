import { useForm } from 'react-hook-form';

import { GithubLogo, SignIn } from 'phosphor-react';

import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';

import { SignContent } from 'layouts/Sign/styles';

import { LoginSchemaProps } from '../@types';
import { loginResolver } from './validations';

interface Props {
	onSubmit: (props: LoginSchemaProps) => void;
	isLoading: boolean;
}

const LoginTemplate = ({ onSubmit, isLoading }: Props): JSX.Element => {
	const loginMethods = useForm<LoginSchemaProps>({
		resolver: loginResolver,
	});

	return (
		<SignContent>
			<Text label="Welcome to Teller" dimension="display1" />

			<form id="github-login" onSubmit={loginMethods.handleSubmit(onSubmit)}>
				<Input
					id="github-user"
					label="Type below your github user to login"
					data-testid="username-input"
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
				data-testid="submit-button"
				IconRight={<SignIn />}
				isLoading={isLoading}
			/>
		</SignContent>
	);
};

export default LoginTemplate;
