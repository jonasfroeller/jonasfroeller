<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import { base } from '$app/paths'; // gh-pages basepath
	import { locale } from '$translation/i18n-svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import { config } from '$store/styleConfig';
	import styleCfg from '$script/styleStorage';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	onMount(async () => {
		$config = await styleCfg.load();
	});

	$: console.log('current lang:', $locale);

	$: dir = $page.route.id
		.replace('/jonasfroeller', '')
		.replace('/[lang]', '')
		.split('/')
		.splice(1, 1);

	function toggleMenu() {
		if (browser) {
			console.log(document.getElementById('menu').classList.toggle('hidden'));
		}
	}
</script>

<header class="flex flex-wrap justify-end p-2 border-b-2 border-secondary min-h-[10vh] select-none">
	<nav class="w-full flex justify-between items-center">
		<div class="cursor-pointer breadcrumbs p-2 rounded-md">
			<ul class="flex">
				<li>
					<label
						class="btn bg-transparent hover:bg-transparent btn-circle swap swap-rotate border-2 text-secondary border-secondary hover:border-primary"
					>
						<!-- this hidden checkbox controls the state -->
						<input type="checkbox" on:click={() => toggleMenu()} />

						<!-- hamburger icon -->
						<svg
							class="swap-off fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 512 512"
							><path
								d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
							/></svg
						>

						<!-- close icon -->
						<svg
							class="swap-on fill-current"
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
				<li class="text-xl">
					<a href="{base}/{$locale}"><iconify-icon icon="mdi:home" width="24" height="24" /> Home</a
					>
				</li>
				<li class="text-xl">
					<a href="{base}/{$locale}/{dir}">{dir}</a>
				</li>
			</ul>
		</div>
		<div class="flex items-center gap-8">
			<LocaleSwitcher />
			<ThemeSwitcher />
		</div>
	</nav>
</header>

<ul
	id="menu"
	class="menu hidden absolute left-4 top-[calc(10vh+1rem)] border-2 border-secondary p-2 gap-2 rounded-box"
>
	<li>
		<a href="{base}/{$locale}" class={dir.length === 0 ? 'active' : ''}>
			<iconify-icon icon="mdi:home" width="24" height="24" /> Home
		</a>
	</li>
	<li>
		<a href="{base}/{$locale}/about" class={dir[0] === 'about' ? 'active' : ''}>
			<iconify-icon icon="mdi:about" width="24" height="24" /> About
		</a>
	</li>
	<li>
		<a href="{base}/{$locale}/socials" class={dir[0] === 'socials' ? 'active' : ''}>
			<iconify-icon icon="bi:people-fill" width="24" height="24" /> Socials
		</a>
	</li>
	<li>
		<a href="{base}/{$locale}/projects" class={dir[0] === 'projects' ? 'active' : ''}>
			<iconify-icon icon="ic:baseline-web" width="24" height="24" /> Projects
		</a>
	</li>
	<li>
		<a href="{base}/{$locale}/legal" class={dir[0] === 'legal' ? 'active' : ''}>
			<iconify-icon icon="mdi:legal" width="24" height="24" /> Legal
		</a>
	</li>
	<li>
		<a href="{base}/{$locale}/settings" class={dir[0] === 'settings' ? 'active' : ''}>
			<iconify-icon icon="material-symbols:settings-outline-rounded" width="24" height="24" /> Settings
		</a>
	</li>
</ul>
