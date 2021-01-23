<script>
	import {Router, Route} from 'svelte-routing';

	import Index from './Index.svelte';
	import Auth from './template/Auth.svelte';
	import User from './template/User.svelte';

	export let url = '';
</script>

<Router url="{url}">
	<Route path="/" component="{Index}" />
	<Route path="/auth/*auth" component="{Auth}" />
	<Route path="/user/*user" component="{User}" />
</Router>