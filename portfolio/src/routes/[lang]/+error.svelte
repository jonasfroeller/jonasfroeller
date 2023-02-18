<script>
	import { page } from '$app/stores';
	import Error from '$component/Error.svelte';
</script>

<Error code={$page.status} path={$page.url.pathname} />
