<script>
	// Svelte
	import { base } from '$app/paths';
	// Translation
	import { locale } from '$translation/i18n-svelte';
	import translation from '$translation/i18n-svelte'; // translations

	export let name = 'terms-and-conditions';
</script>

<section class="tabs flex justify-center">
	<a
		href="{base}/{$locale}/about/profile"
		class="tab tab-bordered {name === 'profile' ? 'tab-active' : ''}"
		>{$translation.Pages.about.profile.title()}</a
	>
	<a
		href="{base}/{$locale}/about/skills"
		class="tab tab-bordered {name === 'skills' ? 'tab-active' : ''}"
		>{$translation.Pages.about.skills.navTitle()}</a
	>
	<a
		href="{base}/{$locale}/about/photography"
		class="tab tab-bordered {name === 'photography' ? 'tab-active' : ''}"
		>{$translation.Pages.about.photography.title()}</a
	>
</section>
