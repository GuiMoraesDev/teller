import { Resolver } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { UserProps } from 'context/auth';

export interface SignUpSchemaProps extends  Omit<UserProps, 'id'> {
	password: string;
};

const signUpResolver: Resolver<SignUpSchemaProps> = yupResolver(
	yup.object().shape({
		first_name: yup.string().max(24).required('First name'),
		last_name: yup.string().max(24).required('Last name'),
		email: yup.string().email().required('Email'),
		password: yup.string().required('Password'),
	})
);

export { signUpResolver };
