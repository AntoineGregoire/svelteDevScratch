// src/routes/create/+page.server.ts

import prisma from "$lib/prisma";
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

  export const actions: Actions = {
    default: async ({ request }) => {
      const formData = await request.formData();
      const username = formData.get("fullname");
      const identification = String(formData.get("identification"));
      const password = formData.get("newPassword");
      const number = parseInt(identification);
      // basic check
      if (typeof username !== "string" || username.length < 2 || username.length > 35) {
        return fail(400, {
          success: false,
          message: "Invalid username" });
      }
      if (identification.length !== 9) {
        return fail(400, {
          success: false,
          message: "Invalid ID number" });
      }
      if ( typeof password !== "string" || password.length !== 4) {
        return fail(400, {
          success: false,
          message: "Invalid password" });
      }
      const updateUser = await prisma.user.create({
        data: {
              name: username,
              id: number,
              password: password,
              usrAuthTokn: crypto.randomUUID() },
      })
      return { success: true };
      //throw redirect(302, "/");
  }};