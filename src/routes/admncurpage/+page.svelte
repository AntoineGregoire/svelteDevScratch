<script lang="ts">
    import { fade } from 'svelte/transition';
    import type { PageData, ActionData } from "./$types";
	import { enhance } from '$app/forms';

    export let data: PageData;
    export let form: ActionData;

    let uiID = 0;
    let chID = 0; 
    let selectedUI: number;
    let selectedCH: number;

    function setUI(id: number) {
		selectedUI = id;
		console.log(selectedUI);
	}
    function setCH(id: number) {
		selectedCH = id;
		console.log(selectedCH);
	}

</script>


<h1>Admin Page</h1>

<div>
    <div>
        <h2>Chalets Cleaned or Occupied</h2> 
        {#if data.cleanChalets.length == 0}
            <p>All Chalets are Currently Dirty</p>
        {:else}
            <div in:fade={{duration:600}} class="tdlist">
                {#each data.cleanChalets as currentOne}
                    <form method="POST" action="?/needsClean">
                        <input name="chaletID" type="hidden" bind:value={currentOne.chaletId}>
                        <button type="submit"> {currentOne.chaletNom}</button>
                    </form>
                {/each}
            </div>
        {/if}
    </div>
    <div>
        <h2>Un-clean Chalets</h2> 
        {#if data.dirtyChalets.length == 0}
            <p>All Chalets are Currently Clean</p>
        {:else}
            <div in:fade={{duration:600}} class="tdlist">
                {#each data.dirtyChalets as currentTwo}
                    <form method="POST" action="?/isClean">
                        <input name="chaletID" type="hidden" bind:value={currentTwo.chaletId}>
                        <button type="submit"> {currentTwo.chaletNom}</button>
                    </form>
                {/each}
            </div>
        {/if}
    </div>

    <div class="label">
        <h2>Chalets Logs</h2> 
    </div>
    <div class="flex">
        {#if form?.fail }
            <p class="formProduct">Please select a chalet</p>
        {/if}
        <select bind:value={chID} on:change={() => setCH(chID)} name="chID" class="">
            <option disabled selected value=0>- Select -</option>
            {#each data.tasklist as ui}
                <option value={ui.chaletId}>{ui.chaletNom}</option>
            {/each}
        </select>
        <form method="post" action="?/selectChalet" use:enhance>
            <input type="hidden" bind:value={selectedCH} name="chaletID">
            <button type="submit">Select</button>
        </form>
    </div>
    <div class="label">
        <h2>Employee Shift Logs</h2>
    </div>
    <div class="flex">
        {#if form?.missing }
            <p class="formProduct">Please select an employee</p>
        {/if}
        <select bind:value={uiID} on:change={() => setUI(uiID)} name="bpID" class="select select-bordered shadow-md w-9/12">
            <option disabled selected value=0>- Select -</option>
            {#each data.userlist as ui}
                <option value={ui.id}>{ui.name}</option>
            {/each}
        </select>
        <form method="post" action="?/selectUser" use:enhance>
            <input type="hidden" bind:value={selectedUI} name="userID">
            <button type="submit">Select</button>
        </form>
    </div>

    <div>
        <h2>Add new Employee to the Database</h2>
        <button on:click={()=>{window.location.assign("http://localhost:5173/create")}}>New Employee</button>
    </div>
    
    
    
</div>

<style>
    .tdlist {
      display: grid;
      grid-template-columns: repeat(5, 15vw);
      align-items: center; 
      justify-content: center;
      gap: 4px;
  }
  .tdlist button {
      width: 12vw;
      height: 65px;
  }
  h2{
        margin-bottom: 20px;
  }
  .formProduct{
    color: red;
  }
</style>