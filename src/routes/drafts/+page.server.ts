// src/routes/drafts/+page.server.ts
import  db  from '$lib/prisma';
import type { Action, Actions, PageServerLoad } from './$types';

export const load = (async () => {
    // 1.
    const response = await db.user.findMany({
            where: {
                loggedIn: true
            },
    })

    // 2.
    return { drafts: response }; 
}) satisfies PageServerLoad; 

