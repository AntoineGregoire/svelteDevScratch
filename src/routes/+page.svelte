<script lang="ts">
	import Modal from '$lib/components/Modal.svelte'; 
	import { showModal } from './stores/overlayStore';
	import { fade } from 'svelte/transition';

	import avatars from '../lib/images/avatar';
	import type { PageData } from "./$types";
	import type { User } from '@prisma/client';

	export let data: PageData;

	let userPointer: any;

	function openUserModal(tempID: User) {	
		//userPointer = data.offline.find(user => user.id === tempID);	
		userPointer = tempID
		showModal.set(true)
		return userPointer
	}


	
</script>

<div class="mainContainer">
	<h1 class="sideName"><u>Offline</u></h1>
	<div in:fade={{duration:600}} class="primary">
		{#each data.online as onln}
				<button on:click={() => {openUserModal(onln)}}>
					<div class={onln.name}>
						<img src={avatars.avatar1} alt="P">
					</div>
					<div>
						{onln.name}
					</div>
				</button>
		{/each}
	</div>	
	{#if $showModal}
		<Modal currUser={userPointer}></Modal>
	{/if}
</div>

<style>
	.mainContain {
		display: flex;
		min-height: 100vh;
	}
	img {width: 4vw; object-fit: contain;}
	button {
		width: 22vw;
		height: 16vh;
		display: grid; 
		align-items: center;
		grid-gap: 1vw;
		margin-bottom: 3vh;
		border-radius: 3vh;
		grid-template-columns: 4vw 13vw;
		/* font-family: var(--font-mono); */
		border-color: var(--color-theme-2);
		background-color: var(--color-theme-1);
	}
	button:hover {
		color: var(--color-theme-2);
		background-color: var(--color-theme-3);
	}

	.primary {
		display: grid;
		grid-template-columns: repeat(4, 24vw);
		align-items: center;
		justify-content: center;
		width:100%;
		padding-bottom: 2em;
	}
</style>