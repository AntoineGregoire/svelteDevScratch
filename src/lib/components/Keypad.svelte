<script>
	import { createEventDispatcher } from 'svelte';

	export let value = '';

	const dispatch = createEventDispatcher();

	const select = (num) => () => (value += num);
	const clear = () => (value = '');
	// const submit = () => dispatch('submit');
</script>

<div class="keypad">
	<button type="button" on:click={select(1)}>1</button>
	<button type="button" on:click={select(2)}>2</button>
	<button type="button" on:click={select(3)}>3</button>
	<button type="button" on:click={select(4)}>4</button>
	<button type="button" on:click={select(5)}>5</button>
	<button type="button" on:click={select(6)}>6</button>
	<button type="button" on:click={select(7)}>7</button>
	<button type="button" on:click={select(8)}>8</button>
	<button type="button" on:click={select(9)}>9</button>

	<button type="button" class="wordbtns" disabled={!value} on:click={clear}>clear</button>
	<button type="button" on:click={select(0)}>0</button>
	<input hidden bind:value={value} name="pin"/>
	<button class="wordbtns" disabled={!value} type="submit">Submit</button>
	<!-- <button class="wordbtns" disabled={!value} type="submit" on:click={submit}>submit</button> -->
</div>

<style>
	.wordbtns{
		font-size: large;
	}
	.keypad {
		display: grid;
		grid-template-columns: repeat(3, 6em);
		grid-template-rows: repeat(4, 3.7em);
		grid-gap: 1.5em;
		padding-right: 1em;
		align-items: center;
		}
	button {
		display: inline;
		width: 125px;
		max-width: 150px;
		height: 80px;
		border-radius: 20px;
		font-size: x-large;
	}
</style>