import prisma from "$lib/prisma";

export async function GET(req) {
  await prisma.user.update({
    where: {
      id: true
    },
    data: {
      loggedIn: true,
    }
  })
  return new Response("Success!")
}