import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface SignInSchemaProps {
	email: string;
	password: string;
}

const signInResolver = yupResolver(
		yup.object().shape({
			email: yup.string().email().required('Email'),
			password: yup.string().required('password'),
		})
	);

export { signInResolver };
