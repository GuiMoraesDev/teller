import { useForm } from 'react-hook-form';

import { signInResolver, SignInSchemaProps } from './validations';

const useSignInValidation = () => {
	const signInMethods = useForm<SignInSchemaProps>({
		resolver: signInResolver,
	});

	return { signInMethods };
};

export type { SignInSchemaProps };

export default useSignInValidation;
