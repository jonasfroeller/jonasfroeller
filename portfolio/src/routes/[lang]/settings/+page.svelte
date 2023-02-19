<script>
	import Category from '$component/Category.svelte';
	let name = 'settings';
	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
</script>

<Category {name} {nameCapitalized} />

<section class="flex flex-col justify-center items-center gap-6 w-100 h-[75vh]">
	<h1>{nameCapitalized}</h1>
</section>
