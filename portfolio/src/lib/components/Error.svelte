<script>
	// @ts-nocheck
	import translation from '$translation/i18n-svelte';
	import { base } from '$app/paths'; // gh-pages basepath
	import { locale } from '$translation/i18n-svelte'; // currentLanguage

	export let code = 404;
	export let path = `${base}/${$locale}`;
</script>

<section class="flex flex-col justify-center items-center gap-6 w-100 h-[75vh]">
	<h1 class="text-9xl flex justify-center">{$translation.Error.error({ error: code })}</h1>
	<div class="flex justify-center flex-col">
		<h2 class="text-4xl flex justify-center">
			<slot>"{path}"</slot>
		</h2>
		<div class="flex justify-center">
			<a href="{base}/{$locale}">
				<button class="btn w-fit h-min p-5 mt-4 rounded-full underline hover:no-underline">
					<h3 class="text-lg flex justify-center">
						{$translation.Error.action()}
					</h3>
				</button>
			</a>
		</div>
	</div>
</section>
