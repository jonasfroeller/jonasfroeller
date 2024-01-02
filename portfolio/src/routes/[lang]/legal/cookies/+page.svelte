<script>
	// Components
	import SubCategory from '$component/SubCategory.svelte';
	import LegalNav from '$component/LegalNav.svelte';
	// Translation
	import translation from '$translation/i18n-svelte'; // translations

	let parent = 'legal';
	let name = 'cookies';
</script>

<SubCategory {parent} {name} />

<LegalNav {name} />

<section class="flex justify-center mt-4">
	<div class="prose">
		<h1 class="text-center mb-0 break-all">
			{$translation.Pages.legal.cookies.title()}
		</h1>

		{@html $translation.Pages.legal.cookies.content()}

		<label class="label justify-start gap-2 cursor-pointer">
			<span class="label-text"><strong>{$translation.Pages.legal.cookies.accept()}</strong></span>
			<input type="checkbox" class="checkbox" checked disabled />
		</label>
	</div>
</section>
