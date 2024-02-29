<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { post } = data;
</script>

<div class="page">
  <main>
    
    <form method="post" class="actions">
      <button formaction="?/deletePost">Delete</button>
    </form>
  </main>
</div>

<style>
  .page {
    background: white;
    padding: 2rem;
  }

  .actions {
    margin-top: 2rem;
  }

  button {
    background: #ececec;
    border: 0;
    border-radius: 0.125rem;
    padding: 1rem 2rem;
  }
</style>
