<script>
	// @ts-nocheck
	// Svelte
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	// Translation
	import { locale } from '$translation/i18n-svelte'; // currentLanguage
	import translation from '$translation/i18n-svelte'; // translations
	// Components
	import LocaleSwitcher from '$component/LocaleSwitcher.svelte';
	import ThemeSwitcher from '$component/ThemeSwitcher.svelte';
	// Stores
	import { config } from '$store/styleConfig';
	// Scripts
	import styleCfg from '$script/styleStorage';

	onMount(async () => {
		$config = await styleCfg.load();
	});

	/* $: console.log('current lang:', $locale); */

	$: id = $page.route.id;
	$: dir =
		id && typeof id === 'string'
			? id.includes('jonasfroeller')
				? id.replace('/jonasfroeller', '')
				: id.includes('[lang]')
				? id.replace('/[lang]', '').split('/').splice(1, 1)
				: ''
			: '';

	function toggleMenu() {
		if (browser) {
			document.getElementById('menu').classList.toggle('hidden');
		}
	}
</script>

<header
	class="flex flex-wrap justify-end p-2 border-b-2 border-secondary min-h-[10dvh] min-h-[10vh] select-none"
>
	<nav class="flex items-center justify-between w-full">
		<ul class="flex">
			<li>
				<label
					class="bg-transparent border-2 btn hover:bg-transparent btn-circle swap swap-rotate text-secondary border-secondary hover:border-primary"
				>
					<!-- this hidden checkbox controls the state -->
					<input type="checkbox" on:click={() => toggleMenu()} />

					<!-- hamburger icon -->
					<svg
						class="fill-current swap-off"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
						><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
					>

					<!-- close icon -->
					<svg
						class="fill-current swap-on"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
						><polygon
							points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
						/></svg
					>
				</label>
			</li>
		</ul>
		<div class="flex items-center gap-4">
			<LocaleSwitcher />
			<ThemeSwitcher />
			<label for="settings" class="flex items-center">
				<iconify-icon
					class="cursor-pointer rotate"
					icon="material-symbols:settings-outline"
					width="38"
					height="38"
				/></label
			>

			<input type="checkbox" id="settings" class="modal-toggle" />
			<label for="settings" class="cursor-pointer modal">
				<label class="relative modal-box" for="">
					<!-- disables closing modal on click of modal -->
					<label for="settings" class="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
					<h3 class="mb-2 text-lg font-bold">{$translation.Pages.settings.title()}</h3>
					<form class="mb-4 form-control">
						<h4 class="mb-2 text-base font-bold">{$translation.Pages.settings.headline01()}</h4>
						<label class="cursor-pointer label">
							<span class="label-text"
								>{$translation.Pages.legal.terms_and_conditions.accept()}</span
							>
							<input type="checkbox" class="checkbox" checked disabled />
							<!-- alt class: toggle -->
						</label>
						<label class="cursor-pointer label">
							<span class="label-text">{$translation.Pages.legal.privacy_policy.accept()}</span>
							<input type="checkbox" class="checkbox" checked disabled />
						</label>
						<label class="cursor-pointer label">
							<span class="label-text">{$translation.Pages.legal.cookies.accept()}</span>
							<input type="checkbox" class="checkbox" checked disabled />
						</label>
						<h4 class="mb-2 text-base font-bold">{$translation.Pages.settings.headline02()}</h4>
						<div class="flex items-center justify-between">
							<ThemeSwitcher asSelect={true} />
							<ThemeSwitcher asToggle={true} />
						</div>
						<h4 class="mb-2 text-base font-bold">{$translation.Pages.settings.headline03()}</h4>
						<LocaleSwitcher asSelect={true} />
					</form>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<a href="{base}/{$locale}/settings">
						<!-- for ux => because on:click is needed and the user can't see where he will end up -->
						<label
							on:click={() => (location.href = `${base}/${$locale}/settings`)}
							for="settings"
							class="flex gap-1 btn rotateChild"
						>
							<iconify-icon
								icon="material-symbols:settings-outline-rounded"
								width="24"
								height="24"
							/> detail
						</label>
					</a>
				</label>
			</label>
		</div>
	</nav>
</header>
<aside class="flex justify-center">
	<div class="p-2 rounded-md cursor-pointer breadcrumbs">
		<ul class="flex items-center">
			<li class="text-xl">
				<a href="{base}/{$locale}"
					><iconify-icon icon="mdi:home" width="24" height="24" /> {$translation.Header.home()}</a
				>
			</li>
			{#if dir != ''}
				<li class="text-xl">
					<a
						href="{base}/{$locale}/{dir}{dir == 'about' ? '/profile' : ''}{dir == 'legal'
							? '/terms-and-conditions'
							: ''}"
					>
						{#if dir == 'about'}
							{$translation.Header.about()}
						{:else if dir == 'socials'}
							{$translation.Header.contact()}
						{:else if dir == 'projects'}
							{$translation.Header.projects()}
						{:else if dir == 'legal'}
							{$translation.Header.legal()}
						{:else if dir == 'settings'}
							{$translation.Header.settings()}
						{/if}
					</a>
				</li>
			{/if}
		</ul>
	</div>
</aside>

<ul
	id="menu"
	class="menu hidden absolute left-4 top-[calc(10vh+1rem)] border-2 border-secondary p-2 gap-2 rounded-box bg-base-100 z-50"
>
	<li>
		<a href="{base}/{$locale}" class={dir.length === 0 ? 'active' : ''}>
			<iconify-icon icon="mdi:home" width="24" height="24" />
			{$translation.Header.home()}
		</a>
	</li>
	<li>
		<a href="{base}/{$locale}/about/profile" class={dir[0] === 'about' ? 'active' : ''}>
			<iconify-icon icon="mdi:about" width="24" height="24" />
			{$translation.Header.about()}
		</a>
	</li>
	<li>
		<a href="{base}/{$locale}/socials" class={dir[0] === 'socials' ? 'active' : ''}>
			<iconify-icon icon="bi:people-fill" width="24" height="24" />
			{$translation.Header.contact()}
		</a>
	</li>
	<li>
		<a href="{base}/{$locale}/projects" class={dir[0] === 'projects' ? 'active' : ''}>
			<iconify-icon icon="ic:baseline-web" width="24" height="24" />
			{$translation.Header.projects()}
		</a>
	</li>
	<li>
		<a
			href="{base}/{$locale}/legal/terms-and-conditions"
			class={dir[0] === 'legal' ? 'active' : ''}
		>
			<iconify-icon icon="mdi:legal" width="24" height="24" />
			{$translation.Header.legal()}
		</a>
	</li>
	<li>
		<a href="{base}/{$locale}/settings" class={dir[0] === 'settings' ? 'active' : ''}>
			<iconify-icon icon="material-symbols:settings-outline-rounded" width="24" height="24" />
			{$translation.Header.settings()}
		</a>
	</li>
</ul>
