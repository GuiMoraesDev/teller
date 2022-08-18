import { useCallback } from 'react';

import { useRouter } from 'next/router';

import LoginTemplate from './template';

const Login = (): JSX.Element => {
	const router = useRouter();

	const handleRedirectToHomePage = useCallback(() => {
		router.push('/home');
	}, [router]);

	return <LoginTemplate onLoginSuccess={handleRedirectToHomePage} />;
};

export default Login;
