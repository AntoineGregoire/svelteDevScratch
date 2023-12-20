<script>
	let todoList = ["Do the laundry"];
    let currTodo = "";
    let error = false;

    function addTodo() {
        if(!currTodo){
            error = true;
            return 
        }
        else{
            todoList = [...todoList, currTodo];
            currTodo = "";
            error = false;
        }
    }
</script>

<div class="todoContainer">
    <div class="todoHeader">
        <h1>To Do List</h1>
    </div>
    <main>
        {#each todoList as todo, index}
        <div class="todoItem">
            {index+1}. {todo}
        </div>
        {/each}
    </main>
    <div class="enterTodo"> <!-- class={"enterTodo" + (error ? "errorBorder" : "") -->
        <input bind:value={currTodo} type="text" placeholder={(error ? "You have not entered any text": "Enter New To Do Item")}>
        <button on:click={addTodo}>Add</button>
    </div>
</div>



<style>
    main {
        display: flex; 
        flex-direction: column;
        gap: 8px;
    }
    .todoItem {
        border-left: 2px solid var(--color-theme-2);
        padding: 8px 14px;
    }
	.enterTodo {
        display: flex;
        /* align-items: stretch; */
        width: 86vw;
		height: 9.2vh;
        min-height: 60px;
        margin-top: 8px;
        border: 1px solid;
        border-radius: 8px;
	    border-color: var(--color-theme-2);
        background-color: var(--color-theme-1);
    }
    .enterTodo button {
        /* position: relative;  */
        height: 9vh;
        min-height: 59px;
        border: 1px solid;
        /* border-radius: 8px; */
        border-color: var(--color-theme-2);
        flex: 1;
    }
    .enterTodo button:focus {
        background: transparent;
    }
    .enterTodo input {
        background: transparent;
        /* width: 80vw; */
        border: none;
        padding: 7px;
        color: white; 
        
    }
    .enterTodo input:focus{
        outline:none;
    }
    

</style>