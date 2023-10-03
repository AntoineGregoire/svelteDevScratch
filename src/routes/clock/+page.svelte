<script>
	import Modal from './Modal.svelte';

	let showModal = false;
</script>

<h1>Clock Page</h1>

<p>You can check In and check Out of work on this page</p>
<button on:click={() => (showModal = true)}> Clock In </button>


<Modal bind:showModal>
	<h2 slot="header">
		Sign In Page
	</h2>

	

</Modal>

