<script>
	import { fly } from 'svelte/transition';
	
	import { bind } from './Modal.svelte';
	
	import Popup from './Popup.svelte';
	
	import { modal } from './stores.js';
	
	import { getContext } from 'svelte';
	const { open } = getContext('simple-modal');

	let opening = false;
	let opened = false;
	let closing = false;
	let closed = false;

	const showPopup = () => {
			modal.set(Popup);
		};

	const showPopupWithProps = () => {
			modal.set(bind(Popup, { message: "Add hours here:" }));
		};

	const showPopupInternal = () => {
		open(Popup, { message: "Select Action Here:" });
	  };

</script>

<section>
	<hr />
	<!-- <button on:click={showPopup}>Show a popup from an outside component!</button>
	<br /> -->
	<button on:click={showPopupInternal}>Andre de Grasse</button>
	<br />
	<!-- <button on:click={showPopupWithProps}>Add Hours</button> -->
</section>

<style>
	section {
		padding-top: 0.5em;
	}
	hr {
		border: 0;
		border-top: 1px dashed #ccc;
		padding-bottom: 1em;
	}
</style>