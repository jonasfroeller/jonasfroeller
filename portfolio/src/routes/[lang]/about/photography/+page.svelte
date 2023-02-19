<script>
	import SubCategory from '$component/SubCategory.svelte';
	let parent = 'about';
	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let name = 'photography';
	let nameCapitalized = name.replaceAll('-', ' ').replace(/\b(\w)/g, (s) => s.toUpperCase());
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<section class="flex flex-col justify-center items-center gap-6 w-100 h-[75vh]">
	<h1>{parentCapitalized}/{nameCapitalized}</h1>
</section>
