<script>
    import {link, navigate} from 'svelte-routing';
    import {baseUrl, notif, params} from '../app.js';

    let username = '';
    let password = '';
    
    let login = (e) => {
        e.preventDefault();
        fetch(baseUrl + 'auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params({
                username: username,
                password: password
            })
        }).then(res => res.json()).then(res => {
            if (res.error) {
                notif(res.message, 'error', true);
            } else {
                notif(res.message, 'success').then(swal => {
                    navigate('/user', {
                        replace: true
                    });
                });
            }
        })
    }
    
    // export let url;
    // export let location;
</script>

<div class="w-full md:w-1/2 lg:w-1/4">
    <div class="w-full bg-white p-4 rounded shadow-md">
        <div class="text-center">
            <h2 style="font-weight: bold">Login</h2>
        </div>
        <hr class="mt-2 mb-2">
        <form class="mt-3" on:submit="{login}">
            <input type="text" class="w-full p-2 bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:outline-none rounded-sm mb-2" placeholder="Username" bind:value="{username}" autofocus="true">
            <input type="password" class="w-full p-2 bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:outline-none rounded-sm mb-2" placeholder="Password" bind:value="{password}">
            <button class="bg-blue-400 w-full rounded-md focus:outline-none hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 text-white p-3 mt-4" type="submit">
                Masuk
            </button>
        </form>
    </div>
    <div class="w-full mt-3 text-center">
        <a use:link href="/auth/register" class="text-white hover:text-gray-100">buat akun baru</a>
    </div>
</div>