<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { startTaskModal } from '../../routes/stores/overlayStore';

	export let currTask: any;
	let data: PageData;
</script>

<svelte:window on:keydown={e => {if (e.keyCode == 27) {
	startTaskModal.set(false);}}} />

<div class="outsideModal" on:click={() => {startTaskModal.set(false)}} aria-hidden="true">
	<div class="insideModal" on:click|stopPropagation aria-hidden="true"> 
		<span class="close" aria-hidden="true" on:click|self={() => {startTaskModal.set(false)}}> &times; </span>
		
		<h1 class="leftTitle"> {currTask.chaletNom}</h1>	
		{#if currTask.taskId}
			<div class="startTitle">Commencé: {currTask.startTime.split(', ').slice(1,2)}</div>
		{:else}
			<div class="startTitle">Commencer cette tâche?</div>
		{/if}
		
		<button type="submit">Accepter </button>
		{#if currTask.taskId}
			<button formaction="?/incompleteTask">Rejeter</button>
		{:else}
			<button on:click={() => {startTaskModal.set(false)}}>Cancel</button>
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
		margin-bottom: 10px;
	}
	.startTitle{
		margin-bottom: 10px;
		color: var(--color-theme-1);
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
		border: 2px solid var(--color-theme-3);
		opacity: 95%;
		justify-content: center;
		width: 330px;
		height: 290px;
		padding: 16px;
		margin-top:25vh;
		/* margin-bottom:10vh; */
	}
	.insideModal button {
		width: 295px;
		height: 65px;
		font-size: 20px;
		border: 1.5px solid var(--color-theme-2);
	}
</style>
