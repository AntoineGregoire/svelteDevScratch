import prisma from "$lib/prisma";
import { redirect, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = (async () => {
    const userlist = await prisma.user.findMany({
        where: {
            NOT: {
                id: 130298564,
            },
        },
        orderBy: {
            id: "desc",
        }
    })
    const tasklist = await prisma.chalet.findMany({
        orderBy: {
            chaletId: "asc",
        }
    })
    const cleanChalets = await prisma.chalet.findMany({
        where: { cleanState: true, workingOn: false}
    })
    const dirtyChalets = await prisma.chalet.findMany({
        where: { cleanState: false }
    })

  return { userlist, tasklist, cleanChalets, dirtyChalets};
  });

export const actions: Actions = {
    selectUser: async ({ request }) => {
        const data = await request.formData();
        const userID = data.get("userID")

        if (!userID) {
            return fail(400, { userID, missing: true })
        }

        throw redirect(303, "/admncurpage/"+userID)
    },
    selectChalet: async ({ request }) => {
        const data = await request.formData();
        const chaletID = data.get("chaletID")

        if (!chaletID) {
            return fail(400, { chaletID, fail: true })
        }

        throw redirect(303, "/admncurpage/chaletLookUp/"+chaletID)
    },
    needsClean: async ({ request }) => {
        const data = await request.formData();
        const chaletID = data.get("chaletID")

        const chalet = await prisma.chalet.update({
            where: { chaletId: Number(chaletID) },
            data: { cleanState: false }
        })
        return { success: true }
    },
    isClean: async ({ request }) => {
        const data = await request.formData();
        const chaletID = data.get("chaletID")

        const chalet = await prisma.chalet.update({
            where: { chaletId: Number(chaletID) },
            data: { cleanState: true }
        })
        return { success: true }
    }
}