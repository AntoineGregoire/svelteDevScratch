//import type { LayoutServerLoad } from './$types'
import prisma from '$lib/prisma';
import { redirect } from "@sveltejs/kit";
import { page } from '$app/stores';  

import type { PageServerLoad } from "./$types";

const isAuthRoute = (url: URL) => {
	const authRoutes = ['/user', '/login', '/signup', '/logout'];
	// check if current URL includes any of the authRoutes
	return authRoutes.some(route => url.pathname.includes(route));
}

export const load: PageServerLoad = async ({ locals, url }) => {
	// console.log(isAuthRoute(url));
	//const session = await locals.auth.validate();
	//if (!session && !isAuthRoute(url)) throw redirect(302, "/user/login");
  	//if (!session && isAuthRoute(url)) return {};

	//const user = await prisma.user.findUnique({
		//where: { id: userId },
		//include: { Brand: true },
	//});

	//return {
		// session,
		// userId: session.user.userId,
		// username: session.user.name,
		// user: user
	//};
};