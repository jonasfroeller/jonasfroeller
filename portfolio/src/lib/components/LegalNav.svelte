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
		href="{base}/{$locale}/legal/terms-and-conditions"
		class="tab tab-bordered {name === 'terms-and-conditions' ? 'tab-active' : ''}"
		>{$translation.Pages.legal.terms_and_conditions.title()}</a
	>
	<a
		href="{base}/{$locale}/legal/privacy-policy"
		class="tab tab-bordered {name === 'privacy-policy' ? 'tab-active' : ''}"
		>{$translation.Pages.legal.privacy_policy.title()}</a
	>
	<a
		href="{base}/{$locale}/legal/cookies"
		class="tab tab-bordered {name === 'cookies' ? 'tab-active' : ''}"
		>{$translation.Pages.legal.cookies.title()}</a
	>
	<a
		href="{base}/{$locale}/legal/imprint"
		class="tab tab-bordered {name === 'imprint' ? 'tab-active' : ''}"
		>{$translation.Pages.legal.imprint.title()}</a
	>
</section>
