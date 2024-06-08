import { invalidate } from "$app/navigation"

export function GET(req) {
  if (req) {
    console.log(req)

    return new Response("Success!")
  } else {
    return new Response('Not found', {
      status: 404
    })
  }
}