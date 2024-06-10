<script lang="ts">
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<div class="center-content">
    {#if form?.success}
    	<h2> New member added!</h2>
    {:else}
    	<h2>Add a new employee to the db </h2>
    {/if}
	{#if form?.message}
    	<h4 class="error">{form?.message}</h4>
	{/if}
	<div>
		<form method="POST">
			<label class="inputType">
				<div class="label">
				  <span>Name</span>
				</div>
				<input name="fullname" type="text" placeholder="Name" />
			</label>
          	<label class="inputType">
				<div class="label">
		 			<span>Identification Number </span>
				</div>
				<input name="identification" type="number" placeholder="ID (9 digits)" />
			</label>
			<label class="inputType">
				<div class="label">
					<span>Password</span>
				</div>
				<input name="newPassword" type="password" id="password" placeholder="Password"/><br />
			</label>
			<button type="submit">Sign up</button>
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
	h2{
		font-family: var(--font-mono);
	}
	h4{
		font-family: var(--font-mono);
	}
	.inputType{
		width: 530px;
	}
	.error{
		background-color: var(--color-theme-4);
		margin-left: 10px;
    	padding: 10px;
		border-radius: 10px;
    	color: white;
    	width: 550px;
  	}
</style>