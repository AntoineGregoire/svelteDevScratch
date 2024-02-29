// src/routes/+page.server.ts

import prisma from '$lib/prisma';
import type { PageServerLoad, Actions } from './$types'; 
import { USRval } from './stores/overlayStore';

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
      console.log("Severside User ID:", USRval)
      
    
  const updateUser = await prisma.user.update({
    where: {
      id: USRval,  
    },
    data: {
          loggedIn: {
              set: true
          },
    },
  })
}}
