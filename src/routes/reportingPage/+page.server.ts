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
    const cleanChalets = await prisma.chalet.findMany({
        where: { cleanState: true, workingOn: false}
    })
    const dirtyChalets = await prisma.chalet.findMany({
        where: { cleanState: false }
    })

  //console.log("Boosted")
  // const displayChalets = await prisma.chalet.findMany({ orderBy: {chaletID:"asc"} })
  return { userlist, cleanChalets, dirtyChalets};
  });

  export const actions: Actions = {
    default: async ({ request }) => {
      const data = await request.formData();
      const messageText = String(data.get("messageText"))
      const userId = data.get("userID")
  
      console.log("Message: "+messageText)
     
      if (!messageText) {  return fail(400, { messageText, missing: true }) }
        
      const newUser = await prisma.savedMessages.create({
        data: {
          userId: Number(userId),
          message: String(messageText),
        },
      })

      //throw redirect(303, "/todos")
      return { success: true }; 
    }
}