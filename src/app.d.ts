// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {}; 
			//user: { id: number; name: string; avatar: string?; loggedIn: boolean; password: string; usrAuthTokn: string; };
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
