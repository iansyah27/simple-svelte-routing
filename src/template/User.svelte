<script>
    import {Router, Route, link} from 'svelte-routing';

    import Dashboard from '../user/Dashboard.svelte';
    import User from '../user/User.svelte';

    let modalLogout = false;
    let toggleBodalLogout = () => {
        modalLogout = !modalLogout;
    }

    // export let url;
    // export let location;
</script>

<div class="flex flex-col lg:flex-row">
    <div class="bg-white shadow-lg h-16 fixed bottom-0 md:relative md:h-screen z-10 w-full md:w-1/5">
        <div class="md:mt-12 md:w-1/5 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                <li class="mr-3 flex-1">
                    <a href="/user/dashboard" class="block hover:bg-gray-100 py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-gray-800 border-b-2 border-gray-200 hover:border-blue-400" id="dashboard">
                        <i class="fa fa-desktop pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-800 md:text-gray-800 block md:inline-block">Dashboard</span>
                    </a>
                </li>
                <li class="mr-3 flex-1">
                    <a href="/user/user" class="block hover:bg-gray-100 py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-gray-800 border-b-2 border-gray-200 hover:border-blue-400" id="user">
                        <i class="fa fa-users pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-800 md:text-gray-800 block md:inline-block">User</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="fixed top-0 bg-white z-10 w-full p-3 px-10 text-gray-800 flex justify-center md:block shadow-lg">
        <strong class="text-blue-500">ADMIN</strong>
        <a href="#main" on:click="{toggleBodalLogout}" class="md:float-right absolute right-4"><i class="fa fa-door-open"></i></a>
    </div>
    <div class="w-full md:w-4/5 mt-10 p-5 mb-10">
        <Router url="user">
            <Route path="/" component="{Dashboard}" />
            <Route path="/dashboard" component="{Dashboard}" />
            <Route path="/user" component="{User}" />
        </Router>
    </div>
</div>
{#if modalLogout}
<div class="fixed top-0 w-full h-screen z-30 bg-transparent flex justify-center items-center p-2">
    <div class="bg-white rounded-md p-3 shadow-lg border-2 border-gray-300 md:w-1/3 w-full">
        <h4 class="text-xl">Logout</h4>
        <hr class="mt-3 mb-3">
        <p>Anda yakin akan logout ?</p>
        <hr class="mt-3 mb-3">
        <div align="right">
            <button class="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition focus:outline-none" type="button" on:click="{toggleBodalLogout}">Batal</button>
            <a user:link href="/" class="bg-blue-300 p-3 rounded-md text-white hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-300" >Logout</a>
        </div>
    </div>
</div>
{/if}