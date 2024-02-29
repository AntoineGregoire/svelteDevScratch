<script lang="ts">
    import { onNavigate } from '$app/navigation';
	import type { PageData } from './$types';
    import { onMount } from 'svelte';
	import { showLoginModal } from './stores/overlayStore';
	import { USRval } from './stores/overlayStore';

	import Header from '$lib/components/Header.svelte';
	import "$lib/style.css";
	
	//export let data: PageData;

    onNavigate(() => {
		 // @ts-ignore 
        if (!document.startViewTransition) return;

        return new Promise((fulfill) => {
			 // @ts-ignore 
            document.startViewTransition(() => new Promise(fulfill))
        });
    });

	onMount(() => {
		//console.log(data.session)
		//console.log(data.user)
	});
</script>


<div class="app">
	<Header />

	<main>
		<slot />
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
