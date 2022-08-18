import { useCallback, useEffect, useMemo } from 'react';

export interface Props {
	type: 'signin' | 'signup';
	handleLoginSuccess: (response: google.accounts.id.CredentialResponse) => void;
}

export interface GoogleUserResponse {
	aud: string;
	azp: string;
	email: string;
	email_verified: true;
	exp: number;
	family_name: string;
	given_name: string;
	iat: number;
	iss: string;
	jti: string;
	name: string;
	nbf: number;
	picture: string;
	sub: string;
}

export type ContextTextProps = Record<
	Props['type'],
	google.accounts.id.GsiButtonConfiguration['text']
>;

const GoogleSign = ({ type, handleLoginSuccess }: Props): JSX.Element => {
	const contextText: ContextTextProps = useMemo(() => ({
		signin: 'signin_with',
		signup: 'signup_with',
	}), []);

	useEffect(() => {
		const { NEXT_PUBLIC_GOOGLE_CLIENT_ID } = process.env;

		if (process.env.NEXT_PUBLIC_ENV === 'test') return;

		if (!NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
			throw new Error('NEXT_PUBLIC_GOOGLE_CLIENT_ID is missing');
		}

		google.accounts.id.initialize({
			client_id: NEXT_PUBLIC_GOOGLE_CLIENT_ID,
			callback: handleLoginSuccess,
			auto_select: true,
			context: type,
		});

		google.accounts.id.renderButton(
			document.getElementById('buttonDiv') as HTMLElement,
			{
				theme: 'outline',
				size: 'medium',
				type: 'standard',
				text: contextText[type],
			}
		);
	}, [contextText, handleLoginSuccess, type]);

	return <div id="buttonDiv"></div>;
};

export default GoogleSign;
