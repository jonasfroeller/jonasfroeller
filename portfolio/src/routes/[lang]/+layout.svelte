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
		console.log(
			"\r\n       _                         ______              _ _           \r\n      | |                       |  ____|            | | |          \r\n      | | ___  _ __   __ _ ___  | |__ _ __ ___   ___| | | ___ _ __ \r\n  _   | |/ _ \\| '_ \\ / _` / __| |  __| '__/ _ \\ / _ \\ | |/ _ \\ '__|\r\n | |__| | (_) | | | | (_| \\__ \\ | |  | | | (_) |  __/ | |  __/ |   \r\n  \\____/ \\___/|_| |_|\\__,_|___/ |_|  |_|  \\___/ \\___|_|_|\\___|_|   \r\n                                                                   \r\n                                                                   \r\n"
		); // https://patorjk.com/software/taag/#p=display&f=Big&t=Jonas%20Froeller && https://www.freeformatter.com/javascript-escape.html#before-output
	});
</script>

<Header />

<Main>
	<slot />
</Main>

<Footer />
