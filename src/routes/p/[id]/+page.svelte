<script lang="ts">
    import Taskmodal from '$lib/components/Taskmodal.svelte'; 
    import type { PageData, ActionData } from "./$types";
    import { startTaskModal } from '../../../routes/stores/overlayStore';
    import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

    export let data: PageData;
    export let form: ActionData;

    let tempPointer: any;
    let newTaskBool = false;
    let manualEntryBool = false;
    let manualDate = (new Date()).toJSON().slice(0, 10);
    let defaultDate: String; 

    function handleClonk() {manualEntryBool = !manualEntryBool}
    function openStartModal(temp: any) {	
        startTaskModal.set(true)
        tempPointer = temp
        newTaskBool = true
        return tempPointer
    }
    function openEndModal(temp: any) {	
        startTaskModal.set(true)
        tempPointer = temp
        newTaskBool = false
        return tempPointer
    }
    function dafaultDateSet(){
        defaultDate = (manualDate)
    }
</script>

<div class="mainContainer">
    <div>
        <h1>Bonjour {data.userInfo?.name}</h1>
        <h3>Check In: {data.nullShifts[0].shifts[0].shiftStart.split(', ').slice(1,2)}</h3>      
    </div>

    {#if form?.incomplete}
    <div in:fade={{duration:600}} class="smolclass">
        <h4 class="err">{form?.message}</h4>
    </div>
	{/if}
    
    {#if data.nullShifts[0].shifts.length > 1}
    <div in:fade={{duration:600}} class="smolclass">
        <h4 class="err">Warning: It appears you forgot to log out on: {data.nullShifts[0].shifts[0].shiftStart}. Please enter this manually.</h4>
    </div>
    <form method="POST" action="?/manualEntryHalf">
        <input hidden value={data.id} name="userId" type="number">
        <h2>Please enter your End Time</h2>
        <input bind:value={manualDate}  name="dateInput" type="datetime-local">
        <button type="submit">Enter</button>
    </form>
    {/if}
    

    <h2>Vos tâches acceptées</h2> 
    {#if data.currentTasks.length == 0}
        <p>Aucune tâche a été acceptée en ce moment.</p>
    {:else}
        <div in:fade={{duration:600}} class="tdlist">
            {#each data.currentTasks as curTsk}
                <button on:click={() => {openEndModal(curTsk)}}>
                    {curTsk.chaletNom}
                </button>
            {/each}
        </div>
    {/if}
    
    <h2>Chalets sales</h2>
    {#if data.displayChalets.length == 0}
        <p>Tous les chalets sont propres.</p>
    {:else}
        <div in:fade={{duration:600}} class="tdlist">
        {#each data.displayChalets as displyChlt}
                <button on:click={() => {openStartModal(displyChlt)}}>
                    {displyChlt.chaletNom}
                </button>
        {/each}
        </div>
    {/if}

    <button class="enterManualBtn" on:click={() => {handleClonk()}}>Enter Manually</button>
    {#if manualEntryBool}
        <form method="POST" action="?/manualEntryFull">
            <input hidden value={data.id} name="userId" type="number">
            <input hidden value={data.userInfo?.name} name="userName" type="string">
            <div class="sameLine">
                <div class="rightPadding">
                    <h2>Start Time</h2>
                    <input bind:value={manualDate} on:change={()=>{dafaultDateSet()}} name="dateInput" type="datetime-local">
                </div>
                <div>
                    <h2>End Time</h2>
                    <input type="datetime-local" value={defaultDate} name="endTime">
                </div> 
            </div>
            
            <button type="submit">Enter</button>
        </form>
    {/if}    
    <form class="bottomclass" method="POST" action="?/logOut">
        {#if data.userInfo} <input hidden bind:value={data.id} name="userId" type="number"> {/if}
        <button>Check Out</button>
    </form>
    

    {#if $startTaskModal}
        {#if newTaskBool}
        <form method="POST" action="?/startTask">
            {#if data.userInfo}
                <input hidden bind:value={data.userInfo.id} name="cleanerID" type="number">
            {/if}
            <input hidden bind:value={tempPointer.chaletId} name="chaletID" type="number">
            <Taskmodal currTask={tempPointer}></Taskmodal>
        </form> 
        {:else if !newTaskBool}
        <form method="POST" action="?/completeTask">
            <input hidden bind:value={tempPointer.taskId} name="taskId" type="number">
            <input hidden bind:value={tempPointer.chaletId} name="chaletId" type="number">
            <Taskmodal currTask={tempPointer}></Taskmodal>
        </form> 
        {/if}
    {/if}
</div>

<style>
  .mainContainer{
    /* min-height: 100vh; */
      width: 100%;
  }

  h1 {
    font-size: 45px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

   h2 {
    font-family: var(--font-mono);
    font-weight: 1000;
    font-size: 30px;
    text-decoration: underline;
  }
  h3 {
    margin-top: 0px;
    padding-top: 0px;
  }
  h4 {
    font-size: 18px;
    font-weight: 800;
    font-family: var(--font-mono);
  }
  .enterManualBtn {
    margin-top: 40px;
  }
  .sameLine{
    display: grid;
    grid-template-columns: 50vw 40vw;
  }
  .rightPadding{
    padding-right: 10vw;
  }
  .bottomclass{
    margin-bottom: 0px;
  }
  .err{
    color: white;
    margin-left: 10px;
    padding: 10px;
  }
  .error{
		background-color: var(--color-theme-4);
		margin-left: 10px;
    	padding: 10px;
		border-radius: 10px;
    	color: white;
    	width: 600px;
  	}
  .smolclass{
    padding: 0px;
    margin: 0px;
  }
  h2{
     margin-bottom: 15px;
      
  }
  .tdlist {
      display: grid;
      grid-template-columns: repeat(5, 17vw);
      align-items: center; 
      justify-content: center;
      gap: 4px;
  }
  .tdlist button {
      width: 14vw;
      height: 65px;
  }

</style>