<script lang="ts">
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<div class="page">
  <form method="post">
    <h1>Create Task</h1>
    {#if form?.missing}<p class="error">Missing field required!</p>{/if}
    <input
      name="title"
      placeholder="Titre"
      type="text"
      value={form?.title ?? ""}
    />
    <textarea
      name="content"
      cols="50"
      placeholder="Contenu  Additionel"
      rows="4" 
    /> 
    <!-- value={form?.content ?? ""} -->

    <button type="submit">Create</button>
    <a class="back" href="/"> or Cancel </a>
  </form>
</div>

<style>
  .page {
    background: white;
    padding: 3rem;
    display: flex;
    border: 10px;
    justify-content: center;
    align-items: center;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.25rem;
    border: 0.125rem solid rgba(0, 0, 0, 0.2);
  }

  button[type="submit"] {
    background: #c22e2e;
    border: 0;
    padding: 1rem 2rem;
  }

  .back {
    margin-left: 1rem;
  }
  .error {
    color: red;
  }
</style>
