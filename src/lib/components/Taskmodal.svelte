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
			<p>Avez vous fini?</p>
			<button formaction="?/incompleteTask">Rejetez</button>
		{:else}
        	<p>Acceptez ce chalet. </p>
			<button on:click={() => {startTaskModal.set(false)}}>Cancel</button>
		{/if}
		<button type="submit">Accept </button>
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
		justify-content: center;
		width: 30vw;
		height: 60vh;
		padding: 1rem;
		margin-top:10vh;
		margin-bottom:10vh;
	}
</style>
