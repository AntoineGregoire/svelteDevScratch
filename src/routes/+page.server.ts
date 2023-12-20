// src/routes/+page.server.ts

import { USER } from '$env/static/private';
import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types'; 

export const load = (async () => {
// 1.
const online = await prisma.user.findMany({
  orderBy: {
    id: "asc",
  }
})


//const images =import.meta.glob('../lib/images/*.png'); 

// 2.
return { online };


}) satisfies PageServerLoad;