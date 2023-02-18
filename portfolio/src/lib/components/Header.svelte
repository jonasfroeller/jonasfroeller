<script>
	import { locale } from '$translation/i18n-svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import { config } from '$store/styleConfig';
	import styleCfg from '$script/styleStorage';
	import { onMount } from 'svelte';

	onMount(async () => {
		$config = await styleCfg.load();
	});

	$: console.log('current lang:', $locale);
</script>

<header class="flex flex-wrap justify-end p-2 border-b-2 border-secondary min-h-[10vh] select-none">
	<nav class="w-full flex justify-between items-center">
		<div class="cursor-pointer breadcrumbs p-2 rounded-md">
			<ul class="flex gap-4">
				<li>
					<label
						class="btn bg-transparent hover:bg-transparent btn-circle swap swap-rotate border-2 border-slate-400"
					>
						<!-- this hidden checkbox controls the state -->
						<input type="checkbox" />

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
				<li class="border-2 border-slate-400 p-2 rounded-md">
					<iconify-icon icon="mdi:home" width="24" height="24" /> Home
				</li>
			</ul>
		</div>
		<div class="flex items-center gap-8">
			<LocaleSwitcher />
			<ThemeSwitcher />
		</div>
	</nav>
</header>
