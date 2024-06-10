import type { Handle } from '@sveltejs/kit'
import './lib/cron.js'

export const handle: Handle = async ({ event, resolve }) => {
  // get cookies from browser
  const session = event.cookies.get('session')

  //console.log("Event: ", event)
  //console.log("Session: ", session)


  // load page as normal
  return await resolve(event)
}
