import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  // get cookies from browser
  const session = event.cookies.get('session')

  // find the user based on the session
  // const user = await db.user.findUnique({
  //   where: { loggedIn: true },
  // })

  // load page as normal
  return await resolve(event)
}
