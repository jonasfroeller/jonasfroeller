<script>
	// Svelte
	import { base } from '$app/paths'; // basepath
	// Translation
	import { locale } from '$translation/i18n-svelte'; // currentLanguage

	export let name = 'unknown';
	export let referHome = false;

	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
</script>

<svelte:head>
	<meta name="keywords" content="{$locale},rapid,darkmode,bilingual,{name}" />

	<meta
		property="og:url"
		content="https://jonasfroeller.github.io/jonasfroeller/{$locale}/{name}"
	/>
	<meta property="og:title" content={name} />

	<title>{nameCapitalized}</title>
</svelte:head>

{#if referHome}
	<center>
		<h1 class="mb-2"><em>nothing to see here</em></h1>
		<a href="{base}/{$locale}/"> <button class="btn btn-md lg:btn-lg">home</button></a>
	</center>
{/if}
