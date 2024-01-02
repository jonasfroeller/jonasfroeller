<script>
	// Translation
	import { locale } from '$translation/i18n-svelte'; // currentLanguage

	export let parent = 'unknown';
	export let name = 'unknown';

	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let nameCapitalized = name.replaceAll('-', ' ').replace(/\b(\w)/g, (s) => s.toUpperCase());
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
