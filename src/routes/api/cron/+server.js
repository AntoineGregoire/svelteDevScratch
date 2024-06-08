import { Response } from 'express' 
import { Prisma } from '@prisma/client'


export function GET(req) {
  if (req) {
    console.log(req)

    Prisma.user.update({
      where: {
        id: true
      },
      data: {
        loggedIn: false,
      }
    })
    
    return new Response("Success!")
  } else {
    return new Response('Not found', {
      status: 404
    })
  }
}