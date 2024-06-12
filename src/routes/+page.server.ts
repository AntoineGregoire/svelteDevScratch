// src/routes/+page.server.ts
import prisma from '$lib/prisma';
import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = (async () => {
  const userlist = await prisma.user.findMany({
    where: {
      NOT: {  id: 130298564 },
    },
    orderBy: { id: "asc" }, 
  })
return { userlist };
});

export const actions: Actions = {
  employeeLogin: async ({ request }) => {
    const data = await request.formData();
    const pin = String(data.get("pin"))
    const IDofUser = String(data.get("identification"))
    const numberID = parseInt(IDofUser);

    //console.log("Id: " + IDofUser)
    if (!IDofUser) {  return fail(400, { IDofUser, missing: true }) }
    
    if (pin.length !== 4) {
			return fail(400, {
				message: "Pin Length invalid",
        incorrect: true });
		}
    
    const getUSER = await prisma.user.findUnique({
      where: { id: numberID},
      select: { name:true, password: true, loggedIn: true },
    })

    if (pin == getUSER?.password)
      console.log(getUSER?.name + " is logged in!")
      //return { success: true, redirectUrl: "/newpage" }
    else
      return fail(400, {
        message: "Invalid pin",
        incorrect: true
    });

    if (!getUSER?.loggedIn) {
      await prisma.shiftEntries.create({
        data: {
          userName: getUSER?.name,
          userId: numberID,
          shiftStart: new Date(),
        },
      })
    }
    await prisma.user.update({
      where: { id: numberID },
      data: { loggedIn: true },
    })
    //return{success: true}
    throw redirect(303, "/p/"+IDofUser)
},

adminActivation: async ({ request }) => {
  const data = await request.formData();
  const pin = String(data.get("pin"))

  if (pin.length !== 4) {
    return fail(400, {
      message: "Pin Length invalid",
      incorrect: true });
  }

  const getADMIN = await prisma.user.findUnique({
    where: { id: 130298564 },
    select: { password: true },
  })

  if (pin == getADMIN?.password)
    console.log("Admin is logged in!")
  else
    return fail(400, {
      message: "Invalid pin",
      incorrect: true
  });
  throw redirect(303, "/admncurpage")
}}
 