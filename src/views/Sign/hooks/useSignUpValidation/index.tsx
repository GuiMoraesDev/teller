import { useForm } from 'react-hook-form';

import { signUpResolver, SignUpSchemaProps } from './validations';

const useSignUpValidation = () => {
	const signUpMethods = useForm<SignUpSchemaProps>({
		resolver: signUpResolver,
	});

	return { signUpMethods };
};

export type { SignUpSchemaProps };

export default useSignUpValidation;
