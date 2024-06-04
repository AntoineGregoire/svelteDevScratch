<script lang="ts">
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<div class="center-content">
    {#if form?.message}
    	<h2 class="error">{form?.message}</h2>
    {:else if form?.success}
    	<h2> New member added!</h2>
    {:else}
    	<h2>Add a new employee to the db </h2>
    {/if}
	<div>
		<form method="POST">
			<label>
				<div class="label">
				  <span>Name</span>
				</div>
				<input name="fullname" type="text" placeholder="Name" />
			</label>
          	<label>
				<div class="label">
		 			<span>Identification Number </span>
				</div>
				<input name="identification" type="number" placeholder="ID (9 digits)" />
			</label>
			<label>
				<div class="label">
					<span>Password</span>
				</div>
				<input name="newPassword" type="password" id="password" placeholder="Password"/><br />
			</label>
			<button type="submit" class="btn btn-neutral btn-sm my-1">Sign up</button>
		</form>
	</div>
</div>

<style>
	.center-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 85vh;
	}

  .error{
    color: red;
    width: 330px;
  }
</style>