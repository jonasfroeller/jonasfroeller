<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */
	export let data; // HAS TO BE NAMED "data"

	$: console.log(data);

	import { onMount } from 'svelte';

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

		document.querySelector('#name').addEventListener('mouseover', onMouseOver);
	});
</script>

<svelte:head>
	<meta name="keywords" content="rapid,onlineshop,cheap,darkmode,bilingual" />

	<meta property="og:url" content="https://jonasfroeller.github.io/jonasfroeller" />
	<meta property="og:title" content="home" />

	<title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center gap-6 w-100 h-[75vh]">
	<h1 class="text-9xl select-none" id="name" data-value="JONAS FRÖLLER">UWIAS AWCELLRX</h1>
	<p class="text-lg select-none">Hi, I am Jonas!</p>
	<div class="flex gap-4">
		<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">About</button>
		<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Socials</button>
		<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Projects</button>
		<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Legal</button>
	</div>
</section>
