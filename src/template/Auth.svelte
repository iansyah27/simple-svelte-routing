<script>
    import {Router, Route} from 'svelte-routing';

    import Login from '../auth/Login.svelte';
    import Register from '../auth/Register.svelte';

    // export let url;
    // export let location;
</script>

<div class="w-full h-screen bg-gradient-to-r from-blue-200 to-blue-400 flex flex-col justify-center items-center p-2">
    <Router url="auth">
        <Route path="/" component="{Login}" />
        <Route path="/login" component="{Login}" />
        <Route path="/register" component="{Register}" />
    </Router>
</div>