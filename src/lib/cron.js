// // lib/cron.js
import cron from 'node-cron';
import prisma from "$lib/prisma";


// Schedule the cron job to run at midnight every day
cron.schedule('55 12 * * *', async () => {
  console.log('Running a task every day');
  await logOutUsers();
});

async function logOutUsers() {
  try {
    // Update all users to set loggedIn to false
    await prisma.user.updateMany({
      data: {
        loggedIn: false
      }
    });
    console.log('All users logged out');
  } catch (error) {
    console.error('Failed to log out users:', error);
  }
//   } finally {
//     await prisma.$disconnect();
//   }
}

// Initialize the cron job
logOutUsers();