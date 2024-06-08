<script lang="ts">
	import Modal from '$lib/components/Modal.svelte'; 
	import AdminModal from '$lib/components/adminModal.svelte';
	import avatars from '../lib/images/avatar';
	import type { ActionData, PageData } from "./$types";
	import type { User } from '@prisma/client';
	import { showLoginModal, showAdminModal, reloadBoolean } from './stores/overlayStore';
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data: PageData;
	export let form: ActionData;

	let userPointer: any;

	onMount(() => {
		showAdminModal.set(false)
		
		
	})

	function openModalFunc(clickedUser: User) {	
		showLoginModal.set(true)
		userPointer = clickedUser
	}
</script>

<div class="mainContain">
	<h1 class="sideName"><u>Task Manager</u></h1>
	<div in:fade={{duration:600}} class="primary">
			{#each data.userlist as useritem}
				<button on:click={() => {openModalFunc(useritem)}}>
					<div>	<img src={avatars.Antoine} alt="P">	</div>
					<div class="fontNames">	{useritem.name}	</div>
				</button>
			{/each}
	</div>	

	{#if $showLoginModal}
		<form method="POST" action="?/employeeLogin" use:enhance>	
			<input hidden bind:value={userPointer.id} name="identification" type="number"/>
			<Modal currUser={userPointer} form={form}></Modal>
		</form> 
	{/if}

	{#if $showAdminModal}
		<form method="POST" action="?/adminActivation" use:enhance>	
			<AdminModal form={form}></AdminModal>
		</form>
	{/if}
</div>

<style>
	.mainContain {
		min-height: 100vh;
	}
	.sideName {
		text-align: left;
		font-size: 40px;
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
		border-color: var(--color-theme-2);
		background-color: var(--color-theme-1);
	}
	button:hover {
		color: var(--color-theme-2);
		background-color: var(--color-theme-3);
	}
	.fontNames{
		font-family: var(--font-mono);
	}

	.primary {
		display: grid;
		grid-template-columns: repeat(4, 24vw);
		align-items: center;
		justify-content: center;
		width:100%;
	}
</style>