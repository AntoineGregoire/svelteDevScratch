<script>
	/**
	 * @type {boolean}
	 */
	 export let showModal; // boolean

	/**
	 * @type {HTMLDialogElement}
	 */
	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
	
	import { createEventDispatcher } from 'svelte';
	export let value = '';
	const dispatch = createEventDispatcher();

	// @ts-ignore
	const select = (num) => () => (value += num);
	const clear = () => (value = '');
	const submit = () => dispatch('submit');
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog id="dialog" bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot />
		<hr />
		<div class="keypad">
			<button on:click={select(1)}>1</button>
			<button on:click={select(2)}>2</button>
			<button on:click={select(3)}>3</button>
			<button on:click={select(4)}>4</button>
			<button on:click={select(5)}>5</button>
			<button on:click={select(6)}>6</button>
			<button on:click={select(7)}>7</button>
			<button on:click={select(8)}>8</button>
			<button on:click={select(9)}>9</button>
			<button disabled={!value} on:click={clear}>clear</button>
			<button on:click={select(0)}>0</button>
			<button disabled={!value} on:click={submit}>submit</button>
		</div>
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => dialog.close()}>OK</button>
	</div>

</dialog>



<style>
	dialog {
		padding: 1rem;
		background: white;
		max-width: 400px;
		padding-top: 1rem;
		border-radius: 20px;
		box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
		animation: fadeIn 1s ease both;
	}
	dialog::backdrop {
		animation: fadeIn 1s ease both;
		background: rgb(255 255 255 / 40%);
		z-index: 2;
		backdrop-filter: blur(ease);
	}
	.keypad {
		display: grid;
		grid-template-columns: repeat(3, 5em);
		grid-template-rows: repeat(4, 3em);
		grid-gap: 1.3em;
		width:700%;
		padding: 1em;
		padding-bottom: 2em;
		align-items: center;
		}
	button {
		max-width: 120%;
		height: 105%;
		border-radius: 20px;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 0.5);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: inline; /* select inline instead of block if desired */
	}
</style>
