// src/routes/+page.server.ts

import prisma from '$lib/prisma';
import type { PageServerLoad, Actions } from '../../$types';
import { fail, redirect } from '@sveltejs/kit';


export const load: PageServerLoad = (async ({params}: {params: {id: Number}}) => {
  const displayChalets = await prisma.chalet.findMany({
    where: {  cleanState: false },
    orderBy: {  chaletId: "asc",  }
  })
  const userInfo = await prisma.user.findUnique({
    where: { id: Number(params.id) },
    select: { name: true, id:true, loggedIn: true }
  })
  const currentTasks = await prisma.task.findMany({
    where: {
        cleanerId: Number(params.id),
        completed: false
    }
  })
  const nullShifts = await prisma.user.findMany({
    where: { id: Number(params.id)},
    select: { 
      shifts: {
        where: { shiftEnd: null },
        orderBy: {  shiftStart: "asc"  }
    }}
  })
  return { displayChalets, userInfo, currentTasks, nullShifts, id: params.id};
})


export const actions: Actions = {
  startTask: async ({ request }) => {
    const data = await request.formData();
    const chaletID = String(data.get("chaletID"))
    const cleanerID = String(data.get("cleanerID"))

    //console.log("Chalet ID: "+chaletID)
    //console.log("Cleaner ID: "+cleanerID)
   
    if (!chaletID) {  return fail(400, { chaletID, missing: true }) }
    if (!cleanerID) {  return fail(400, { cleanerID, missing: true }) }
      
    const thisChalet = await prisma.chalet.findUnique({
      where: { chaletId: Number(chaletID) }})
    
    await prisma.task.create({
      data: {
        chaletNom: thisChalet?.chaletNom,
        cleanerId: Number(cleanerID),
        chaletId: Number(chaletID),
        startTime: new Date().toLocaleString('en', {timeZone: 'America/New_York'}),
      },
    })
    await prisma.chalet.update({
      where: { chaletId: Number(chaletID)},
      data: { cleanState: true, 
        workingOn: true,
      }
    })  
    return { success: true }; 
  },


  logOut: async ({ request }) => {
    const data = await request.formData();
    const userID = String(data.get("userId"))
    
    const shiftInfo = await prisma.user.findMany({
      where: { id: Number(userID)},
      select: { 
        shifts: {
          where: { shiftEnd: null },
      }}
    })
    const currentTasks = await prisma.task.findMany({
      where: {
          cleanerId: Number(userID),
          completed: false
      }
    })
    if (currentTasks.length > 0) {
      return fail(400, {
        message: "Il faut compléter toutes vos tâches avant de check out pour la journée.",
        incomplete: true
      })
    }
    //Will cause ERROR if there is somehow more than one shift wihout an end time
    console.log("Shift Start: "+shiftInfo[0].shifts[0].shiftStart)

    const nowTime = new Date().toLocaleString('en', {timeZone: 'America/New_York'})

    const hoursToFixed = ((new Date(nowTime).getTime() - (new Date(shiftInfo[0].shifts[0].shiftStart).getTime())) / 3600000).toFixed(3)

    await prisma.shiftEntries.update({
      where: {id: shiftInfo[0].shifts[0].id},
      data: {
        shiftEnd:  nowTime,
        hoursWorkd: hoursToFixed
      }
    })
    console.log("Hours worked: "+ hoursToFixed)
    await prisma.user.update({
      where: {id: Number(userID)},
      data: {  loggedIn: false }
    })
    throw redirect(303, "/")
    //return { success: true }; 
  },

  
  manualEntryFull: async ({ request }) => {
    const data = await request.formData();
    const userID = String(data.get("userId"))
    const userName = String(data.get("userName"))
    const startTime = String(data.get("dateInput"))
    const endTime = String(data.get("endTime"))

    const startDate = new Date(startTime).toLocaleString('en', {timeZone: 'America/New_York'})
    const endDate = new Date(endTime).toLocaleString('en', {timeZone: 'America/New_York'})

    //console.log("Start Time: "+startDate)
    //console.log("End Time: "+endDate)

    const totalHours = ((new Date(endDate).getTime() - new Date(startDate).getTime()) / 3600000).toFixed(2)

    //console.log("Hours worked: "+ totalHours)

    await prisma.shiftEntries.create({
      data: {
        userId: Number(userID),
        userName: userName,
        shiftStart: startDate,
        shiftEnd: endDate,
        hoursWorkd: totalHours
      }
    })
    
    // const updateUser = await prisma.user.update({
    //   where: {id: Number(userID)},
    //   data: {  loggedIn: false }
    // })
    //throw redirect(303, "/")
    return { success: true }; 
  },


  manualEntryHalf: async ({ request }) => {
    const data = await request.formData();
    const userID = String(data.get("userId"))
    const endTime = String(data.get("dateInput"))

    const endDate = new Date(endTime).toLocaleString('en', {timeZone: 'America/New_York'})

    console.log("End Time: "+endTime)

    const shiftInfo = await prisma.user.findMany({
      where: { id: Number(userID)},
      select: { 
        shifts: {
          where: { shiftEnd: null },
          orderBy: {  shiftStart: "asc"  }
      }}
    })

    const checkOne = endTime.split(', ').slice(0,1)
    const checkTwo = shiftInfo[0].shifts[0].shiftStart.split(', ').slice(0,1) 


    if (checkOne !== checkTwo ){
      fail(400, {
        message: "It appears the dates do not match, please enter again.",
        incomplete: true
      })
    }


    const totalHours = ((new Date(endDate).getTime() - new Date(shiftInfo[0].shifts[0].shiftStart).getTime()) / 3600000).toFixed(2)

    //console.log("Hours worked: "+ totalHours)

    await prisma.shiftEntries.update({
      where: {id: Number(shiftInfo[0].shifts[0].id)},
      data: {
        shiftEnd: endDate,
        hoursWorkd: totalHours,
        enteredManually: true
      }
    })
    
    //throw redirect(303, "/")
    return { success: true }; 
  },


  completeTask: async ({ request }) => {
    const data = await request.formData();
    const taskID = String(data.get("taskId"))
    const chaletID = String(data.get("chaletId"))

    //console.log("Task ID: "+taskID)
   
    if (!taskID) {  return fail(400, { taskID, missing: true }) }

    const thisTask = await prisma.task.findUnique({
      where: { taskId: Number(taskID) }
    })
    const nowTime = new Date().toLocaleString('en', {timeZone: 'America/New_York'})
    const hoursToFixed = ((new Date(nowTime).getTime() - new Date(thisTask.startTime).getTime()) / 60000).toFixed(2)

    
    await prisma.task.update({
      where: {taskId: Number(taskID)},
      data: {
        completed: true,
        endTime: nowTime,
        totalTime: String(hoursToFixed)
      }
    })
    await prisma.chalet.update({
      where: {chaletId: Number(chaletID)},
      data: { workingOn: false }
    }) 
    return { success: true }; 
  },


  incompleteTask: async ({ request }) => {
    const data = await request.formData();
    const taskID = String(data.get("taskId"))
    const chaletID = String(data.get("chaletId"))

    //console.log("Chalet ID: "+chaletID)
   
    if (!taskID) {  return fail(400, { taskID, missing: true }) }
    if (!chaletID) {  return fail(400, { chaletID, missing: true }) }

    await prisma.task.delete({
      where: {taskId: Number(taskID)},
    })  
    await prisma.chalet.update({
      where: {chaletId: Number(chaletID)},
      data: { cleanState: false, workingOn: false }
    })  
    //throw redirect(303, "/todos")
    return { success: true }; 
}};
