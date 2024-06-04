<script lang="ts">
    import Taskmodal from '$lib/components/Taskmodal.svelte'; 
    import type { PageData } from "./$types";
    import { startTaskModal } from '../../../routes/stores/overlayStore';
    import { fade } from 'svelte/transition';

    export let data: PageData;

    let tempPointer: any;
    let newTaskBool = false;
    let manualEntryBool = false;
    let isChecked = false;
    let manualDate = (new Date()).toJSON().slice(0, 10);
    let defaultDate: String; 

    function handleClonk() {manualEntryBool = !manualEntryBool}
    function manualSetting() {isChecked = !isChecked}
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
    <h1>Bonjour {data.userInfo?.name}</h1>
    {#if data.nullShifts[0].shifts.length > 1}
    <h2>{data.nullShifts[0].shifts}</h2>
        <h2 class="err">Warning: </h2>
        <h2 class="err">It appears you forgot to log out on: {String(data.nullShifts[0].shifts[0].shiftStart).split(' 2024 ').slice(0,1)}. Please enter this manually.</h2>
    {/if}
    <button on:click={() => {handleClonk()}}>Enter Manually</button>
    {#if manualEntryBool}
        <div class="sameLine">
            <div> <button on:click={() => {manualSetting()}} class="checkMark">✓</button> </div>
            <div class="topPadding"> <p>Did you log in that day?</p></div>
        </div> 
        {#if !isChecked}
            <form method="POST" action="?/manualEntryHalf">
                <input hidden value={data.id} name="userId" type="number">
                <h2>End Time</h2>
                <input bind:value={manualDate} name="dateInput" type="datetime-local">
                <button type="submit">Enter</button>
            </form>
        {:else if isChecked}
            <form method="POST" action="?/manualEntryFull">
                <input hidden value={data.id} name="userId" type="number">
                <input hidden value={data.userInfo?.name} name="userName" type="string">
                <h2>Start Time</h2>
                <input bind:value={manualDate} on:change={()=>{dafaultDateSet()}} name="dateInput" type="datetime-local">
                <h2>End Time</h2>
                <input type="datetime-local" value={defaultDate} name="endTime">
                <button type="submit">Enter</button>
            </form>
        {/if}
    {/if}    
    <form method="POST" action="?/logOut">
        {#if data.userInfo} <input hidden bind:value={data.id} name="userId" type="number"> {/if}
        <button>Check Out</button>
    </form>

    <h2>Current Tasks</h2> 
    {#if data.currentTasks.length == 0}
        <p>You currently have no tasks</p>
    {:else}
        <div in:fade={{duration:600}} class="tdlist">
            {#each data.currentTasks as curTsk}
                <button on:click={() => {openEndModal(curTsk)}}>
                    {curTsk.chaletNom}
                </button>
            {/each}
        </div>
    {/if}
    
    <h2>Pick Up</h2>
    <div in:fade={{duration:600}} class="tdlist">
      {#each data.displayChalets as displyChlt}
            <button on:click={() => {openStartModal(displyChlt)}}>
                {displyChlt.chaletNom}
            </button>
      {/each}
    </div>

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
  
  .checkMark {
      width: 50px;
      height: 50px;
  }
  .sameLine{
    display: grid;
    grid-template-columns: 5vw 20vw;
  }

  .topPadding{
    padding-top: 10px;
  }
  .err{
    color: red;
    margin-bottom: 10px;
    margin-top: 0px;
    padding: 0px;
  }

  /* .topbuttons{
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, 46vw);
  }
  .topbuttons button{
      width: 300px;
      height: 80px;
  } */
  h2{
     margin-bottom: 15px;
      
  }
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

</style>