<script>
	// @ts-nocheck
	import translation from '$translation/i18n-svelte';
	import { browser } from '$app/environment';

	export let code = 404;
	export let path;

	let currentLang = path.split('/')[1];
</script>

<h1 class="text-9xl">{$translation.Error.error({ error: code })}</h1>
<!-- Dynamic Error Code Insertion -->
<div class="flex justify-center flex-col">
	<h2 class="text-4xl text-center">
		<slot>"{path}"</slot>
	</h2>
	<button class="btn w-fit-content h-min p-5 mt-4 rounded-full underline hover:no-underline">
		<h3 class="text-lg">
			<a href="/{currentLang}">{$translation.Error.action()}</a>
		</h3>
	</button>
</div>
