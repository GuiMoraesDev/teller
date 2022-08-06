import { PropsWithChildren } from 'react';

import { Router } from 'next/router';

import { useAuth } from 'context/auth';

const isBrowser = () => typeof window !== 'undefined';

interface Props {
	router: Router;
}

const CustomRouter = ({ router, children }: PropsWithChildren<Props>) => {
	const { user } = useAuth();

	const isAuthenticated = user?.id;

	const unprotectedRoutes = ['/login'];

	const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

	const shouldRedirect = isBrowser() && !isAuthenticated && pathIsProtected;

	if (shouldRedirect) {
		router.push('/login');
	}

	return <>{children}</>;
};

export default CustomRouter;
