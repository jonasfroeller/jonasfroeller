<script>
	import SubCategory from '$component/SubCategory.svelte';
	import AboutNav from '$component/AboutNav.svelte';
	let parent = 'about';
	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let name = 'resume';
	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<AboutNav {name} />

<section class="flex justify-center mt-4">
	<div class="prose">
		<h1 class="text-center mb-0">
			{nameCapitalized}
		</h1>
		<p class="text-center">Hey, I am Jonas!</p>
	</div>
</section>
