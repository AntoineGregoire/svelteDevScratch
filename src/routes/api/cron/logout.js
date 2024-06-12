// import prisma from "$lib/prisma";

// export async function POST() {
//   try {
//     await prisma.user.updateMany({
//       data: {
//         loggedIn: false
//       }
//     });
//     return json({ message: 'Logging all users out' });
//   } catch (error) {
//     return json({ error: 'Failed to log all users out' }, { status: 500 });
//   }
// }