<script>
	// @ts-nocheck
	// Fonts/Icons
	import 'iconify-icon';
	// GlobalCSS/TailwindCSS/DaisyUI
	import '$main/app.css';
	// Components
	import Header from '$component/Header.svelte';
	import Main from '$component/Main.svelte';
	import Footer from '$component/Footer.svelte';
	// Translation
	import { setLocale } from '$translation/i18n-svelte';
	// Svelte
	import { onMount } from 'svelte';

	/** @type { import('./$types').LayoutData } */
	export let data;
	setLocale(data.locale);

	onMount(async () => {
		console.log(new Date().toLocaleString());
	});
</script>

<Header />

<Main>
	<slot />
</Main>

<Footer />
