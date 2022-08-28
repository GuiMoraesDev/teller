import { UseFormReturn } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { useRouter } from 'next/router';

import { SignSuccessfulProps } from '@types';

import { useAuth } from 'context/auth';

const useSignCallback = () => {
	const router = useRouter();

	const { setLoggedUser } = useAuth();

	const signSuccessful = (session: SignSuccessfulProps) => {
		toast.success('Logged successfully');

		setLoggedUser(session);

		router.push('/home');
	};

	const signFailed = (methods: UseFormReturn<any, any>, error: any) => {
		if (process.env.NODE_ENV === 'development') {
			// eslint-disable-next-line no-console
			console.error(error);
		}

		methods.reset();

		toast.error('Something went wrong');
	};

	return { signSuccessful, signFailed };
};

export default useSignCallback;
