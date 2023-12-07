<script>
	import Modal from '$lib/components/Modal.svelte'; 
	import { showModal } from './stores/overlayStore';

	import AvtrPanda from '$lib/images/panda.png'; 
	import AvtrRabbit from '$lib/images/rabbit.png'; 
	import AvtrBear from '$lib/images/bear.png'; 
	import AvtrCat from '$lib/images/cat.png'; 
	import AvtrWolf from '$lib/images/wolf.png'; 
	import AvtrSloth from '$lib/images/sloth.png'; 
	import AvtrDog from '$lib/images/dog.png'; 
	import AvtrDeer from '$lib/images/deer.png'; 
	import AvtrSeaLion from '$lib/images/sealion.png'; 

	let things = [
		{ id: 1, name: 'Martin Gregoire', done:false, Image: AvtrPanda},
		{ id: 2, name: 'Eric Sinapoli', done:false, Image: AvtrRabbit},
		{ id: 3, name: 'Pierre Methot', done:true, Image: AvtrBear},
		{ id: 4, name: 'Pedro Cuhna', done:true, Image: AvtrCat},
		{ id: 5, name: 'Pascal Gregoire', done:false, Image: AvtrWolf},
		{ id: 6, name: 'Tatiana Kriuchkova', done:false, Image: AvtrSloth},
		{ id: 7, name: 'Julia Kravets', done:true, Image: AvtrDog},
		{ id: 8, name: 'Antoine Gregoire', done:true, Image: AvtrDeer},
		{ id: 9, name: 'Admin', done:false, Image: AvtrSeaLion},
	];

</script>

<div class="mainContainer">
	<h1 class="LacAugTitle">Bienvenue Lac Augustin</h1>
	<h1 class="sideName"><u>Offline</u></h1>
	<div class="primary">
		{#each things as thing (thing.id)}
			{#if !thing.done}
				<button on:click={() => {showModal.set(true)}}>
					<div class="{thing.name}">
						<img src={thing.Image} alt="Pic">
					</div>
					<div>
						{thing.name}
					</div>
				</button>
			{/if}
		{/each}
	</div>
	<h1 class="sideName"><u>Online</u></h1>
	<div class="primary">
		{#each things as thing (thing.id)}
			{#if thing.done}
				<button on:click={() => (thing.done = false)}>
					<div class="{thing.name}">
						<img src={thing.Image} alt="Pic">
					</div>
					<div>
						{thing.name}
					</div>
				</button>
			{/if}
		{/each}
	</div>
	{#if $showModal}
		<Modal></Modal>
	{/if}
</div>

<style>
	.mainContain {
		display: flex;
		min-height: 100vh;
	}
	img {height: 3vw;}
	button {
		width: 20vw;
		height: 15vh;
		display: grid; 
		align-items: center;
		grid-gap: 1vw;
		margin-bottom: 4vh;
		border-radius: 3vh;
		grid-template-columns: 3vw 10vw;
		/* font-family: var(--font-mono); */
		border-color: var(--color-theme-2);
		background-color: var(--color-theme-1);
	}

	.primary {
		display: grid;
		grid-template-columns: repeat(4, 22vw);
		align-items: center;
		justify-content: center;
		width:100%;
		padding-bottom: 2em;
	}
</style>