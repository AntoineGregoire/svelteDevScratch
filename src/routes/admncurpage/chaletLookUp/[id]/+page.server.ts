import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({params}) => {
    const taskDisplay = await prisma.task.findMany({
        where: { chaletId:  Number(params.id) },
        //orderBy: {startTime: "asc"}
    })
    const taskLen = taskDisplay.length
    return { taskDisplay, taskLen, id: params.id };
});

