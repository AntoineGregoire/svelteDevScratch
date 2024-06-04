<script lang="ts">
	import { page } from '$app/stores'; 
  import logo from '$lib/images/lac-sa.png';
  import { redirect } from '@sveltejs/kit';
  import { showAdminModal } from '../../routes/stores/overlayStore';

  function openAdminFunc() {	
		showAdminModal.set(true)
	}
</script>

<nav>
    <div class="left">
        <a href="/" on:dblclick={()=>{window.location.reload()}} on:click={() => {window.location.assign("localhost:5173/");}}> <img src={logo} alt="Camping Lac St-Augustin"/></a>
        <!-- svelte-ignore a11y-missing-attribute --> 
        <a class="text" href="/">Lac St-Augustin</a>
      
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

  .left { 
    display: inline;
  }
	.left img { 
    width: 5em; 
    /* height: 4em;  */
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

  .right a {
    border: 1px solid black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }

  /* .active{
    font-weight: bold;
  } */

</style>
