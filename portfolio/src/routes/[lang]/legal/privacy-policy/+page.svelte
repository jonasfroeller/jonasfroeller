<script>
	// Components
	import LegalNav from '$component/LegalNav.svelte';
	import SubCategory from '$component/SubCategory.svelte';
	// Translation
	import translation from '$translation/i18n-svelte'; // translations

	let parent = 'legal';
	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let name = 'privacy-policy';
	let nameCapitalized = name.replaceAll('-', ' ').replace(/\b(\w)/g, (s) => s.toUpperCase());
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<LegalNav {name} />

<section class="flex justify-center mt-4">
	<div class="prose">
		<h1 class="text-center mb-0 break-all">
			{$translation.Pages.legal.privacy_policy.title()}
		</h1>

		{@html $translation.Pages.legal.privacy_policy.content()}

		<label class="label justify-start gap-2 cursor-pointer">
			<span class="label-text"
				><strong>{$translation.Pages.legal.privacy_policy.accept()}</strong></span
			>
			<input type="checkbox" class="checkbox" checked disabled />
		</label>
	</div>
</section>
