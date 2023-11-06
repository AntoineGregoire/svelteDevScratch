<script>
	import Modal from './Modal.svelte';
	let showModal = false;
</script>

<h1>Bienvenue Lac Augustin</h1>

<div class="primary">
	<button>
		Eric Sinapoli

	</button>
	<button>Pierre Methot</button>
	<!-- <button disabled={!value} on:click={clear}>clear</button>
	<button on:click={select(0)}>0</button>
	<button disabled={!value} on:click={submit}>submit</button> -->
</div>

<Modal bind:showModal>
	<h2 slot="header"> Check In page</h2>
	<p>Please enter your employee authentification code: </p>
</Modal>

<style>
	button {
		width: 12em;
		height: 5em;
		display: inline;
		margin: 0 auto;
		border-radius: 20px;
		justify-content: center;
		font-family: var(--font-mono);
		border-color: var(--color-theme-2);
		background-color: var(--color-theme-1);
	}

	.primary {
		width:100%;
		height: 4em;
		display: grid;
		grid-template-columns: repeat(3, 7em);
		grid-gap: 7em;
		padding-left: 4em;
		padding-bottom: 2em;
		align-items: center;
	}
</style>