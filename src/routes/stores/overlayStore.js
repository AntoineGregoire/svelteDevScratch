// import { User } from '@prisma/client';
import { writable } from "svelte/store";


//export const userState = writable(null);
export const USRval = writable(Number(0));

export const showLoginModal = writable(false);
export const showTaskModal = writable(false);

// export function setUserState(initialData) {
//     //const userState = writable(initialData)
//     setContext('user', userState)
//     return userState
// }

// export function getUserState() {
//     return getContext()
// }