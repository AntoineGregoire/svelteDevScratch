<script lang="ts">
    import type { ActionData, PageData } from "./$types";

	export let data: PageData;
	export let form: ActionData;

    let uiID = 0;
    let selectedUI: number;

    function setUI(id: number) {
		selectedUI = id;
		console.log(selectedUI);
	}
</script>


<h1>Signaler un Problème</h1>

<div class="">
    <div class="flex">
       
        <h3 class="notLikeUs">Votre Nom</h3>
        <select bind:value={uiID} on:change={() => setUI(uiID)} name="bpID" class="">
            <option disabled selected value=0>- Select -</option>
            {#each data.userlist as ui}
                <option value={ui.id}>{ui.name}</option>
            {/each}
        </select>
    </div>
    <form method="POST">
        <label>
            <input type="hidden" bind:value={selectedUI} name="userID">
        </label>
        <label>
            <h3 class="notLikeUs">Expliquez le problème</h3>
            <input name="messageText" type="text"  />
        </label>
    
        <button type="submit">Publish</button>
    </form>
</div>

<style>
    .notLikeUs{
        margin-bottom: 0;
        margin-top: 0;
        padding-top: 0;
        color: var(--color-theme-1);
    }
</style>