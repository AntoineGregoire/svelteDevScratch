<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    let csv_data: any;
    let CSVFile: any;

    function tableToCSV() {
        // Variable to store the final csv data
        csv_data = []

        // Get each row data
        let rows = document.getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {

            // Get each column data
            let cols = rows[i].querySelectorAll('td,th');

            // Stores each csv row data
            let csvrow = [];
            for (let j = 0; j < cols.length; j++) {

                // Get the text data of each cell of
                // a row and push it to csvrow
                csvrow.push(cols[j].innerHTML);
            }

            // Combine each column value with comma
            csv_data.push(csvrow.join(","));
        }
        // Combine each row data with new line character
        csv_data = csv_data.join('\n');

        downloadCSVFile(csv_data);  
    }
    function downloadCSVFile(csv_data) {
        // Create CSV file object and feed our
        // csv_data into it
        CSVFile = new Blob([csv_data], { type: "text/csv" });

        // Create to temporary link to initiate
        // download process
        let temp_link = document.createElement('a');

        let thisDay = data.taskDisplay[0].startTime.split(', ').slice(0,1)
        let tempName = data.taskDisplay[0].chaletNom.split(' ')

        // Download csv file
        temp_link.download = thisDay+tempName[0]+tempName[1]+".csv";
        let url = window.URL.createObjectURL(CSVFile);
        temp_link.href = url;

        // This link should not be displayed
        temp_link.style.display = "none";
        document.body.appendChild(temp_link);

        // Automatically click the link to trigger download 
        temp_link.click();
        document.body.removeChild(temp_link);
    }
    console.log(data.taskLen)
</script>


<div>
    {#if data.taskLen > 0}
        <h1>{data.taskDisplay[0].chaletNom} Logs</h1>  
        <button class="inlineTop" on:click={() => {history.back()}}>Back</button>
        <tr>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
            <th>Hours</th>
        </tr>
        {#each data.taskDisplay as eachShift}
            <tr>
                <td>{String(String(eachShift.startTime).split(', ').slice(0,1))}</td>
                <td>{String(eachShift.startTime).split(', ').slice(1,2)}</td>
                <td>{String(eachShift.endTime).split(', ').slice(1,2)}</td>
                <td>{eachShift.totalTime}</td>
            </tr>
        {/each} 
        <br>
        
    <button on:click={()=>{tableToCSV()}}>Download</button>
    {:else}
        <button class="inlineTop" on:click={() => {history.back()}}>Back</button>
        <h4>Sorry it appears there are no log for this chalet.</h4>
    {/if}
    
</div>

<style>
    th, td {
        border: 1px solid;
    }
    h1{
        margin-bottom: 0px;
    }
    h4{
        font-family: var(--font-mono);
        color: var(--color-theme-1);
    }
    .inlineTop{
        margin-top: 15px;
        width: 100px;
        height: 55px;
        margin-bottom: 40px;
     }
</style>