<script>
	// Components
	import SubCategory from '$component/SubCategory.svelte';
	import AboutNav from '$component/AboutNav.svelte';
	// Translation
	import translation from '$translation/i18n-svelte'; // translations

	let parent = 'about';
	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let name = 'profile';
	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<AboutNav {name} />

<section class="flex justify-center mt-4">
	<div class="prose">
		<h1 class="text-center mb-0">
			{$translation.Pages.about.profile.title()}
		</h1>
		<article>
			{$translation.Pages.about.profile.text()}
			<br /> <em>~ ChatGPT</em>
			<!-- https://www.htl-leonding.at/ | https://www.htl-leonding.at/bildungsangebot/medientechnik/ -->
		</article>
	</div>
</section>

<!-- <style>
	.article-part::first-letter {
		initial-letter: 2;
		margin-right: 0.5rem;
	}
</style> -->
