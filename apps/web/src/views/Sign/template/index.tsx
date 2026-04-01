import { type FormEvent, type PropsWithChildren } from 'react';

import { Link } from 'phosphor-react';

import Button from 'components/Button';
import GoogleSign from 'components/GoogleSign';
import Text from 'components/Text';

interface Props {
	buttonLabel: string;
	buttonHref: string;
	isLoading: boolean;
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
		<main className="flex flex-col items-center justify-center gap-[2.0rem]">
			<Text label="Welcome to Teller" dimension="display1" />
			<Text label={pageType} dimension="heading2" isCapitalize />

			<form
				id="sign-form"
				className="flex flex-col items-start justify-center w-full max-w-[75%] rounded-[0.4rem] gap-[2.0rem]"
				onSubmit={onSubmit}
			>
				<Text label={`Use the form bellow to ${pageType}`} dimension="body1" />
				{children}
			</form>

			<Button label={pageType} type="submit" form="sign-form" isLoading={isLoading} isCapitalize />

			{pageType === 'sign in' && (
				<div className="flex items-center justify-center min-w-[50%] gap-[1.2rem] my-[1.2rem] py-[1.2rem] border-t border-b border-border">
					<Text label="Or use social links: " dimension="body2" />
					<GoogleSign
						id="google-sign"
						onLoginSuccess={(response) => onGoogleSignIn?.(response)}
					/>
				</div>
			)}

			<Button
				label={buttonLabel}
				href={buttonHref}
				IconRight={<Link />}
				variant="neutral"
			/>
		</main>
	);
};

export default SignTemplate;
