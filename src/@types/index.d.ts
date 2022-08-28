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

export interface SignSuccessfulProps {
	user: UserProps;
	token: string;
}


