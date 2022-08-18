import { useCallback } from 'react';

import { useRouter } from 'next/router';

import SignTemplate from './template';

const SignIn = (): JSX.Element => {
	const router = useRouter();

	const buttonProps = {
		label: 'Go to sign up page',
		href: '/signup',
	};

	const handleRedirectToHomePage = useCallback(() => {
		router.push('/home');
	}, [router]);

	return (
		<SignTemplate
			type="signin"
			title="Welcome to Teller"
			description="Use one social link above to sign in"
			handleLoginSuccess={handleRedirectToHomePage}
			buttonProps={buttonProps}
		/>
	);
};

export default SignIn;
