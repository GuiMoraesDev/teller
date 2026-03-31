import { useEffect, useMemo } from 'react';

export interface Props {
	id: string;
	onLoginSuccess: (response: google.accounts.id.CredentialResponse) => void;
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

const GoogleSign = ({ id, onLoginSuccess }: Props): JSX.Element => {
	useEffect(() => {
		if (process.env.NEXT_PUBLIC_ENV === 'test') return;

		if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
			throw new Error('NEXT_PUBLIC_GOOGLE_CLIENT_ID is missing');
		}

		google.accounts.id.initialize({
			client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
			auto_select: true,
			callback: onLoginSuccess,
		});

		google.accounts.id.renderButton(
			document.getElementById(id) as HTMLElement,
			{
				theme: 'outline',
				size: 'medium',
				type: 'icon',
			}
		);
	}, [onLoginSuccess, id]);

	return <div id={id}></div>;
};

export default GoogleSign;
