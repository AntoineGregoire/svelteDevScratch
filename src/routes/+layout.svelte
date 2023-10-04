<script>
    import { onNavigate } from '$app/navigation';
    import Header from './Header.svelte';
	import './styles.css';

    onNavigate(() => {
        // @ts-ignore
        if (!document.startViewTransition) return;

        return new Promise((fulfill) => {
            // @ts-ignore
            document.startViewTransition(() => new Promise(fulfill))
        });
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
