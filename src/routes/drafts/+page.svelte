<script lang="ts">
	import { showModal } from "../stores/overlayStore";
  import type { ActionData } from './$types'

  export let form: ActionData
</script>

<div>
  <h1>Drafts</h1>
  <main>
    <div>
      {#each form as user (user.id)}
        <!-- {#if !user.loggedIn} -->
          <button on:click={() => {showModal.set(true)}}>
            <div class="{user.name}">
              <!-- <img src={user.avatar} alt="Pic"> -->
            </div>
            <div>
              {user.name}
            </div>
          </button>        
          <!-- {/if} -->
      {/each}
    </div>
  </main>
</div>
