import { GoogleUserResponse } from '@types';
import jwt from 'jwt-decode';

import { UserProps } from 'context/auth';

export const formatGoogleCredentials = (credentials: string): Omit<UserProps, 'id'> => {
	const { picture, given_name, family_name, email } =
		jwt<GoogleUserResponse>(credentials);

	return {
		avatar_url: picture,
		first_name: given_name,
		last_name: family_name,
		email,
	};
};
