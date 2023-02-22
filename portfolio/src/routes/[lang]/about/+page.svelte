<script>
	import { building } from '$app/environment';
	import { goto } from '$app/navigation';
	import { locale } from '$translation/i18n-svelte';
	import { base } from '$app/paths';
	import Category from '$component/Category.svelte';
	let name = 'about';
	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

	if (!building) {
		goto(`${base}/${$locale}/about/profile`);
	}
</script>

<Category {name} {nameCapitalized} referHome={true} />
