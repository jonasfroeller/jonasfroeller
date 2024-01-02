<script>
	// Svelte
	import { base } from '$app/paths'; // basepath
	// Components
	import Category from '$component/Category.svelte';
	import LocaleSwitcher from '$component/LocaleSwitcher.svelte';
	import ThemeSwitcher from '$component/ThemeSwitcher.svelte';
	// Translation
	import translation from '$translation/i18n-svelte'; // translations
	import { locale } from '$translation/i18n-svelte'; // currentLanguage

	let name = 'settings';
</script>

<Category {name} />

<section class="flex justify-center">
	<form class="form-control mb-4 w-96">
		<h3 class="text-lg font-bold mb-2">{$translation.Pages.settings.title()}</h3>
		<h4 class="text-base font-bold mb-2">{$translation.Pages.settings.headline01()}</h4>
		<label class="label cursor-pointer">
			<span class="label-text">{$translation.Pages.legal.terms_and_conditions.accept()}</span>
			<input type="checkbox" class="checkbox" checked disabled />
			<!-- alt class: toggle -->
		</label>
		<a href="{base}/{$locale}/legal/terms-and-conditions" class="link link-hover border-l-2 pl-1"
			>{$translation.Pages.readMore()}</a
		>
		<div class="divider" />
		<label class="label cursor-pointer">
			<span class="label-text">{$translation.Pages.legal.privacy_policy.accept()}</span>
			<input type="checkbox" class="checkbox" checked disabled />
		</label>
		<a href="{base}/{$locale}/legal/privacy-policy" class="link link-hover border-l-2 pl-1"
			>{$translation.Pages.readMore()}</a
		>
		<div class="divider" />
		<label class="label cursor-pointer">
			<span class="label-text">{$translation.Pages.legal.cookies.accept()}</span>
			<input type="checkbox" class="checkbox" checked disabled />
		</label>
		<div class="collapse collapse-plus rounded-lg">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title border-2 border-neutral rounded-lg peer-checked:rounded-[0px] peer-checked:rounded-t-lg peer-checked:border-neutral"
			>
				{$translation.Pages.settings.options()}
			</div>
			<div
				class="collapse-content text-neutral rounded-b-lg peer-checked:border-l-2 peer-checked:border-r-2 peer-checked:border-b-2 peer-checked:border-neutral"
			>
				<label class="label cursor-pointer">
					<span class="label-text">{$translation.Pages.settings.cookieOptions.necessary()}</span>
					<input type="checkbox" class="checkbox" checked disabled />
				</label>
			</div>
		</div>
		<a href="{base}/{$locale}/legal/cookies" class="link link-hover border-l-2 pl-1 mt-2"
			>{$translation.Pages.readMore()}</a
		>
		<div class="divider before:bg-neutral after:bg-neutral" />
		<h4 class="text-base font-bold mb-2">{$translation.Pages.settings.headline02()}</h4>
		<div class="flex items-center justify-between">
			<ThemeSwitcher asSelect={true} />
			<ThemeSwitcher asToggle={true} />
		</div>
		<div class="divider before:bg-neutral after:bg-neutral" />
		<h4 class="text-base font-bold mb-2">{$translation.Pages.settings.headline03()}</h4>
		<LocaleSwitcher asSelect={true} />
	</form>
</section>
