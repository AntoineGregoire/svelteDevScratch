<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { showLoginModal } from '../../routes/stores/overlayStore';
	import { USRval } from '../../routes/stores/overlayStore';
	import Keypad from './Keypad.svelte';
	
	export let currUser: any;
	let data: PageData;
	let validEntry = false;
	let pin: string;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'Enter your pin';
	
	function handleSubmit() {
		if (pin==currUser.password) {
			//if(currUser.loggedIn)
			validEntry = true;
			USRval.set(currUser.id)
		} else {
			alert("Password incorrect")
			pin = ''
		}
	}

	
</script>

<svelte:window
  on:keydown={e => {
    if (e.keyCode == 27) {
		showLoginModal.set(false);
    }
  }} />
<!-- on:close={() => {showModal.set(false)}} -->
<div class="outsideModal" on:click={() => {showLoginModal.set(false)}} aria-hidden="true">
	<div class="insideModal" on:click|stopPropagation aria-hidden="true"> 
		<span class="close" aria-hidden="true" on:click|self={() => {showLoginModal.set(false)}}>
			&times; 
		</span> 
		{#if !validEntry} 
			<h2 class="leftTitle"> 
			Bonjour, {currUser.name.split(' ').slice(0,1)}<hr>
			</h2>	
			<h2 class:pin>{(pin ? pin.replace(/\d(?!$)/g, '•') : 'Enter your pin')}</h2>
				
			<form method="post" action="/create">	
				<!-- <label for="username">Username</label> -->
				<input bind:value={currUser.id} name="identification" type="hidden"/>
				
				<Keypad bind:value={pin} on:submit={handleSubmit}/>

				<!-- <label for="password">Password</label> -->
				<input value={pin} name="password" type="hidden">
			</form>
			
			
		{:else if validEntry}
			<h1>You are now logged in! {$USRval}</h1>
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
		border: 50px black;
		border-radius: 15px;
		opacity: 95%;
		/* flex-wrap: wrap; */
		width: 430px;
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
