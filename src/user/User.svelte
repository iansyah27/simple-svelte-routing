<script>
    import {onMount} from 'svelte';
    import {baseUrl} from '../app.js';
    
    let users = [];
    // onMount = async () => {
        fetch(baseUrl + 'user', {
            method: 'GET'
        }).then(res => res.json()).then(res => {
            users = res.data;
        })
    // }
</script>

<div class="bg-white rounded-md p-2 shadow-md">
    <h4 class="text-lg">Data User</h4>
    <hr class="mt-2 mb-3">
    <table class="table-collapse w-full">
        <thead>
            <tr>
                <th class="border-2 border-gray-200 p-2">No</th>
                <th class="border-2 border-gray-200 p-2">Nama</th>
                <th class="border-2 border-gray-200 p-2">Username</th>
            </tr>
        </thead>
        <tbody>
            {#if users.length > 0}
                {#each users as item, i}
                    <tr class="hover:bg-gray-100 ">
                        <td class="border-2 border-gray-200 p-2">{i + 1}</td>
                        <td class="border-2 border-gray-200 p-2">{item.nama}</td>
                        <td class="border-2 border-gray-200 p-2">{item.username}</td>
                    </tr>
                {/each}
            {:else}
                <tr class="hover:bg-gray-100 ">
                    <td class="table-collapse p-2"></td>
                </tr>
            {/if}
        </tbody>
    </table>
</div>