// src/routes/create/+page.server.ts

import prisma from "$lib/prisma";
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

  export const actions: Actions = {
    default: async ({ request }) => {
      const formData = await request.formData();
      const username = formData.get("fullname");
      const identification = String(formData.get("identification"));
      const numeroPsWrd = formData.get("newPassword");
      const number = parseInt(identification);
      // basic check
      if (typeof username !== "string" || username.length < 2 || username.length > 35) {
        return fail(400, {
          success: false,
          message: "Invalid Username" });
      }
      if (identification.length !== 9) {
        return fail(400, {
          success: false,
          message: "The ID number must be exactly 9 digits." });
      }
      if ( typeof numeroPsWrd !== "string" || numeroPsWrd.length !== 4) {
        return fail(400, {
          success: false,
          message: "Invalid password: must be 4 digits." });
      }


      const uniqueIDCheck = prisma.user.findMany({
        where: {id: Number(identification)}
      })
      const uniquePWCheck = prisma.user.findMany({
        where: {password: numeroPsWrd }
      })

      const uniqueID = (await uniqueIDCheck).length
      const uniquePW = (await uniquePWCheck).length

      if((uniqueID>0)){
        return fail(400, {
          success: false,
          message: "This ID number is already in use, please try another." });
      }

      if((uniquePW>0)){
        return fail(400, {
          success: false,
          message: "This password is already taken, please try another." });
      }

      
      // await prisma.user.create({
      //   data: {
      //         name: username,
      //         id: number,
      //         password: numeroPsWrd,
      //         usrAuthTokn: crypto.randomUUID() },
      // })
      return { success: true };
      //throw redirect(302, "/");
  }};