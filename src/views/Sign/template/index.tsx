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
	buttonIsLoading: ButtonDefaultProps['isLoading'];
	pageType: GoogleSignProps['type'];
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
	onGoogleSignIn?: (response: google.accounts.id.CredentialResponse) => void;
}

const SignTemplate = ({
	children,
	buttonLabel,
	buttonHref,
	buttonIsLoading,
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

			<Button label="Sign in" type="submit" form="sign-form" />

			{pageType === 'signin' && (
				<Styles.SocialLinksWrapper>
					<Text label="Or use social links: " dimension="body2" />
					<GoogleSign
						id="google-sign"
						type={pageType}
						handleLoginSuccess={(
							response: google.accounts.id.CredentialResponse
						) => onGoogleSignIn?.(response)}
					/>
				</Styles.SocialLinksWrapper>
			)}

			<Button
				label={buttonLabel}
				href={buttonHref}
				IconRight={<Link />}
				variant="neutral"
				isLoading={buttonIsLoading}
			/>
		</SignContent>
	);
};

export default SignTemplate;
