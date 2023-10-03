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
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<!-- <hr />
		<slot />
		<hr /> -->
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => dialog.close()}>OK</button>
	</div>
</dialog>



<style>
	dialog {
    position: relative;
    left: 0px;
    right: 0px;
    width: fit-content;
    height: fit-content;
    background-color: azure;
    margin: auto;
		padding: 5em;

	}
	dialog::backdrop {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(4, 4, 16);
    backdrop-filter: blur(5px);
  }
	dialog > div {
		padding: 1em;
    display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
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
		display: block; /* select inline instead of block if desired */
	}
</style>
