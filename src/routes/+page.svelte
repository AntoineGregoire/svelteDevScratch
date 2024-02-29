<script lang="ts">
	import { showLoginModal } from './stores/overlayStore';
	import { fade } from 'svelte/transition';
	import Modal from '$lib/components/Modal.svelte'; 

	import avatars from '../lib/images/avatar';
	import type { PageData } from "./$types";
	import type { User } from '@prisma/client';

	export let data: PageData;

	let userPointer: any;

	function openModalFunc(tempID: User) {	
		showLoginModal.set(true)
		userPointer = tempID
	}
</script>




<div class="mainContain">

	{#if $showLoginModal}
		<form method="post" action="/create">	
			<!-- <label for="username">Username</label> -->
			<input bind:value={userPointer.id} name="identification" type="hidden"/>
			<Modal currUser={userPointer}></Modal>

			<!-- <label for="password">Password</label> -->
			<input value={data.pin} name="password" type="hidden">
		</form>
		
	{/if}

	<h1 class="sideName"><u>Log in here</u></h1>
	<div in:fade={{duration:600}} class="primary">
			{#each data.userlist as useritem}
				<button on:click={() => {openModalFunc(useritem)}}>
					<div>
						<img src={avatars.avatar1} alt="P">
					</div>
					<div>
						{useritem.name}
					</div>
				</button>
			{/each}
	</div>	
</div>
<!-- bind:value={pin} -->

<!-- <div class="container">
	{#if strategy_visible}
		<div class="container" >
			<form method="POST" class="form">				
				<label class="form-control select-lg w-full max-w">
					<div class="label"> <span>Select a Strategy</span> </div>
					<select bind:value={} name="strategy">
					<option disabled selected>-</option>
					{#each strategyList as strategy} {/each}
					</select>
				</label>
				<button type="submit">Next</button>
				<a href="/dashboard"> 
					<button class="btn uppercase">Cancel</button>
				</a>
			</form>
		</div>
	{/if}
</div> -->
<style>
	.mainContain {
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