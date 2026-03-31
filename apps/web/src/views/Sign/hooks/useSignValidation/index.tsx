import { useForm } from 'react-hook-form';

import {
	signInResolver,
	SignInSchemaProps,
	signUpResolver,
	SignUpSchemaProps,
} from './validations';

const useSignValidation = () => {
	const signInMethods = useForm<SignInSchemaProps>({
		resolver: signInResolver,
	});

	const signUpMethods = useForm<SignUpSchemaProps>({
		resolver: signUpResolver,
	});

	return { signInMethods, signUpMethods };
};

export type { SignInSchemaProps };

export default useSignValidation;
