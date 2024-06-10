import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({params}) => {
    const shiftsUser = await prisma.shiftEntries.findMany({
        where: { userId:  Number(params.id) },
        //orderBy: {shiftStart: "desc"}
    })
    const shiftLen = shiftsUser.length
    return { shiftsUser, shiftLen, id: params.id };
});