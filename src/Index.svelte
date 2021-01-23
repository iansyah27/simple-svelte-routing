<script>
    import {navigate} from 'svelte-routing';
    import {onMount} from 'svelte';

    let id = localStorage.getItem('id');

    onMount(() => {
        if (id) {
            navigate('/user', {
                replace: true
            });
        } else {
            navigate('/auth', {
                replace: true
            });
        }
    });

    // export let url;
    // export let location;
</script>