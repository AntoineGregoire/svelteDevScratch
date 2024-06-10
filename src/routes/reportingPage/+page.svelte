<script lang="ts">
    import type { PageData } from "./$types";

	export let data: PageData;

    let uiID = 0;
    let selectedUI: number;

    function setUI(id: number) {
		selectedUI = id;
		console.log(selectedUI);
	}
</script>


<h1>Signaler un Problème</h1>
<button class="inlineTop" on:click={() => {history.back()}}>Back</button>

<div class="">
    <div class="label">
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
        <label class="label">
            <h3 class="notLikeUs">Expliquez le problème</h3>
            <input name="messageText" type="text"  />
        </label>
    
        <button class="label" type="submit">Publish</button>
    </form>
</div>

<style>
    h1{
        margin-bottom: 0px;
    }
    h3{
        font-family: var(--font-mono);
        font-weight: 700;
    }
    /* form button{
        margin-left: 10vw;
        margin-right: 10vw; 
    } */
    .inlineTop{
        margin-top: 15px;
        width: 100px;
        height: 55px;
        margin-bottom: 40px;
     }
    .notLikeUs{
        margin-bottom: 0;
        margin-top: 0;
        padding-top: 0;
        color: var(--color-theme-1);
    }
    .label{
        width: 700px;
        margin-left: 10vw;
        margin-right: 10vw; 
    }
</style>