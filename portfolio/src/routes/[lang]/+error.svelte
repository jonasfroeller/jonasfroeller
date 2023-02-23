<script>
	// Components
	import Error from '$component/Error.svelte';
	// Svelte
	import { page } from '$app/stores';
</script>

<Error code={$page.status} path={$page.url.pathname} />
