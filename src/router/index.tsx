import { useEffect, PropsWithChildren } from 'react';

import { Router } from 'next/router';

import { UNPROTECTED_ROUTES, LS_KEYS } from 'constant';

interface Props {
	router: Router;
}

const CustomRouter = ({ router, children }: PropsWithChildren<Props>) => {
	useEffect(() => {
		const user = localStorage.getItem(LS_KEYS.user);

		const isAuthenticated = !!user;

		const pathIsProtected = UNPROTECTED_ROUTES.indexOf(router.pathname) === -1;

		const shouldRedirectToHome = isAuthenticated && !pathIsProtected;
		const shouldRedirectToLogin = !isAuthenticated && pathIsProtected;

		if (shouldRedirectToHome) {
			router.push('/home');
		}

		if (shouldRedirectToLogin) {
			router.push('/login');
		}
	}, [router]);

	return <>{children}</>;
};

export default CustomRouter;
