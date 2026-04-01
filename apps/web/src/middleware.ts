import { defineMiddleware } from 'astro:middleware';

const UNPROTECTED_ROUTES = ['/signin', '/signup'];

export const onRequest = defineMiddleware((context, next) => {
	const { pathname } = context.url;
	const userCookie = context.cookies.get('user')?.value;

	if (pathname === '/') {
		return context.redirect('/signin');
	}

	const isUnprotected = UNPROTECTED_ROUTES.some((route) => pathname.startsWith(route));

	if (isUnprotected && userCookie) {
		return context.redirect('/home');
	}

	if (!isUnprotected && !userCookie) {
		return context.redirect('/signin');
	}

	return next();
});
