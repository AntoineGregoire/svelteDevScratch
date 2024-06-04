<script lang="ts">
	import type { ActionData, PageData } from '../../routes/$types';
	import { showAdminModal } from '../../routes/stores/overlayStore';
	import Keypad from './Keypad.svelte';
	
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
		showAdminModal.set(false);}}} />

<div class="outsideModal" on:click={() => {showAdminModal.set(false)}} aria-hidden="true">
	<div class="insideModal" on:click|stopPropagation aria-hidden="true"> 
		<span class="close" aria-hidden="true" on:click|self={() => {showAdminModal.set(false)}}> &times; </span>  

		<h2 class="leftTitle"> Admin Login </h2>

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
		border: 50px black;
		border-radius: 15px;
		opacity: 95%;
		/* flex-wrap: wrap; */
		width: 480px;
		padding: 1rem;
		margin-top:6vh;
		margin-bottom:6vh;
	}
	/* dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 0.5);
	} */
	/* @keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	} */
</style>
