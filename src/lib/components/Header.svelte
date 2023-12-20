<script lang="ts">
	import { page } from '$app/stores';
  import logo from '$lib/images/lac-sa.png';
</script>

<nav>
    <div class="left">
        <a href="/"> <img src={logo} alt="Camping Lac St-Augustin"/></a>
      <!-- svelte-ignore a11y-missing-attribute -->
       <a>Lac St-Augustin</a>
      
    </div>
    <div class="right">
      <a href="/signup"> New User </a>
      <a href="/create"> Create task </a>
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
