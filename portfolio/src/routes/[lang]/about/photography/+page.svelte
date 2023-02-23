<script>
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

	const photos = [
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
	<div class="w-[60dvw] w-[60vw]">
		<div class="carousel rounded-2xl mt-4">
			{#each photos as photo, i}
				<div id="item-{i + 1}" class="carousel-item w-full rounded-2xl pt-4">
					<img src={photo} alt="photography-{i + 1}" class="w-full object-cover rounded-2xl" />
				</div>
			{:else}
				<p><em>Couldn't load images!</em></p>
			{/each}
		</div>
		<div class="flex justify-center flex-wrap w-full py-2 gap-2">
			{#each photos as photo, i}
				{#if i % 2 == 0}
					<a href="#item-{i + 1}" class="btn btn-s text-lg text-primary">{i + 1}</a>
				{:else}
					<a href="#item-{i + 1}" class="btn btn-s text-lg text-secondary">{i + 1}</a>
				{/if}
			{/each}
		</div>
	</div>
</section>

<section class="flex justify-center mt-4">
	<div class="prose">
		<p><em>{$translation.Pages.about.photography.note()}</em></p>
	</div>
</section>
