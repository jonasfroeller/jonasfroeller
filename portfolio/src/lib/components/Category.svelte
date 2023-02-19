<script>
	import { base } from '$app/paths'; // gh-pages basepath
	import { locale } from '$translation/i18n-svelte'; // currentLanguage

	export let name = 'unknown';
	export let nameCapitalized = 'unknown';
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
