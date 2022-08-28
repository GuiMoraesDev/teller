import { useRouter } from 'next/router';

import { SignSuccessfulProps } from '@types';

import { useAuth } from 'context/auth';

const useSignSuccessful = () => {
	const router = useRouter();

	const { setLoggedUser } = useAuth();

	const onSign = (session: SignSuccessfulProps) => {
		setLoggedUser(session);

		router.push('/home');
	};

	return { onSign };
};

export default useSignSuccessful;
