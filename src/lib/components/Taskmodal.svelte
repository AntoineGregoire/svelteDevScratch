<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { showTaskModal } from '../../routes/stores/overlayStore';
	import type { Chalet } from '@prisma/client';
	import { createEventDispatcher } from 'svelte';

	
	let data: PageData;
	export let currTask: Chalet;
	let validEntry = false;

	
	
	function handleSubmit() {

	}

	
</script>

<svelte:window on:keydown={e => {
    if (e.keyCode == 27) {showTaskModal.set(false);}}} />
<!-- on:close={() => {showModal.set(false)}} -->
<div class="outsideModal" on:click={() => {showTaskModal.set(false)}} aria-hidden="true">
	<div class="insideModal" on:click|stopPropagation aria-hidden="true"> 
		<span class="close" aria-hidden="true" on:click|self={() => {showTaskModal.set(false)}}>
			&times;
		</span>
		{#if !validEntry}
			<h2 class="leftTitle"> {currTask.chaletNom}</h2>	
            <p>Ce chalet est {currTask.cleanState}</p>
			
			
		{:else if validEntry}
			<h1>You are now logged in! </h1>
			<button><a href="/todos">View tasks</a></button>
			<button><a href="/">Retourne</a></button>
		{/if}
	</div>
</div>

<style>
	.close {
    	float: right;
    	cursor: pointer;
	}
  	.leftTitle{
		text-align: left;
	}
	.outsideModal {
		background: rgb(255 255 255 / 60%);
		display: flex;
		width: 100vw;
		height: 100vh;
		position: fixed; 
		top: 0;
		left: 0; 
		justify-content: center;
		z-index: 2;
	}
	.insideModal {
		background-color:rgb(228, 228, 228);
		border-radius: 15px;
		border-color: var(--color-theme-2);
		opacity: 95%;
		/* flex-wrap: wrap; */
		width: 40vw;
		padding: 1rem;
		margin-top:6vh;
		margin-bottom:6vh;
	}

</style>
