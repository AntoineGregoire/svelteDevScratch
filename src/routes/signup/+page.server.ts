// src/routes/signup/+page.server.ts

import prisma from "$lib/prisma";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

// const validateEmail = (email: string) => {
//     return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
// }

export const actions = {
    // 1.
    default: async ({ request }) => {
        const data = await request.formData();

        let name = data.get("name")
        let userAvatar = data.get("userAvatar")
        let userPswrd = data.get("userPassword")

        // 2.
        if (!name || !userAvatar || !userPswrd) {
            return fail(400, { name, userAvatar, missing: true });
        }
                // 3.
        if (typeof name != "string" || typeof userAvatar != "string" || typeof userPswrd != "string") {
            return fail(400, { incorrect: true })
        }
        if(userPswrd.length != 4){
            return fail(400, { incorrect: true })
        }

        // 5.
        await prisma.user.create({
            data: {
                name: name,
                password: userPswrd, 
                avatar: userAvatar,
                
            },
        });

        throw redirect(303, `/`)
    }
} satisfies Actions;