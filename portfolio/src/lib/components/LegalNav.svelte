<script>
	import { base } from '$app/paths';
	import { locale } from '$translation/i18n-svelte';

	export let name = 'terms-and-conditions';
</script>

<section class="tabs flex justify-center">
	<a
		href="{base}/{$locale}/legal/terms-and-conditions"
		class="tab tab-bordered {name === 'terms-and-conditions' ? 'tab-active' : ''}"
		>Terms and Conditions</a
	>
	<a
		href="{base}/{$locale}/legal/privacy-policy"
		class="tab tab-bordered {name === 'privacy-policy' ? 'tab-active' : ''}">Privacy Policy</a
	>
	<a
		href="{base}/{$locale}/legal/cookies"
		class="tab tab-bordered {name === 'cookies' ? 'tab-active' : ''}">Cookies</a
	>
	<a
		href="{base}/{$locale}/legal/imprint"
		class="tab tab-bordered {name === 'imprint' ? 'tab-active' : ''}">Imprint</a
	>
</section>
