// src/routes/create/+page.server.ts

import prisma from "$lib/prisma";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const USRID = Number(data.get("identification"))
      
    const updateUser = await prisma.user.update({
      where: {
        id: USRID,  
      },
      data: {
            loggedIn: {
                set: true
            },
      },
    })
  }}