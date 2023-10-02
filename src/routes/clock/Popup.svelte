<script>
    export let message = 'Default message';
</script>
  
  
  <h2> {message} </h2>

  <div class="row">
    <div class="column">
      <!-- <button on:click={showPopupInternal}>Andre de Grasse</button> -->
        <button>Check In</button>
        <button>Check Out</button>
    </div>
  </div>

  <style>
    h2 {
          font-size: 2rem;
          text-align: center;
          font-family: var(--font-body);
      }
      button{
        margin: 0.5em;
      }
      .column {
        justify-content: space-between;
      }
  </style>