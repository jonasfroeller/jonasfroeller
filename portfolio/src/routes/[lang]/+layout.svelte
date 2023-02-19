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
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	/** @type { import('./$types').LayoutData } */
	export let data;
	setLocale(data.locale);

	onMount(async () => {
		console.log(new Date().toLocaleString());

		/* 	const cursor = document.querySelector('#cursor');

		let posX, posY;
		document.querySelector('main').addEventListener('mousemove', (e) => {
			posX = e.clientX;
			posY = e.clientY;
			if (browser) {
				if (window.requestAnimationFrame) {
					window.requestAnimationFrame(animateBall);
				} else {
					animateBall();
				}
			}
		});

		function animateBall() {
			if (browser) {
				//cursor.style.transform = `translate(${posX - 10}px, ${posY - 10}px)`;
				// cursor.style.transform = `translateX(${posX - 10}px) translateY(${posY - 10}px)`;
				// cursor.style = `transform': 'translateX('${posX - 10}'px) translateY('${posY - 10}'px);`;
				cursor.setAttribute('style', 'top: ' + (posY - 10) + 'px; left: ' + (posX - 10) + 'px;');
			}
		}

		document.querySelector('main').addEventListener('mousedown', () => {
			document.querySelector('#cursor').classList.add('clicked');
		});
		document.querySelector('main').addEventListener('mouseup', () => {
			document.querySelector('#cursor').classList.remove('clicked');
		}); */
	});
</script>

<Header />

<Main>
	<slot />
	<!-- <div id="cursor">
		<style>
			#cursor.clicked {
				transform: scale(1.5);
			}
		</style>
	</div> -->
</Main>

<Footer />

<!-- <style>
	#cursor {
		width: 20px;
		aspect-ratio: 1/1;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		pointer-events: none;
		transition: 0.3s;
	}
</style> -->
