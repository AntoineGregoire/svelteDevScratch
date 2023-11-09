<script>
	import Modal from './Modal.svelte';
	let showModal = false;

	import Avatar1 from '$lib/images/panda.png'; 
	import Avatar2 from '$lib/images/rabbit.png'; 
	import Avatar3 from '$lib/images/bear.png'; 
	import Avatar4 from '$lib/images/cat.png'; 
	import Avatar5 from '$lib/images/astronaut.png'; 

	let things = [
		{ id: 1, name: 'Martin Gregoire', done:false, Image: Avatar1},
		{ id: 2, name: 'Eric Sinapoli', done:false, Image: Avatar2},
		{ id: 3, name: 'Pierre Methot', done:false, Image: Avatar3},
		{ id: 4, name: 'Pedro Cuhna', done:false, Image: Avatar4},
		{ id: 5, name: 'Pascal Gregoire', done:false, Image: Avatar5}
	];

</script>

<h1>Bienvenue Lac Augustin</h1>

<div class="primary">
	{#each things as thing (thing.id)}
		<button on:click={() => (showModal = true)}>
			<img src={thing.Image} alt="Pic">
			{thing.name}
		</button>
	{/each}

</div>

<Modal bind:showModal>
	<h2 slot="header"> 
		Bonjour, <br/>
		Please enter your employee authentification code:
	</h2>
	<p>Please enter your employee authentification code: </p>
</Modal>

<style>
	img {
		height: 3vw;
	}
	button {
		width: 12em;
		height: 5em;
		display: inline;
		margin-bottom: 4vh;
		border-radius: 20px;
		/* justify-content: center; */
		font-family: var(--font-mono);
		border-color: var(--color-theme-2);
		background-color: var(--color-theme-1);
	}

	.primary {
		width:100%;
		height: 4em;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1fr;
		padding-left: 1fr;
		padding-right: 1fr;
		padding-bottom: 2em;
		align-items: center;
		justify-content: center;
	}
</style>