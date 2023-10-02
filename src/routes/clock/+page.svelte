<script>
	import Content from './Content.svelte';
	import Content2 from './Content2.svelte';
    import Modal from './Modal.svelte';
	import Popup from './Popup.svelte';
	import { modal } from './stores.js';
</script>

<h1>Clock Page</h1>

<p>You can check In and check Out of work on this page</p>

<Modal show={$modal}>
	<!-- <Content /> -->
	<Content2 />
</Modal>

