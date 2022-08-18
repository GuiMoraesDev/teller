import Button, {ButtonDefaultProps} from 'components/Button';
import GoogleSign, { Props as GoogleSignProps } from 'components/GoogleSign';
import Text from 'components/Text';

import { SignContent } from 'layouts/Sign/styles';

import * as Styles from './styles';

interface Props extends GoogleSignProps {
	title: string;
	description: string;
	buttonProps: ButtonDefaultProps;
}

const SignTemplate = ({
	title,
	description,
	buttonProps,
	...props
}: Props): JSX.Element => {
	return (
		<SignContent>
			<Text label={title} dimension="display1" />

			<Text label={description} dimension="body2" />

			<Styles.SocialLinksWrapper>
				<GoogleSign {...props} />
			</Styles.SocialLinksWrapper>

			<Button {...buttonProps} />
		</SignContent>
	);
};

export default SignTemplate;
