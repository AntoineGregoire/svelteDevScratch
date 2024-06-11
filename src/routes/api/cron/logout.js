// import prisma from "$lib/prisma";

// export async function POST() {
//   try {
//     await prisma.user.updateMany({
//       data: {
//         loggedIn: true
//       }
//     });
//     return json({ message: 'All users logged out' });
//   } catch (error) {
//     return json({ error: 'Failed to log out users' }, { status: 500 });
//   }
// }