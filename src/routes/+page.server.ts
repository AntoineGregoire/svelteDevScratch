// src/routes/+page.server.ts

import prisma from '$lib/prisma';
import type { PageServerLoad, Actions } from './$types'; 

export const load: PageServerLoad = (async () => {
  const userlist = await prisma.user.findMany({
    orderBy: {
      id: "asc",
    }
  })
// const displayChalets = await prisma.chalet.findMany({ orderBy: {chaletID:"asc"} })
return { userlist };
})

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
