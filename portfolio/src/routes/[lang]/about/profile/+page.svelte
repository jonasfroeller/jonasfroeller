<script>
	// Svelte
	import { base } from '$app/paths';
	// Translation
	import { locale } from '$translation/i18n-svelte';
	// Components
	import SubCategory from '$component/SubCategory.svelte';
	import AboutNav from '$component/AboutNav.svelte';
	// Translation
	import translation from '$translation/i18n-svelte'; // translations

	let parent = 'about';
	let name = 'profile';
</script>

<SubCategory {parent} {name} />

<AboutNav {name} />

<section class="flex justify-center mt-4">
	<div class="prose">
		<h1 class="text-center mb-0">
			{$translation.Pages.about.profile.title()}
		</h1>
		<article class="mb-4">
			{@html $translation.Pages.about.profile.text()}
			<br /> <em>~ ChatGPT</em>
		</article>
		<div class="flex flex-col gap-2 justify-between">
			<div class="flex flex-wrap gap-2">
				<a href="{base}/{$locale}/socials">
					<button class="btn btn-sm gap-2"
						><iconify-icon icon="mdi:comment-account" width="18" height="18" />
						{$translation.Pages.contactButton()}</button
					>
				</a>
				<a href="https://qwik-link-tree.vercel.app" target="_blank">
					<button class="btn btn-sm gap-2"
						><iconify-icon icon="mdi:link" width="18" height="18" />
						{$translation.Pages.linksButton()}</button
					>
				</a>
			</div>
			<div class="flex flex-wrap gap-2">
				<a href="{base}/{$locale}/projects">
					<button class="btn btn-sm gap-2"
						><iconify-icon icon="eos-icons:application-outlined" width="18" height="18" />
						{$translation.Pages.projectsButton()}</button
					>
				</a>
				<a href="https://gist.github.com/jonasfroeller" target="_blank">
					<button class="btn btn-sm gap-2"
						><iconify-icon icon="mdi:code-tags" width="18" height="18" />
						{$translation.Pages.codeSnippetsButton()}</button
					>
				</a>
			</div>
			<div class="flex flex-wrap gap-2">
				<a href="https://buymeacoffee.com/jonasfroeller" target="_blank">
					<button class="btn btn-sm gap-2"
						><iconify-icon icon="mdi:heart" width="18" height="18" />
						{$translation.Pages.supportButton()}</button
					>
				</a>
				<a href="https://www.fiverr.com/codedesignmedia" target="_blank">
					<button class="btn btn-sm gap-2"
						><iconify-icon icon="mdi:cart" width="18" height="18" />
						{$translation.Pages.buyButton()}</button
					>
				</a>
			</div>
		</div>
	</div>
</section>
