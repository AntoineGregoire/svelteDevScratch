<script lang="ts">
	import type { ActionData, PageData } from '../../routes/$types';
	import { showLoginModal } from '../../routes/stores/overlayStore';
	import Keypad from './Keypad.svelte';
	
	export let currUser: any;
	export let form: ActionData;
	let data: PageData;
	let pin: string;

	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'Enter your pin';

	$: if (form?.incorrect) { 
		setTimeout(() => {
                pin = ''; 
				form.incorrect = false
            }, 2000);
	} 
</script>

<svelte:window on:keydown={e => { if (e.keyCode == 27) {
		showLoginModal.set(false);}}} />

<div class="outsideModal" on:click={() => {showLoginModal.set(false)}} aria-hidden="true">
	<div class="insideModal" on:click|stopPropagation aria-hidden="true"> 
		<span class="close" aria-hidden="true" on:click|self={() => {showLoginModal.set(false)}}> &times; </span>  

		<h2 class="leftTitle"> 
		Bonjour, {currUser.name.split(' ').slice(0,1)}<hr>
		</h2>

		{#if form?.incorrect}
			<h2 class="error">{form?.message}</h2>
		{:else}
			<h2 class:pin>{(pin ? pin.replace(/\d(?!$)/g, '•') : 'Enter your pin')}</h2>
		{/if}

		<input hidden bind:value={pin} type="text" name="pin">
		<Keypad bind:value={pin}/>
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
	hr {
		border-color: black;
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
		border: 1.5px solid var(--color-theme-3);
		opacity: 95%;
		width: 480px;
		padding: 1rem;
		margin-top:6vh;
		margin-bottom:6vh;
	}
</style>
