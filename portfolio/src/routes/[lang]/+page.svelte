<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */
	export let data; // HAS TO BE NAMED "data"

	import { onMount } from 'svelte';
	import { base } from '$app/paths'; // gh-pages basepath
	import { locale } from '$translation/i18n-svelte'; // currentLanguage
	import Category from '$component/Category.svelte';

	$: console.log('[lang]', data);

	let name = 'home';
	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

	onMount(async () => {
		/* https://codepen.io/Hyperplexed/pen/rNrJgrd */
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ ';
		let interval = null;

		function onMouseOver(event) {
			let iteration = 0;

			clearInterval(interval);

			interval = setInterval(() => {
				event.target.innerText = event.target.innerText
					.split('')
					.map((letter, index) => {
						if (index < iteration) {
							return event.target.dataset.value[index];
						}

						return letters[Math.floor(Math.random() * (letters.length - 1))];
					})
					.join('');

				if (iteration >= event.target.dataset.value.length) {
					clearInterval(interval);
					event.target.removeEventListener('mouseover', onMouseOver);
				}

				iteration += 1 / 3;
			}, 30);
		}

		document.getElementById('name').addEventListener('mouseover', onMouseOver);
	});
</script>

<Category {name} {nameCapitalized} />

<section class="flex flex-col justify-center items-center gap-6 w-100 h-[75vh]">
	<h1
		class="2xl:text-9xl xl:text-8xl	lg:text-7xl	md:text-6xl	sm:text-5xl text-4xl select-none text-center"
		id="name"
		data-value="JONAS FRÖLLER"
	>
		UWIAS AWCELLRX
	</h1>
	<p class="text-lg select-none">Hi, I am Jonas!</p>
	<div class="flex gap-4">
		<a href="{base}/{$locale}/about/resume">
			<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">About</button>
		</a>
		<a href="{base}/{$locale}/projects">
			<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Projects</button>
		</a>
	</div>
</section>
