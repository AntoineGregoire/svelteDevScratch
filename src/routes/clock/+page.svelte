<script>
	import Modal from './Modal.svelte';

	let showModal = false;
</script>

<h1>Clock Page</h1>

<p>You can check In and check Out of work on this page</p>
<button class="primary" on:click={() => (showModal = true)}> Clock In </button>


<Modal bind:showModal>
	<h2 slot="header"> Check In page</h2>
	<p>Please enter your employee authentification code: </p>

</Modal>

<style>
	button{
	width: 12em;
	height: 3em;
	justify-content: center;
	margin: 0 auto;
	font-family: var(--font-mono);
	background-color: var(--color-theme-1);
	border-color: var(--color-theme-2);
	}
</style>