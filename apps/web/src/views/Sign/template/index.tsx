import { FormEvent, PropsWithChildren } from 'react';

import { Link } from 'phosphor-react';

import Button, { ButtonDefaultProps } from 'components/Button';
import GoogleSign, { Props as GoogleSignProps } from 'components/GoogleSign';
import Text from 'components/Text';

import { SignContent } from 'layouts/Sign/styles';

import * as Styles from './styles';

interface Props {
	buttonLabel: ButtonDefaultProps['label'];
	buttonHref: ButtonDefaultProps['href'];
	isLoading: ButtonDefaultProps['isLoading'];
	pageType: 'sign in' | 'sign up';
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
	onGoogleSignIn?: (response: google.accounts.id.CredentialResponse) => void;
}

const SignTemplate = ({
	children,
	buttonLabel,
	buttonHref,
	isLoading,
	pageType,
	onSubmit,
	onGoogleSignIn,
}: PropsWithChildren<Props>): JSX.Element => {
	return (
		<SignContent>
			<Text label="Welcome to Teller" dimension="display1" />
			<Text label={pageType} dimension="heading2" isCapitalize />

			<Styles.FormWrapper id="sign-form" onSubmit={onSubmit}>
				<Text label={`Use the form bellow to ${pageType}`} dimension="body1" />

				{children}
			</Styles.FormWrapper>

			<Button label={pageType} type="submit" form="sign-form" isLoading={isLoading} isCapitalize />

			{pageType === 'sign in' && (
				<Styles.SocialLinksWrapper>
					<Text label="Or use social links: " dimension="body2" />
					<GoogleSign
						id="google-sign"
						onLoginSuccess={(response) => onGoogleSignIn?.(response)}
					/>
				</Styles.SocialLinksWrapper>
			)}

			<Button
				label={buttonLabel}
				href={buttonHref}
				IconRight={<Link />}
				variant="neutral"
			/>
		</SignContent>
	);
};

export default SignTemplate;
