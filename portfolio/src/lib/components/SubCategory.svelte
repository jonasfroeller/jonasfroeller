<script>
	// Translation
	import { locale } from '$translation/i18n-svelte'; // currentLanguage

	export let parent = 'unknown';
	export let parentCapitalized = 'unknown';
	export let name = 'unknown';
	export let nameCapitalized = 'unknown';
</script>

<svelte:head>
	<meta name="keywords" content="{$locale},rapid,darkmode,bilingual,{parent},{name}" />

	<meta
		property="og:url"
		content="https://jonasfroeller.github.io/jonasfroeller/{$locale}/{parent}/{name}"
	/>
	<meta property="og:title" content="{parent}/{name}" />

	<title>{parentCapitalized}/{nameCapitalized}</title>
</svelte:head>
