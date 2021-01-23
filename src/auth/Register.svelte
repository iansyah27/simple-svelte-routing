<script>
    import {link} from 'svelte-routing';

    // export let url;
    // export let location;
</script>

<div class="w-full md:w-1/2 lg:w-1/4">
    <div class="w-full bg-white p-4 rounded shadow-md">
        <div class="text-center">
            <h2 style="font-weight: bold">Register</h2>
        </div>
        <hr class="mt-2 mb-2">
        <form class="mt-3">
            <input type="text" class="w-full p-2 bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:outline-none rounded-sm mb-2" placeholder="Username">
            <input type="password" class="w-full p-2 bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:outline-none rounded-sm mb-2" placeholder="Password">
            <input type="password" class="w-full p-2 bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:outline-none rounded-sm mb-2" placeholder="Password (Konfirmasi)">
            <button class="bg-blue-400 w-full rounded-md focus:outline-none hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 text-white p-3 mt-4">
                Daftar
            </button>
        </form>
    </div>
    <div class="w-full mt-3 text-center">
        <a use:link href="/auth/login" class="text-white hover:text-gray-100">sudah punya akun</a>
    </div>
</div>