<script>
	// @ts-nocheck
	// Fonts/Icons
	import 'iconify-icon';
	// GlobalCSS/TailwindCSS/DaisyUI
	import '$main/app.css';

	import Header from '$component/Header.svelte';
	import Main from '$component/Main.svelte';
	import Footer from '$component/Footer.svelte';

	import { setLocale } from '$translation/i18n-svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	/** @type { import('./$types').LayoutData } */
	export let data;
	setLocale(data.locale);

	onMount(async () => {
		console.log(new Date().toLocaleString());

		/* https://codepen.io/designcourse/pen/GzJKOE */
		const cursor = document.querySelector('#cursor');

		document.querySelector('main').addEventListener('mousemove', (e) => {
			cursor.setAttribute(
				'style',
				'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
			);
		});

		document.querySelector('main').addEventListener('mousedown', () => {
			document.querySelector('#cursor').classList.add('clicked');
		});
		document.querySelector('main').addEventListener('mouseup', () => {
			document.querySelector('#cursor').classList.remove('clicked');
		});
	});
</script>

<Header />

<Main>
	<slot />
	<div id="cursor">
		<style>
			#cursor.clicked {
				transform: scale(1.5);
			}
		</style>
	</div>
</Main>

<Footer />

<style>
	#cursor {
		width: 20px;
		aspect-ratio: 1/1;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		pointer-events: none;
		transition: 0.3s;
	}
</style>
