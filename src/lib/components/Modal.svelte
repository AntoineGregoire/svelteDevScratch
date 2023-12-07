<script>
	import { showModal } from '../../routes/stores/overlayStore';
	import Keypad from './Keypad.svelte';
	
	/**
	 * @type {string}
	 */
	let pin;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'Enter your pin';

	function handleSubmit() {
		alert(`submitted ${pin}`);
	}
</script>
<svelte:window
  on:keydown={e => {
    if (e.keyCode == 27) {
		showModal.set(false);
    }
  }} />
<!-- on:close={() => {showModal.set(false)}} -->
<div class="outsideModal" on:click={() => {showModal.set(false)}} aria-hidden="true">
	<div class="insideModal" on:click|stopPropagation aria-hidden="true"> 
		<span class="close" aria-hidden="true"
		on:click|self={() => {showModal.set(false)}}>

		&times;
	</span>
	<h2 class="leftTitle"> 
		Bonjour,
	</h2>	
	<h2 class:pin>{view}</h2>
	<Keypad bind:value={pin} on:submit={handleSubmit} />
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
		background-color:darkgray;
		border-radius: 15px;
		border-color: var(--color-theme-2);
		max-width: 60vw;
		padding: 1rem;
		margin-top:6%;
		margin-bottom:6%;
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
