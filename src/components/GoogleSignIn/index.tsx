import { useCallback, useEffect } from 'react';

import jwt from 'jwt-decode';

import { useAuth } from 'context/auth';

export interface Props {
	onLoginSuccess: () => void;
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

const GoogleSignIn = ({ onLoginSuccess }: Props): JSX.Element => {
	const { setLoggedUser } = useAuth();

	const handleLoginSuccess = useCallback(
		(response: google.accounts.id.CredentialResponse) => {
			const credential = jwt<GoogleUserResponse>(response.credential);

			setLoggedUser({
				id: credential.sub,
				first_name: credential.given_name,
				last_name: credential.family_name,
				avatar_url: credential.picture,
			});

			onLoginSuccess();
		},
		[onLoginSuccess, setLoggedUser]
	);

	useEffect(() => {
		const { NODE_ENV, NEXT_PUBLIC_GOOGLE_CLIENT_ID } = process.env;

		if (NODE_ENV === 'test') return;

		if (!NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
			throw new Error('NEXT_PUBLIC_GOOGLE_CLIENT_ID is missing');
		}

		google.accounts.id.initialize({
			client_id: NEXT_PUBLIC_GOOGLE_CLIENT_ID,
			callback: handleLoginSuccess,
			auto_select: true,
		});

		google.accounts.id.renderButton(
			document.getElementById('buttonDiv') as HTMLElement,
			{ theme: 'outline', size: 'large', type: 'standard' }
		);
	}, [handleLoginSuccess]);

	return <div id="buttonDiv"></div>;
};

export default GoogleSignIn;
