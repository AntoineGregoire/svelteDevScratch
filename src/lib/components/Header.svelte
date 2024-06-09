<script lang="ts">
  import logo from '$lib/images/lac-sa.png';
  import { showAdminModal } from '../../routes/stores/overlayStore';

  function openAdminFunc() {	
		showAdminModal.set(true)
	}
</script>

<nav>
    <div class="left">
        <a href="/" data-sveltekit-reload> <img src={logo} alt="Camping Lac St-Augustin"/></a>
        <!-- svelte-ignore a11y-missing-attribute --> 
        <a data-sveltekit-reload href="/"><h1 class="text">Lac St-Augustin </h1></a>
      
    </div>
    <div class="right">
      <a href="/" on:click={()=>{openAdminFunc()}}>Admin</a>
      <a href="/reportingPage"> Signaler un problème </a>
    </div>
</nav>

<style>
  nav {
    display: flex;
    padding: 1rem;
    align-items: center;
  }

  .text {
    color: var(--color-theme-1);
    font-size:30px;
    margin-top: 0px;
  }

  .left { 
    display: inline;
  }
	.left img { 
    width: 6em; 
    object-fit: contain;
  }
  .left a {
    font-size: x-large;
  }

  a {
    padding: 0;
    text-decoration: none;
    color: #000;
    display: inline-block;
  }

  a + a {
    margin-left: 1rem;
  }
  .right{
    padding: 0px;
  }
  .right a {
    border: 1px solid black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
</style>
