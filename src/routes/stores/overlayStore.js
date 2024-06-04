// import { User } from '@prisma/client';
import { writable } from "svelte/store";

export const showLoginModal = writable(false);
export const startTaskModal = writable(false);
export const showAdminModal = writable(false);

