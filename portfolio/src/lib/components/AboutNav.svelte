<script>
	import { base } from '$app/paths';
	import { locale } from '$translation/i18n-svelte';

	export let name = 'terms-and-conditions';
</script>

<section class="tabs flex justify-center">
	<a
		href="{base}/{$locale}/about/resume"
		class="tab tab-bordered {name === 'resume' ? 'tab-active' : ''}">Resume</a
	>
	<a
		href="{base}/{$locale}/about/skills"
		class="tab tab-bordered {name === 'skills' ? 'tab-active' : ''}">Skills</a
	>
	<a
		href="{base}/{$locale}/about/photography"
		class="tab tab-bordered {name === 'photography' ? 'tab-active' : ''}">Photography</a
	>
</section>
