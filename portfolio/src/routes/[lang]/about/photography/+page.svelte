<script>
	// Svelte
	import { browser } from '$app/environment';
	// Components
	import SubCategory from '$component/SubCategory.svelte';
	import AboutNav from '$component/AboutNav.svelte';
	// Translation
	import translation from '$translation/i18n-svelte'; // translations
	// Assets
	import photo1 from '$image/photography/photography-1.jpg';
	import photo2 from '$image/photography/photography-2.jpg';
	import photo3 from '$image/photography/photography-3.jpg';
	import photo4 from '$image/photography/photography-4.jpg';
	import photo5 from '$image/photography/photography-5.jpg';
	import photo6 from '$image/photography/photography-6.jpg';
	import photo7 from '$image/photography/photography-7.jpg';
	import photo8 from '$image/photography/photography-8.jpg';
	import photo9 from '$image/photography/photography-9.jpg';
	import photo10 from '$image/photography/photography-10.jpg';
	import photo11 from '$image/photography/photography-11.jpg';
	import photo12 from '$image/photography/photography-12.jpg';

	let photos = [
		photo1,
		photo2,
		photo3,
		photo4,
		photo5,
		photo6,
		photo7,
		photo8,
		photo9,
		photo10,
		photo11,
		photo12
	];

	let imagesLoaded = false;

	photos.forEach((photo, i) => {
		if (browser) {
			const img = new Image();
			img.onload = () => {
				if (i === photos.length - 1) {
					imagesLoaded = true;
				}
			};
			img.src = photo;
		}
	});

	$: currentPhoto = '#photography-1';

	let parent = 'about';
	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let name = 'photography';
	let nameCapitalized = name.replaceAll('-', ' ').replace(/\b(\w)/g, (s) => s.toUpperCase());
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<AboutNav {name} />

<section class="flex justify-center mt-4">
	<div class="prose">
		<h1 class="text-center mb-0">
			{$translation.Pages.about.photography.title()}
		</h1>
	</div>
</section>

<section class="flex justify-center">
	<div class="w-[60dvw]">
		<div class="carousel rounded-2xl mt-4">
			{#each photos as photo, i}
				<div id="photography-{i + 1}" class="carousel-item w-full rounded-2xl pt-4">
					{#if imagesLoaded}
						<img src={photo} alt="photography-{i + 1}" class="w-full object-cover rounded-2xl" />
					{:else}
						<div class="flex flex-col justify-center w-full">
							<div class="loading-wrapper">
								<div class="loading-animation">
									<div class="border-4" />
								</div>
							</div>
							{#if browser && navigator && navigator.userAgent && !navigator.userAgent.includes('js_disabled')}
								<div class="flex justify-center"><p><em>Couldn't load images!</em></p></div>
							{:else}
								<noscript
									>Sorry, your browser does not support JavaScript or you deactivated it! Features
									of the website that do not work without JS: style-mode, language-change, settings
									save...
								</noscript>
							{/if}
						</div>
					{/if}
				</div>
			{:else}
				<div class="flex justify-center"><p><em>Couldn't load images!</em></p></div>
			{/each}
		</div>
		<div class="flex justify-center flex-wrap w-full py-2 gap-2">
			{#each photos as photo, i}
				{#if i % 2 == 0}
					<a
						href="#photography-{i + 1}"
						on:click={() => (currentPhoto = `#photography-${i + 1}`)}
						class="btn btn-s text-lg text-primary {currentPhoto == '#photography-' + (i + 1)
							? 'border border-primary hover:border-primary bg-transparent hover:bg-transparent'
							: ''}">{i + 1}</a
					>
				{:else}
					<a
						href="#photography-{i + 1}"
						on:click={() => (currentPhoto = `#photography-${i + 1}`)}
						class="btn btn-s text-lg text-secondary {currentPhoto == '#photography-' + (i + 1)
							? 'border border-secondary hover:border-secondary bg-transparent hover:bg-transparent'
							: ''}">{i + 1}</a
					>
				{/if}
			{/each}
		</div>
	</div>
</section>

<section class="flex justify-center mt-4">
	<div class="prose">
		<p><em>~ {$translation.Pages.about.photography.note()}</em></p>
	</div>
</section>

<style>
	@keyframes loading-animation {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}

		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	.loading-animation div {
		position: absolute;
		width: 30px;
		height: 30px;
		border-top-color: transparent;
		border-radius: 50%;
	}

	.loading-animation div {
		animation: loading-animation 1s linear infinite;
		top: 100px;
		left: 100px;
	}

	.loading-wrapper {
		width: 200px;
		height: 200px;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}

	.loading-animation {
		width: 100%;
		height: 100%;
		position: relative;
		transform: translateZ(0) scale(1);
		backface-visibility: hidden;
		transform-origin: 0 0;
	}

	.loading-animation div {
		box-sizing: content-box;
	}
</style>
