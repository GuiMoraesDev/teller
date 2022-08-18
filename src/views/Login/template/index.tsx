import GoogleSignIn, { Props } from 'components/GoogleSignIn';
import Text from 'components/Text';

import { SignContent } from 'layouts/Sign/styles';

const LoginTemplate = (props: Props): JSX.Element => {
	return (
		<SignContent>
			<Text label="Welcome to Teller" dimension="display1" />

			<GoogleSignIn {...props} />
		</SignContent>
	);
};

export default LoginTemplate;
