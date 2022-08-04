import { DimensionsProps } from '@types';
import Button from 'components/Button';
import Input from 'components/Input';
import Logo from 'components/Logo';
import Text from 'components/Text';
import { SignIn } from 'phosphor-react';
import * as Styles from './styles';

const Login = (): JSX.Element => {
	return (
		<Styles.Container>
			<Styles.Header>
				<Logo type="logo" />
			</Styles.Header>

			<Styles.ContentWrapper>
				<Text label="Welcome to Teller" dimension="display1" />

				<Input
					id="github-user"
					label="Type below your github user to login"
					placeholder="@my-github-username"
				/>

				<Button label="Login" IconRight={<SignIn />} />
			</Styles.ContentWrapper>

			<Styles.Footer>
				<Text label="Teller @2022" dimension="body1" />
			</Styles.Footer>
		</Styles.Container>
	);
};

export default Login;
