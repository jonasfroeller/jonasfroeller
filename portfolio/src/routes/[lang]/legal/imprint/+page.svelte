<script>
	// Components
	import LegalNav from '$component/LegalNav.svelte';
	import SubCategory from '$component/SubCategory.svelte';
	// Translation
	import translation from '$translation/i18n-svelte'; // translations

	let parent = 'legal';
	let name = 'imprint';
</script>

<SubCategory {parent} {name} />

<LegalNav {name} />

<section class="flex justify-center mt-4">
	<div class="prose">
		<h1 class="text-center mb-0 break-all">
			{$translation.Pages.legal.imprint.title()}
		</h1>

		{@html $translation.Pages.legal.imprint.content()}
	</div>
</section>
