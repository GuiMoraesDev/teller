export interface DimensionsProps {
	xs: string;
	sm: string;
	md: string;
	lg: string;
	xl: string;
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

export interface UserProps {
	avatar_url?: string;
	id: string;
	first_name: string;
	last_name: string;
	email: string;
}
