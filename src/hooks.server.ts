import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

const unProtectedRoutes = ['/', '/login', '/about'];

const handle: Handle = async ({ event, resolve }) => {
	
	const authCookie = event.cookies.get('AuthorizationToken');
	
	// Dont allow unprotected routes
	if (!authCookie && !unProtectedRoutes.includes(event.url.pathname)) {
		throw redirect(301, '/');
	}

	if (authCookie) {
		// Remove Bearer prefix
		const token = authCookie.split(' ')[1];

		//add jwt tokken verification here : https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
		try {
			const jwtUser = jwt.decode(token);
			if (typeof jwtUser === 'string') {
				throw new Error('Something went wrong');
			}
			// const sessionUser = {
			// 	id: user.id,
			// 	email: user.email
			// };

			// event.locals.user = sessionUser;
			// event.locals.token = token;
		} catch (error) {
			console.error(error);
		}
	}

	return await resolve(event);
};

export { handle };