<script>
	// Svelte
	import { base } from '$app/paths'; // basePath
	// Translation
	import translation from '$translation/i18n-svelte'; // translations
	import { locale } from '$translation/i18n-svelte'; // currentLanguage

	export let code = 404;
	export let path = `${base}/${$locale}`;
</script>

<section class="flex flex-col justify-center items-center gap-6 w-100 h-[75vh]">
	<h1 class="flex justify-center text-9xl">{$translation.Error.error({ error: code })}</h1>
	<div class="flex flex-col justify-center">
		<h2 class="flex justify-center text-4xl">
			<slot>"{path}"</slot>
		</h2>
		<div class="flex justify-center">
			<a href="{base}/{$locale}">
				<button class="p-5 mt-4 underline rounded-full btn w-fit h-min hover:no-underline">
					<h3 class="flex justify-center text-lg">
						{$translation.Error.action()}
					</h3>
				</button>
			</a>
		</div>
	</div>
</section>
