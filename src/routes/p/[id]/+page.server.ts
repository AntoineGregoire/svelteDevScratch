// src/routes/p/[id]/+page.server.ts
import prisma from "$lib/prisma";
// 1.
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ params: { id } }) => {
    const post = await prisma.task.findUnique({
        where: { id: Number(id) },
        include: { author: true },
    });
    return { post };
}) satisfies PageServerLoad;

export const actions = {
    // 2.
    publishPost: async ({ params: { id } }) => {
        await prisma.task.update({
            where: { id: Number(id) },
            data: {
                //published: true,
            },
        });

        throw redirect(303, `/p/${id}`);
    },

    // 3.
    deletePost: async ({ params: { id } }) => {
        await prisma.task.delete({
            where: { id: Number(id) },
        });

        throw redirect(303, '/')
    }
} satisfies Actions;