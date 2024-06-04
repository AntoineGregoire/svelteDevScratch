import type { PageServerLoad } from "./$types";

const isAuthRoute = (url: URL) => {
	const authRoutes = ['/p', '/create'];
	// check if current URL includes any of the authRoutes
	return authRoutes.some(route => url.pathname.includes(route));
}

export const load: PageServerLoad = async ({ }) => {
	//console.log(isAuthRoute(url));
	//const session = await locals.auth.validate();
	//if (!isAuthRoute(url)) throw redirect(302, "/user/login");
  	//if (isAuthRoute(url)) return {};

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