import { Resolver } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { UserProps } from 'context/auth';

export interface SignInSchemaProps {
	email: UserProps['email'];
	password: string;
}

const signInResolver = yupResolver(
	yup.object().shape({
		email: yup.string().email().required('Email is required'),
		password: yup.string().required('password is required'),
	})
);

export interface SignUpSchemaProps extends  Omit<UserProps, 'id'> {
	password: string;
};

const signUpResolver: Resolver<SignUpSchemaProps> = yupResolver(
	yup.object().shape({
		first_name: yup.string().max(24).required('First name is required'),
		last_name: yup.string().max(24).required('Last name is required'),
		email: yup.string().email().required('Email is required'),
		password: yup.string().required('Password is required'),
	})
);

export { signInResolver, signUpResolver };
